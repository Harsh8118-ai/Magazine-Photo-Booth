"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <>
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
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-center text-balance">
                        The Original <span className="text-gradient">Magazine Photo Booth</span> Experience
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8 text-balance">
                        Transform your guests into magazine cover stars with instant, high-quality prints they'll treasure forever.
                    </p>

                    {/* Use Cases Section - Magazine Theme */}
                    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gold/10 to-transparent">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-start sm:gap-12 lg:gap-20"
                        >
                            {/* Left Image */}
                            <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-8 sm:mb-0">
                                <div className="relative rounded-xl overflow-hidden glass-enhanced border border-gold/30">
                                    <Image
                                        src="/Cloudinary/Magazine-Booth/Hero.png"
                                        alt="Luxury Magazine Photo Booth Experience"
                                        width={400}
                                        height={500}
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 400px"
                                    />
                                </div>
                            </div>

                            {/* Right Highlights */}
                            <div className="w-full sm:w-auto flex-1">
                                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-gradient text-center sm:text-left">
                                    Perfect for Every Premium Event in India
                                </h2>
                                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                                    Our magazine photo booth is designed for events where presentation, branding, and guest experience truly matter.
                                    With its editorial-style visuals and luxury execution, it seamlessly elevates events across India.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Luxury Weddings & Receptions",
                                            description:
                                                "Create unforgettable keepsakes for your guests with celebrity-style magazine covers that perfectly complement premium wedding celebrations.",
                                        },
                                        {
                                            title: "Corporate Events & Brand Launches",
                                            description:
                                                "Deliver high-impact brand engagement with custom magazine layouts designed for corporate events, product launches, and activations.",
                                        },
                                        {
                                            title: "Exhibitions & Trade Shows",
                                            description:
                                                "Attract attention, increase footfall, and encourage social sharing with an interactive photo experience that stands out on the show floor.",
                                        },
                                        {
                                            title: "Celebrity & Influencer Events",
                                            description:
                                                "Editorial-style visuals crafted for instant sharing, making the magazine photo booth ideal for influencer and celebrity-driven events.",
                                        },
                                        {
                                            title: "Private Parties & Milestone Celebrations",
                                            description:
                                                "Add a premium entertainment element to birthdays, anniversaries, and milestone celebrations with a truly luxury photo experience.",
                                        },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className="glass-enhanced p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-all"
                                        >
                                            <h3 className="text-xl font-semibold mb-3 text-gold">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <p className="text-center sm:text-left text-gold/80 italic mt-12 max-w-3xl">
                                    With customizable layouts, premium materials, and professional execution, our magazine photo booth adapts effortlessly to different event styles and themes across India.
                                </p>
                            </div>
                        </motion.div>
                    </section>


                </motion.div>
            </section>
        </>
    )
}

export default Hero
