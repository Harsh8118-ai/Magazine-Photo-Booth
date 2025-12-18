"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Camera, Zap, Users, CheckCircle, Star, Award, } from "lucide-react"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { VenueRequirements } from "@/components/venue-requirements"
import { Button3D } from "@/components/3d-button"
import { MultiVideoReels } from "@/components/multi-video-reels"
import { Card, CardContent, CardTwo } from "@/components/ui/card"
import { AdvancedBookingSystem } from "@/components/advanced-booking-system"


const MagazinePhotoBoothClient = () => {
    const magazineBoothPrice = 35000
    const instantPrintsPrice = 20000
    const photographyPrice = 5000

    const features = [
        {
            icon: Star,
            title: "Celebrity-Style Covers",
            description: "Professional magazine layouts featuring your guests as the main attraction",
        },
        {
            icon: Zap,
            title: "Instant Prints",
            description: "High-quality magazine cover prints delivered in 30 seconds",
        },
        {
            icon: Camera,
            title: "Professional Photography",
            description: "Expert photographers ensuring picture-perfect moments",
        },
        {
            icon: Users,
            title: "Unlimited Sessions",
            description: "All your guests can become cover stars throughout the event",
        },
    ]

    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">
            {/* Header with back button */}
            <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-gold hover:text-yellow-300 transition-colors">
                        <ChevronLeft size={20} />
                        Back to Home
                    </Link>
                    <h1 className="text-xl sm:text-3xl font-display font-bold text-gradient">Magazine Photo Booth</h1>
                    <div className="w-20" />
                </div>
            </div>

            {/* Hero Section */}
            <section className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-50" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto relative z-10"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-center text-balance">
                        The Original <span className="text-gradient">Magazine Photo Booth</span> Experience
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8 text-balance">
                        Transform your guests into magazine cover stars with instant, high-quality prints they'll treasure forever.
                    </p>

                    {/* Hero Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden glass-enhanced border border-gold/30 mb-8 sm:mb-12 max-h-96">
                        <Image src="/magazine-cover-template.png" alt="Magazine Photo Booth Hero" fill className="object-cover" />
                    </div>
                </motion.div>
            </section>

            {/* Custom Quotation Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold/10 via-transparent to-gold/10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="relative">
                        <p className="text-3xl sm:text-4xl font-display font-bold text-gold mb-6 text-balance">
                            "Step Inside. Become the Cover Star."
                        </p>
                        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
                            Our magazine photo booth doesn't just capture moments—it creates iconic, celebrity-style magazine covers
                            that guests will cherish and share for years to come.
                        </p>
                        <p className="text-gold/80 italic">The perfect blend of luxury, fun, and unforgettable memories.</p>
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gold/10 to-transparent">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center text-gradient">
                        Why Choose Our Magazine Booth
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="glass-enhanced p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all group"
                                >
                                    <Icon className="size-8 sm:size-10 text-gold mb-4 group-hover:text-yellow-300 transition-colors" />
                                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

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

            {/* Event Enquiry Form  */}
            <ScrollReveal direction="up" delay={0.2}>
                <SectionWrapper
                    id="booking-section"
                    ariaLabel="Booking form and contact information"
                    className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
                >
                    <AdvancedBookingSystem />
                </SectionWrapper>
            </ScrollReveal>

            {/* What We Need From Your Venue  */}
            <ScrollReveal direction="up" delay={0.2}>
                <SectionWrapper
                    id="faq-section"
                    ariaLabel="Frequently asked questions and logistics information"
                    className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
                >
                    <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
                        <VenueRequirements />
                    </div>
                </SectionWrapper>
            </ScrollReveal>

            {/* Event Gallery Section */}
            <ScrollReveal direction="up" delay={0.2}>
                <SectionWrapper
                    id="gallery-section"
                    ariaLabel="Photo gallery of past events"
                    className="py-16 sm:py-20 px-4 sm:px-6"
                >
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
                            Event Gallery
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <ScrollReveal key={index} direction="scale" delay={0.05 * index}>
                                    <div className=" overflow-hidden rounded-xl glass-enhanced scale-on-hover cursor-pointer gpu-accelerated">
                                        <Image
                                            src={`/Images/${index + 1}.png`}
                                            alt={`Event photo ${index + 1}`}
                                            loading="lazy"
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <div className="text-center">
                            <a href="/gallery">
                                <Button3D
                                    variant="outline"
                                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                                >
                                    View Full Gallery
                                </Button3D>
                            </a>
                        </div>

                    </div>
                </SectionWrapper>
            </ScrollReveal>

            {/* CTA Section */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-gold/10 to-transparent">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Ready to Create Cover Stars?</h2>
                    <p className="text-gray-300 mb-8">
                        Bring the magazine photo booth experience to your next event and give your guests memories they'll treasure
                        forever
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#booking"
                            className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-gold to-yellow-300 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all transform hover:scale-105"
                        >
                            Check Availability
                        </Link>
                        <Link
                            href="/gallery"
                            className="inline-block px-6 sm:px-8 py-3 glass-enhanced border border-gold/30 text-gold font-bold rounded-lg hover:border-gold/50 transition-all"
                        >
                            View Event Gallery
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    )
}

export default MagazinePhotoBoothClient
