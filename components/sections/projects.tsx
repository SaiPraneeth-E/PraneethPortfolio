"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  ExternalLink,
  Calendar,
  Users,
  Code,
} from "lucide-react"
import { useAnimation } from "@/hooks/use-animation"

const ProjectsSection = ({ projects }) => {
  const { ref, inView, fadeInUp, staggerContainer } = useAnimation()

  return (
    <motion.section
      id="projects"
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-20 px-6 bg-gradient-to-r from-black via-blue-900/20 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
            MY <span className="cyber-text">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full neon-glow" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-rajdhani)" }}>
            A showcase of my technical projects spanning web development, machine learning, and IoT systems.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <Card className="holo-card border-cyan-400/30 overflow-hidden hover:border-cyan-400 transition-all duration-300 h-full">
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 neon-glow">
                      <Code className="text-black" size={24} />
                    </div>
                    <Badge className="bg-cyan-400 text-black neon-glow">{project.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="border-green-400 text-green-400 bg-black/50">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-orbitron)" }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {project.team}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="border-cyan-400/50 text-cyan-400 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="border-gray-500 text-gray-400 text-xs">
                          +{project.tech.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-cyan-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:border-white hover:text-white bg-transparent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        CODE
                      </a>
                    </Button>
                    {project.live !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          LIVE
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection
