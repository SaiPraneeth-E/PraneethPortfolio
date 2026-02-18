"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink, Calendar, Users, CheckCircle, Code, Zap } from "lucide-react"
import Image from "next/image"
import { useRouter, useParams } from "next/navigation"

export default function ProjectDetailPage() {
  const router = useRouter()
  const params = useParams()
  const projectId = params.id

  // Mock project data - in real app, fetch based on ID
  const project = {
    id: 1,
    title: "AI Chatbot with Advanced NLP",
    description:
      "Intelligent conversational AI system using transformer models and natural language processing for customer support automation.",
    longDescription:
      "This comprehensive AI chatbot project represents a significant advancement in conversational AI technology. Built using state-of-the-art transformer models, the system demonstrates sophisticated natural language understanding and generation capabilities. The project involved extensive research into modern NLP techniques, including BERT for intent classification and GPT for response generation. The chatbot maintains context across conversations, understands user sentiment, and provides personalized responses based on user history and preferences.",
    image: "/placeholder.svg?height=400&width=600&text=AI+Chatbot+System",
    category: "NLP",
    tech: ["Python", "Transformers", "FastAPI", "React", "PostgreSQL", "Docker", "Redis", "NGINX"],
    github: "https://github.com/saipraneeth/ai-chatbot",
    live: "https://ai-chatbot-demo.com",
    date: "2024",
    team: "Solo Project",
    status: "Completed",
    duration: "4 months",
    features: [
      "Multi-language support with 15+ languages",
      "Context-aware responses with conversation memory",
      "Real-time sentiment analysis and emotion detection",
      "Interactive web interface with voice support",
      "Comprehensive admin dashboard with analytics",
      "API integration for third-party services",
      "Custom training pipeline for domain-specific data",
      "Performance monitoring and logging system",
    ],
    challenges: [
      "Handling context across long conversations",
      "Optimizing response time for real-time chat",
      "Training custom models for domain-specific queries",
      "Implementing robust error handling and fallbacks",
    ],
    solutions: [
      "Implemented sliding window context management",
      "Used Redis caching for frequently asked questions",
      "Created custom training pipeline with domain data",
      "Built comprehensive fallback system with human handoff",
    ],
    results: [
      "95% user satisfaction rate",
      "40% reduction in customer support tickets",
      "Average response time under 200ms",
      "Successfully handles 1000+ concurrent users",
    ],
    techDetails: {
      Frontend: "React with TypeScript, Material-UI for components, Socket.io for real-time communication",
      Backend: "FastAPI with Python, PostgreSQL for data storage, Redis for caching",
      "AI/ML": "Hugging Face Transformers, BERT for intent classification, GPT for response generation",
      Infrastructure: "Docker containers, NGINX reverse proxy, AWS deployment",
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => router.back()} className="text-white hover:text-yellow-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 bg-transparent"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
              <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-yellow-400 text-gray-900 mb-4">{project.category}</Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{project.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">Duration</span>
                    </div>
                    <div className="text-white font-semibold">{project.duration}</div>
                  </div>
                  <div>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">Team</span>
                    </div>
                    <div className="text-white font-semibold">{project.team}</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={20} />
                  <span className="text-green-400 font-semibold">{project.status}</span>
                </div>
              </div>

              <div className="relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-lg" />
              </div>
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-gray-800/80 border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Code className="text-yellow-400 mr-3" size={24} />
                  <h2 className="text-2xl font-bold text-white">Technology Stack</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-yellow-400 text-yellow-400 px-4 py-2 text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
            <Card className="bg-gray-800/80 border-gray-700">
              <CardContent className="p-8">
                <p className="text-gray-300 leading-relaxed text-lg">{project.longDescription}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="bg-gray-800/80 border-gray-700 hover:border-yellow-400 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <CheckCircle className="text-yellow-400 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(project.techDetails).map(([category, details]) => (
                <Card key={category} className="bg-gray-800/80 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-3">{category}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <Card key={index} className="bg-red-900/20 border-red-700/50">
                      <CardContent className="p-6">
                        <p className="text-gray-300">{challenge}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Solutions</h2>
                <div className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <Card key={index} className="bg-green-900/20 border-green-700/50">
                      <CardContent className="p-6">
                        <p className="text-gray-300">{solution}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results & Impact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-400/50"
                >
                  <CardContent className="p-6 text-center">
                    <Zap className="text-yellow-400 mx-auto mb-3" size={32} />
                    <p className="text-gray-300 font-medium">{result}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border-yellow-400/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Interested in Similar Solutions?</h3>
                <p className="text-gray-300 mb-6">
                  Let's discuss how I can help you build innovative AI solutions for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                    Start a Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 bg-transparent"
                    onClick={() => router.push("/projects")}
                  >
                    View More Projects
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
