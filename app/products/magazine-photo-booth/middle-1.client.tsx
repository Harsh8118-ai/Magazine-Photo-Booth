"use client"
import { Camera, Zap, Users, CheckCircle, Star, Award, } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { MultiVideoReels } from "@/components/multi-video-reels"
import { CardContent, CardTwo } from "@/components/ui/card"

const MiddleOneSection = () => {
    return (
        <>
            {/* Charges & Services Section */}
            <ScrollReveal direction="up" delay={0.2}>
                <SectionWrapper
                    id="packages-section"
                    ariaLabel="Service charges and pricing information"
                    className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
                >
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-8 text-gradient">
                            Charges & Services
                        </h2>
                        <p className="text-center text-gray-400 mb-12 sm:mb-16 text-lg">
                            Professional magazine photo booth services with transparent pricing
                        </p>

                        <div className="glass-enhanced rounded-2xl p-6 sm:p-8 mb-8">
                            <div className="space-y-6">
                                {[
                                    {
                                        service: "Magazine Photo Booth Setup",
                                        price: "₹35,000",
                                        description: "Complete booth setup with professional equipment and magazine covers",
                                    },
                                    {
                                        service: "Instant High Quality Prints",
                                        price: "₹20,000",
                                        description: "Premium quality instant prints for all guests",
                                    },
                                    {
                                        service: "Professional Photography",
                                        price: "₹5,000",
                                        description: "Expert photographer to capture perfect shots",
                                    },
                                    {
                                        service: "Transport Cost",
                                        price: "As per distance from Noida",
                                        description: "Travel charges calculated based on venue location",
                                    },
                                ].map((item, index) => (
                                    <ScrollReveal key={index} direction="left" delay={0.1 * index}>
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 glass rounded-xl hover:neon-glow transition-all duration-300">
                                            <div className="flex-1 mb-4 sm:mb-0">
                                                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{item.service}</h3>
                                                <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-xl sm:text-2xl font-bold text-gold font-display">{item.price}</div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>

                        <ScrollReveal direction="up" delay={0.4}>
                            <div className="glass-enhanced rounded-2xl p-6 sm:p-8 text-center border border-gold/30">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                                    <CheckCircle className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gradient">Booking Information</h3>
                                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                                    <span className="text-gold font-semibold">For Bookings:</span> You have to pay half of the amount of
                                    the services you select as advance payment.
                                </p>
                                <div className="mt-6 text-sm text-gray-400">
                                    Final pricing may vary based on event requirements and location
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </SectionWrapper>
            </ScrollReveal>

            {/* How It Works Section */}
            <ParallaxSection speed={0.3}>
                <ScrollReveal direction="up" delay={0.1}>
                    <SectionWrapper
                        id="how-it-works-section"
                        ariaLabel="Step-by-step process explanation"
                        className="py-16 sm:py-20 px-4 sm:px-6"
                    >
                        <div className="max-w-7xl mx-auto">
                            <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
                                How It Works
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                                {[
                                    {
                                        step: "01",
                                        title: "Step In",
                                        desc: "Enter our luxury glass booth and strike your pose",
                                        icon: Users,
                                    },
                                    {
                                        step: "02",
                                        title: "See Live Cover",
                                        desc: "Watch yourself appear on a live magazine cover",
                                        icon: Camera,
                                    },
                                    {
                                        step: "03",
                                        title: "Photographer Clicks",
                                        desc: "Our professional captures the perfect shot",
                                        icon: Zap,
                                    },
                                    {
                                        step: "04",
                                        title: "Get Your Print",
                                        desc: "Receive your celebrity-style cover in 30 seconds",
                                        icon: Award,
                                    },
                                ].map((item, index) => (
                                    <ScrollReveal key={index} direction="scale" delay={0.1 * index}>
                                        <CardTwo
                                            className="glass-enhanced scale-on-hover border-0 text-center group gpu-accelerated"
                                            role="article"
                                        >
                                            <CardContent className="p-6 sm:p-8">
                                                <div
                                                    className="text-4xl sm:text-6xl font-bold text-gold/60 sm:text-gold/40 mb-4 font-display"
                                                    aria-hidden="true"
                                                >
                                                    {item.step}
                                                </div>
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 rounded-full glass flex items-center justify-center group-hover:neon-glow transition-all duration-300">
                                                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" aria-hidden="true" />
                                                </div>
                                                <h3 className="text-lg sm:text-xl font-bold mb-3 font-display">{item.title}</h3>
                                                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                                            </CardContent>
                                        </CardTwo>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </SectionWrapper>
                </ScrollReveal>
            </ParallaxSection>

            {/* Video Clips Carousel */}
            <ScrollReveal direction="up" delay={0.2}>
                <MultiVideoReels
                    title="Our Instagram Reels"
                    videoUrls={[
                        "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4",
                        "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4",
                        "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4"
                    ]}
                />
            </ScrollReveal>
        </>
    )
}

export default MiddleOneSection
