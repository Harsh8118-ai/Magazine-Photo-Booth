"use client"

import type { ReactNode } from "react"
import type { JSX } from "react/jsx-runtime"

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  ariaLabel?: string
}

export function SectionWrapper({
  id,
  children,
  className = "",
  as: Component = "section",
  ariaLabel,
}: SectionWrapperProps) {
  return (
    <Component
      id={id}
      className={className}
      aria-label={ariaLabel}
      role={Component === "section" ? "region" : undefined}
    >
      {children}
    </Component>
  )
}
