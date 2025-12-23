"use client"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import {Calendar, Package } from "lucide-react"

const AnimatedCounter = dynamic(
    () =>
        import("@/components/animated-counter").then(
            (mod) => mod.AnimatedCounter
        ),
    {
        ssr: false,
        loading: () => <div className="h-20" />,
    }
)

const Button3D = dynamic(
    () =>
        import("@/components/3d-button").then(
            (mod) => mod.Button3D
        ),
    {
        ssr: false,
    }
)

export default function HeroClient() {
    const [isVisible, setIsVisible] = useState(false)

    const [load3D, setLoad3D] = useState(false)

    useEffect(() => {
        if ("requestIdleCallback" in window) {
            requestIdleCallback(() => setLoad3D(true))
        } else {
            setTimeout(() => setLoad3D(true), 2000)
        }
    }, [])

        useEffect(() => {
            setIsVisible(true)
        }, [])


    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button3D
                    size="lg"
                    onClick={() => scrollToSection("products")}
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    aria-label="Book your The Luxury Booth now"
                >
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Book Now
                </Button3D>
                <Button3D
                    variant="outline"
                    size="lg"
                    onClick={() => scrollToSection("products")}
                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
                    aria-label="View our packages and pricing"
                >
                    <Package className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    See Packages
                </Button3D>
            </div>

            {/* Stats Bar - Improved mobile responsiveness and SEO */}
            <div
                className="glass-enhanced rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto"
                role="region"
                aria-label="Company statistics"
            >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                    <div>
                        {isVisible && (
                            <AnimatedCounter end={12500} suffix="+" className="text-2xl sm:text-3xl font-bold text-gold mb-2" />
                        )}
                        <div className="text-xs sm:text-sm text-gray-400">Magazine Covers Printed</div>
                    </div>
                    <div>
                        {isVisible && (
                            <AnimatedCounter end={250} suffix="+" className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2" />
                        )}
                        <div className="text-xs sm:text-sm text-gray-400">Successful Events</div>
                    </div>
                    <div>
                        <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">3+</div>
                        <div className="text-xs sm:text-sm text-gray-400">Premium Booth Options</div>
                    </div>
                </div>
            </div>
        </>
    )
}