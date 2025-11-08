import './App.css'
import { useState, useEffect, useRef } from 'react'
import heroVideo from './assets/the_hero.mp4'
import WeatherEffect from './components/WeatherEffect'

function App() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)

  useEffect(() => {
    // Preload video immediately with highest priority - start before component renders
    const video = videoRef.current
    if (!video) return
    
    // CRITICAL: Set buffer strategy for fastest initial load
    // Prefer fast start over complete buffering
    video.preload = 'auto' // Already set in JSX, but ensure it's set
    video.loop = false // Explicitly disable looping
    video.load() // Force immediate load start
    
    // Track if video has ended to prevent restarting
    let hasEnded = false

    // Optimize buffering - start playing as soon as we have enough data
    // This allows video to start before fully loaded
    const handleCanPlay = () => {
      // Video has enough data to start playing
      if (!videoLoaded && !hasEnded) {
        setVideoLoaded(true)
        video.playbackRate = 0.75
        // Try to play immediately if we have enough buffer
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play blocked, but video is ready
          })
        }
      }
    }

    const handleVideoLoad = () => {
      setVideoLoaded(true)
      // Slow down playback for smoother, more cinematic feel
      video.playbackRate = 0.75
    }

    const handleVideoError = () => {
      console.warn('Video failed to load, showing fallback')
      setVideoLoaded(true) // Show anyway to prevent blank screen
    }

    // Handler: when video ends, reset to beginning frame and pause (show first frame as static background)
    const handleVideoEnd = () => {
      console.log('Video ended - resetting to beginning frame')
      hasEnded = true
      // Explicitly disable looping
      video.loop = false
      // Reset to the beginning to show the initial frame
      video.currentTime = 0
      // Pause the video at the first frame
      video.pause()
      // Remove autoplay to prevent restart
      video.removeAttribute('autoplay')
    }

    // Set up video event listeners - prioritize early events for faster perceived load
    // 'canplay' fires when enough data is loaded to start playing (faster than canplaythrough)
    const handleProgress = () => {
      // Video is actively downloading - show it as soon as we have some data
      if (video.buffered.length > 0 && video.buffered.end(0) > 0.5 && !videoLoaded) {
        setVideoLoaded(true)
        video.playbackRate = 0.75
      }
    }
    
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleVideoLoad)
    video.addEventListener('canplaythrough', handleVideoLoad)
    video.addEventListener('progress', handleProgress)
    video.addEventListener('error', handleVideoError)
    video.addEventListener('ended', handleVideoEnd)

    // Aggressive timeout fallback - show video after 100ms for instant perceived load
    // This prevents blank screen even on slow connections
    const timeout = setTimeout(() => {
      if (!videoLoaded && !hasEnded) {
        setVideoLoaded(true)
        if (video) {
          video.playbackRate = 0.75
          // Try to play if we have any buffer
          if (video.buffered.length > 0) {
            video.play().catch(() => {})
          }
        }
      }
    }, 100)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleVideoLoad)
      video.removeEventListener('canplaythrough', handleVideoLoad)
      video.removeEventListener('progress', handleProgress)
      video.removeEventListener('error', handleVideoError)
      video.removeEventListener('ended', handleVideoEnd)
      clearTimeout(timeout)
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
        className={`section hero ${videoLoaded ? 'video-loaded' : ''}`}
      >
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          loop={false}
          preload="auto"
          fetchPriority="high"
          webkit-playsinline="true"
          x5-playsinline="true"
          playsinline="true"
          style={{ opacity: videoLoaded ? 1 : 0 }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        {videoLoaded && <WeatherEffect type="lightning" intensity="subtle" />}
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
