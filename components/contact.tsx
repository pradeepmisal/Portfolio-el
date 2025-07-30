"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, FileText, Github, Linkedin, Twitter, CheckCircle } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile" // Import useIsMobile hook

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile() // Get mobile state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "PradeepMisal698@gmail.com",
      href: "mailto:PradeepMisal698@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 86055 76258",
      href: "tel:+918605576258",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pune, India",
      href: "https://maps.google.com/?q=Pune,India",
    },
    {
      icon: FileText,
      title: "Resume",
      value: "View Resume",
      href: "https://drive.google.com/file/d/1-8aG-jone7HEGz3H88lC9N1Jr4MAcHHG/view?usp=sharing",
    },
  ]

  useEffect(() => {
    const initAnimations = () => {
      if (typeof window !== "undefined" && (window as any).gsap && (window as any).ScrollTrigger) {
        const gsap = (window as any).gsap
        gsap.registerPlugin((window as any).ScrollTrigger)

        if (isMobile) {
          // Apply animations only on mobile
          // Contact info animation
          gsap.fromTo(
            contactInfoRef.current,
            {
              opacity: 0,
              x: -60,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
              },
            },
          )

          // Form animation
          gsap.fromTo(
            formRef.current,
            {
              opacity: 0,
              x: 60,
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              duration: 1.2,
              ease: "power3.out",
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
          if (contactInfoRef.current) contactInfoRef.current.style.opacity = "1"
          if (formRef.current) formRef.current.style.opacity = "1"
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
  }, [isMobile])

  return (
    <section ref={sectionRef} id="contact" className="py-20 relative">
      {/* Background orbs */}
      <div className="floating-orb floating-orb-1"></div>
      <div className="floating-orb floating-orb-2"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto font-light">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-5">
            <div>
              <h3 className="gradient-text mb-3">Let's talk about everything!</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5 font-light">
                Don't like forms? Send me an email. 👋 Or give me a call. I'm always excited to discuss new
                opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="glass p-2.5 rounded-lg group-hover:neon-glow transition-all duration-300">
                    <info.icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-xs font-light"
                      target={info.title === "Resume" ? "_blank" : undefined}
                      rel={info.title === "Resume" ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-5">
              <h4 className="text-white font-semibold mb-3 text-base">Follow me on social media</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/pradeepmisalResume"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com/in/pradeep-misal-87403b1b3"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com/PradeepMisal"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <div className="glass-card p-5 rounded-lg">
              <h3 className="gradient-text mb-2">Send me a message</h3>
              <p className="text-gray-400 mb-5 text-sm font-light">
                Fill out the form below and I'll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input text-sm py-2.5 px-3"
                    required
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input text-sm py-2.5 px-3"
                    required
                  />
                </div>

                <input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input w-full text-sm py-2.5 px-3"
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="form-input w-full resize-none text-sm py-2.5 px-3"
                  required
                />

                {/* Success Message */}
                {isSubmitted && (
                  <div className="flex items-center gap-2 p-2.5 glass rounded-md border border-green-400/30">
                    <CheckCircle className="h-4 w-4 text-green-400 neon-glow" />
                    <span className="text-green-400 text-xs font-light">
                      Thank you for your message! Please contact me directly via email or phone.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
