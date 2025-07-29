"use client"

import { useEffect, useRef, useState } from "react"

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const logoRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const preloaderRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setIsComplete(true)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    if (isComplete) {
      // Wait a bit then start exit animation
      const exitTimer = setTimeout(() => {
        if (preloaderRef.current) {
          preloaderRef.current.style.transition = "opacity 1s ease, transform 1s ease"
          preloaderRef.current.style.opacity = "0"
          preloaderRef.current.style.transform = "scale(0.9)"

          setTimeout(() => {
            if (preloaderRef.current) {
              preloaderRef.current.style.display = "none"
            }
            onComplete()
          }, 1000)
        }
      }, 500)

      return () => clearTimeout(exitTimer)
    }
  }, [isComplete, onComplete])

  useEffect(() => {
    // Logo entrance animation
    if (logoRef.current) {
      logoRef.current.style.transition = "opacity 1s ease, filter 1s ease"
      logoRef.current.style.opacity = "1"
      logoRef.current.style.filter = "blur(0px)"
    }
  }, [])

  return (
    <div ref={preloaderRef} className="preloader">
      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>
      <div className="floating-orb floating-orb-3"></div>

      {/* Logo */}
      <div ref={logoRef} className="preloader-logo">
        Pradeep's Portfolio
      </div>

      {/* Progress bar */}
      <div className="progress-container">
        <div ref={progressRef} className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      {/* Loading text */}
      <div className="loading-text">{progress < 100 ? `Loading... ${progress}%` : "Ready!"}</div>
    </div>
  )
}
