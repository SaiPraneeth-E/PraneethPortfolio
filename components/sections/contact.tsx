"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import { useAnimation } from "@/hooks/use-animation"

const ContactSection = () => {
  const { ref, inView, fadeInUp } = useAnimation()

  return (
    <motion.section
      id="contact"
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-20 px-6 bg-black/50 backdrop-blur-sm"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={fadeInUp}>
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
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default ContactSection
