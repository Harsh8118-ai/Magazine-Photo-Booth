"use client"
import { Camera, Zap, Users, CheckCircle, Star, Award, } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { MultiVideoReels } from "@/components/multi-video-reels"
import { CardContent, CardTwo } from "@/components/ui/card"
import WhatsAppButton from "./whatsapp-button"

const MiddleOneSection = () => {
    return (
        <>
             <WhatsAppButton />

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
                <p className="text-center text-gray-400 mt-3 max-w-3xl mx-auto">
                    Watch real highlights from our luxury magazine photo booth setups across weddings, exhibitions,
                    and corporate events in India.
                </p>

            </ScrollReveal>
        </>
    )
}

export default MiddleOneSection
