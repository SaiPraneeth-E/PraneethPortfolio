"use client"

import React, { useState, useRef, Suspense, useEffect } from "react"
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Stars, Sphere, Box, Torus, Cylinder } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Menu,
  X,
  Brain,
  Award,
  Calendar,
  Briefcase,
  Bot,
  Server,
  Database,
  Code,
  Terminal,
  Phone,
  MapPin,
  GraduationCap,
  Camera,
  Utensils,
  Plane,
  Dumbbell,
  Film,
  Newspaper,
  Heart,
  ExternalLink,
  Users,
  Star,
  CheckCircle,
  Trophy,
  Home,
  ArrowUp,
} from "lucide-react"
import Image from "next/image"
import * as THREE from "three"

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

// Matrix Rain Component
const MatrixRain = () => {
  const [chars, setChars] = useState([])

  useEffect(() => {
    const characters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const newChars = []

    for (let i = 0; i < 50; i++) {
      newChars.push({
        id: i,
        char: characters[Math.floor(Math.random() * characters.length)],
        x: Math.random() * 100,
        delay: Math.random() * 10,
      })
    }
    setChars(newChars)
  }, [])

  return (
    <motion.div className="matrix-rain" style={{}}>
      {chars.map((item) => (
        <div
          key={item.id}
          className="matrix-char"
          style={{
            left: `${item.x}%`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.char}
        </div>
      ))}
    </motion.div>
  )
}

// Advanced 3D Network Topology
const NetworkTopology = () => {
  const groupRef = useRef()
  const nodesRef = useRef([])
  const connectionsRef = useRef([])

  // Create network nodes in 3D space
  const nodes = React.useMemo(() => {
    const positions = []
    // Core nodes (center)
    positions.push([0, 0, 0])

    // Ring 1 - Inner network
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2
      positions.push([Math.cos(angle) * 2, Math.sin(angle) * 2, 0])
    }

    // Ring 2 - Outer network
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      positions.push([Math.cos(angle) * 4, Math.sin(angle) * 4, Math.sin(angle) * 2])
    }

    return positions
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }

    // Animate nodes
    nodesRef.current.forEach((node, index) => {
      if (node) {
        const pulse = Math.sin(state.clock.elapsedTime * 2 + index * 0.5) * 0.3 + 1
        node.scale.setScalar(pulse)

        // Color cycling
        const hue = (state.clock.elapsedTime * 50 + index * 30) % 360
        node.material.color.setHSL(hue / 360, 0.8, 0.6)
        node.material.emissiveIntensity = pulse * 0.5
      }
    })

    // Animate connections
    connectionsRef.current.forEach((connection, index) => {
      if (connection) {
        const opacity = Math.sin(state.clock.elapsedTime * 3 + index * 0.3) * 0.3 + 0.5
        connection.material.opacity = opacity
      }
    })
  })

  return (
    <group ref={groupRef}>
      {/* Network Nodes */}
      {nodes.map((position, index) => (
        <Sphere
          key={`node-${index}`}
          ref={(el) => (nodesRef.current[index] = el)}
          position={position}
          args={[index === 0 ? 0.3 : 0.15]}
        >
          <meshStandardMaterial
            color={index === 0 ? "#00d4ff" : "#0099cc"}
            emissive={index === 0 ? "#00d4ff" : "#0099cc"}
            emissiveIntensity={0.3}
          />
        </Sphere>
      ))}

      {/* Network Connections */}
      {nodes.slice(1, 7).map((endPos, i) => {
        const start = new THREE.Vector3(...nodes[0])
        const end = new THREE.Vector3(...endPos)
        const direction = end.clone().sub(start)
        const length = direction.length()

        return (
          <Cylinder
            key={`connection-${i}`}
            ref={(el) => (connectionsRef.current[i] = el)}
            position={[(start.x + end.x) / 2, (start.y + end.y) / 2, (start.z + end.z) / 2]}
            rotation={[0, 0, Math.atan2(direction.y, direction.x)]}
            args={[0.02, 0.02, length]}
          >
            <meshStandardMaterial color="#00d4ff" transparent opacity={0.6} />
          </Cylinder>
        )
      })}

      {/* Data packets */}
      <DataPackets nodes={nodes} />
    </group>
  )
}

// Animated Data Packets
const DataPackets = ({ nodes }) => {
  const packetsRef = useRef([])

  useFrame((state) => {
    packetsRef.current.forEach((packet, index) => {
      if (packet) {
        const t = (state.clock.elapsedTime * 2 + index) % 4
        const progress = t % 1

        const startNode = nodes[Math.floor(t) % nodes.length]
        const endNode = nodes[(Math.floor(t) + 1) % nodes.length]

        packet.position.lerpVectors(new THREE.Vector3(...startNode), new THREE.Vector3(...endNode), progress)
      }
    })
  })

  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <Box key={`packet-${index}`} ref={(el) => (packetsRef.current[index] = el)} args={[0.05, 0.05, 0.05]}>
          <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.5} />
        </Box>
      ))}
    </>
  )
}

