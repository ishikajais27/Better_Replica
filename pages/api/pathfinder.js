export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { stage } = req.body

  if (!stage) {
    return res.status(400).json({ error: 'Stage is required' })
  }

  let recommendations = []
  switch (stage) {
    case 'Pre-Approval':
      recommendations = [
        'Use Better.com’s 3-minute pre-approval tool to get a clear budget.',
        'Check your credit score for the best rates—Better.com offers free credit checks.',
        'Explore down payment assistance programs if you’re a first-time buyer.',
        'Contact our 24/7 support for personalized guidance.',
      ]
      break
    case 'Finding a Home':
      recommendations = [
        'Use our home search tools to find properties within your pre-approved budget.',
        'Connect with a Better.com real estate agent for expert advice.',
        'Schedule home inspections to ensure your investment is sound.',
        'Compare neighborhoods and amenities with our area guides.',
      ]
      break
    case 'Loan Application':
      recommendations = [
        'Submit your mortgage application online with Better.com for a seamless experience.',
        'Gather required documents (pay stubs, tax returns, bank statements) for faster processing.',
        'Track your application status in real-time through our portal.',
        'Ask Morti (our AI Assistant) about any questions during the process.',
      ]
      break
    case 'Closing':
      recommendations = [
        'Review your closing documents with a Better.com specialist to ensure transparency.',
        'Prepare for closing costs (2–5% of the loan amount) and bring necessary IDs.',
        'Schedule your final walkthrough to confirm the home’s condition.',
        'Celebrate your new home—Better.com offers post-closing support!',
      ]
      break
    default:
      recommendations = ['Please select a valid stage for recommendations.']
  }

  res.status(200).json({ recommendations })
}
