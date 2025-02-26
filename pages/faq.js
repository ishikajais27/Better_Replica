import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Faq.module.scss'

export default function Faq() {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('/api/faqs')
        if (!response.ok) throw new Error('Failed to fetch FAQs')
        const { data } = await response.json()
        setFaqs(data)
      } catch (error) {
        console.error('Error fetching FAQs:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchFaqs()

    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.faqItem}`)
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          section.classList.add(styles.visible)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Better.com - FAQs</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Better.com mortgages"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <h1>Frequently Asked Questions</h1>
      </header>

      <section className={styles.faqSection}>
        {loading ? (
          <p>Loading FAQs...</p>
        ) : (
          faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))
        )}
      </section>
    </div>
  )
}
