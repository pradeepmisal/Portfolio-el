"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [currentText, setCurrentText] = useState(0)
  const texts = ["Full Stack Developer", "Software Engineer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-12 md:mt-0">
        <div data-animate className="fade-up delay-200 max-w-4xl mx-auto pt-8 md:pt-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pradeep</span>
          </h1>

          <div className="h-16 mb-8 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              I'm a{" "}
              <span className="text-purple-400 font-semibold transition-all duration-500">{texts[currentText]}</span>
            </p>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed text-center">
            Passionate about creating innovative solutions and building scalable applications that make a difference. I
            love turning complex problems into simple, beautiful designs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 bg-transparent"
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/17yH0FDCOYi7Bj4fliDRfWen_OVW4iED6?usp=sharing",
                  "_blank",
                )
              }
            >
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/pradeepmisalResume"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://linkedin.com/in/pradeep-misal-87403b1b3"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href="mailto:PradeepMisal698@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-purple-400" />
        </div>
      </div>
    </section>
  )
}
