import { useEffect, useRef } from 'react'
import './WeatherEffect.css'

/**
 * Lightweight weather effect component (rain/thunderstorm)
 * Uses canvas for optimal performance - zero dependencies!
 * 
 * Usage:
 * <WeatherEffect type="lightning" intensity="subtle" />  // Thunderstorm with subtle lightning
 * <WeatherEffect type="rain" intensity="medium" />       // Rain animation
 * 
 * Props:
 * - type: 'rain' | 'lightning' (default: 'rain')
 * - intensity: 'subtle' | 'medium' | 'intense' (default: 'subtle')
 */
export default function WeatherEffect({ type = 'rain', intensity = 'subtle' }) {
  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    // Initialize canvas immediately - start animation right away
    const initCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      // Use viewport dimensions if canvas not yet sized
      const width = rect.width > 0 ? rect.width : window.innerWidth
      const height = rect.height > 0 ? rect.height : window.innerHeight * 0.4
      
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      return { width, height }
    }
    
    const dimensions = initCanvas()

    // Resize handler
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width > 0 && rect.height > 0) {
        canvas.width = rect.width * window.devicePixelRatio
        canvas.height = rect.height * window.devicePixelRatio
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      }
    }

    window.addEventListener('resize', handleResize)

    if (type === 'rain') {
      // Rain effect
      const dropCount = intensity === 'subtle' ? 50 : intensity === 'medium' ? 100 : 150
      const drops = []

      // Initialize raindrops
      for (let i = 0; i < dropCount; i++) {
        drops.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          length: Math.random() * 20 + 5,
          speed: Math.random() * 3 + 2,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }

      const animate = () => {
        const rect = canvas.getBoundingClientRect()
        ctx.clearRect(0, 0, rect.width || dimensions.width, rect.height || dimensions.height)
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.lineWidth = 1

        drops.forEach((drop) => {
          ctx.beginPath()
          ctx.moveTo(drop.x, drop.y)
          ctx.lineTo(drop.x, drop.y + drop.length)
          ctx.globalAlpha = drop.opacity
          ctx.stroke()
          ctx.globalAlpha = 1

          drop.y += drop.speed
          const canvasHeight = canvas.getBoundingClientRect().height || dimensions.height
          const canvasWidth = canvas.getBoundingClientRect().width || dimensions.width
          if (drop.y > canvasHeight) {
            drop.y = -drop.length
            drop.x = Math.random() * canvasWidth
          }
        })

        animationFrameRef.current = requestAnimationFrame(animate)
      }

      animate()
    } else if (type === 'lightning') {
      // Realistic thunderstorm - visible rolling clouds with occasional lightning
      const baseOpacity = intensity === 'subtle' ? 0.25 : intensity === 'medium' ? 0.35 : 0.45
      const waveSpeed = intensity === 'subtle' ? 0.008 : intensity === 'medium' ? 0.012 : 0.018
      let time = 0
      let nextLightning = Math.random() * 4000 + 3000 // 3-7 seconds
      let lightningActive = false
      let lightningDuration = 0

      // Simple noise function for cloud shapes
      const noise = (x, y) => {
        const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
        return (n - Math.floor(n))
      }

      const smoothNoise = (x, y) => {
        const intX = Math.floor(x)
        const intY = Math.floor(y)
        const fracX = x - intX
        const fracY = y - intY

        const v1 = noise(intX, intY)
        const v2 = noise(intX + 1, intY)
        const v3 = noise(intX, intY + 1)
        const v4 = noise(intX + 1, intY + 1)

        return v1 * (1 - fracX) * (1 - fracY) + 
               v2 * fracX * (1 - fracY) + 
               v3 * (1 - fracX) * fracY + 
               v4 * fracX * fracY
      }

      // Realistic storm cloud layers
      const cloudLayers = [
        { speed: 1.0, scale: 0.015, amplitude: 25, opacity: baseOpacity * 0.9 },
        { speed: 0.65, scale: 0.022, amplitude: 20, opacity: baseOpacity * 1.0 },
        { speed: 0.35, scale: 0.030, amplitude: 15, opacity: baseOpacity * 0.7 },
      ]

      const animate = () => {
        const rect = canvas.getBoundingClientRect()
        const canvasWidth = rect.width || dimensions.width
        const canvasHeight = rect.height || dimensions.height
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        
        time += waveSpeed

        // Draw realistic storm clouds
        cloudLayers.forEach((layer) => {
          const points = []
          const bottomPoints = []
          const maxHeight = canvasHeight * 0.4
          const step = 3
          
          for (let x = 0; x <= canvasWidth; x += step) {
            // Realistic rolling cloud wave
            const wave1 = Math.sin(x * 0.012 + time * layer.speed) * 10
            const wave2 = Math.sin(x * 0.006 + time * layer.speed * 0.8) * 6
            const noise1 = smoothNoise(x * layer.scale + time * layer.speed, time * layer.speed * 0.4)
            const noise2 = smoothNoise(x * layer.scale * 2.5 + time * layer.speed * 1.3, time * layer.speed * 0.6)
            
            const combined = (noise1 * 0.7 + noise2 * 0.3) * 2 - 1
            const offset = combined * layer.amplitude
            
            const topY = canvasHeight * 0.12 + wave1 + wave2 + offset
            const normalizedTopY = Math.max(0, Math.min(maxHeight * 0.7, topY))
            
            const bottomNoise = smoothNoise(x * layer.scale * 1.8 + time * layer.speed * 0.5, time * layer.speed * 0.7)
            const bottomOffset = (bottomNoise - 0.5) * 15
            const bottomY = Math.min(maxHeight, normalizedTopY + 30 + bottomOffset)
            
            points.push({ x, y: normalizedTopY })
            bottomPoints.push({ x, y: bottomY })
          }
          
          // Draw cloud shape
          ctx.beginPath()
          if (points.length > 0) {
            ctx.moveTo(points[0].x, points[0].y)
            
            for (let i = 1; i < points.length; i++) {
              ctx.lineTo(points[i].x, points[i].y)
            }
            
            for (let i = bottomPoints.length - 1; i >= 0; i--) {
              ctx.lineTo(bottomPoints[i].x, bottomPoints[i].y)
            }
            
            ctx.closePath()
          }
          
          // Realistic storm cloud color - visible but not overpowering
          const gradient = ctx.createLinearGradient(0, 0, 0, maxHeight)
          gradient.addColorStop(0, `rgba(120, 140, 160, ${layer.opacity * 0.4})`)
          gradient.addColorStop(0.4, `rgba(80, 110, 140, ${layer.opacity * 0.7})`)
          gradient.addColorStop(0.8, `rgba(50, 80, 110, ${layer.opacity * 0.9})`)
          gradient.addColorStop(1, `rgba(30, 50, 70, ${layer.opacity * 0.5})`)
          
          ctx.fillStyle = gradient
          ctx.globalCompositeOperation = 'multiply'
          ctx.fill()
          ctx.globalCompositeOperation = 'source-over'
        })

        // Subtle lightning flashes with individual bolt strikes
        nextLightning -= 16 // ~60fps
        if (nextLightning <= 0) {
          lightningActive = true
          lightningDuration = 5 // 5 frames for visible bolt
          nextLightning = Math.random() * 6000 + 4000 // 4-10 seconds until next
        }

        if (lightningActive) {
          const flashOpacity = intensity === 'subtle' ? 0.2 : intensity === 'medium' ? 0.3 : 0.4
          
          // Overall subtle flash illumination
          ctx.fillStyle = `rgba(255, 255, 255, ${flashOpacity * 0.5})`
          ctx.fillRect(0, 0, canvasWidth, canvasHeight * 0.4)
          
          // Draw individual lightning bolt strike
          const startX = canvasWidth * (0.25 + Math.random() * 0.5)
          const startY = canvasHeight * 0.05
          const endY = canvasHeight * (0.15 + Math.random() * 0.15)
          
          ctx.save()
          ctx.strokeStyle = `rgba(255, 255, 255, ${flashOpacity * 1.2})`
          ctx.lineWidth = 1.5
          ctx.lineCap = 'round'
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)'
          ctx.shadowBlur = 8
          
          // Simple jagged lightning path
          ctx.beginPath()
          ctx.moveTo(startX, startY)
          
          let currentX = startX
          let currentY = startY
          const segments = 5 + Math.floor(Math.random() * 4)
          
          for (let i = 1; i <= segments; i++) {
            const progress = i / segments
            currentX += (Math.random() - 0.5) * 40
            currentY = startY + (endY - startY) * progress
            ctx.lineTo(currentX, currentY)
          }
          
          ctx.stroke()
          ctx.restore()
          
          lightningDuration--
          if (lightningDuration <= 0) {
            lightningActive = false
          }
        }

        animationFrameRef.current = requestAnimationFrame(animate)
      }

      animate()
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [type, intensity])

  return (
    <canvas
      ref={canvasRef}
      className="weather-effect"
      aria-hidden="true"
    />
  )
}
