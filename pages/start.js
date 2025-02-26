import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Start.module.scss'

export default function Start() {
  const router = useRouter()

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

  const handleExplorePathfinder = () => {
    router.push('/pathfinder') // Redirects to /pathfinder page
  }

  const handleStartApplication = () => {
    const applicationId = Math.random().toString(36).substring(2)
    router.push(`/application/${applicationId}`)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Better.com - Start Your Mortgage Journey</title>
        <meta
          name="description"
          content="Begin your mortgage journey with Better.com and get personalized guidance from Pathfinder, our Interactive Mortgage Roadmap."
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
        <section className={`${styles.hero} ${styles.section}`}>
          <div className={styles.heroContent}>
            <h2>Start Your Mortgage Journey</h2>
            <p>
              Let Better.com guide you to homeownership with personalized
              solutions. Explore your path with Pathfinder, our Interactive
              Mortgage Roadmap!
            </p>
            <button
              className={styles.pathfinderButton}
              onClick={handleExplorePathfinder}
            >
              Explore with Pathfinder <span>🗺️</span>
            </button>
          </div>
        </section>

        <section className={`${styles.featuresSection} ${styles.section}`}>
          <h3>Why Choose Better.com?</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <h4>Fast Approvals</h4>
              <p>
                Get pre-approved in as little as 3 minutes with our digital
                platform.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h4>No Hidden Fees</h4>
              <p>
                Transparent pricing with no surprises—see exactly what you’ll
                pay.
              </p>
            </div>
            <div className={styles.featureCard}>
              <h4>24/7 Support</h4>
              <p>
                Our team is here to help anytime, day or night, via chat or
                phone.
              </p>
            </div>
          </div>
        </section>

        <section className={`${styles.callToAction} ${styles.section}`}>
          <h3>Ready to Get Started?</h3>
          <p>
            Take the first step toward your dream home with Better.com’s
            personalized mortgage solutions.
          </p>
          <button className={styles.ctaButton} onClick={handleStartApplication}>
            Start Application Now
          </button>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Better</h4>
            <p>123 Main Street, New York, NY 10001</p>
            <p>Email: 2329037@kiit.ac.in</p>
            <p>Phone: +91 9006471374</p>
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

      <div className={styles.footerNav}>
        <h4>Better</h4>
        <ul>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Affordability Calculator</a>
          </li>
          <li>
            <a href="#">Mortgage Calculator</a>
          </li>
          <li>
            <a href="#">Free Mortgage Consultation</a>
          </li>
          <li>
            <a href="#">Learning Center</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Glossary</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/press">Press</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="mailto:2329037@kiit.ac.in">2329037@kiit.ac.in</a>
          </li>
          <li>
            <a href="tel:18001234567">+91 9006471374</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