// Holographic Brain Network
const HoloBrain = () => {
  const brainRef = useRef()
  const synapseRef = useRef([])

  useFrame((state) => {
    if (brainRef.current) {
      brainRef.current.rotation.y = state.clock.elapsedTime * 0.3
      brainRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.2
    }

    synapseRef.current.forEach((synapse, index) => {
      if (synapse) {
        const intensity = Math.sin(state.clock.elapsedTime * 4 + index * 0.8) * 0.5 + 0.5
        synapse.material.emissiveIntensity = intensity
      }
    })
  })

  return (
    <group ref={brainRef}>
      {/* Main brain structure */}
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#001a33"
          wireframe
          emissive="#00d4ff"
          emissiveIntensity={0.2}
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* Neural pathways */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle1 = (i / 20) * Math.PI * 2
        const angle2 = ((i + 1) / 20) * Math.PI * 2

        return (
          <Torus
            key={`synapse-${i}`}
            ref={(el) => (synapseRef.current[i] = el)}
            position={[Math.cos(angle1) * 0.8, Math.sin(angle1) * 0.8, Math.sin(angle2) * 0.5]}
            rotation={[angle1, angle2, 0]}
            args={[0.3, 0.02, 8, 16]}
          >
            <meshStandardMaterial
              color="#00d4ff"
              emissive="#00d4ff"
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </Torus>
        )
      })}

      {/* Floating data nodes */}
      {Array.from({ length: 15 }).map((_, i) => {
        const radius = 2 + Math.random()
        const theta = Math.random() * Math.PI * 2
        const phi = Math.random() * Math.PI

        return (
          <Sphere
            key={`data-node-${i}`}
            position={[
              radius * Math.sin(phi) * Math.cos(theta),
              radius * Math.sin(phi) * Math.sin(theta),
              radius * Math.cos(phi),
            ]}
            args={[0.05]}
          >
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.8} />
          </Sphere>
        )
      })}
    </group>
  )
}

// Server Rack 3D Model
const ServerRack = () => {
  const rackRef = useRef()
  const lightsRef = useRef([])

  useFrame((state) => {
    if (rackRef.current) {
      rackRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }

    lightsRef.current.forEach((light, index) => {
      if (light) {
        const blink = Math.sin(state.clock.elapsedTime * 5 + index * 2) > 0.5 ? 1 : 0.3
        light.material.emissiveIntensity = blink
      }
    })
  })

  return (
    <group ref={rackRef}>
      {/* Server units */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Box key={`server-${i}`} position={[0, i * 0.3 - 1.2, 0]} args={[2, 0.25, 1]}>
          <meshStandardMaterial color="#1a1a2e" />
        </Box>
      ))}

      {/* Status lights */}
      {Array.from({ length: 16 }).map((_, i) => (
        <Sphere
          key={`light-${i}`}
          ref={(el) => (lightsRef.current[i] = el)}
          position={[-0.8 + (i % 4) * 0.4, Math.floor(i / 4) * 0.3 - 1.2, 0.51]}
          args={[0.03]}
        >
          <meshStandardMaterial
            color={i % 3 === 0 ? "#00ff00" : i % 3 === 1 ? "#00d4ff" : "#ff4400"}
            emissive={i % 3 === 0 ? "#00ff00" : i % 3 === 1 ? "#00d4ff" : "#ff4400"}
            emissiveIntensity={0.8}
          />
        </Sphere>
      ))}
    </group>
  )
}

