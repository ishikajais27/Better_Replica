export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body

    // Validate input
    if (!name || !email) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    console.log('Form submission received:', { name, email })

    res.status(200).json({ message: 'Form submitted successfully' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
