"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Camera, Utensils, Plane, Dumbbell, Film, Newspaper, Heart, MapPin } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HobbiesPage() {
  const router = useRouter()
  const [activeHobby, setActiveHobby] = useState(null)

  const hobbies = [
    {
      id: 1,
      name: "Cooking",
      icon: Utensils,
      category: "Creative",
      description: "Exploring diverse cuisines and experimenting with new recipes from around the world",
      longDescription:
        "Cooking is my creative outlet where I experiment with flavors from different cultures. I love trying new recipes, especially Indian regional cuisines and international dishes. It's a great way to relax and share joy with friends and family.",
      image: "/placeholder.svg?height=300&width=400&text=Cooking+Adventures",
      gallery: [
        "/placeholder.svg?height=200&width=200&text=Biryani",
        "/placeholder.svg?height=200&width=200&text=Pasta",
        "/placeholder.svg?height=200&width=200&text=Indian+Curry",
        "/placeholder.svg?height=200&width=200&text=Desserts",
      ],
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
      longDescription:
        "Photography allows me to see the world from different perspectives. I enjoy capturing candid moments, beautiful landscapes, and portraits. As a core team member of the Photography Club at VIT-AP, I've developed my skills in composition, lighting, and post-processing.",
      image: "/placeholder.svg?height=300&width=400&text=Photography+Portfolio",
      gallery: [
        "/placeholder.svg?height=200&width=200&text=Nature+Shot",
        "/placeholder.svg?height=200&width=200&text=Portrait",
        "/placeholder.svg?height=200&width=200&text=Campus+Life",
        "/placeholder.svg?height=200&width=200&text=Events",
      ],
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
      longDescription:
        "Traveling feeds my curiosity about different cultures and places. I love exploring both popular tourist destinations and hidden gems. Each trip teaches me something new about the world and myself, and I enjoy documenting these experiences through photography.",
      image: "/placeholder.svg?height=300&width=400&text=Travel+Adventures",
      gallery: [
        "/placeholder.svg?height=200&width=200&text=Mountains",
        "/placeholder.svg?height=200&width=200&text=Beaches",
        "/placeholder.svg?height=200&width=200&text=Historical+Sites",
        "/placeholder.svg?height=200&width=200&text=Local+Culture",
      ],
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
      longDescription:
        "Sports and fitness are integral parts of my life. I enjoy playing cricket, badminton, and football with friends. Regular physical activity helps me stay energized and focused on my studies and projects. I also follow various sports leagues and tournaments.",
      image: "/placeholder.svg?height=300&width=400&text=Sports+Activities",
      gallery: [
        "/placeholder.svg?height=200&width=200&text=Cricket",
        "/placeholder.svg?height=200&width=200&text=Badminton",
        "/placeholder.svg?height=200&width=200&text=Football",
        "/placeholder.svg?height=200&width=200&text=Fitness",
      ],
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
      longDescription:
        "I'm passionate about cinema and enjoy movies from different genres and languages. From Hollywood blockbusters to regional Indian cinema, I appreciate good storytelling, cinematography, and performances. I often discuss and analyze movies with friends.",
      image: "/placeholder.svg?height=300&width=400&text=Movie+Collection",
      gallery: [
        "/placeholder.svg?height=200&width=200&text=Bollywood",
        "/placeholder.svg?height=200&width=200&text=Hollywood",
        "/placeholder.svg?height=200&width=200&text=Regional+Cinema",
        "/placeholder.svg?height=200&width=200&text=Classics",
      ],
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
      longDescription:
        "I believe in staying informed about what's happening around the world. I regularly follow news about technology, politics, social issues, and global events. This helps me understand different perspectives and stay aware of how current events might impact technology and society.",
      image: "/placeholder.svg?height=300&width=400&text=News+Updates",
      gallery: [
        "/placeholder.svg?height=200&width=200&text=Tech+News",
        "/placeholder.svg?height=200&width=200&text=Global+Events",
        "/placeholder.svg?height=200&width=200&text=Politics",
        "/placeholder.svg?height=200&width=200&text=Social+Issues",
      ],
      achievements: [
        "Daily news reading habit for 3+ years",
        "Follow 15+ reliable news sources",
        "Engage in informed discussions on current topics",
        "Stay updated on tech industry trends",
      ],
    },
  ]

  const categories = ["All", "Creative", "Adventure", "Fitness", "Entertainment", "Knowledge"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredHobbies =
    activeCategory === "All" ? hobbies : hobbies.filter((hobby) => hobby.category === activeCategory)

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
              <span className="cyber-text">HOBBIES</span>
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
                <Heart className="text-black" size={32} />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              HOBBIES & <span className="cyber-text">INTERESTS</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto" style={{ fontFamily: "var(--font-rajdhani)" }}>
              Beyond coding and academics, I pursue various interests that keep me balanced, creative, and connected to
              the world around me.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
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
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHobbies.map((hobby, index) => (
              <motion.div
                key={hobby.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
                onClick={() => setActiveHobby(activeHobby === hobby.id ? null : hobby.id)}
              >
                <Card
                  className={`holo-card border-cyan-400/30 overflow-hidden transition-all duration-300 h-full ${
                    activeHobby === hobby.id ? "border-cyan-400 shadow-2xl" : "hover:border-cyan-400"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={hobby.image || "/placeholder.svg"}
                      alt={hobby.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cyan-400 text-black neon-glow">{hobby.category}</Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <hobby.icon className="text-cyan-400 mx-auto mb-2" size={32} />
                        <div className="text-white font-semibold" style={{ fontFamily: "var(--font-orbitron)" }}>
                          CLICK TO EXPLORE
                        </div>
                      </div>
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

                    {/* Expanded Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeHobby === hobby.id ? "auto" : 0,
                        opacity: activeHobby === hobby.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {activeHobby === hobby.id && (
                        <div className="pt-4 border-t border-cyan-400/30">
                          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{hobby.longDescription}</p>

                          {/* Image Gallery */}
                          <div className="mb-4">
                            <h4
                              className="text-white font-semibold mb-2 flex items-center"
                              style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                              <Camera className="text-cyan-400 mr-2" size={16} />
                              GALLERY
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {hobby.gallery.map((image, i) => (
                                <Image
                                  key={i}
                                  src={image || "/placeholder.svg"}
                                  alt={`${hobby.name} ${i + 1}`}
                                  width={100}
                                  height={100}
                                  className="rounded-lg object-cover hover:scale-105 transition-transform cursor-pointer border border-cyan-400/30"
                                />
                              ))}
                            </div>
                          </div>

                          {/* Achievements */}
                          <div className="mb-4">
                            <h4
                              className="text-white font-semibold mb-2 flex items-center"
                              style={{ fontFamily: "var(--font-orbitron)" }}
                            >
                              <MapPin className="text-cyan-400 mr-2" size={16} />
                              ACHIEVEMENTS
                            </h4>
                            <div className="space-y-1">
                              {hobby.achievements.map((achievement, i) => (
                                <div key={i} className="flex items-start text-xs text-gray-300">
                                  <span className="text-cyan-400 mr-2">•</span>
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>

                    <div className="mt-4 text-center">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-cyan-400 hover:text-cyan-300"
                        style={{ fontFamily: "var(--font-orbitron)" }}
                      >
                        {activeHobby === hobby.id ? "SHOW LESS" : "LEARN MORE"}
                      </Button>
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
                <Heart className="text-cyan-400 mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
                  BALANCED LIFESTYLE
                </h3>
                <p className="text-gray-300 mb-6" style={{ fontFamily: "var(--font-rajdhani)" }}>
                  These hobbies keep me grounded, creative, and help me maintain a healthy work-life balance while
                  pursuing my passion for technology and AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 neon-glow"
                    style={{ fontFamily: "var(--font-orbitron)" }}
                    asChild
                  >
                    <a href="mailto:saipraneeth@example.com">GET IN TOUCH</a>
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
