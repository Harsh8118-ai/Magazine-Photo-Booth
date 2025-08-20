"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronUp, Command } from "lucide-react"

interface FloatingNavigationProps {
  sections: Array<{
    id: string
    label: string
    icon: React.ComponentType<{ className?: string }>
  }>
}

export function FloatingNavigation({ sections }: FloatingNavigationProps) {
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showCommandPalette, setShowCommandPalette] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setIsVisible(scrollTop > 300)

      // Find active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setShowCommandPalette(true)
      }
      if (e.key === "Escape") {
        setShowCommandPalette(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyDown)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setShowCommandPalette(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="glass-enhanced rounded-2xl p-2 space-y-2 backdrop-blur-xl border border-white/10">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative ${
                  isActive ? "bg-gradient-to-r from-purple-600 to-blue-600 neon-glow" : "hover:bg-white/10"
                }`}
                title={section.label}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`} />

                {/* Tooltip */}
                <div className="absolute right-full mr-3 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {section.label}
                </div>
              </button>
            )
          })}

          {/* Command Palette Trigger */}
          <button
            onClick={() => setShowCommandPalette(true)}
            className="w-12 h-12 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 group relative border-t border-white/10 mt-2 pt-2"
            title="Command Palette (⌘K)"
          >
            <Command className="h-5 w-5 text-gray-400 group-hover:text-white" />
            <div className="absolute right-full mr-3 px-3 py-1 bg-black/90 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Quick Nav (⌘K)
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div className="glass-enhanced rounded-2xl p-2 flex space-x-2 backdrop-blur-xl border border-white/10">
          {sections.slice(0, 5).map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  isActive ? "bg-gradient-to-r from-purple-600 to-blue-600 neon-glow" : "hover:bg-white/10"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-400"}`} />
              </button>
            )
          })}

          <button
            onClick={() => setShowCommandPalette(true)}
            className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 border-l border-white/10 ml-2 pl-2"
          >
            <Command className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 w-12 h-12 glass-enhanced rounded-full flex items-center justify-center hover:neon-glow transition-all duration-300 z-40"
      >
        <ChevronUp className="h-5 w-5 text-purple-400" />
      </button>

      {/* Command Palette */}
      {showCommandPalette && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="glass-enhanced rounded-2xl p-6 w-full max-w-md mx-4 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg font-bold">Quick Navigation</h3>
              <button onClick={() => setShowCommandPalette(false)} className="text-gray-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full flex items-center space-x-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 text-left"
                  >
                    <Icon className="h-5 w-5 text-purple-400" />
                    <span>{section.label}</span>
                  </button>
                )
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400 text-center">
              Press <kbd className="px-2 py-1 bg-white/10 rounded">⌘K</kbd> to open •{" "}
              <kbd className="px-2 py-1 bg-white/10 rounded">Esc</kbd> to close
            </div>
          </div>
        </div>
      )}
    </>
  )
}
