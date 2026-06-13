import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Facebook, Instagram, X, Linkedin } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import Pricing from "./pricing"
import WhatsAppButton from "./whatsapp-button"
import Hero from "./hero"

import FooterClientTwo from "@/components/hero/footer.client-2"
import FloatingPricingButton from "@/components/floating-pricing-button"

const StripPhotoBooth = () => {

    const faqs = [
        {
            question: "What is a Strip Photo Booth?",
            answer:
                "A Strip Photo Booth creates instant photo strip prints with 3–4 photographs in a stylish vertical layout. Guests receive customized printed strips within seconds, making it a fun and memorable keepsake for weddings and events.",
        },
        {
            question: "Can the strip designs be customized according to our event theme?",
            answer:
                "Yes, absolutely! Every strip template can be customized with your wedding names, event branding, monograms, colors, hashtags, logos, and theme aesthetics.",
        },
        {
            question: "How long does it take to print the photo strips?",
            answer:
                "Our DSLR-based strip photo booth prints premium-quality strips in approximately 15 seconds after the session is completed.",
        },
        {
            question: "Do guests get digital copies too?",
            answer:
                "Yes. Guests can instantly receive digital copies through QR sharing and WhatsApp sharing in addition to physical strip prints.",
        },
        {
            question: "Is the Strip Photo Booth suitable for weddings and luxury events?",
            answer:
                "Definitely. The setup is designed for weddings, sangeet nights, haldi functions, birthdays, luxury parties, corporate events, and premium brand activations.",
        },
        {
            question: "Will your team manage the booth during the event?",
            answer:
                "Yes. Our trained team handles the entire setup, guest interaction, printing process, and smooth operation throughout the event.",
        },
    ]

    const galleryImages = [
        {
            id: 1,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip.webp",
            alt: "Luxury strip photo booth rental setup at wedding event in Delhi NCR",
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-2.webp",
            alt: "Customized wedding photo strip print with premium themed template design",
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-3.webp",
            alt: "Guests enjoying DSLR strip photo booth experience at luxury wedding",
        },
        {
            id: 4,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-4.webp",
            alt: "Instant strip photo booth with DSLR photography and premium lighting",
        },
        {
            id: 5,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-5.webp",
            alt: "Luxury strip photo booth for sangeet and wedding celebrations",
        },
        {
            id: 6,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-6.webp",
            alt: "Premium wedding photo strip keepsake printed instantly for guests",
        },
        {
            id: 7,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-7.webp",
            alt: "Custom strip photo print design for luxury wedding return gifts",
        },
        {
            id: 8,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-8.webp",
            alt: "Open setup strip photo booth rental with instant photo strip printing",
        },
        {
            id: 9,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-9.webp",
            alt: "Wedding guests posing at luxury strip photo booth in Delhi NCR",
        },
        {
            id: 10,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-10.webp",
            alt: "Premium instant photo strip printing booth for wedding and events",
        },
        {
            id: 11,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-11.webp",
            alt: "Luxury DSLR strip photo booth with customized event templates",
        },
        {
            id: 12,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-12.webp",
            alt: "Modern strip photo booth experience for weddings and luxury parties",
        },
        {
            id: 13,
            src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-13.webp",
            alt: "Trending strip photo booth rental for weddings in Delhi NCR",
        },
    ]

    const features = [
        "DSLR camera quality with professional lighting",
        "Instant custom strip printing in 15 seconds",
        "Theme-based strip templates and luxury packaging",
        "Perfect for weddings, birthdays, sangeet, haldi, and corporate events",
        "Unlimited guest sessions throughout the event",
        "Instant QR and WhatsApp digital sharing",
    ]

    const cities = [
        { slug: "delhi", name: "Delhi", state: "Delhi" },
        { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh" },
        { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
        { slug: "gurugram", name: "Gurugram", state: "Haryana" },
        { slug: "faridabad", name: "Faridabad", state: "Haryana" },
        { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
        { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
        { slug: "udaipur", name: "Udaipur", state: "Rajasthan" },
        { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
        { slug: "pune", name: "Pune", state: "Maharashtra" },
        { slug: "bangalore", name: "Bangalore", state: "Karnataka" },
    ]

    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden">

            {/* Header */}
            <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                    <Link
                        href="/products"
                        className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="hidden sm:block">Back</span>
                    </Link>

                    <h1 className="text-xl sm:text-3xl font-serif font-bold text-white">
                        Strip Photo Booth
                    </h1>

                    <div className="w-20" />

                </div>
            </div>

            {/* Hero Section */}
            <section className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/20 to-transparent">

                <div className="max-w-6xl mx-auto">

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white text-center text-balance">
                        Strip Photo Booth Rental in Delhi NCR
                        <br />
                        <span className="text-2xl sm:text-3xl text-pink-300">
                            Instant Photo Strips for Weddings & Events
                        </span>
                    </h2>

                    <p className="text-lg sm:text-xl text-pink-100 text-center max-w-3xl mx-auto mb-2">
                        Stylish photo strips, instant prints, DSLR photography, and luxury packaging -
                        designed to turn every guest moment into a keepsake.
                    </p>

                    <p className="text-base sm:text-lg text-pink-200/80 text-center max-w-3xl mx-auto mb-8">
                        From weddings and sangeet nights to birthdays and luxury celebrations,
                        our Strip Photo Booth creates fun, trendy, and shareable experiences guests love instantly.
                    </p>

                    <Hero />

                    <p className="text-center text-pink-200/80 max-w-4xl mx-auto mt-4">
                        We provide Strip Photo Booth rental across Delhi NCR including Delhi,
                        Noida, Gurugram, Faridabad, and Ghaziabad.
                    </p>

                </div>

            </section>

            {/* Features */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/10 to-transparent">

                <div className="max-w-4xl mx-auto">

                    <h3 className="text-3xl font-serif font-bold text-white mb-8 text-center">
                        Strip Booth Features
                    </h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 text-pink-100"
                            >
                                <span className="text-pink-500 mt-1">✓</span>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-12 p-6 bg-pink-900/20 border-l-4 border-pink-500 rounded-lg">
                        <p className="text-lg font-serif italic text-pink-100">
                            "Not just photographs - premium mini memories guests take home instantly."
                        </p>
                    </div>

                </div>

            </section>

            {/* Why Trending */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">

                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 text-balance">
                            Why Strip Photo Booths Are Trending at Weddings & Events
                        </h2>

                        <p className="text-pink-100 max-w-3xl mx-auto leading-relaxed">
                            Guests love experiences they can instantly hold, share, and remember.
                            Strip photo booths combine nostalgia, luxury aesthetics, and viral social moments into one premium experience.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="rounded-2xl border border-pink-500/20 bg-pink-900/10 p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Instant Printed Keepsakes
                            </h3>

                            <p className="text-pink-100/80 leading-relaxed">
                                Guests leave your event with beautifully designed photo strips customized specifically for your celebration.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-pink-500/20 bg-pink-900/10 p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Viral Social Media Content
                            </h3>

                            <p className="text-pink-100/80 leading-relaxed">
                                The trendy strip layout naturally creates Instagram-worthy moments guests love sharing online.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-pink-500/20 bg-pink-900/10 p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Luxury Guest Experience
                            </h3>

                            <p className="text-pink-100/80 leading-relaxed">
                                DSLR quality photography, premium lighting, and custom packaging make the entire experience feel elevated.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-pink-500/20 bg-pink-900/10 p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">
                                Perfect for Every Event
                            </h3>

                            <p className="text-pink-100/80 leading-relaxed">
                                Weddings, haldi, sangeet, birthdays, corporate events, and brand activations - strip booths fit every vibe beautifully.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* Pricing */}
            <div id="pricing">
                <Pricing />
            </div>

            {/* FAQ */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/10 to-transparent">

                <div className="max-w-4xl mx-auto">

                    <h3 className="text-3xl font-serif font-bold text-white mb-8 text-center">
                        Frequently Asked Questions
                    </h3>

                    <Accordion type="single" collapsible className="space-y-4">

                        {faqs.map((faq, index) => (
                            <div key={index}>

                                <AccordionItem
                                    value={`faq-${index}`}
                                    className="glass-enhanced px-6 border-pink-500/30"
                                >

                                    <AccordionTrigger className="text-white hover:text-pink-300 font-semibold py-4">
                                        {faq.question}
                                    </AccordionTrigger>

                                    <AccordionContent className="text-pink-100/80 pb-4">
                                        {faq.answer}
                                    </AccordionContent>

                                </AccordionItem>

                            </div>
                        ))}

                    </Accordion>

                </div>

            </section>

            {/* Cities */}
            <section className="py-16 px-4">

                <div className="max-w-6xl mx-auto text-center">

                    <h3 className="text-3xl font-serif font-bold text-white mb-6">
                        Available Across Delhi NCR
                    </h3>

                    <div className="flex flex-wrap justify-center gap-3">

                        {cities.map((c) => (
                            <span
                                key={c.slug}
                                // href={`/strip-photo-booth/${c.slug}`}
                                className="px-4 py-2 rounded-full border border-pink-500/30 text-pink-100 hover:border-pink-400"
                            >
                                {c.name} ({c.state})
                            </span>
                        ))}

                    </div>

                </div>

            </section>

            {/* Gallery */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">

                <div className="max-w-6xl mx-auto">

                    <h3 className="text-3xl font-serif font-bold text-white mb-8 text-center">
                        Strip Booth Gallery
                    </h3>

                    <p className="text-center text-pink-200 mb-6">
                        Real moments. Instant strips. Luxury memories.
                    </p>

                    <div className="columns-2 sm:columns-3 gap-3 space-y-3">

                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="w-full break-inside-avoid overflow-hidden rounded-lg border border-white/10"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={450}
                                    sizes="(max-width: 768px) 50vw, 182px"
                                    className="w-full h-auto rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-t from-pink-900/20 to-transparent">

                <div className="max-w-2xl mx-auto text-center">

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                        Make Your Event More Fun, Stylish & Memorable
                    </h2>

                    <p className="text-pink-100 mb-8">
                        Book the Strip Photo Booth experience for your wedding or celebration today.
                    </p>

                    <a href="#pricing">
                        <button
                            className="w-full block text-center px-6 py-3 bg-linear-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/40 transition-all transform hover:scale-105"
                        >
                            Book Strip Photo Booth
                        </button></a>

                </div>

            </section>

            {/* Footer */}
            <footer
                id="contact-section"
                className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-900 border-t border-gray-800"
                role="contentinfo"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        <div className="sm:col-span-2 lg:col-span-1">
                            <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gradient">The Luxury Booths</h3>
                            <p className="text-gray-400 mb-4 text-sm sm:text-base">
                                The Luxury Booths is a luxury photo booth experience brand for premium weddings,
                                corporate events, and VIP celebrations.
                            </p>
                            <div className="flex space-x-4">
                                {[
                                    { name: "facebook", url: "https://www.facebook.com/profile.php?id=61570489859940", icon: <Facebook className="w-5 h-5" />, color: "hover:text-blue-500" },
                                    { name: "instagram", url: "https://www.instagram.com/theluxurybooths", icon: <Instagram className="w-5 h-5" />, color: "hover:text-pink-500" },
                                    { name: "twitter", url: "https://twitter.com", icon: <X className="w-5 h-5" />, color: "hover:text-sky-400" },
                                    { name: "linkedin", url: "https://www.linkedin.com/in/theluxurybooths", icon: <Linkedin className="w-5 h-5" />, color: "hover:text-blue-600" },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit our ${social.name} page`}
                                        className={`w-10 h-10 glass rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:neon-glow ${social.color}`}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm sm:text-base">Services</h4>
                            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                                <li>
                                    <Link href="/magazine-photo-booth" className="hover:text-white transition-colors">
                                        Magazine Photo Booth
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mirror-selfie-booth" className="hover:text-white transition-colors">
                                        Mirror Selfie Booth
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/vintage-photo-booth" className="hover:text-white transition-colors">
                                        Vintage Photo Booth
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/mirror-photo-booth" className="hover:text-white transition-colors">
                                        Mirror Photo Booth
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/strip-photo-booth" className="hover:text-white transition-colors">
                                        Strip Photo Booth
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/" className="hover:text-white transition-colors">
                                        Polaroid Photo Booth (coming soon)
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
                            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">

                                <li>
                                    <Link href="/#hero-section"
                                        className="hover:text-white transition-colors"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#products"
                                        className="hover:text-white transition-colors"
                                    >
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about"
                                        className="hover:text-white transition-colors"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#testimonials-section"
                                        className="hover:text-white transition-colors"
                                    >
                                        Reviews
                                    </Link>

                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                                <p><a href="tel:+919266037002">📞 +91-9266037002</a></p>
                                <p className="flex flex-row"><a href="mailto:theluxurybooths@gmail.com">✉️ theluxurybooths@gmail.com</a></p>
                                <p><a href="https://maps.app.goo.gl/3XDsYrDYf6ModdjA8">📍 Sector 73, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201301</a></p>
                            </div>
                        </div>
                    </div>

                    <FooterClientTwo />

                </div>
                <div className="py-9 sm:hidden"><span></span></div>
            </footer>

        </main>
    )
}

export default StripPhotoBooth

