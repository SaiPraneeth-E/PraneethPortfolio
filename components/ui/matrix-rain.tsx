"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

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

export default MatrixRain
