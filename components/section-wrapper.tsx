import { ReactNode, ElementType, createElement } from "react"

interface SectionWrapperProps {
  id: string
  children: ReactNode
  className?: string
  as?: ElementType
  ariaLabel?: string
}

export function SectionWrapper({
  id,
  children,
  className = "",
  as = "section",
  ariaLabel,
}: SectionWrapperProps) {
  return createElement(
    as,
    {
      id,
      className,
      "aria-label": ariaLabel,
      role: as === "section" ? "region" : undefined,
    },
    children
  )
}
