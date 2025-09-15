"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Menu,
  X,
  Brain,
  Award,
  Briefcase,
  Heart,
  Home,
  ArrowUp,
  Code,
  Bot,
  Database,
  Terminal,
  Server,
  Camera,
  Utensils,
  Plane,
  Dumbbell,
  Film,
  Newspaper,
  GraduationCap,
  Calendar,
} from "lucide-react"
import HomeSection from "@/components/sections/home"
import SkillsSection from "@/components/sections/skills"
import ProjectsSection from "@/components/sections/projects"
import HobbiesSection from "@/components/sections/hobbies"
import CertificationsSection from "@/components/sections/certifications"
import ContactSection from "@/components/sections/contact"
import MatrixRain from "@/components/ui/matrix-rain"
import { TechScene3D } from "@/components/ui/3d/tech-scene"

// Add smooth scroll utility function
const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

// Update the scrollToSection function
const scrollToSection = (sectionId) => {
  smoothScrollTo(sectionId, 80) // 80px offset for fixed nav
}

// Add smooth scroll state and intersection observer
export default function TechPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  })

  const sections = [
    { name: "HOME", icon: Home, id: "home" },
    { name: "SKILLS", icon: Brain, id: "skills" },
    { name: "PROJECTS", icon: Briefcase, id: "projects" },
    { name: "HOBBIES", icon: Heart, id: "hobbies" },
    { name: "CERTIFICATIONS", icon: Award, id: "certifications" },
    { name: "CONTACT", icon: Mail, id: "contact" },
  ]

  // Add intersection observer for active section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const sectionIds = sections.map((section) => section.id)

    sectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200])
  const backgroundOpacity = useTransform(scrollY, [0, 300], [1, 0.3])

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Technical skills based on resume
  const techSkills = [
    { name: "Java", level: 90, icon: Code, color: "#00d4ff" },
    { name: "Python", level: 95, icon: Brain, color: "#0099cc" },
    { name: "C", level: 85, icon: Brain, color: "#0099cc" },
    { name: "Machine Learning", level: 85, icon: Bot, color: "#00d4ff" },
    { name: "SQL", level: 85, icon: Bot, color: "#00d4ff" },
    { name: "Data Structures", level: 80, icon: Database, color: "#00d4ff" },
    { name: "Git & GitHub", level: 90, icon: Terminal, color: "#00d4ff" },
    { name: "Cloud Computing", level: 75, icon: Server, color: "#0099cc" },
  ]

  const techStats = [
    { number: "4+", label: "Projects Completed", icon: Briefcase },
    { number: "8.25", label: "Current CGPA", icon: GraduationCap },
    { number: "15+", label: "Certifications", icon: Award },
    { number: "5+", label: "Leadership Roles", icon: Calendar },
  ]

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Weather Forecasting Website",
      description:
        "Real-time weather data application built with HTML, CSS, JavaScript, and Flask for any location worldwide.",
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
      ],
    },
    {
      id: 2,
      title: "Language Translator Web App",
      description:
        "Multi-language translation application with clean UI and real-time translation capabilities using external APIs.",
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
      ],
    },
    {
      id: 3,
      title: "Automated Headlight using LED Matrix Systems",
      description:
        "Smart automotive system using LED matrix and servo motors to reduce glare for oncoming traffic with automatic beam adjustment.",
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
      ],
    },
    {
      id: 4,
      title: "Employee Salary Prediction App",
      description:
        "Machine Learning application to classify employee income with interactive web interface and both single and batch predictions.",
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
      ],
    },
  ]
  // Certifications data
  const certifications = [
    {
      id: 1,
      title: "Build Your Generative AI Productivity Skills with Microsoft and LinkedIn",
      issuer: "LinkedIn Learning",
      date: "2025",
      category: "AI/ML",
      level: "Professional",
      description:
        "Comprehensive training on leveraging generative AI tools for enhanced productivity in professional environments.",
      skills: ["Generative AI", "Microsoft Copilot", "Office 365", "AI Productivity"],
    },
    {
      id: 2,
      title: "ChatGPT Prompt Engineering for Developers",
      issuer: "DeepLearning.AI",
      date: "2025",
      category: "AI/ML",
      level: "Specialized",
      description:
        "Advanced techniques for effective prompt design and optimization for ChatGPT and large language models.",
      skills: ["ChatGPT", "Prompt Engineering", "AI Development", "Natural Language Processing"],
    },
    {
      id: 3,
      title: "Data Analysis with Python",
      issuer: "Cognitive Class (IBM)",
      date: "2025",
      category: "Data Science",
      level: "Intermediate",
      description:
        "Comprehensive course covering data analysis techniques, visualization, and statistical analysis using Python.",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization", "Statistical Analysis"],
    },
    {
      id: 4,
      title: "Agile Scrum in Practice",
      issuer: "Infosys Springboard",
      date: "2025",
      category: "Project Management",
      level: "Professional",
      description:
        "Practical implementation of Agile methodologies and Scrum framework in software development projects.",
      skills: ["Agile Methodology", "Scrum Framework", "Sprint Planning", "Team Collaboration"],
    },
    {
      id: 5,
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "2025",
      category: "Cloud Computing",
      level: "Foundation",
      description: "Essential knowledge of AWS cloud services, architecture, and best practices for cloud computing.",
      skills: ["AWS Services", "Cloud Architecture", "Security", "Cost Optimization"],
    },
    {
      id: 6,
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "2025",
      category: "AI/ML",
      level: "Foundation",
      description:
        "Foundational knowledge of artificial intelligence concepts, applications, and ethical considerations.",
      skills: ["AI Concepts", "Machine Learning Basics", "AI Ethics", "Industry Applications"],
    },
    {
      id: 7,
      title: "Computer Vision 101",
      issuer: "Infosys Springboard",
      date: "2025",
      category: "AI/ML",
      level: "Foundation",
      description:
        "Introduction to computer vision concepts, image processing, and artificial intelligence applications.",
      skills: ["Computer Vision", "Image Processing", "AI Applications", "Pattern Recognition"],
    },
    {
      id: 8,
      title: "Edunet-Artificial Intelligence",
      issuer: "Edunet Foundation",
      date: "2025",
      category: "AI/ML",
      level: "Foundation",
      description: "Comprehensive introduction to artificial intelligence concepts and practical applications.",
      skills: ["Artificial Intelligence", "Machine Learning", "AI Applications", "Problem Solving"],
    },
    {
      id: 9,
      title: "Introduction to Artificial Intelligence",
      issuer: "Infosys Springboard",
      date: "2025",
      category: "AI/ML",
      level: "Foundation",
      description:
        "Fundamental concepts of artificial intelligence, natural language processing, and machine learning.",
      skills: ["AI Fundamentals", "Natural Language Processing", "Machine Learning", "Deep Learning"],
    },
    {
      id: 10,
      title: "Gen AI and ChatGPT",
      issuer: "BlackBucks Group",
      date: "2025",
      category: "AI/ML",
      level: "Professional",
      description:
        "Comprehensive training on Generative AI technologies and ChatGPT applications in business and development.",
      skills: ["Generative AI", "ChatGPT", "AI Applications", "Business Intelligence"],
    },
    {
      id: 11,
      title: "Introduction to Data Science",
      issuer: "Infosys Springboard",
      date: "2025",
      category: "Data Science",
      level: "Foundation",
      description: "Fundamental concepts of data science, statistical analysis, and data-driven decision making.",
      skills: ["Data Science", "Statistical Analysis", "Data Mining", "Analytics"],
    },
    {
      id: 12,
      title: "Deloitte Australia - Data Analytics Job Simulation",
      issuer: "Forage",
      date: "2024",
      category: "Data Science",
      level: "Professional",
      description: "Practical experience in data analytics through real-world business scenarios and case studies.",
      skills: ["Data Analytics", "Business Intelligence", "Data Visualization", "Problem Solving"],
    },
    {
      id: 13,
      title: "JPMorgan Chase - Software Engineering Job Simulation",
      issuer: "Forage",
      date: "2024",
      category: "Software Engineering",
      level: "Professional",
      description: "Hands-on experience with software engineering practices in a financial technology environment.",
      skills: ["Software Engineering", "Financial Technology", "System Architecture", "Problem Solving"],
    },
    {
      id: 14,
      title: "Infosys SpringBoard - Principles of Generative AI Certification",
      issuer: "Infosys SpringBoard",
      date: "2025",
      category: "Generative AI ",
      level: "Professional",
      description: "Completed the 'Principles of Generative AI' certification, gaining hands-on experience with foundational concepts, tools, and real-world applications of generative models",
      skills: ["Software Engineering", "Generative AI", "System Architecture", "Problem Solving"],
    },
    {
      id: 15,
      title: "Infosys SpringBoard - OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers",
      issuer: "Infosys SpringBoard",
      date: "2025",
      category: "Generative AI ",
      level: "Professional",
      description: "Completed the 'OpenAI Generative Pre-trained Transformer 3 (GPT-3) for developers' certification, gaining hands-on experience with foundational concepts, tools, and real-world applications of generative models",
      skills: ["Software Engineering", "Generative AI", "System Architecture", "Problem Solving"],
    },
  ]

  // Hobbies data
  const hobbies = [
    {
      id: 1,
      name: "Cooking",
      icon: Utensils,
      category: "Creative",
      description: "Exploring diverse cuisines and experimenting with new recipes from around the world",
      achievements: [
        "Mastered 30+ Indian regional dishes",
        "Experimented with 15+ international cuisines",
        "Hosted cooking sessions for friends",
        "Created fusion recipes combining different cultures",
      ],
    },
    {
      id: 2,
      name: "Photography",
      icon: Camera,
      category: "Creative",
      description: "Capturing moments and memories through the lens, specializing in nature and portrait photography",
      achievements: [
        "Core team member of Photography Club, VIT-AP",
        "Covered 20+ college events",
        "Built portfolio of 500+ photos",
        "Mentored junior photographers",
      ],
    },
    {
      id: 3,
      name: "Travelling",
      icon: Plane,
      category: "Adventure",
      description: "Exploring new places, cultures, and creating unforgettable memories across different destinations",
      achievements: [
        "Visited 10+ states in India",
        "Explored 25+ cities and towns",
        "Documented travel experiences through photos",
        "Planned budget-friendly trips for friends",
      ],
    },
    {
      id: 4,
      name: "Sports",
      icon: Dumbbell,
      category: "Fitness",
      description: "Staying active through various sports and fitness activities, promoting a healthy lifestyle",
      achievements: [
        "Regular participant in college sports events",
        "Maintained consistent fitness routine",
        "Organized sports activities for friends",
        "Followed major sports tournaments",
      ],
    },
    {
      id: 5,
      name: "Movies",
      icon: Film,
      category: "Entertainment",
      description: "Cinema enthusiast exploring different genres, languages, and storytelling techniques",
      achievements: [
        "Watched 300+ movies across genres",
        "Explored cinema from 10+ countries",
        "Active in movie discussion groups",
        "Recommended films to friends and family",
      ],
    },
    {
      id: 6,
      name: "Current Affairs",
      icon: Newspaper,
      category: "Knowledge",
      description: "Staying informed about global events, politics, technology trends, and social issues",
      achievements: [
        "Daily news reading habit for 3+ years",
        "Follow 15+ reliable news sources",
        "Engage in informed discussions on current topics",
        "Stay updated on tech industry trends",
      ],
    },
  ]

  // Update scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      // Add custom easing if supported
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <TechScene3D activeModel={0} />
      </div>

      {/* Matrix Rain Background */}
      <motion.div className="matrix-rain" style={{ y: backgroundY, opacity: backgroundOpacity }}>
        <MatrixRain />
      </motion.div>

      {/* Tech Grid Background */}
      <div className="fixed inset-0 tech-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 circuit-pattern opacity-10 pointer-events-none" />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 transform-origin-0 z-50 neon-glow"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold cursor-pointer"
              style={{ fontFamily: "var(--font-orbitron)" }}
              onClick={() => scrollToSection("home")}
            >
              <span className="text-white">SAI</span>
              <span className="cyber-text">PRANEETH</span>
            </motion.div>

            {/* Update the navigation section to show active states */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section, index) => (
                <motion.button
                  key={section.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm font-medium transition-all duration-500 data-stream flex items-center relative ${
                    activeSection === section.id ? "text-cyan-400" : "text-gray-300 hover:text-cyan-400"
                  }`}
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  <section.icon className="mr-2 h-4 w-4" />
                  {section.name}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="fixed top-16 left-0 right-0 z-30 bg-black/90 backdrop-blur-md border-b border-cyan-500/30 md:hidden"
        >
          <div className="px-6 py-4 space-y-4">
            {sections.map((section, index) => (
              <button
                key={section.name}
                onClick={() => {
                  scrollToSection(section.id)
                  setIsMenuOpen(false)
                }}
                className="w-full text-left text-sm font-medium transition-all flex items-center text-gray-300 hover:text-cyan-400"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <section.icon className="mr-2 h-4 w-4" />
                {section.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px rgba(0, 212, 255, 0.5)",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-30 w-12 h-12 bg-cyan-400 text-black rounded-full flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 neon-glow shadow-lg"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      <HomeSection scrollToSection={scrollToSection} techStats={techStats} />
      <SkillsSection techSkills={techSkills} />
      <ProjectsSection projects={projects} />
      <HobbiesSection hobbies={hobbies} />
      <CertificationsSection certifications={certifications} />
      <ContactSection />
    </div>
  )
}
