import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Pathfinder.module.scss'

export default function Pathfinder() {
  const [currentStage, setCurrentStage] = useState(null)
  const [recommendations, setRecommendations] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleStageClick = async (stage) => {
    setIsLoading(true)
    setError('')
    setCurrentStage(stage)

    try {
      const response = await fetch('/api/pathfinder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ stage }),
      })

      if (!response.ok) {
        throw new Error('Failed to get recommendations from Pathfinder')
      }

      const data = await response.json()
      setRecommendations(data.recommendations)
    } catch (error) {
      setError('An error occurred. Please try again.')
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.section}`)
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) {
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
        <title>Better.com - Pathfinder</title>
        <meta
          name="description"
          content="Explore your mortgage journey with Better.com's Interactive Mortgage Roadmap."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <h1>Pathfinder: Your Mortgage Roadmap</h1>
      </header>

      <main className={styles.main}>
        <section className={`${styles.pathfinderSection} ${styles.section}`}>
          <div className={styles.pathfinderContainer}>
            <h2>Your Mortgage Journey</h2>
            <div className={styles.roadmap}>
              <div
                className={`${styles.roadmapStage} ${
                  currentStage === 'Pre-Approval' ? styles.active : ''
                }`}
                onClick={() => handleStageClick('Pre-Approval')}
              >
                1. Pre-Approval
                {currentStage === 'Pre-Approval' && (
                  <span className={styles.tooltip}>
                    Get pre-approved in minutes to understand your budget and
                    show sellers you’re serious.
                  </span>
                )}
              </div>
              <div
                className={`${styles.roadmapStage} ${
                  currentStage === 'Finding a Home' ? styles.active : ''
                }`}
                onClick={() => handleStageClick('Finding a Home')}
              >
                2. Finding a Home
                {currentStage === 'Finding a Home' && (
                  <span className={styles.tooltip}>
                    Search for your dream home with our tools and connect with
                    real estate agents.
                  </span>
                )}
              </div>
              <div
                className={`${styles.roadmapStage} ${
                  currentStage === 'Loan Application' ? styles.active : ''
                }`}
                onClick={() => handleStageClick('Loan Application')}
              >
                3. Loan Application
                {currentStage === 'Loan Application' && (
                  <span className={styles.tooltip}>
                    Submit your mortgage application with ease and track
                    progress online.
                  </span>
                )}
              </div>
              <div
                className={`${styles.roadmapStage} ${
                  currentStage === 'Closing' ? styles.active : ''
                }`}
                onClick={() => handleStageClick('Closing')}
              >
                4. Closing
                {currentStage === 'Closing' && (
                  <span className={styles.tooltip}>
                    Finalize your mortgage and move into your new home with our
                    support.
                  </span>
                )}
              </div>
            </div>
            {isLoading && (
              <div className={styles.loading}>
                Pathfinder is generating recommendations...
              </div>
            )}
            {error && <div className={styles.error}>{error}</div>}
            {currentStage && recommendations.length > 0 && (
              <div className={styles.recommendations}>
                <h3>Recommendations for {currentStage}</h3>
                <ul>
                  {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
                <button
                  className={styles.nextStepButton}
                  onClick={() => setCurrentStage(null)}
                >
                  Explore Another Stage
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
