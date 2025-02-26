import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`)
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled)
      } else {
        header.classList.remove(styles.scrolled)
      }

      const sections = document.querySelectorAll(
        `.${styles.testimonials}, .${styles.features}, .${styles.faqs}`
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

  const handleExploreMore = () => {
    router.push('/faq')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Better.com - Mortgages Made Simple</title>
        <meta
          name="description"
          content="Simplify your mortgage process with Better.com"
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

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h2>Mortgages made simple</h2>
          <p>
            We’ve helped thousands get pre-approved for their dream homes. Get
            started today!
          </p>
          <div className={styles.heroStats}>
            <p>
              $450,000 <span>Average loan amount</span>
            </p>
            <p>
              4.5/5 <span>Google reviews</span>
            </p>
          </div>
          <a href="/start" className={styles.ctaButton}>
            Get Pre-Approved
          </a>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h3>Find out why we’re better</h3>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialItem}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYQgfpbeS_ZOFWL1i7IMaOiOyw60JeGtFbg&s"
              alt="Customer testimonial 1"
              className={styles.testimonialImage}
            />
            <p>
              “The reason why I decided to go with Better was the ones that
              provided me with the best interest rates.” - Alex
            </p>
          </div>
          <div className={styles.testimonialItem}>
            <img
              src="https://www.shutterstock.com/image-photo/happy-millennial-indian-businesswoman-sit-260nw-1945114681.jpg"
              alt="Customer testimonial 2"
              className={styles.testimonialImage}
            />
            <p>
              “Better made the process so easy and fast—I closed on my home in
              just days!” - Paul
            </p>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h3>Why Choose Better?</h3>
        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <h4>Fast Approvals</h4>
            <p>Get pre-approved in as little as 3 minutes.</p>
          </div>
          <div className={styles.featureItem}>
            <h4>No Hidden Fees</h4>
            <p>Transparent pricing with no surprises.</p>
          </div>
          <div className={styles.featureItem}>
            <h4>24/7 Support</h4>
            <p>We’re here to help, anytime you need us.</p>
          </div>
        </div>
      </section>

      <section className={styles.faqs}>
        <h3>Got questions? We’ve got answers</h3>
        <div className={styles.faqGrid}>
          <div className={styles.faqItem}>
            <h4>Buying your first home</h4>
            <p>
              Learn how Better can simplify the process for first-time buyers.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>One Day Mortgage</h4>
            <p>
              Get pre-approved and close on your home in just one day with our
              fast-track program.
            </p>
          </div>
          <div className={styles.faqItem}>
            <h4>Refinance</h4>
            <p>Discover how refinancing with Better can save you money.</p>
          </div>
        </div>
        <button onClick={handleExploreMore} className={styles.ctaButton}>
          Explore More
        </button>
      </section>

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
    </div>
  )
}
