"use client"

import Image from "next/image"
import { ExternalLink, Github, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  const projects = [
    {
      title: "ASSUREFI",
      description:
        "Decentralized AI-based auditing platform for securing smart contracts in DeFi. Ensures real-time scam detection with high accuracy using advanced machine learning algorithms.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YaQZb7gVK3TU4DUmF2H9fboN5AqPSi.png",
      technologies: ["React", "Blockchain", "AI/ML", "Smart Contracts", "DeFi", "Web3"],
      github: "https://github.com/pradeepmisal/ASSUREFI",
      live: "https://assure-fi.vercel.app/",
      metrics: "Real-time scam detection",
      category: "Blockchain & AI",
    },
    {
      title: "MEDIAR",
      description:
        "AR-based medical assistant for healthcare training. Visualizes complex medical procedures in immersive 3D environments for medical learners and professionals.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-85wNFTuycFNbt8KMISKXhyTgCsWBdS.png",
      technologies: ["AR", "Unity", "3D Modeling", "Healthcare", "Mobile", "C#"],
      github: "https://github.com/pradeepmisal/MEDI_AR",
      live: "https://drive.google.com/drive/u/1/folders/133V791IhyKdw1_VmW85pOIvpMXZ_t54U",
      metrics: "Immersive 3D training",
      category: "AR & Healthcare",
      isDemo: true,
    },
    {
      title: "Veritas – IBM TechXChange 2025",
      description:
        "AI-powered compliance automation using blockchain and GenAI. Verifies security protocols using real regulatory standards like ISO 27001 for enterprise compliance.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cSZix5xwBq5NuBzPuebHmbxwIe62t2.png",
      technologies: ["GenAI", "Blockchain", "IBM Watson", "Compliance", "React", "Node.js"],
      github: "https://github.com/pradeepmisal/Veritas-IBM-TechXChange2025",
      live: "https://veritas-nine.vercel.app/",
      metrics: "ISO 27001 compliance",
      category: "Enterprise AI",
    },
    {
      title: "EcoStep – IBM Call for Code 2024",
      description:
        "Sustainability tracking app with carbon emission estimates, gamification features, and multilingual SMS capabilities for environmental awareness and action.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jqaV8W3pe6sz1vYHQPHCXigh5q98st.png",
      technologies: ["React", "Node.js", "IBM Cloud", "SMS API", "Gamification", "Sustainability"],
      github: "https://github.com/pradeepmisal/EcoStep_IBM_Call_for_Code_2024",
      live: "https://ecostep-carbon-awareness-made-easy-client.onrender.com/",
      metrics: "Carbon footprint tracking",
      category: "Sustainability",
    },
    {
      title: "Physics AR Learning Platform",
      description:
        "Augmented Reality educational project that simplifies complex physics concepts for school students. Uses AR markers to create interactive 3D physics models.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8zNWMljYKIIvxcjapIfnxluN9jAXPB.png",
      technologies: ["AR", "Unity", "Education", "3D Physics", "Mobile", "Interactive Learning"],
      github: "https://github.com/pradeepmisal/Physics-AR",
      live: "https://drive.google.com/drive/folders/1JuDKUdyR_CEWRhjydAa3wyDV9I8LQWyu?usp=sharing",
      metrics: "Interactive 3D models",
      category: "AR & Education",
      isDemo: true,
    },
    {
      title: "ElevateAI – AI Career & Learning Assistant",
      description:
        "GenAI-powered assistant designed to guide students and professionals with personalized learning paths, career advice, and intelligent resume suggestions.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MV1A8vs3WVRX8saHp0eQzWN5gJ0P9o.png",
      technologies: ["GenAI", "React", "OpenAI", "Career Guidance", "Machine Learning", "NLP"],
      github: "https://github.com/pradeepmisal/elevateai-frontend",
      live: "https://elevateai-frontend.vercel.app/",
      metrics: "Personalized AI guidance",
      category: "AI & Career",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the innovative projects I've built, ranging from AI and blockchain to AR and sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              data-animate
              className="fade-up bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 transform hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600/90 text-white text-xs">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {project.metrics && (
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                    {project.metrics}
                  </Badge>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-slate-600 text-gray-300 text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex-1 bg-transparent text-xs"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1 text-xs"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      {project.isDemo ? (
                        <>
                          <Play className="h-3 w-3 mr-1" />
                          Demo
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Live
                        </>
                      )}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional info section */}
        <div data-animate className="fade-up text-center mt-16">
          <p className="text-gray-400 text-lg mb-6">
            🏆 <span className="text-purple-400 font-semibold">7-time hackathon winner</span> across national and
            international competitions
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span className="bg-slate-700/50 px-3 py-1 rounded-full">Health-Tech solutions</span>
            <span className="bg-slate-700/50 px-3 py-1 rounded-full">Sustainability solutions</span>
            <span className="bg-slate-700/50 px-3 py-1 rounded-full">DeFi Innovation</span>
            <span className="bg-slate-700/50 px-3 py-1 rounded-full">AR Innovation</span>
            <span className="bg-slate-700/50 px-3 py-1 rounded-full">GenAI Solutions</span>
          </div>
        </div>
      </div>
    </section>
  )
}
