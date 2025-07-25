"use client"

import { Trophy, Brain, Lightbulb, Github } from "lucide-react"
import Image from "next/image"

export default function About() {
  const stats = [
    { icon: Trophy, label: "Hackathon Wins", value: "7+" },
    { icon: Brain, label: "DSA Problems Solved", value: "250+" },
    { icon: Lightbulb, label: "Ideas Implemented", value: "10+" },
    { icon: Github, label: "Open Source Contributions", value: "10+" },
  ]

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image - Vertical Format */}
          <div data-animate className="fade-right relative">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-500/20 rounded-full animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-blue-500/10 rounded-full animate-ping"></div>
              </div>

              {/* Main gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-3xl transform rotate-3 animate-pulse"></div>

              {/* Profile image container - Vertical */}
              <div className="relative bg-slate-700 rounded-3xl p-6 transform -rotate-2 hover:rotate-0 transition-transform duration-500 hover:scale-105">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20photo.jpg-XAGcoMlFKQ1vcpiKPoqeZXniBB8dPc.jpeg"
                    alt="Pradeep Misal - Full Stack Developer"
                    width={300}
                    height={400}
                    className="rounded-2xl w-full h-auto object-cover aspect-[3/4]"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-12 right-8 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-16 left-8 w-1 h-1 bg-pink-400 rounded-full animate-bounce animation-delay-500"></div>
              <div className="absolute top-1/3 left-6 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute top-2/3 right-6 w-1 h-1 bg-yellow-400 rounded-full animate-bounce animation-delay-1500"></div>

              {/* Additional floating elements */}
              <div className="absolute top-1/4 right-12 w-3 h-3 border border-purple-400/50 rounded-full animate-spin"></div>
              <div className="absolute bottom-1/4 left-12 w-2 h-2 border border-pink-400/50 rounded-full animate-spin animation-delay-1000"></div>
            </div>
          </div>

          {/* About Content */}
          <div data-animate className="fade-left space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              I'm a Full Stack Developer with a passion for creating amazing digital experiences
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              With hands-on experience in GenAI, AR, and cloud tools, I build smart, scalable digital products using
              React, Express, Node.js, and modern APIs.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              A 7-time hackathon winner, I've delivered real-world solutions across fintech, edtech, and health — always
              with a focus on performance and impact.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors duration-300 hover:scale-105 transform"
                >
                  <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
