"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { TechProgressRing } from "@/components/ui/tech-progress-ring"
import { useAnimation } from "@/hooks/use-animation"

const SkillsSection = ({ techSkills }) => {
  const { ref, inView, fadeInUp, staggerContainer } = useAnimation()

  return (
    <motion.section
      id="skills"
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-20 px-6 bg-black/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            TECHNICAL <span className="cyber-text">SKILLS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full neon-glow" />
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {techSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeInUp}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="holo-card border-cyan-400/30 hover:border-cyan-400 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center neon-glow">
                      <skill.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    {skill.name}
                  </h3>
                  <TechProgressRing percentage={skill.level} color={skill.color} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div variants={fadeInUp} className="mt-20">
          <h3
            className="text-3xl font-bold text-white mb-8 text-center"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            EDUCATION <span className="cyber-text">JOURNEY</span>
          </h3>
          <motion.div variants={staggerContainer} className="space-y-6">
            {[
              {
                degree: "B.Tech (CSE with AI/ML)",
                institution: "VIT-AP University",
                score: "8.25 CGPA (Current)",
                year: "2023 – Present",
                status: "current",
              },
              {
                degree: "Intermediate (MPC)",
                institution: "Narayana Junior College",
                score: "92.9%",
                year: "2023",
                status: "completed",
              },
              {
                degree: "Class X (CBSE)",
                institution: "Avenues CBSE School",
                score: "77.9%",
                year: "2021",
                status: "completed",
              },
            ].map((edu, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`holo-card border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 ${
                    edu.status === "current" ? "border-green-400/50" : ""
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center neon-glow mr-4">
                          <GraduationCap className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
                            {edu.degree}
                          </h4>
                          <p className="text-cyan-400">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold cyber-text" style={{ fontFamily: "var(--font-orbitron)" }}>
                          {edu.score}
                        </div>
                        <div className="text-gray-400 text-sm">{edu.year}</div>
                      </div>
                    </div>
                    {edu.status === "current" && (
                      <div className="flex items-center text-green-400 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 network-node"></div>
                        Currently Pursuing
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SkillsSection
