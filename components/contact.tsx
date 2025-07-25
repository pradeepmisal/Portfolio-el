"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, FileText, Github, Linkedin, Twitter, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple form submission - just show success message
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
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

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-animate className="fade-right space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's talk about everything!</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Don't like forms? Send me an email. 👋 Or give me a call. I'm always excited to discuss new
                opportunities and interesting projects.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="bg-purple-600/20 p-3 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                    <info.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                      target={info.title === "Resume" ? "_blank" : undefined}
                      rel={info.title === "Resume" ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow me on social media</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/pradeepmisalResume"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/pradeep-misal-87403b1b3"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="https://twitter.com/PradeepMisal"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-animate className="fade-left">
            <Card className="bg-slate-700/50 border-slate-600">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Send me a message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-gray-400 resize-none"
                      required
                    />
                  </div>

                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="flex items-center gap-2 p-4 rounded-lg bg-green-600/20 border border-green-600/30 text-green-400">
                      <CheckCircle className="h-5 w-5" />
                      <span>Thank you for your message! Please contact me directly via email or phone.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
