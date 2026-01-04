
import Link from "next/link"
import Image from "next/image"
import { SectionWrapper } from "@/components/section-wrapper"

export default function ProductsSection() {
    const products = [
        {
            id: "magazine",
            name: "Magazine Photo Booth",
            description: "The original luxury magazine photo booth experience with instant cover prints",
            icon: "https://res.cloudinary.com/dpnykjono/image/upload/v1766530206/Products/Magazine.webp",
            link: "/product/magazine-photo-booth",
            color: "gold",
            features: ["Instant prints", "Magazine covers", "Premium quality"],
        },
        {
            id: "mirror",
            name: "Mirror Selfie Booth",
            description: "Elegant mirror booth with personalized text, LED lights, and red carpet setup",
            icon: "https://res.cloudinary.com/dpnykjono/image/upload/v1766530221/Products/Mirror.webp",
            link: "/product/mirror-selfie-booth",
            color: "purple",
            features: ["Custom text", "LED lighting", "Luxury setup"],
        },
        {
            id: "vintage",
            name: "Vintage Photo Booth",
            description: "Retro wooden booth with DSLR photography and instant prints in 30 seconds",
            icon: "https://res.cloudinary.com/dpnykjono/image/upload/Products/Vintage.webp",
            link: "/product/vintage-photo-booth",
            color: "amber",
            features: ["DSLR quality", "Instant prints", "Wooden design"],
        },
    ]

    return (
        <SectionWrapper
            id="product"
            ariaLabel="Photo booth products showcase"
            className="reveal visible reveal-up reveal-delay-2 py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-4 text-gradient">Our Products</h2>
                <p className="text-center text-gray-400 mb-12 sm:mb-16 text-lg max-w-2xl mx-auto">
                    Choose the perfect photo booth experience for your event
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`reveal visible ${index % 2 === 0 ? "reveal-left" : "reveal-right"
                                } reveal-delay-${Math.min(index + 2, 5)}`}
                        >
                            <Link href={product.link} className="block h-full">
                                <div
                                    className="h-full glass-enhanced rounded-2xl p-6 sm:p-8 border border-gold/20 hover:border-gold/50 transition-all cursor-pointer group"
                                >

                                    <div className="flex justify-center items-center gap-4">
                                        <div>
                                            <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-400 mb-6 text-sm sm:text-base">{product.description}</p>
                                        </div>

                                        <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                            <div className="mx-auto rounded-sm overflow-hidden">
                                            <Image
                                                src={product.icon}
                                                alt={product.name}
                                                width={208}
                                                height={208}
                                                loading="lazy"
                                                className="object-contain"
                                            />
                                            </div></div></div>

                                    <ul className="space-y-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <span className="text-gold">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex items-center text-gold group-hover:text-yellow-300 transition-colors font-semibold text-sm sm:text-base">
                                        Explore {product.name.split(" ")[0]} Booth →
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Why Choose Section */}
                <div
                    className="mt-12 sm:mt-16 glass-enhanced rounded-2xl p-6 sm:p-8 border border-gold/20"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gradient">Why Choose Our Booths?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { title: "Premium Quality", desc: "Professional equipment & instant prints" },
                            { title: "Customizable", desc: "Event branding & personal touches" },
                            { title: "Experienced Team", desc: "Trained professionals on-site" },
                            { title: "Guaranteed Fun", desc: "Every guest leaves with memories" },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <h4 className="font-bold text-gold mb-2 text-sm sm:text-base">{item.title}</h4>
                                <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
