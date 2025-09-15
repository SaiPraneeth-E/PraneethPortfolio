"use client"
import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Rajdhani } from "next/font/google"
import { motion } from "framer-motion"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron",
})
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata: Metadata = {
  title: "Sai Praneeth Edulapati - AI/ML Engineer",
  description:
    "Portfolio of Sai Praneeth Edulapati, AI/ML Engineer specializing in deep learning, computer vision, and natural language processing.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className={inter.className}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </body>
    </html>
  )
}
