'use client'

import { useEffect, useState } from 'react'

interface AnimatedNumberProps {
  value: number
  duration?: number
  formatNumber?: (value: number) => string
  className?: string
}

export function AnimatedNumber({ 
  value, 
  duration = 2000, 
  formatNumber,
  className = "" 
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      setDisplayValue(Math.floor(value * easeOutQuart))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [value, duration])

  const formattedValue = formatNumber ? formatNumber(displayValue) : displayValue.toLocaleString()

  return (
    <span className={className}>
      {formattedValue}
    </span>
  )
}