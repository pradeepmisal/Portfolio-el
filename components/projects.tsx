"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github, Play } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile" // Import useIsMobile hook

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectsGridRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile() // Get mobile state

  const projects = [
    {
      title: "ASSUREFI",
      description:
        "Decentralized AI-based auditing platform for securing smart contracts in DeFi. Ensures real-time scam detection with high accuracy using advanced machine learning algorithms.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YaQZb7gVK3TU4DUmF2H9fboN5AqPSi.png",
      technologies: ["React", "Blockchain", "AI/ML", "Smart Contracts", "DeFi", "Web3"],
      github: "https://github.com/pradeepmisal/ASSUREFI",
      category: "AI",
    },
    {
      title: "MEDIAR",
      description:
        "AR-based medical assistant for healthcare training. Visualizes complex medical procedures in immersive 3D environments for medical learners and professionals.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-85wNFTuycFNbt8KMISKXhyTgCsWBdS.png",
      technologies: ["AR", "Unity", "3D Modeling", "NLP", "Convai.ai", "C#"],
      github: "https://github.com/pradeepmisal/MEDI_AR",
      live: "https://drive.google.com/drive/u/1/folders/133V791IhyKdw1_VmW85pOIvpMXZ_t54U",
      category: "AR & Healthcare",
      isDemo: true,
    },
    {
      title: "Veritas – IBM TechXChange 2025",
      description:
        "Veritas is an AI-driven tool that simplifies RFP analysis, contract compliance, and document reviews for enterprises and consultants, streamlining audits and regulatory workflows.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cSZix5xwBq5NuBzPuebHmbxwIe62t2.png",
      technologies: ["GenAI", "IBM Watson", "Compliance", "React", "Node.js"],
      github: "https://github.com/pradeepmisal/Veritas-IBM-TechXChange2025-project",
      live: "https://veritas-nine.vercel.app/",
      category: "Enterprise AI",
    },
    {
      title: "EcoStep – IBM Call for Code 2024",
      description:
        "EcoStep helps users calculate their carbon footprint and offers personalized suggestions to reduce it. It also answers environmental questions through an intelligent Q&A system.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jqaV8W3pe6sz1vYHQPHCXigh5q98st.png",
      technologies: ["React", "Node.js", "IBM WatsonX ", "SMS API", "IBM cloud ", "Sustainability"],
      github: "https://github.com/pradeepmisal/EcoStep_IBM_Call_for_Code_2024",
      live: "https://ecostep-carbon-awareness-made-easy-client.onrender.com/",
      category: "Sustainability",
    },
    {
      title: "Physics AR Learning Platform",
      description:
        "Augmented Reality educational project that simplifies complex physics concepts for school students. Uses AR markers to create interactive 3D physics models.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8zNWMljYKIIvxcjapIfnxluN9jAXPB.png",
      technologies: ["AR", "Unity", "Blender", "3D Physics", "Mobile", "Interactive Learning"],
      github: "https://github.com/pradeepmisal/Physics-AR-Project",
      live: "https://drive.google.com/drive/folders/1JuDKUdyR_CEWRhjydAa3wyDV9I8LQWyu?usp=sharing",
      category: "AR & Education",
      isDemo: true,
    },
    {
      title: "ElevateAI – Agentic AI Co-Pilot for Startup Execution",
      description:
        "GenAI-powered Agent that helps innovators turn raw ideas into actionable startup plans through market research, business canvas generation, and execution roadmaps.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MV1A8vs3WVRX8saHp0eQzWN5gJ0P9o.png",
      technologies: ["GenAI", "React","LangChain",  "OpenAI", "Vector Database", "NLP"],
      github: "https://github.com/pradeepmisal/Elevate-AI-lab",
      live: "https://elevateai-frontend.vercel.app/",
      category: "AI & Career",
    },
  ]

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap
        gsap.registerPlugin((window as any).ScrollTrigger)

        if (isMobile) {
          // Apply animations only on mobile
          // Projects grid animation
          gsap.fromTo(
            projectsGridRef.current?.children,
            {
              opacity: 0,
              y: 60, // Adjusted for grid entrance
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              stagger: 0.15, // Slightly reduced stagger for grid
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
              },
            },
          )
        } else {
          // For desktop, ensure elements are visible by default
          if (projectsGridRef.current) {
            Array.from(projectsGridRef.current.children).forEach((child) => {
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
    <section ref={sectionRef} id="projects" className="section-padding relative">
      {/* Background orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto font-light">
            Here are some of the innovative projects I've built, ranging from AI and blockchain to AR and sustainability
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-10">
          <p className="text-gray-400 text-base mb-3 font-light">
            🏆 <span className="gradient-text font-semibold">7-time hackathon winner</span> across national and
            international competitions
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            {[
              "Health-Tech solutions",
              "Sustainability solutions",
              "DeFi Innovation",
              "AR Innovation",
              "GenAI Solutions",
            ].map((tag, i) => (
              <span key={i} className="glass px-2.5 py-0.5 rounded-full text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: any }) {
  return (
    <div className="glass-card p-4 rounded-lg">
      {" "}
      {/* Removed min-w classes */}
      <div className="relative overflow-hidden rounded-md mb-4 group">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={300}
          height={180}
          className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Category Badge */}
        <div className="absolute top-2 left-2">
          <span className="glass px-2 py-0.5 rounded-full text-cyan-400 text-xs font-medium neon-glow">
            {project.category}
          </span>
        </div>
      </div>
      <h3 className="gradient-text mb-2">{project.title}</h3>
      <p className="text-gray-300 leading-relaxed mb-4 text-sm font-light">{project.description}</p>
      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
          <span key={techIndex} className="glass px-2 py-0.5 rounded-full text-gray-300 text-xs">
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="glass px-2 py-0.5 rounded-full text-gray-400 text-xs">
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline flex-1 text-center py-2 px-3 text-xs flex items-center justify-center gap-1"
        >
          <Github className="h-3 w-3" />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-center py-2 px-3 text-xs flex items-center justify-center gap-1"
        >
          {project.isDemo ? (
            <>
              <Play className="h-3 w-3" />
              Demo
            </>
          ) : (
            <>
              <ExternalLink className="h-3 w-3" />
              Live
            </>
          )}
        </a>
      </div>
    </div>
  )
}
