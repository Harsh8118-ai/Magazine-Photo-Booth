"use client"

import { useEffect, useRef, useState, memo } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export const AnimatedCounter = memo(
  ({ end, duration = 2000, suffix = "", className = "" }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0)
    const startTimeRef = useRef<number | null>(null)
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
      const animate = (time: number) => {
        if (!startTimeRef.current) startTimeRef.current = time

        const progress = Math.min(
          (time - startTimeRef.current) / duration,
          1
        )

        // Ease-out cubic (very smooth)
        const eased = 1 - Math.pow(1 - progress, 3)

        setCount(Math.floor(eased * end))

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        }
      }

      rafRef.current = requestAnimationFrame(animate)

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
    }, [end, duration])

    return (
      <div className={className}>
        {count.toLocaleString()}
        {suffix}
      </div>
    )
  }
)

AnimatedCounter.displayName = "AnimatedCounter"
