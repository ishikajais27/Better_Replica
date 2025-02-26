// about-us.js
import { useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/AboutUs.module.scss'

export default function AboutUs() {
  useEffect(() => {
    const handleScroll = () => {
      const timelineItems = document.querySelectorAll(`.${styles.timelineItem}`)
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.9) {
          item.classList.add(styles.visible)
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
          content="Learn more about Better.com and our mission to simplify mortgages."
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
            <h2>Our Story</h2>
            <p>
              We’re revolutionizing the mortgage industry, making homeownership
              simpler, faster, and more accessible for all Americans.
            </p>
          </div>
        </section>

        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <div className={styles.textContent}>
              <h3>Who We Are</h3>
              <p>
                Better.com is a digital-first mortgage lender dedicated to
                transforming the home buying experience. Founded with a vision
                to break the status quo, we leverage cutting-edge technology to
                streamline the mortgage process, offering fast approvals,
                transparent pricing, and 24/7 support. Our mission is to make
                homeownership more accessible for everyone, removing the
                complexity and frustration traditionally associated with
                mortgages.
              </p>
              <h3>Our Values</h3>
              <p>
                We believe in transparency, innovation, and customer-centric
                solutions. Our team is committed to providing exceptional
                service while driving positive change in the housing market.
                Backed by industry-leading partners, we continue to push the
                boundaries of what’s possible in mortgage lending.
              </p>
            </div>
            <div className={styles.imageContent}>
              <img
                src="https://akpsi.org/wp-content/uploads/2021/08/Group-of-Employees-Having-a-Meeting-Stock-Photo-scaled.jpeg"
                alt="Better.com Team"
                className={styles.teamImage}
              />
            </div>
          </div>
        </section>

        <section className={styles.timelineSection}>
          <h3>Company Timeline</h3>
          <div className={styles.timeline}>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.year}>2014</div>
              <div className={styles.content}>
                <p>
                  Better.com is founded with a mission to simplify the mortgage
                  process using technology.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.year}>2015</div>
              <div className={styles.content}>
                <p>
                  Launch of our first online mortgage application, making home
                  loans more accessible.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.year}>2016</div>
              <div className={styles.content}>
                <p>
                  Introduction of mobile app for mortgage management and
                  real-time updates.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.year}>2017</div>
              <div className={styles.content}>
                <p>
                  Introduction of the One Day Mortgage, enabling rapid
                  pre-approvals and closings.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.year}>2018</div>
              <div className={styles.content}>
                <p>
                  Expansion into multiple states, serving thousands of customers
                  nationwide.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.year}>2019</div>
              <div className={styles.content}>
                <p>
                  Partnerships with major financial institutions to enhance our
                  offerings.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.year}>2020</div>
              <div className={styles.content}>
                <p>
                  Launch of refinance options to help homeowners save on
                  interest rates during economic shifts.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.year}>2021</div>
              <div className={styles.content}>
                <p>
                  Launch of advanced AI-driven mortgage tools and 24/7 customer
                  support.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.year}>2022</div>
              <div className={styles.content}>
                <p>
                  Expansion into international markets, starting with Canada and
                  the UK.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.year}>2023</div>
              <div className={styles.content}>
                <p>
                  Introduction of eco-friendly mortgage options to support
                  sustainable homeownership.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.left}`}>
              <div className={styles.year}>2024</div>
              <div className={styles.content}>
                <p>
                  Launch of a comprehensive financial wellness platform for
                  homeowners.
                </p>
              </div>
            </div>
            <div className={`${styles.timelineItem} ${styles.right}`}>
              <div className={styles.year}>2025</div>
              <div className={styles.content}>
                <p>
                  Integration of blockchain technology for secure, transparent
                  mortgage transactions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h3>What Our Customers Say</h3>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialItem}>
              <p>
                “Better.com made my home buying process seamless and quick—I
                closed in just days!” - Sarah
              </p>
            </div>
            <div className={styles.testimonialItem}>
              <p>
                “Their transparency and support were unmatched. I saved
                thousands on my mortgage!” - Michael
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
