"use client"

import { useState, useEffect } from "react"
import Preloader from "@/components/preloader"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const handlePreloaderComplete = () => {
    console.log("Preloader completed") // Debug log
    setIsLoading(false)
    setTimeout(() => {
      setContentVisible(true)
      initScrollAnimations()
    }, 100)
  }

  const initScrollAnimations = () => {
    if (typeof window === "undefined") return

    // Check if device is mobile
    const checkMobile = () => {
      const mobile =
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
      return mobile
    }

    const isMobileDevice = checkMobile()

    if (isMobileDevice) {
      // For mobile: Enable native scrolling
      console.log("Mobile device detected - using native scroll")
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"

      // Initialize GSAP without Locomotive Scroll
      if ((window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap
        gsap.registerPlugin((window as any).ScrollTrigger)
        console.log("GSAP initialized for mobile")
      }
      return
    }

    // For desktop: Use Locomotive Scroll
    const checkLocomotiveAndGSAP = () => {
      if ((window as any).gsap && (window as any).ScrollTrigger && (window as any).LocomotiveScroll) {
        const gsap = (window as any).gsap
        gsap.registerPlugin((window as any).ScrollTrigger)
        console.log("GSAP and ScrollTrigger initialized for desktop") // Debug log

        try {
          const scroll = new (window as any).LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
          })
          console.log("Locomotive Scroll initialized successfully!", scroll) // Debug log
          console.log("Locomotive Scroll calculated limit Y:", scroll.scroll.instance.limit.y) // Debug log

          scroll
            .on(
              "scroll",
              (window as any).ScrollTrigger.update,
            )(window as any)
            .ScrollTrigger.scrollerProxy("[data-scroll-container]", {
              scrollTop(value: number) {
                return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y
              },
              getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
              },
              pinType: document.querySelector("[data-scroll-container]")?.style.transform ? "transform" : "fixed",
            })(window as any)
            .ScrollTrigger.addEventListener("refresh", () => scroll.update())(window as any)
            .ScrollTrigger.refresh()
        } catch (error) {
          console.error("Error initializing Locomotive Scroll:", error) // More specific error log
        }
      } else {
        console.log("Waiting for GSAP, ScrollTrigger, or LocomotiveScroll to load...")
        setTimeout(checkLocomotiveAndGSAP, 200) // Retry after 200ms
      }
    }

    checkLocomotiveAndGSAP()
  }

  useEffect(() => {
    // Initially prevent native scroll during loading
    document.body.style.overflow = "hidden"

    // Handle window resize to detect mobile/desktop changes
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      if (mobile !== isMobile) {
        setIsMobile(mobile)
        // Reload page if device type changes to reinitialize scroll properly
        if (contentVisible) {
          window.location.reload()
        }
      }
    }

    window.addEventListener("resize", handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize)
      document.body.style.overflow = "" // Reset to default
    }
  }, [isMobile, contentVisible])

  // Force complete loading after 10 seconds as fallback
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        console.log("Fallback: Force completing preloader")
        handlePreloaderComplete()
      }
    }, 10000)

    return () => clearTimeout(fallbackTimer)
  }, [isLoading])

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <Navigation />

      <div
        className={`main-content ${contentVisible ? "content-visible" : "content-hidden"}`}
        data-scroll-container={!isMobile ? true : undefined} // Only add data-scroll-container on desktop
        style={isMobile ? { overflow: "auto" } : undefined} // Enable scroll on mobile
      >
        {/* Global particles */}
        <div className="particles-container">
          {[...Array(50)].map((_, i) => (
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
        {/* Global floating orbs */}
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact data-scroll-section={!isMobile ? true : undefined} /> {/* Only add data-scroll-section on desktop */}
      </div>
    </>
  )
}
