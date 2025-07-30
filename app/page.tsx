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

  const handlePreloaderComplete = () => {
    console.log("Preloader completed") // Debug log
    setIsLoading(false)
    setTimeout(() => {
      setContentVisible(true)
      initScrollAnimations()
    }, 100)
  }

  const initScrollAnimations = () => {
    if (typeof window !== "undefined") {
      // Check if GSAP is available
      if ((window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap
        gsap.registerPlugin((window as any).ScrollTrigger)
        console.log("GSAP initialized") // Debug log

        // Initialize Locomotive Scroll if available
        if ((window as any).LocomotiveScroll) {
          try {
            const scroll = new (window as any).LocomotiveScroll({
              el: document.querySelector("[data-scroll-container]"),
              smooth: true,
              multiplier: 1,
              class: "is-reveal",
            })

            // Update ScrollTrigger when Locomotive Scroll updates
            scroll.on("scroll", (window as any).ScrollTrigger.update)

            // Refresh ScrollTrigger and Locomotive Scroll
            gsap.registerPlugin((window as any).ScrollTrigger)
            ;(window as any).ScrollTrigger.scrollerProxy("[data-scroll-container]", {
              scrollTop(value: number) {
                return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y
              },
              getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
              },
              pinType: document.querySelector("[data-scroll-container]")?.style.transform ? "transform" : "fixed",
            })
            ;(window as any).ScrollTrigger.addEventListener("refresh", () => scroll.update())
            ;(window as any).ScrollTrigger.refresh()
          } catch (error) {
            console.log("Locomotive Scroll not available, using regular scroll")
          }
        }
      } else {
        console.log("GSAP not available, using CSS animations")
      }
    }
  }

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isLoading])

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

      {/* Move Navigation component here, outside the data-scroll-container */}
      <Navigation />

      <div
        className={`main-content ${contentVisible ? "content-visible" : "content-hidden"}`}
        data-scroll-container
        style={{ paddingBottom: 0, marginBottom: 0 }} // Added this line
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

        {/* Remove Navigation from here */}
        {/* <Navigation /> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </>
  )
}
