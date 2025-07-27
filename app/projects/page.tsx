"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Cloud, Globe, Bot, Zap } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ProjectsPage() {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      id: 1,
      title: "Weather Forecasting Website",
      description:
        "Real-time weather data application built with HTML, CSS, JavaScript, and Flask for any location worldwide.",
      longDescription:
        "A comprehensive weather forecasting application that provides real-time weather data for any location. Features include current weather conditions, 5-day forecasts, and responsive design for both desktop and mobile users.",
      image: "/placeholder.svg?height=300&width=400&text=Weather+App",
      category: "Web Development",
      tech: ["HTML", "CSS", "JavaScript", "Flask", "Weather API"],
      github: "https://github.com/saipraneeth/weather-app",
      live: "https://weather-forecast-demo.com",
      date: "March 2024",
      team: "Solo Project",
      status: "Completed",
      features: [
        "Real-time weather data integration",
        "Responsive UI for desktop and mobile",
        "5-day weather forecast",
        "Location-based weather search",
        "Weather alerts and notifications",
      ],
    },
    {
      id: 2,
      title: "Language Translator Web App",
      description:
        "Multi-language translation application with clean UI and real-time translation capabilities using external APIs.",
      longDescription:
        "A user-friendly language translation web application that supports multiple languages with real-time translation. Built with modern web technologies and integrated with external translation APIs for accurate results.",
      image: "/placeholder.svg?height=300&width=400&text=Translator+App",
      category: "Web Development",
      tech: ["HTML", "CSS", "JavaScript", "Translation API", "Bootstrap"],
      github: "https://github.com/saipraneeth/language-translator",
      live: "https://translator-demo.com",
      date: "April 2024",
      team: "Solo Project",
      status: "Completed",
      features: [
        "Multi-language support (50+ languages)",
        "Real-time translation",
        "Clean and responsive UI",
        "Text-to-speech functionality",
        "Translation history",
      ],
    },
    {
      id: 3,
      title: "Automated Headlight using LED Matrix Systems",
      description:
        "Smart automotive system using LED matrix and servo motors to reduce glare for oncoming traffic with automatic beam adjustment.",
      longDescription:
        "An innovative automotive safety system that automatically adjusts headlight beam direction based on ambient light conditions and obstacle detection. Uses advanced sensor technology to enhance road safety.",
      image: "/placeholder.svg?height=300&width=400&text=Smart+Headlight",
      category: "IoT/Hardware",
      tech: ["Arduino", "LED Matrix", "Servo Motors", "LDR Sensors", "C++"],
      github: "https://github.com/saipraneeth/smart-headlight",
      live: "#",
      date: "May 2024",
      team: "Team Project (4 members)",
      status: "Completed",
      features: [
        "Automatic beam direction adjustment",
        "Ambient light detection",
        "Obstacle detection system",
        "Glare reduction for oncoming traffic",
        "Energy-efficient LED matrix",
      ],
    },
    {
      id: 4,
      title: "Employee Salary Prediction App",
      description:
        "Machine Learning application to classify employee income with interactive web interface and both single and batch predictions.",
      longDescription:
        "A comprehensive ML application that predicts employee salaries based on various factors. Includes data preprocessing, exploratory data analysis, feature engineering, and model deployment with an interactive Streamlit interface.",
      image: "/placeholder.svg?height=300&width=400&text=ML+Salary+Predictor",
      category: "Machine Learning",
      tech: ["Python", "Scikit-learn", "Streamlit", "Pandas", "Ngrok"],
      github: "https://github.com/saipraneeth/salary-predictor",
      live: "https://salary-predictor-demo.com",
      date: "July 2024",
      team: "Solo Project",
      status: "Completed",
      features: [
        "Data preprocessing and EDA",
        "Feature engineering for better accuracy",
        "Multiple ML model comparison",
        "Interactive Streamlit web app",
        "Single and batch prediction modes",
      ],
    },
  ]

  const categories = ["All", "Web Development", "Machine Learning", "IoT/Hardware"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Web Development":
        return Globe
      case "Machine Learning":
        return Bot
      case "IoT/Hardware":
        return Zap
      default:
        return Cloud
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => router.back()} className="text-white hover:text-cyan-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-orbitron)" }}>
              <span className="text-white">MY</span>
              <span className="cyber-text">PROJECTS</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              MY <span className="cyber-text">PROJECTS</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-rajdhani)" }}>
              A showcase of my technical projects spanning web development, machine learning, and IoT systems. Each
              project demonstrates practical application of programming skills and innovative problem-solving.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category)
              return (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  onClick={() => setActiveFilter(category)}
                  className={`${
                    activeFilter === category
                      ? "bg-cyan-400 text-black hover:bg-cyan-500 neon-glow"
                      : "border-cyan-400/50 text-cyan-400 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
                  }`}
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  <IconComponent className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="holo-card border-cyan-400/30 overflow-hidden hover:border-cyan-400 transition-all duration-300 h-full">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
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
                        className="flex-1 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                        onClick={() => router.push(`/projects/${project.id}`)}
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        VIEW DETAILS
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:border-white hover:text-white bg-transparent"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      {project.live !== "#" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:border-white hover:text-white bg-transparent"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <Card className="holo-card border-cyan-400/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Bot className="text-cyan-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                  MORE PROJECTS COMING SOON
                </h3>
                <p className="text-gray-300 mb-6" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  I'm constantly working on new projects and learning new technologies. Stay tuned for more innovative
                  solutions!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 neon-glow"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                    asChild
                  >
                    <a href="https://github.com/saipraneeth" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      VIEW GITHUB
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black bg-transparent"
                    onClick={() => router.push("/")}
                    style={{ fontFamily: "var(--font-orbitron)" }}
                  >
                    BACK TO HOME
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
