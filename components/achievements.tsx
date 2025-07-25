"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { Award, Trophy, Star, Medal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Achievements() {
  const achievements = [
    {
      title: "Openserv Hackathon 2025",
      organization: "OpenServ – International DeFi Hackathon",
      description:
        "Winner among 2000+ teams in an international DeFi hackathon. Developed ASSURFI, an innovative blockchain solution for decentralized finance.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-25%20at%2019.20.03_6800a64c.jpg-9QD9bT0CkRWgUXLQvMRF1rZMJYgbya.jpeg",
      amount: "₹3.5 Lakh",
      date: "2025",
      icon: Trophy,
      category: "International",
    },
    {
      title: "InnovateYou Techathon",
      organization: "InnovateYou",
      description:
        "National winner among 200+ teams for presenting MEDIAR, a healthtech solution demonstrating innovative technology and real-world impact.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/InnovateYou%20Techathon-QCbNVR5LxoGkKF8ccE9BHhBAIo3P4k.png",
      amount: "₹2 Lakh",
      date: "2024",
      icon: Award,
      category: "National",
    },
    {
      title: "PanIIT PIWOT Hackathon",
      organization: "PanIIT Alumni India",
      description:
        "Winner among 16,000+ participants in the prestigious PanIIT Hackathon, recognized for exceptional technical innovation and advanced problem-solving.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/piwot%20pan-iit-5WJxktMy1u7GaKFmeDjlTjLbZXK3FC.png",
      amount: "₹75,000",
      date: "2025",
      icon: Medal,
      category: "Competition",
    },
    {
      title: "KnowCode Hackathon",
      organization: "KJSIT Mumbai",
      description:
        "1st Runner-up among 150+ teams, recognized for innovative software solutions and strong problem-solving in real-world challenges.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Knowcosde.jpg-B1MoujI36yQVcvEiyVINjXIT8XvmDt.jpeg",
      amount: "₹15,000",
      date: "2024",
      icon: Trophy,
      category: "Competition",
    },
    {
      title: "HackCelestial 1.0",
      organization: "Pillai College of Engineering",
      description:
        "Top 5 winner for innovative prototype development, showcasing creative AR-based tech solutions with real-world applications.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hackcelestial.png-rFf4lG6U8OoFWz1Vl3I5KL8vdp0lcK.jpeg",
      amount: "₹10,000",
      date: "2024",
      icon: Star,
      category: "Innovation",
    },
    {
      title: "World Record Award – AR Physics Textbook",
      organization: "World Record India",
      description:
        "Led the development of a 107-page AR Physics Textbook in 3 months. Recognized by World Record India for breakthrough innovation in educational technology.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WOrld%20recored%202-ItLpzhrPYzJxMYDzkTtcAoND2Ck8VS.png",
      date: "2023",
      icon: Award,
      category: "World Record",
    },
  ]

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition and awards I've received for my work and contributions
          </p>
        </div>

        <div data-animate className="fade-up delay-200">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="achievements-swiper"
          >
            {achievements.map((achievement, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-slate-800/50 border-slate-600 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <achievement.icon className="h-8 w-8 text-yellow-400" />
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-purple-600/20 text-purple-400">{achievement.category}</Badge>
                      {achievement.amount && (
                        <Badge className="bg-green-600/20 text-green-400">{achievement.amount}</Badge>
                      )}
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{achievement.title}</CardTitle>
                    <CardDescription className="text-purple-400 font-medium">
                      {achievement.organization} • {achievement.date}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .achievements-swiper .swiper-button-next,
        .achievements-swiper .swiper-button-prev {
          color: #a855f7;
        }
        
        .achievements-swiper .swiper-pagination-bullet {
          background: #64748b;
        }
        
        .achievements-swiper .swiper-pagination-bullet-active {
          background: #a855f7;
        }
      `}</style>
    </section>
  )
}
