"use client"

import React from "react"
import { motion } from "framer-motion"

export const TechProgressRing = ({ percentage, size = 80, strokeWidth = 6, color = "#00d4ff" }) => {
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
