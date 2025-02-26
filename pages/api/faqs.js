export default function handler(req, res) {
  if (req.method === 'GET') {
    const faqs = [
      {
        question: 'What is the mortgage approval process?',
        answer:
          'The process starts with pre-approval, followed by finding a home, submitting a loan application, and closing. Better.com streamlines each step for speed and simplicity.',
      },
      {
        question: 'How long does it take to get pre-approved?',
        answer:
          'With Better.com, you can get pre-approved in as little as 3 minutes using our digital platform.',
      },
      {
        question: 'Can I refinance my existing mortgage?',
        answer:
          'Yes, Better.com offers refinancing options to lower your rate or adjust your loan terms. Start by exploring our calculator.',
      },
      {
        question: 'What documents do I need to apply?',
        answer:
          'Typically, you’ll need proof of income (pay stubs, tax returns), credit information, and identification. Our team will guide you through specifics.',
      },
      {
        question: 'What are the benefits of a One Day Mortgage?',
        answer:
          'Our One Day Mortgage program allows you to complete the entire process—from pre-approval to closing—in just 24 hours, saving you time and hassle.',
      },
    ]

    res.status(200).json({ status: 'success', data: faqs })
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
}
