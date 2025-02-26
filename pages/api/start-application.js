// pages/api/start-application.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // You could fetch initial application data from a database or external API here
    const initialApplicationData = {
      status: 'success',
      message: 'Application process started',
      nextStep: 'Enter your personal information',
      applicationId: Math.random().toString(36).substring(2), // Simple random ID
    }

    res.status(200).json(initialApplicationData)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
}
