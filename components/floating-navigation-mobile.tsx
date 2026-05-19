"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
    Home,
    Camera,
    Users,
    MessageCircle,
    PackageOpen,
    BookOpen,
    Command,
    Sparkles
} from "lucide-react"

const ICON_MAP = {
    home: Home,
    camera: Camera,
    users: Users,
    message: MessageCircle,
    package: PackageOpen,
    blog: BookOpen,
}

type NavigationSection = {
    id: string
    label: string
    icon: keyof typeof ICON_MAP
    isExternal?: boolean
    href?: string
}

interface MobileNavigationProps {
    sections: readonly NavigationSection[]
}

export function MobileNavigation({
    sections,
}: MobileNavigationProps) {
    const [activeSection, setActiveSection] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY

            setIsVisible(scrollTop > 200)

            const current = sections.find(
                (section: NavigationSection) => {
                    const el = document.getElementById(section.id)

                    if (!el) return false

                    const rect = el.getBoundingClientRect()

                    return (
                        rect.top <= 120 &&
                        rect.bottom >= 120
                    )
                }
            )

            if (current) {
                setActiveSection(current.id)
            }
        }

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        })

        handleScroll()

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            )
    }, [sections])

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)

        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
            })
        }
    }

    if (!isVisible) return null

    return (
        <>
            <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40">
                <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/90 px-2 py-2">
                    {sections.slice(0, 5).map(
                        (section: NavigationSection) => {
                            const Icon = ICON_MAP[section.icon]

                            if (
                                section.isExternal &&
                                section.href
                            ) {
                                return (
                                    <Link
                                        key={section.id}
                                        href={section.href}
                                        className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${activeSection === section.id
                                                ? "bg-purple-600"
                                                : ""
                                            }`}
                                    >
                                        <Icon
                                            className={`h-4 w-4 ${activeSection === section.id
                                                    ? "text-white"
                                                    : "text-gray-400"
                                                }`}
                                        />
                                    </Link>
                                )
                            }

                            return (
                                <button
                                    key={section.id}
                                    onClick={() =>
                                        scrollToSection(section.id)
                                    }
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${activeSection === section.id
                                            ? "bg-purple-600"
                                            : ""
                                        }`}
                                >
                                    <Icon
                                        className={`h-4 w-4 ${activeSection === section.id
                                                ? "text-white"
                                                : "text-gray-400"
                                            }`}
                                    />
                                </button>
                            )
                        }
                    )}

                    {/* Quick Menu Button */}
                    <button
                        onClick={() =>
                            setIsMenuOpen(!isMenuOpen)
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl border-l border-white/10 pl-2"
                    >
                        <Command className="h-4 w-4 text-gray-400" />
                    </button>
                </div>
            </nav>

            {/* Quick Navigation Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 flex items-center bg-black/70">
                    <div className="w-full rounded-t-3xl border-t border-white/10 bg-black px-5 py-6">
                        {/* Header */}
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-white">
                                Quick Navigation
                            </h3>

                            <button
                                onClick={() =>
                                    setIsMenuOpen(false)
                                }
                                className="text-gray-400"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Main Navigation */}
                        <div className="space-y-2">
                            {sections.map(
                                (section: NavigationSection) => {
                                    const Icon =
                                        ICON_MAP[section.icon]

                                    if (
                                        section.isExternal &&
                                        section.href
                                    ) {
                                        return (
                                            <Link
                                                key={section.id}
                                                href={section.href}
                                                onClick={() =>
                                                    setIsMenuOpen(false)
                                                }
                                                className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/5"
                                            >
                                                <Icon className="h-5 w-5 text-purple-400" />

                                                <span className="text-white">
                                                    {section.label}
                                                </span>
                                            </Link>
                                        )
                                    }

                                    return (
                                        <button
                                            key={section.id}
                                            onClick={() => {
                                                scrollToSection(
                                                    section.id
                                                )

                                                setIsMenuOpen(false)
                                            }}
                                            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-white/5"
                                        >
                                            <Icon className="h-5 w-5 text-purple-400" />

                                            <span className="text-white">
                                                {section.label}
                                            </span>
                                        </button>
                                    )
                                }
                            )}
                        </div>

                        {/* Product Links */}
                        <div className="mt-6 border-t border-white/10 pt-5">
                            <h4 className="mb-3 text-sm font-medium text-gray-400">
                                Products
                            </h4>

                            <div className="space-y-2">
                                <Link
                                    href="/magazine-photo-booth"
                                    onClick={() =>
                                        setIsMenuOpen(false)
                                    }
                                    className="flex rounded-xl px-3 py-3 gap-3 text-white transition-colors hover:bg-white/5"
                                >
                                    <Sparkles className="h-5 w-5 text-amber-600" />
                                    Magazine Photo Booth
                                </Link>

                                <Link
                                    href="/mirror-selfie-booth"
                                    onClick={() =>
                                        setIsMenuOpen(false)
                                    }
                                    className="flex rounded-xl px-3 py-3 gap-3 text-white transition-colors hover:bg-white/5"
                                >
                                    <Sparkles className="h-5 w-5 text-purple-400" />
                                    Mirror Selfie Booth
                                </Link>

                                <Link
                                    href="/vintage-photo-booth"
                                    onClick={() =>
                                        setIsMenuOpen(false)
                                    }
                                    className="flex rounded-xl px-3 py-3 gap-3 text-white transition-colors hover:bg-white/5"
                                >
                                    <Sparkles className="h-5 w-5 text-gold" />
                                    Vintage Photo Booth
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}