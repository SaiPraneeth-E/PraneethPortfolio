"use client"

import { useRef } from "react"

interface SmoothScrollOptions {
  duration?: number
  easing?: (t: number) => number
}

const useSmoothScroll = () => {
  const isScrollingRef = useRef(false)

  // Easing function for smooth animation
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
  }

  const scrollTo = (target: string | number, options: SmoothScrollOptions = {}) => {
    if (isScrollingRef.current) return

    const { duration = 1000, easing = easeInOutCubic } = options

    let targetPosition: number

    if (typeof target === "string") {
      // Handle element ID
      const element = document.getElementById(target.replace("#", ""))
      if (!element) return
      targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80
    } else {
      // Handle numeric position
      targetPosition = target
    }

    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    let startTime: number | null = null

    isScrollingRef.current = true

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easing(progress)

      window.scrollTo(0, startPosition + distance * easedProgress)

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      } else {
        isScrollingRef.current = false
      }
    }

    requestAnimationFrame(animateScroll)
  }

  return { scrollTo }
}

export default useSmoothScroll
