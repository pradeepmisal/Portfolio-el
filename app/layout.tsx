import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Pradeep Misal - Full Stack Developer",
  description:
    "Portfolio of Pradeep Misal - Full Stack Developer specializing in React, Next.js, and modern web technologies",
  icons: {
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/favicon.jpeg",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.jpeg" type="image/jpeg" />
        <link rel="shortcut icon" href="/favicon.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/favicon.jpeg" />
        <link href="https://unpkg.com/phosphor-icons@1.4.3/src/css/phosphor.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        <script src="https://cdn.jsdelivr.net/gh/locomotivemtl/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
