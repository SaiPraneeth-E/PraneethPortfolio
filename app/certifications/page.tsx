"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Star, CheckCircle, BookOpen, Trophy, Award, Brain, Cloud, Code } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CertificationsPage() {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState("All")

  const certifications = [
    {
      id: 1,
      title: "Gen AI and ChatGPT",
      issuer: "BlackBucks Group",
      date: "2024",
      category: "AI/ML",
      level: "Professional",
      image: "/placeholder.svg?height=120&width=120&text=GenAI",
      description:
        "Comprehensive training on Generative AI technologies and ChatGPT applications in business and development.",
      skills: ["Generative AI", "ChatGPT", "Prompt Engineering", "AI Applications"],
      achievements: [
        "Mastered prompt engineering techniques",
        "Built AI-powered applications",
        "Understanding of LLM capabilities",
        "Practical AI implementation skills",
      ],
    },
    {
      id: 2,
      title: "Data Analysis with Python",
      issuer: "Cognitive Class",
      date: "2024",
      category: "Data Science",
      level: "Intermediate",
      image: "/placeholder.svg?height=120&width=120&text=Python+Data",
      description:
        "In-depth course covering data analysis techniques, visualization, and statistical analysis using Python.",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization", "Statistical Analysis"],
      achievements: [
        "Proficient in data manipulation with Pandas",
        "Created comprehensive data visualizations",
        "Applied statistical methods to real datasets",
        "Completed hands-on data analysis projects",
      ],
    },
    {
      id: 3,
      title: "Prompt Engineering",
      issuer: "DeepLearning.AI",
      date: "2024",
      category: "AI/ML",
      level: "Specialized",
      image: "/placeholder.svg?height=120&width=120&text=Prompt+Eng",
      description: "Advanced techniques for effective prompt design and optimization for large language models.",
      skills: ["Prompt Design", "LLM Optimization", "AI Communication", "Model Fine-tuning"],
      achievements: [
        "Mastered advanced prompting strategies",
        "Optimized AI model responses",
        "Developed effective AI communication patterns",
        "Applied prompt engineering in real projects",
      ],
    },
    {
      id: 4,
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "2024",
      category: "Project Management",
      level: "Professional",
      image: "/placeholder.svg?height=120&width=120&text=Agile+Scrum",
      description:
        "Practical implementation of Agile methodologies and Scrum framework in software development projects.",
      skills: ["Agile Methodology", "Scrum Framework", "Sprint Planning", "Team Collaboration"],
      achievements: [
        "Implemented Agile practices in team projects",
        "Facilitated sprint planning sessions",
        "Improved team collaboration efficiency",
        "Applied Scrum principles in development workflow",
      ],
    },
    {
      id: 5,
      title: "AI Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "2024",
      category: "AI/ML",
      level: "Foundation",
      image: "/placeholder.svg?height=120&width=120&text=IBM+AI",
      description:
        "Foundational knowledge of artificial intelligence concepts, applications, and ethical considerations.",
      skills: ["AI Concepts", "Machine Learning Basics", "AI Ethics", "Industry Applications"],
      achievements: [
        "Strong foundation in AI principles",
        "Understanding of ML algorithms",
        "Awareness of AI ethical implications",
        "Knowledge of AI industry applications",
      ],
    },
    {
      id: 6,
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "2024",
      category: "Cloud Computing",
      level: "Foundation",
      image: "/placeholder.svg?height=120&width=120&text=AWS+Cloud",
      description: "Essential knowledge of AWS cloud services, architecture, and best practices for cloud computing.",
      skills: ["AWS Services", "Cloud Architecture", "Security", "Cost Optimization"],
      achievements: [
        "Comprehensive AWS services knowledge",
        "Understanding of cloud architecture principles",
        "Applied security best practices",
        "Optimized cloud resource utilization",
      ],
    },
  ]

  const categories = ["All", "AI/ML", "Data Science", "Cloud Computing", "Project Management"]

  const filteredCertifications =
    activeCategory === "All" ? certifications : certifications.filter((cert) => cert.category === activeCategory)

  const getLevelColor = (level) => {
    switch (level) {
      case "Professional":
        return "bg-purple-500"
      case "Specialized":
        return "bg-red-500"
      case "Intermediate":
        return "bg-blue-500"
      case "Foundation":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "AI/ML":
        return Brain
      case "Data Science":
        return Star
      case "Cloud Computing":
        return Cloud
      case "Project Management":
        return Code
      default:
        return BookOpen
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
              <span className="cyber-text">CERTIFICATIONS</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center neon-glow">
                <Trophy className="text-black" size={32} />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              PROFESSIONAL <span className="cyber-text">CERTIFICATIONS</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-rajdhani)" }}>
              Continuous learning and skill development through industry-recognized certifications in AI, data science,
              cloud computing, and project management.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <Card className="holo-card border-cyan-400/30 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold cyber-text mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                  {certifications.length}
                </div>
                <div className="text-gray-300 text-sm">Total Certifications</div>
              </CardContent>
            </Card>
            <Card className="holo-card border-cyan-400/30 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold cyber-text mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                  4
                </div>
                <div className="text-gray-300 text-sm">Skill Areas</div>
              </CardContent>
            </Card>
            <Card className="holo-card border-cyan-400/30 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold cyber-text mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                  2024
                </div>
                <div className="text-gray-300 text-sm">Latest Year</div>
              </CardContent>
            </Card>
            <Card className="holo-card border-cyan-400/30 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold cyber-text mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                  100%
                </div>
                <div className="text-gray-300 text-sm">Completion Rate</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category)
              return (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category
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

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="holo-card border-cyan-400/30 overflow-hidden hover:border-cyan-400 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <Image
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          width={60}
                          height={60}
                          className="rounded-lg mr-4 border border-cyan-400/30"
                        />
                        <div>
                          <Badge className={`${getLevelColor(cert.level)} text-white mb-2`}>{cert.level}</Badge>
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

                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2">Achievements:</div>
                      <div className="space-y-1">
                        {cert.achievements.slice(0, 2).map((achievement, i) => (
                          <div key={i} className="flex items-start text-xs text-gray-300">
                            <Star className="h-3 w-3 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </div>
                        ))}
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
                <BookOpen className="text-cyan-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                  CONTINUOUS LEARNING
                </h3>
                <p className="text-gray-300 mb-6" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  I'm committed to staying updated with the latest technologies and industry best practices through
                  continuous learning and professional development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 neon-glow"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                    onClick={() => router.push("/projects")}
                  >
                    <Award className="mr-2 h-5 w-5" />
                    VIEW PROJECTS
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
