"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Bot,
  Award,
  Phone,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import { useAnimation } from "@/hooks/use-animation"

const HomeSection = ({ scrollToSection, techStats }) => {
  const { ref, inView, fadeInUp, staggerContainer } = useAnimation()

  return (
    <motion.section
      id="home"
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-h-[80vh]">
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 xl:col-span-8">
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              <span className="text-white">AI/ML</span>
              <br />
              <span className="cyber-text glitch" data-text="DEVELOPER">
                DEVELOPER
              </span>
            </motion.h1>

            <motion.div variants={fadeInUp} className="mb-8">
              <p className="text-cyan-300 text-lg xl:text-xl mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                <span className="text-cyan-400 font-mono">{"<student>"}</span>
                <span className="mx-2">Computer Science with AI/ML Specialization</span>
                <span className="text-cyan-400 font-mono">{"</student>"}</span>
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Java", "Python", "Machine Learning", "Web Development"].map((tag) => (
                  <Badge key={tag} className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50 neon-glow">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 neon-glow"
                onClick={() => scrollToSection("projects")}
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <Bot className="mr-2 h-5 w-5" />
                VIEW PROJECTS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                style={{ fontFamily: "var(--font-orbitron)" }}
                onClick={() => scrollToSection("certifications")}
              >
                <Award className="mr-2 h-5 w-5" />
                CERTIFICATIONS
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Profile Card */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <Card className="holo-card p-6 rounded-3xl w-full max-w-sm border-cyan-400/30">
              <CardContent className="p-0">
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-400 neon-glow overflow-hidden">
                      <Image
                        src="/images/sai-praneeth-profile.jpg"
                        alt="Sai Praneeth"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2">
                      <div className="w-6 h-6 bg-green-400 rounded-full border-2 border-black network-node"></div>
                    </div>
                  </div>
                  <h3
                    className="text-lg xl:text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    EDUPULAPATI SAI PRANEETH
                  </h3>
                  <p className="text-cyan-400 text-sm mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                    CSE WITH AI/ML STUDENT
                  </p>
                  <div className="flex items-center justify-center text-gray-400 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    VIT-AP UNIVERSITY
                  </div>
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Phone className="h-4 w-4 mr-1" />
                    +91 8977771494
                  </div>
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Mail className="h-4 w-4 mr-1" />
                    saipraneeth080805@gmail.com
                  </div>
                </div>

                {/* Tech Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {techStats.slice(0, 4).map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="text-xl xl:text-2xl font-bold cyber-text"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-xs text-gray-400" style={{ fontFamily: "var(--font-orbitron)" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* System Status */}
                <div className="mb-6 p-4 bg-black/30 rounded-lg border border-cyan-400/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-cyan-400" style={{ fontFamily: "var(--font-orbitron)" }}>
                      SYSTEM STATUS
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full network-node"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full network-node"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full network-node"></div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-300 font-mono">
                    {">"} Learning: ACTIVE
                    <br />
                    {">"} Projects: IN PROGRESS
                    <br />
                    {">"} Skills: UPGRADING
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/SaiPraneeth-E", color: "hover:bg-gray-600" },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/edupulapatisaipraneeth/",
                      color: "hover:bg-blue-600",
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-black/50 rounded-full flex items-center justify-center ${social.color} transition-all duration-300 border border-cyan-400/30 network-node`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon size={18} className="text-cyan-400" />
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={() => scrollToSection("skills")}
      >
        <ChevronDown className="text-cyan-400 neon-glow" size={32} />
      </motion.div>
    </motion.section>
  )
}

export default HomeSection
