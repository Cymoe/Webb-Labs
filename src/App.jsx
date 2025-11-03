import './App.css'
import { useState, useEffect, useRef } from 'react'
import heroImage from './assets/hero.png'

function App() {
  const heroRef = useRef(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    // Preload hero image with high priority
    const img = new Image()
    // Set loading and decoding hints for better performance
    img.loading = 'eager'
    img.decoding = 'async'
    img.src = heroImage
    img.onload = () => setImageLoaded(true)
    
    // If image is already cached, set loaded immediately
    if (img.complete) {
      setImageLoaded(true)
    }
  }, [])

  const scrollToNext = (e) => {
    e.preventDefault()
    const currentSection = e.currentTarget.closest('section')
    const nextSection = currentSection?.nextElementSibling
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`section hero ${imageLoaded ? 'image-loaded' : ''}`}
        style={{ backgroundImage: imageLoaded ? `url(${heroImage})` : 'none' }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">W E B B &nbsp;&nbsp; L A B S</h1>
          <button className="scroll-indicator" onClick={scrollToNext} aria-label="Scroll to next section">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="section" aria-label="About Webb Labs">
        <div className="content-block">
          <p className="credibility-statement">
            Built for Service Companies. Trusted by Owners. Focused on Results.
          </p>
          <p className="core-offering">
            Webb Labs helps B2B service companies convert operational excellence into growth.
          </p>
          <div className="services-list">
            <p className="services-title">We specialize in:</p>
            <ul>
              <li>Operator lead generation</li>
              <li>AI-powered automation</li>
              <li>Operations optimization</li>
              <li>Strategic growth systems</li>
            </ul>
          </div>
          <p className="work-ethic">
            We move fast. We stay focused. We deliver.
          </p>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="section tagline-section" aria-label="Tagline">
        <div className="tagline-content">
          <h2 className="tagline">PROVEN SYSTEMS. PREDICTABLE GROWTH.</h2>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="section" aria-label="Who We Work With">
        <div className="content-block">
          <h2 className="section-title">WHO WE WORK WITH</h2>
          <div className="industries-grid">
            <div className="industry-column">
              <ul>
                <li>Equipment Rental</li>
                <li>Pressure Testing & Inspection</li>
                <li>Wireline & Completion Services</li>
              </ul>
            </div>
            <div className="industry-column">
              <ul>
                <li>Trucking & Logistics</li>
                <li>Coiled Tubing</li>
                <li>General Oilfield Services</li>
              </ul>
            </div>
          </div>
          <div className="client-profile">
            <p>$2M–$50M revenue</p>
            <p>Owner-operated</p>
            <p>Growth-focused</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section" aria-label="Contact Information">
        <h2 className="contact-title">CONTACT</h2>
        <div className="contact-container">
          <div className="contact-split">
            <div className="contact-divider"></div>
          </div>
          <div className="contact-grid">
            <div className="contact-block contact-left-block">
              <p>Myles Webb | Founder</p>
              <p>Based in Midland, TX, Working Worldwide</p>
            </div>
            <div className="contact-block contact-right-block">
              <p>
                <a href="mailto:myles@webblabs.io" className="contact-link">
                  myles@webblabs.io
                </a>
              </p>
              <p>
                <a href="tel:+14322501127" className="contact-link">
                  +1 432 250 1127
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
