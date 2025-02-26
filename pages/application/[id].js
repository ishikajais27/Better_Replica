import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'
import styles from '../../styles/Application.module.scss'

export default function Application() {
  const router = useRouter()
  const { id } = router.query
  const formRef = useRef(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    annualIncome: '',
    employmentStatus: '',
    loanAmount: '',
    propertyAddress: '',
    creditScore: '',
    loanTerm: '',
    downPayment: '',
    propertyType: '',
    coBorrower: '',
  })

  const [errors, setErrors] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName) newErrors.fullName = 'Full Name is required'
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid'
    if (!formData.phone) newErrors.phone = 'Phone number is required'
    if (!formData.annualIncome)
      newErrors.annualIncome = 'Annual income is required'
    else if (isNaN(formData.annualIncome) || formData.annualIncome <= 0)
      newErrors.annualIncome = 'Annual income must be a positive number'
    if (!formData.employmentStatus)
      newErrors.employmentStatus = 'Employment status is required'
    if (!formData.loanAmount) newErrors.loanAmount = 'Loan amount is required'
    else if (isNaN(formData.loanAmount) || formData.loanAmount <= 0)
      newErrors.loanAmount = 'Loan amount must be a positive number'
    if (!formData.propertyAddress)
      newErrors.propertyAddress = 'Property address is required'
    if (!formData.creditScore)
      newErrors.creditScore = 'Credit score is required'
    else if (
      isNaN(formData.creditScore) ||
      formData.creditScore < 300 ||
      formData.creditScore > 850
    )
      newErrors.creditScore = 'Credit score must be between 300 and 850'
    if (!formData.loanTerm) newErrors.loanTerm = 'Loan term is required'
    if (!formData.downPayment)
      newErrors.downPayment = 'Down payment is required'
    else if (isNaN(formData.downPayment) || formData.downPayment < 0)
      newErrors.downPayment = 'Down payment must be a positive number'
    if (!formData.propertyType)
      newErrors.propertyType = 'Property type is required'
    if (!formData.coBorrower)
      newErrors.coBorrower = 'Co-borrower selection is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form Data:', formData)
      alert('Application step 1 submitted! Next steps coming soon.')
      // Example redirect: router.push(`/application/${id}/step2`);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (formRef.current) {
      observer.observe(formRef.current)
    }

    return () => {
      if (formRef.current) observer.unobserve(formRef.current)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Mortgage Application</h1>
        <p>Application ID: {id || 'Loading...'}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${styles.applicationForm} ${
          isVisible ? styles.visible : ''
        }`}
        ref={formRef}
      >
        <div className={styles.formGroup}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(123) 456-7890"
            />
            {errors.phone && (
              <span className={styles.error}>{errors.phone}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Annual Income ($):
            <input
              type="number"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleChange}
              placeholder="50000"
            />
            {errors.annualIncome && (
              <span className={styles.error}>{errors.annualIncome}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Employment Status:
            <select
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Employed">Employed</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Retired">Retired</option>
            </select>
            {errors.employmentStatus && (
              <span className={styles.error}>{errors.employmentStatus}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Desired Loan Amount ($):
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              placeholder="250000"
            />
            {errors.loanAmount && (
              <span className={styles.error}>{errors.loanAmount}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Property Address:
            <textarea
              name="propertyAddress"
              value={formData.propertyAddress}
              onChange={handleChange}
              placeholder="123 Main St, City, State, ZIP"
              rows="3"
            />
            {errors.propertyAddress && (
              <span className={styles.error}>{errors.propertyAddress}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Estimated Credit Score:
            <input
              type="number"
              name="creditScore"
              value={formData.creditScore}
              onChange={handleChange}
              placeholder="700"
            />
            {errors.creditScore && (
              <span className={styles.error}>{errors.creditScore}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Loan Term (Years):
            <select
              name="loanTerm"
              value={formData.loanTerm}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="15">15 Years</option>
              <option value="20">20 Years</option>
              <option value="30">30 Years</option>
            </select>
            {errors.loanTerm && (
              <span className={styles.error}>{errors.loanTerm}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Down Payment ($):
            <input
              type="number"
              name="downPayment"
              value={formData.downPayment}
              onChange={handleChange}
              placeholder="50000"
            />
            {errors.downPayment && (
              <span className={styles.error}>{errors.downPayment}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Property Type:
            <select
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Single Family">Single Family</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Multi-Family">Multi-Family</option>
            </select>
            {errors.propertyType && (
              <span className={styles.error}>{errors.propertyType}</span>
            )}
          </label>
        </div>

        <div className={styles.formGroup}>
          <label>
            Will there be a Co-Borrower?
            <select
              name="coBorrower"
              value={formData.coBorrower}
              onChange={handleChange}
            >
              <option value="">Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.coBorrower && (
              <span className={styles.error}>{errors.coBorrower}</span>
            )}
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          Next Step
        </button>
      </form>
    </div>
  )
}
