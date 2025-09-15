"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart } from "lucide-react"
import { useAnimation } from "@/hooks/use-animation"

const HobbiesSection = ({ hobbies }) => {
  const { ref, inView, fadeInUp, staggerContainer } = useAnimation()

  return (
    <motion.section
      id="hobbies"
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-20 px-6 bg-black/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center neon-glow">
              <Heart className="text-black" size={32} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            HOBBIES & <span className="cyber-text">INTERESTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full neon-glow" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-rajdhani)" }}>
            Beyond coding and academics, I pursue various interests that keep me balanced and creative.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <Card className="holo-card border-cyan-400/30 overflow-hidden hover:border-cyan-400 transition-all duration-300 h-full">
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 neon-glow">
                      <hobby.icon className="text-black" size={24} />
                    </div>
                    <Badge className="bg-cyan-400 text-black neon-glow">{hobby.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 neon-glow">
                      <hobby.icon className="text-black" size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
                      {hobby.name}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{hobby.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4
                      className="text-sm font-semibold text-cyan-400 mb-2"
                      style={{ fontFamily: "var(--font-orbitron)" }}
                    >
                      ACHIEVEMENTS:
                    </h4>
                    <div className="space-y-1">
                      {hobby.achievements.slice(0, 2).map((achievement, i) => (
                        <div key={i} className="flex items-start text-xs text-gray-300">
                          <Star className="h-3 w-3 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HobbiesSection
