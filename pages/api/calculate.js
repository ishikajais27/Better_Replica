// pages/api/calculate.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { loanAmount, interestRate, loanTerm } = req.body

    // Validate input
    if (!loanAmount || !interestRate || !loanTerm) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Convert input to numbers
    const principal = parseFloat(loanAmount)
    const rate = parseFloat(interestRate) / 100 / 12 // Monthly interest rate
    const term = parseFloat(loanTerm) * 12 // Loan term in months

    // Calculate monthly payment using the formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const monthlyPayment = (principal * rate) / (1 - Math.pow(1 + rate, -term))

    // Return the result
    res.status(200).json({ monthlyPayment: monthlyPayment.toFixed(2) })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
