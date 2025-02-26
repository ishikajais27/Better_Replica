// mortgage-calculator.js
import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/MortgageCalculator.module.scss'

export default function MortgageCalculator() {
  const [formData, setFormData] = useState({
    loanAmount: '',
    downPayment: '',
    loanTerm: '30',
    interestRate: '',
    propertyTaxes: '', // New field
    homeownersInsurance: '', // New field
    hoaFees: '', // New field
    monthlyPayment: '',
  })
  const [error, setError] = useState('')
  const [results, setResults] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const calculatorItems = document.querySelectorAll(
        `.${styles.calculatorItem}`
      )
      calculatorItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) {
          item.classList.add(styles.visible)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setResults(null)

    const homePrice = parseFloat(formData.loanAmount) || 0
    const downPayment = parseFloat(formData.downPayment) || 0
    const loanAmount = homePrice - downPayment
    const propertyTaxes = parseFloat(formData.propertyTaxes) || 0
    const homeownersInsurance = parseFloat(formData.homeownersInsurance) || 0
    const hoaFees = parseFloat(formData.hoaFees) || 0

    if (isNaN(loanAmount) || loanAmount <= 0) {
      setError('Please enter valid home price and down payment.')
      return
    }

    if (!formData.interestRate || !formData.loanTerm) {
      setError('Please enter interest rate and loan term.')
      return
    }

    try {
      const response = await fetch('/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loanAmount: loanAmount.toString(),
          interestRate: formData.interestRate,
          loanTerm: formData.loanTerm,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to calculate mortgage payment')
      }

      const data = await response.json()
      const monthlyMortgagePayment = parseFloat(data.monthlyPayment)
      const totalMonthlyPayment =
        monthlyMortgagePayment + propertyTaxes + homeownersInsurance + hoaFees

      setResults({
        monthlyMortgagePayment: monthlyMortgagePayment.toFixed(2),
        totalMonthlyPayment: totalMonthlyPayment.toFixed(2),
        totalInterest: (
          monthlyMortgagePayment * parseFloat(formData.loanTerm) * 12 -
          loanAmount
        ).toFixed(2),
      })
    } catch (error) {
      setError('An error occurred while calculating. Please try again.')
      console.error('Error:', error)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Better.com - Mortgage Calculator</title>
        <meta
          name="description"
          content="Use our mortgage calculator to estimate your monthly payments and explore mortgage options."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>
          <h1>Better</h1>
        </div>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/mortgage-calculator">Mortgage Calculator</a>
          <a href="/start" className={styles.ctaButton}>
            Get Started
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2>Mortgage Calculator</h2>
            <p>
              Estimate your monthly mortgage payments and explore your home
              buying options with Better.com.
            </p>
          </div>
        </section>

        <section className={styles.calculatorSection}>
          <h3>Calculate Your Mortgage</h3>
          <form onSubmit={handleSubmit} className={styles.calculatorSeries}>
            <div className={`${styles.calculatorItem} ${styles.left}`}>
              <div className={styles.step}>Step 1</div>
              <div className={styles.content}>
                <h4>Enter Your Home Price</h4>
                <p>Input the purchase price of the home you’re considering.</p>
                <input
                  type="number"
                  name="loanAmount"
                  placeholder="$300,000"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={`${styles.calculatorItem} ${styles.right}`}>
              <div className={styles.step}>Step 2</div>
              <div className={styles.content}>
                <h4>Specify Your Down Payment</h4>
                <p>
                  Enter the amount or percentage you plan to pay upfront (e.g.,
                  3-20% of the home price).
                </p>
                <input
                  type="number"
                  name="downPayment"
                  placeholder="20%"
                  value={formData.downPayment}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={`${styles.calculatorItem} ${styles.left}`}>
              <div className={styles.step}>Step 3</div>
              <div className={styles.content}>
                <h4>Select Your Loan Term</h4>
                <p>
                  Choose your loan duration to determine your monthly payments.
                </p>
                <select
                  name="loanTerm"
                  value={formData.loanTerm}
                  onChange={handleChange}
                  className={styles.selectField}
                >
                  <option value="30">30 Years</option>
                  <option value="15">15 Years</option>
                  <option value="20">20 Years</option>
                </select>
              </div>
            </div>
            <div className={`${styles.calculatorItem} ${styles.right}`}>
              <div className={styles.step}>Step 4</div>
              <div className={styles.content}>
                <h4>Estimate Your Interest Rate</h4>
                <p>
                  Provide an estimated interest rate based on current market
                  rates or your credit score.
                </p>
                <input
                  type="number"
                  name="interestRate"
                  placeholder="4.5%"
                  value={formData.interestRate}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={`${styles.calculatorItem} ${styles.left}`}>
              <div className={styles.step}>Step 5</div>
              <div className={styles.content}>
                <h4>Add Additional Costs</h4>
                <p>
                  Include property taxes, insurance, and HOA fees for a complete
                  estimate.
                </p>
                <input
                  type="number"
                  name="propertyTaxes"
                  placeholder="$2,000/year"
                  value={formData.propertyTaxes}
                  onChange={handleChange}
                  className={styles.inputField}
                />
                <input
                  type="number"
                  name="homeownersInsurance"
                  placeholder="$1,200/year"
                  value={formData.homeownersInsurance}
                  onChange={handleChange}
                  className={styles.inputField}
                />
                <input
                  type="number"
                  name="hoaFees"
                  placeholder="$300/year"
                  value={formData.hoaFees}
                  onChange={handleChange}
                  className={styles.inputField}
                />
              </div>
            </div>
            <div className={`${styles.calculatorItem} ${styles.right}`}>
              <div className={styles.step}>Step 6</div>
              <div className={styles.content}>
                <h4>View Your Results</h4>
                <p>
                  See your estimated monthly payment. Start your journey with
                  Better.com today!
                </p>
                {error && <p className={styles.error}>{error}</p>}
                {results && (
                  <div className={styles.results}>
                    <h4>Results</h4>
                    <p>
                      Monthly Mortgage Payment: $
                      {results.monthlyMortgagePayment}
                    </p>
                    <p>
                      Total Monthly Payment (including taxes, insurance, & HOA):
                      ${results.totalMonthlyPayment}
                    </p>
                    <p>
                      Total Interest Paid Over Loan Term: $
                      {results.totalInterest}
                    </p>
                  </div>
                )}
                <button type="submit" className={styles.calculateButton}>
                  Calculate Now
                </button>
              </div>
            </div>
          </form>

          {/* Description Paragraph */}
          <div className={styles.calculatorDescription}>
            <h3>About Our Mortgage Calculator</h3>
            <p>
              Our mortgage calculator is designed to provide you with a
              comprehensive estimate of your monthly mortgage payments,
              including principal, interest, property taxes, homeowners
              insurance, and HOA fees. It uses advanced algorithms to ensure
              accuracy, helping you plan your home buying budget effectively.
              Whether you’re a first-time buyer or refinancing, Better.com’s
              calculator simplifies the process, offering transparency and
              insights to make informed decisions. Use it to explore different
              scenarios and find the best mortgage option for your needs.
            </p>
          </div>

          {/* Formula Boxes */}
          <div className={styles.formulaSection}>
            <h3>Calculation Formulas</h3>
            <div className={styles.formulaBox}>
              <h4>Monthly Mortgage Payment</h4>
              <p>
                <strong>Formula:</strong> M = P[r(1+r)^n]/[(1+r)^n-1]
              </p>
              <p>Where:</p>
              <ul>
                <li>M = Monthly Payment</li>
                <li>P = Principal Loan Amount</li>
                <li>r = Monthly Interest Rate (Annual Rate / 12 / 100)</li>
                <li>n = Total Number of Payments (Loan Term in Years * 12)</li>
              </ul>
            </div>
            <div className={styles.formulaBox}>
              <h4>Total Interest Paid</h4>
              <p>
                <strong>Formula:</strong> Total Interest = (M * n) - P
              </p>
              <p>Where:</p>
              <ul>
                <li>M = Monthly Payment</li>
                <li>n = Total Number of Payments</li>
                <li>P = Principal Loan Amount</li>
              </ul>
            </div>
            <div className={styles.formulaBox}>
              <h4>Total Monthly Payment</h4>
              <p>
                <strong>Formula:</strong> Total Monthly = M + (Taxes/12) +
                (Insurance/12) + (HOA/12)
              </p>
              <p>Where:</p>
              <ul>
                <li>M = Monthly Mortgage Payment</li>
                <li>Taxes = Annual Property Taxes</li>
                <li>Insurance = Annual Homeowners Insurance</li>
                <li>HOA = Annual HOA Fees</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Better</h4>
            <p>123 Main Street, New York, NY 10001</p>
            <p>Email: support@better.com</p>
            <p>Phone: (800) 123-4567</p>
          </div>
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <a href="/about-us">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/press">Press</a>
          </div>
          <div className={styles.footerSection}>
            <h4>Contact Us</h4>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2025 Better.com. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
