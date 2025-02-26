import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/AboutUs.module.scss'

export default function AboutUs() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`)
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled)
      } else {
        header.classList.remove(styles.scrolled)
      }

      const sections = document.querySelectorAll(
        `.${styles.timelineItem}, .${styles.testimonialItem}`
      )
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
        <title>Better.com - About Us</title>
        <meta
          name="description"
          content="Learn more about Better.com, our mission, and how we simplify the mortgage process."
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
            <h2>About Better</h2>
            <p>
              We’re here to make your mortgage journey simple, fast, and
              transparent.
            </p>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <div className={styles.textContent}>
              <h3>Our Mission</h3>
              <p>
                At Better, we aim to simplify homeownership by offering quick
                approvals, clear pricing, and constant support. Founded by
                Ishika Jaiswal, our goal is to help everyone find their dream
                home with ease.
              </p>
            </div>
            <div className={styles.imageContent}>
              <img
                src="/team-image.jpg" // Replace with your actual image path
                alt="Our Team"
                className={styles.teamImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.timelineSection}>
          <h3>Our Journey</h3>
          <div className={styles.timeline}>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.year}>2020</div>
              <div className={styles.content}>
                <p>Better was founded with a vision to simplify mortgages.</p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.year}>2021</div>
              <div className={styles.content}>
                <p>Launched our 3-minute pre-approval tool.</p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.year}>2023</div>
              <div className={styles.content}>
                <p>Expanded to offer 24/7 support and Pathfinder tool.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h3>What Our Team Says</h3>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialItem}>
              <p>
                “We’re passionate about helping people achieve their
                homeownership dreams.” - Ishika
              </p>
            </div>
            <div className={styles.testimonialItem}>
              <p>
                “Our technology makes the mortgage process fast and easy!” -
                Team Member
              </p>
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
