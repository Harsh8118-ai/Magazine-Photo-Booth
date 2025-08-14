"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Button3DProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  disabled?: boolean
}

export function Button3D({
  children,
  className,
  variant = "default",
  size = "md",
  onClick,
  disabled = false,
}: Button3DProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion || !buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  const tiltStyle = prefersReducedMotion
    ? {}
    : {
        transform: isHovered
          ? `perspective(1000px) rotateX(${mousePosition.y * -10}deg) rotateY(${mousePosition.x * 10}deg) translateZ(10px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)",
      }

  const glowStyle = prefersReducedMotion
    ? {}
    : {
        boxShadow: isHovered
          ? `0 0 30px rgba(139, 92, 246, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.1)`
          : `0 0 15px rgba(139, 92, 246, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05)`,
      }

  return (
    <Button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden transition-all duration-300 ease-out",
        "glass border-2 border-white/20",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600/20 before:to-blue-600/20 before:opacity-0 before:transition-opacity before:duration-300",
        "hover:before:opacity-100",
        "after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/10 after:to-transparent after:opacity-0 after:transition-opacity after:duration-300",
        "hover:after:opacity-100",
        !prefersReducedMotion && "transform-gpu",
        className,
      )}
      style={{
        ...tiltStyle,
        ...glowStyle,
      }}
      variant={variant as any}
      size={size as any}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10 font-semibold  flex items-center ">{children}</span>
    </Button>
  )
}