// Main 3D Scene Controller
const TechScene3D = ({ activeModel }) => {
  const models = [
    { component: NetworkTopology, name: "Network" },
    { component: HoloBrain, name: "AI Brain" },
    { component: ServerRack, name: "Servers" },
  ]

  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#00d4ff" />
        <pointLight position={[-5, 3, 2]} intensity={0.6} color="#00d4ff" />
        <pointLight position={[5, -3, -2]} intensity={0.4} color="#0099cc" />
        <spotLight position={[0, 10, 0]} intensity={1} color="#00d4ff" angle={0.3} />

        <Environment preset="night" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />

        <AnimatePresence mode="wait">
          <motion.group
            key={activeModel}
            initial={{ scale: 0, rotateY: Math.PI, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            exit={{ scale: 0, rotateY: -Math.PI, opacity: 0 }}
            transition={{
              duration: 1.2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            {React.createElement(models[activeModel].component)}
          </motion.group>
        </AnimatePresence>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxDistance={15}
          minDistance={3}
        />
      </Suspense>
    </Canvas>
  )
}

// Animated Progress Ring
const TechProgressRing = ({ percentage, size = 80, strokeWidth = 6, color = "#00d4ff" }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative network-node" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#1a1a2e" strokeWidth={strokeWidth} fill="transparent" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap="round"
          className="neon-glow"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-orbitron)" }}>
          {percentage}%
        </span>
      </div>
    </div>
  )
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
  const [activeModel, setActiveModel] = useState(0)
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
    { number: "5+", label: "Projects Completed", icon: Briefcase },
    { number: "8.35", label: "Current CGPA", icon: GraduationCap },
    { number: "20+", label: "Certifications", icon: Award },
    { number: "5+", label: "Leadership Roles", icon: Calendar },
  ]

  const models = [
    { component: NetworkTopology, name: "Network" },
    { component: HoloBrain, name: "AI Brain" },
    { component: ServerRack, name: "Servers" },
  ]

  const projects = [{id:1,title:"Weather Forecasting Website",description:"Real-time weather data application built with HTML, CSS, JavaScript, and Flask for any location worldwide.",category:"Web Development",tech:["HTML","CSS","JavaScript","Flask","Weather API"],github:"https://github.com/saipraneeth/weather-app",live:"https://forecast-x-jru6.onrender.com/",date:"March 2024",team:"Solo Project",status:"Completed",features:["Real-time weather data integration","Responsive UI for desktop and mobile","5-day weather forecast","Location-based weather search"]},{id:2,title:"Language Translator Web App",description:"Multi-language translation application with clean UI and real-time translation capabilities using external APIs.",category:"Web Development",tech:["HTML","CSS","JavaScript","Translation API","Bootstrap"],github:"https://github.com/saipraneeth/language-translator",live:"https://langmate-language-translator.vercel.app/",date:"April 2024",team:"Solo Project",status:"Completed",features:["Multi-language support (50+ languages)","Real-time translation","Clean and responsive UI","Text-to-speech functionality"]},{id:3,title:"Quantapath - Smart Route Optimization System",description:"Intelligent route optimization platform that calculates efficient delivery paths using optimization algorithms and real-time map data to reduce travel time and improve logistics efficiency.",category:"Software/AI",tech:["Python","JavaScript","Google Maps API","Optimization Algorithms","HTML","CSS"],github:"https://github.com/SaiPraneeth-E/QuantaPath",live:"https://quanta-path-setup.vercel.app/",date:"2025",team:"Team Project",status:"Completed",features:["Optimized route calculation","Real-time map integration","Distance and time estimation","User-friendly interface"]},{id:4,title:"Employee Salary Prediction App",description:"Machine Learning application to classify employee income with interactive web interface and both single and batch predictions.",category:"Machine Learning",tech:["Python","Scikit-learn","Streamlit","Pandas","Ngrok"],github:"https://github.com/saipraneeth/salary-predictor",live:"https://salary-predictor-demo.com",date:"July 2024",team:"Solo Project",status:"Completed",features:["Data preprocessing and EDA","Feature engineering for better accuracy","Multiple ML model comparison","Interactive Streamlit web app"]},{id:5,title:"AuditX - AI Powered Government Auditing Platform",description:"AI-driven auditing platform that automates document analysis using NLP to improve audit efficiency, reduce manual review time, and generate intelligent insights.",category:"AI/Software",tech:["Python","OpenAI API","NLP","Streamlit","JavaScript","HTML","CSS"],github:"https://github.com/SaiPraneeth-E/AuditX",live:"https://auditx-gdg.vercel.app/",date:"2025",team:"Team Project",status:"Completed",features:["AI-based document analysis","Automated data extraction","Intelligent report generation","User-friendly dashboard"]}];

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

      {/* HOME SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <TechScene3D activeModel={0} />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-h-[80vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:col-span-7 xl:col-span-8"
            >
              <motion.h1
                className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                <span className="text-white">AI/ML</span>
                <br />
                <span className="cyber-text glitch" data-text="DEVELOPER">
                  DEVELOPER
                </span>
              </motion.h1>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
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

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
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
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end"
            >
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
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              TECHNICAL <span className="cyber-text">SKILLS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full neon-glow" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {techSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.1,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-100px" }}
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
          </div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20"
          >
            <h3
              className="text-3xl font-bold text-white mb-8 text-center"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              EDUCATION <span className="cyber-text">JOURNEY</span>
            </h3>
            <div className="space-y-6">
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    staggerChildren: 0.1,
                    delay: index * 0.2,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-r from-black via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              MY <span className="cyber-text">PROJECTS</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full neon-glow" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-4" style={{ fontFamily: "var(--font-rajdhani)" }}>
              A showcase of my technical projects spanning web development, machine learning, and IoT systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.1,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-100px" }}
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
      </section>

      {/* HOBBIES SECTION */}
      <section id="hobbies" className="py-20 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.1,
                }}
                viewport={{ once: true, margin: "-100px" }}
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
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="py-20 px-6 bg-gradient-to-r from-black via-blue-900/20 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1,
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.1,
                }}
                viewport={{ once: true, margin: "-100px" }}
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
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 px-6 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1,
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              LET'S <span className="cyber-text">CONNECT</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8 neon-glow" />
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-rajdhani)" }}>
              Looking for opportunities to contribute and grow as a software developer and AI developer intern in
              challenging and innovative environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
  size="lg"
  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 neon-glow"
  style={{ fontFamily: "var(--font-orbitron)" }}
  asChild
>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=saipraneeth080805@gmail.com&su=Job%20Opportunity&body=Hello%20Sai%20Praneeth,"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Mail className="mr-2 h-5 w-5" />
    SEND MESSAGE
  </a>
</Button>

              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
