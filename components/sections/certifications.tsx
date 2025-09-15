"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Award,
  CheckCircle,
  Calendar,
} from "lucide-react"
import { useAnimation } from "@/hooks/use-animation"

const CertificationsSection = ({ certifications }) => {
  const { ref, inView, fadeInUp, staggerContainer } = useAnimation()

  return (
    <motion.section
      id="certifications"
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-20 px-6 bg-gradient-to-r from-black via-blue-900/20 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center neon-glow">
              <Trophy className="text-black" size={32} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            PROFESSIONAL <span className="cyber-text">CERTIFICATIONS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full neon-glow" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-rajdhani)" }}>
            Continuous learning through industry-recognized certifications in AI, data science, and cloud computing.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <Card className="holo-card border-cyan-400/30 overflow-hidden hover:border-cyan-400 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 neon-glow">
                        <Award className="text-white" size={20} />
                      </div>
                      <div>
                        <Badge className="bg-purple-500 text-white mb-2">{cert.level}</Badge>
                        <div className="text-sm text-gray-400">{cert.issuer}</div>
                      </div>
                    </div>
                    <CheckCircle className="text-green-400" size={20} />
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{cert.description}</p>

                  {/* Date */}
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Completed: {cert.date}</span>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 mb-2">Key Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="border-cyan-400/50 text-cyan-400 text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="outline" className="border-gray-500 text-gray-400 text-xs">
                          +{cert.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mt-auto">
                    <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50">{cert.category}</Badge>
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

export default CertificationsSection
