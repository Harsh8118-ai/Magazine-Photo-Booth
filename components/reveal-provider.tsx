"use client"

import { useEffect } from "react"

export default function RevealProvider() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal")

    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("visible"))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target) // 🔥 animate once
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "-100px 0px",
      }
    )

    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
