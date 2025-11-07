import './App.css'
import { useState, useEffect, useRef } from 'react'
import heroVideo from './assets/the_hero.mp4'
import WeatherEffect from './components/WeatherEffect'

function App() {
  const heroRef = useRef(null)
  const videoRef = useRef(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [playDirection, setPlayDirection] = useState(1) // 1 = forward, -1 = backward

  useEffect(() => {
    // Handle video loading
    const video = videoRef.current
    if (!video) return

    const handleVideoLoad = () => {
      setVideoLoaded(true)
      // Slow down playback for smoother, more cinematic feel
      video.playbackRate = 0.75
    }

    const handleVideoError = () => {
      console.warn('Video failed to load, showing fallback')
      setVideoLoaded(true) // Show anyway to prevent blank screen
    }

    // Create infinite seamless playback by reversing direction at end points
    const handleVideoEnd = () => {
      console.log('Video ended, current direction:', playDirection)
      // When video reaches the end, reverse direction for seamless infinite effect
      setPlayDirection(prev => prev * -1)
      
      if (playDirection === 1) {
        // Was playing forward, now play backward
        console.log('Switching to backward playback')
        video.currentTime = video.duration - 0.2 // Start near end with more buffer
        video.playbackRate = -0.75 // Negative rate = backward
      } else {
        // Was playing backward, now play forward
        console.log('Switching to forward playback')
        video.currentTime = 0.2 // Start near beginning with more buffer
        video.playbackRate = 0.75 // Positive rate = forward
      }
      
      // Force play with promise handling
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Play failed:', error)
          // Retry after short delay
          setTimeout(() => video.play(), 100)
        })
      }
    }

    // Monitor video time to detect when we need to reverse - INFINITY LOOP
    const handleTimeUpdate = () => {
      if (!video.duration) return // Wait for video metadata
      
      if (playDirection === -1 && video.currentTime <= 0.2) {
        // Playing backward and reached start - switch to forward
        console.log('Reached start, switching to forward')
        setPlayDirection(1)
        video.playbackRate = 0.75
        video.currentTime = 0.2
        // Ensure it keeps playing
        if (video.paused) {
          const playPromise = video.play()
          if (playPromise !== undefined) {
            playPromise.catch(error => console.error('Forward play failed:', error))
          }
        }
      } else if (playDirection === 1 && video.currentTime >= video.duration - 0.2) {
        // Playing forward and reached end - switch to backward
        console.log('Reached end, switching to backward')
        setPlayDirection(-1)
        video.playbackRate = -0.75
        video.currentTime = video.duration - 0.2
        // Ensure it keeps playing
        if (video.paused) {
          const playPromise = video.play()
          if (playPromise !== undefined) {
            playPromise.catch(error => console.error('Backward play failed:', error))
          }
        }
      }
      
      // Safety net: if video somehow stops, restart it aggressively
      if (video.paused && videoLoaded) {
        console.log('Video paused unexpectedly, restarting...', {
          currentTime: video.currentTime,
          duration: video.duration,
          playDirection: playDirection,
          playbackRate: video.playbackRate
        })
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error('Emergency restart failed:', error)
            // Last resort: reset video completely
            setTimeout(() => {
              video.currentTime = playDirection === 1 ? 0.2 : video.duration - 0.2
              video.playbackRate = playDirection === 1 ? 0.75 : -0.75
              video.play()
            }, 200)
          })
        }
      }
    }

    // Set up video event listeners
    video.addEventListener('loadeddata', handleVideoLoad)
    video.addEventListener('canplaythrough', handleVideoLoad)
    video.addEventListener('error', handleVideoError)
    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('timeupdate', handleTimeUpdate)

    // Timeout fallback - show video after 500ms even if not fully loaded
    const timeout = setTimeout(() => {
      setVideoLoaded(true)
      if (video) video.playbackRate = 0.75
    }, 500)

    // Infinity guardian: Check every 2 seconds to ensure video is still playing
    const infinityGuardian = setInterval(() => {
      if (video && videoLoaded && video.duration) {
        const currentState = {
          paused: video.paused,
          currentTime: video.currentTime,
          playbackRate: video.playbackRate,
          direction: playDirection,
          ended: video.ended
        }
        
        // Log state for debugging
        console.log('Infinity Guardian check:', currentState)
        
        if (video.paused) {
          console.log('Infinity Guardian: Restarting paused video')
          const playPromise = video.play()
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error('Guardian restart failed:', error)
              // Force reset
              video.currentTime = playDirection === 1 ? 0.2 : video.duration - 0.2
              video.playbackRate = playDirection === 1 ? 0.75 : -0.75
              setTimeout(() => video.play(), 100)
            })
          }
        }
        
        // Check if playback rate is somehow reset
        if (Math.abs(video.playbackRate) !== 0.75) {
          console.log('Infinity Guardian: Fixing playback rate')
          video.playbackRate = playDirection === 1 ? 0.75 : -0.75
        }
        
        // Check if video is stuck at the same time
        if (video.currentTime === video.lastCheckedTime && !video.paused) {
          console.log('Infinity Guardian: Video appears stuck, resetting')
          video.currentTime = playDirection === 1 ? 0.2 : video.duration - 0.2
          video.play()
        }
        video.lastCheckedTime = video.currentTime
      }
    }, 2000)

    return () => {
      video.removeEventListener('loadeddata', handleVideoLoad)
      video.removeEventListener('canplaythrough', handleVideoLoad)
      video.removeEventListener('error', handleVideoError)
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      clearTimeout(timeout)
      clearInterval(infinityGuardian)
    }
  }, [playDirection])

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
          preload="metadata"
          webkit-playsinline="true"
          x5-playsinline="true"
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
