"use client"

import { useEffect, useRef } from "react"
import { useIsMobile } from "@/hooks/use-mobile" // Import useIsMobile hook

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile() // Get mobile state

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: "ph-code",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Development",
      icon: "ph-laptop",
      skills: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Vercel"],
    },
    {
      title: "AI & Agentic Tools",
      icon: "ph-brain",
      skills: ["LLM API's", "LangChain", "RAG", "Pinecone", "FastAPI", "Numpy", "Pandas", "Sklearn", "Matplotlib"],
    },
    {
      title: "Tools",
      icon: "ph-wrench",
      skills: ["Git", "GitHub", "Docker", "Postman", "Figma", "Firebase", "Linux"],
    },
  ]

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap
        gsap.registerPlugin((window as any).ScrollTrigger)

        if (isMobile) {
          // Apply animations only on mobile
          // Skills cards animation with stagger
          gsap.fromTo(
            skillsRef.current?.children,
            {
              opacity: 0,
              y: 60,
              scale: 0.8,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 1,
              ease: "power3.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse", // Updated toggleActions
              },
            },
          )
        } else {
          // For desktop, ensure elements are visible by default
          if (skillsRef.current) {
            Array.from(skillsRef.current.children).forEach((child) => {
              ;(child as HTMLElement).style.opacity = "1"
            })
          }
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
  }, [isMobile]) // Re-run effect if isMobile changes

  return (
    <section ref={sectionRef} id="skills" className="section-padding relative">
      {/* Background orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto font-light">
            A categorized overview of my development, AI, and tool expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="glass-card p-5 rounded-lg text-center">
              <i className={`${group.icon} text-3xl text-cyan-400 mb-3 block neon-glow`}></i>
              <h3 className="text-lg font-bold gradient-text mb-3 neon-text">{group.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm font-light">{group.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
