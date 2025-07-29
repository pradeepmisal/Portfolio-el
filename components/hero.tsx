"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialsRef = useRef<HTMLDivElement>(null)

  const roles = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000) // Change role every 3 seconds

    return () => clearInterval(roleInterval)
  }, [roles.length])

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap
        gsap.registerPlugin((window as any).ScrollTrigger)

        // Hero entrance animation
        const tl = gsap.timeline({ delay: 0.5 })

        tl.fromTo(
          headlineRef.current,
          {
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "power3.out",
          },
        )

        tl.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 40,
            filter: "blur(5px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6",
        )

        tl.fromTo(
          ctaRef.current,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )

        tl.fromTo(
          socialsRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2",
        )

        // Floating orbs animation
        gsap.utils.toArray(".floating-orb").forEach((orb: any) => {
          gsap.to(orb, {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          })
        })

        // CTA button hover animation
        const ctaButton = ctaRef.current?.querySelector(".btn-primary")
        if (ctaButton) {
          ctaButton.addEventListener("mouseenter", () => {
            gsap.to(ctaButton, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            })
          })

          ctaButton.addEventListener("mouseleave", () => {
            gsap.to(ctaButton, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            })
          })
        }
      }
    }

    const checkGSAP = () => {
      if ((window as any).gsap && (window as any).ScrollTrigger) {
        initAnimations()
      } else {
        setTimeout(checkGSAP, 100)
      }
    }

    checkGSAP()
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Spline 3D Background */}
      <div className="spline-container">
        <iframe
          src="https://my.spline.design/orb-TEiscxKc4L0xZa1ztN9S2N2o/"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>

      {/* Floating orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>
      <div className="floating-orb floating-orb-3"></div>

      {/* Particles */}
      <div className="particles-container">
        {[...Array(40)].map((_, i) => (
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto pt-20">
          {/* Main Headline */}
          <h1 ref={headlineRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="gradient-text neon-text">Pradeep</span>
            <br />
            <span className="text-3xl md:text-5xl font-light text-gray-300">
              I'm a <span className="gradient-text">{roles[currentRoleIndex]}</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Passionate about creating innovative solutions and building scalable applications that make a difference. I
            love turning complex problems into simple, beautiful designs.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary text-base px-6 py-3" onClick={scrollToProjects}>
              View My Work
            </button>
            <button
              className="btn-outline text-base px-6 py-3"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/17yH0FDCOYi7Bj4fliDRfWen_OVW4iED6?usp=sharing",
                  "_blank",
                )
              }
            >
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div ref={socialsRef} className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/pradeepmisal"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-7 w-7" />
            </a>
            <a
              href="https://linkedin.com/in/pradeep-misal-87403b1b3"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a
              href="mailto:PradeepMisal698@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-7 w-7" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-5 w-5 text-cyan-400" />
        </div>
      </div>
    </section>
  )
}
