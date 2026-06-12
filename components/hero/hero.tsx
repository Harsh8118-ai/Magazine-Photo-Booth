import Link from "next/link"
import Image from "next/image"
import { Star, Zap, Users, Award } from "lucide-react"
import { Facebook, Instagram, X, Linkedin } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper"
import FooterClientTwo from "./footer.client-2"
import ProductsSection from "./product"
import HeroClient from "./hero.client"
import { FaqsSection } from "@/components/faqs-section"
import WhatsAppCTA from "@/components/whatsapp-cta.client"
import { AvailabilityChecker } from "@/components/availability-checker"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FloatingNavigation } from "@/components/floating-navigation"
import MultiVideoReels from "@/components/multi-video-reels.client"
import { MobileNavigation } from "../floating-navigation-mobile";

const cities: { slug: string; name: string; state: string }[] = [
    { slug: "delhi-ncr", name: "Delhi NCR", state: "Delhi NCR" },
    { slug: "delhi", name: "Delhi", state: "Delhi" },
    { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh" },
    { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
    { slug: "gurugram", name: "Gurugram", state: "Haryana" },
    { slug: "faridabad", name: "Faridabad", state: "Haryana" },
    { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
    { slug: "udaipur", name: "Udaipur", state: "Rajasthan" },
    { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
    { slug: "pune", name: "Pune", state: "Maharashtra" },
    { slug: "bangalore", name: "Bangalore", state: "Karnataka" }
]



export default function Hero() {

    const navigationSections = [
        { id: "hero-section", label: "Home", icon: "home" },
        { id: "product", label: "Booths", icon: "package", isExternal: true, href: "/products" },
        { id: "gallery-section", label: "Gallery", icon: "camera", isExternal: true, href: "/gallery" },
        { id: "blog", label: "Blog", icon: "blog", isExternal: true, href: "/blog" },
        { id: "testimonials-section", label: "Reviews", icon: "users" },
        { id: "faq-section", label: "FAQs", icon: "message" },
    ] as const

    const galleryImages = [
        { id: 1, src: "/Images/1.webp", alt: "Vogue-Magazine Photo Booth" },
        { id: 3, src: "/Images/3.webp", alt: "Photo Booth in Delhi NCR" },
        { id: 6, src: "/Images/6.webp", alt: "Magazine Photo Booth Rental In Delhi NCR" },
        { id: 7, src: "/Images/7.webp", alt: "Magazine Photo Booth in Wedding, Corporate and VVIP Events" },
        { id: 2, src: "/Images/2.webp", alt: "Mirror photo booth at an event with vintage booth experience" },
        { id: 4, src: "/Images/4.webp", alt: "Mirror selfie photo booth with wooden vintage design" },
        { id: 5, src: "/Images/5.webp", alt: "Vintage booth red carpet setup with instant print photo booth" },
        { id: 8, src: "/Images/8.webp", alt: "Guest enjoying vintage retro photo booth with instant prints" },
    ];


    return (
        <main className="min-h-screen bg-black text-white overflow-x-hidden overflow-y-visible">
            <div className="hidden lg:block">
                <FloatingNavigation sections={navigationSections} />
            </div>

            <div className="lg:hidden">
                <MobileNavigation sections={navigationSections} />
            </div>

            {/* Hero Section */}
            <SectionWrapper
                id="hero-section"
                as="header"
                ariaLabel="Hero section with main heading and call-to-action"
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >

                {/* Hero Content */}
                <div className={`relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6`}>
                    <p className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-gradient leading-tight">
                        The <br />
                        Luxury Booths
                    </p>
                    <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gradient leading-tight">
                        Luxury Photo Booth Experiences for Premium Events
                    </h1>
                    <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-gray-200">
                        Photo Booth Rentals for Weddings, Corporate & VIP Events
                    </h2>
                    <p className="text-lg sm:text-xl lg:text-xl mb-10 text-gray-300 max-w-5xl mx-auto leading-relaxed">
                        <strong className="text-white">The Luxury Booths</strong> is a premium photo booth experience brand designed for
                        luxury weddings, high-end corporate events, celebrity parties, and VIP celebrations.
                        We specialize in Vogue-style magazine photo booths, mirror selfie experiences, and
                        bespoke vintage setups that deliver studio-quality photography and instant luxury prints.
                    </p>

                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-200">
                        Premium Magazine, Mirror & Vintage Photo Booth Experiences
                    </h2>

                    <HeroClient />

                </div>
            </SectionWrapper>

            {/* Conversion Features Section */}
            <SectionWrapper
                id="features-section"
                ariaLabel="Interactive features to try before booking"
                className="py-16 sm:py-20 px-4 sm:px-6 bg-linear-to-b from-black to-gray-900"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-16 text-gradient">
                        Try Before You Book
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-12 mb-12 sm:mb-16">
                        <div>
                            <article>
                                {/* <h3 className="font-display text-xl sm:text-2xl font-bold mb-6 text-center">Check Your Date</h3> */}
                                <AvailabilityChecker />
                            </article>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            {/* Products Section  */}
            <div id="products">
                <ProductsSection />
            </div>

            {/* Video Clips Carousel */}
            {/* <div>
                <MultiVideoReels
                    title="Our Instagram Reels"
                    videoUrls={[
                        "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4",
                        "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4",
                        "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4"
                    ]}
                />
            </div> */}

            {/* Event Gallery Section */}
            <SectionWrapper
                id="gallery-section"
                ariaLabel="Photo gallery of past events"
                className="py-16 sm:py-20 px-4 sm:px-6"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
                        Event Gallery
                    </h2>

                    <div className="columns-2 sm:columns-3 gap-3 space-y-3">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="w-full break-inside-avoid cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-gold/50 transition"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={450}
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                                    className="w-full h-auto rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="/gallery">
                            <div

                                className="border-purple-400 rounded-xl border-2 m-auto mx-24 sm:mx-96 py-5 mt-3 text-xl text-purple-400 hover:bg-purple-500 hover:text-black bg-transparent shadow-xs  dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
                                aria-label="View Full Gallery"
                            >
                                View Gallery
                            </div>
                        </a>
                    </div>

                </div>
            </SectionWrapper>

            {/* Why Choose Us Section */}
            <div>
                <SectionWrapper
                    id="why-choose-us-section"
                    ariaLabel="Reasons to choose The Luxury Booths"
                    className="py-16 sm:py-20 px-4 sm:px-6 bg-linear-to-r from-purple-900/20 to-blue-900/20"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div className="">
                                <div>
                                    <h2 className="font-display text-3xl sm:text-5xl font-bold mb-8 text-gradient">Why Choose Us</h2>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                icon: Award,
                                                title: "Premium Quality",
                                                desc: "Professional-grade equipment and instant high-quality prints",
                                            },
                                            { icon: Users, title: "Expert Team", desc: "Experienced photographers and event specialists" },
                                            {
                                                icon: Zap,
                                                title: "Instant Results",
                                                desc: "Get your magazine covers printed in just 30 seconds",
                                            },
                                            { icon: Star, title: "5-Star Reviews", desc: "Trusted by 500+ events with perfect ratings" },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                            >
                                                <div className="flex items-start space-x-4">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0">
                                                        <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg sm:text-xl font-bold mb-2 font-display">{item.title}</h3>
                                                        <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                        <div className="flex">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 sm:h-6 sm:w-6 text-gold fill-current"
                                                    aria-label={`Rating star ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-base sm:text-lg font-semibold">5/5 from 200+ reviews</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="relative">
                                    <div className="glass-enhanced-mobile rounded-2xl p-6 sm:p-8 scale-on-hover gpu-accelerated">
                                        <Image
                                            src="/photo-booth-team.webp"
                                            alt="Our team in action"
                                            loading="lazy"
                                            width={800}
                                            height={600}
                                            className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6"
                                        />
                                        <div className="text-center">
                                            <div className="flex justify-center mb-4">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-gold fill-current" />
                                                ))}
                                            </div>
                                            <p className="text-base sm:text-lg italic text-gray-300 mb-4">
                                                “From the first interaction to the final print, everything was flawless.
                                                Our guests couldn’t stop talking about the magazine-style photos - truly unforgettable.”
                                            </p>
                                            <div className="font-semibold text-sm sm:text-base">Ankit Verma</div>
                                            <div className="text-xs sm:text-sm text-gray-400">Birthday, New Delhi</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </div>

            {/* What Our Clients Say */}
            <SectionWrapper
                id="testimonials-section"
                ariaLabel="Customer testimonials and reviews"
                className="py-16 sm:py-20 px-4 sm:px-6 bg-linear-to-r from-purple-900/20 to-blue-900/20"
            >
                <div className="max-w-7xl mx-auto">
                    <TestimonialCarousel />
                </div>
            </SectionWrapper>

            {/* Testominials  */}
            <section className="relative py-24 sm:py-32 px-4 sm:px-6 overflow-hidden bg-black">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_35%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_35%)]"></div>

                <div className="relative z-10 max-w-7xl mx-auto">

                    <div className="text-center mb-20">

                        <p className="uppercase tracking-[0.35em] text-sm text-gold mb-5">
                            Trusted By Leading Brands
                        </p>

                        <h2 className="font-display text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
                            Luxury Experiences For <br />
                            Brands, Weddings & Premium Events
                        </h2>

                        <p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
                            The Luxury Booths has delivered magazine photo booth experiences for
                            corporate events, luxury weddings, banquets, exhibitions,
                            private celebrations, and event management companies across India.
                            From Delhi NCR and Gurgaon to Jaipur, Mumbai and Bangalore,
                            TLB creates premium guest experiences through luxury photo activations.
                        </p>

                    </div>

                    <div className="mb-24">

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">

                            {[
                                {
                                    name: "SimCorp",
                                    logo: "https://res.cloudinary.com/dpnykjono/image/upload/v1780954596/Testimony-3.webp",
                                },
                                {
                                    name: "ZANA Resorts",
                                    logo: "https://res.cloudinary.com/dpnykjono/image/upload/v1780954596/Testimony.webp",
                                },
                                {
                                    name: "TAAZAA",
                                    logo: "https://res.cloudinary.com/dpnykjono/image/upload/v1780954596/Testimony-4.webp",
                                },
                                {
                                    name: "Blooms Event",
                                    logo: "https://res.cloudinary.com/dpnykjono/image/upload/v1780954596/Testimony-2.webp",
                                },
                                {
                                    name: "nMorphis",
                                    logo: "https://res.cloudinary.com/dpnykjono/image/upload/v1780954596/Testimony-5.webp",
                                },
                                {
                                    name: "Arora Clinic",
                                    logo: "https://res.cloudinary.com/dpnykjono/image/upload/v1781003887/Testimony-6.webp"
                                }

                            ].map((brand, index) => (

                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 backdrop-blur-2xl p- flex items-center justify-center hover:border-gold/40 transition-all duration-500"
                                >

                                    <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10 flex flex-col items-center justify-center text-center">
                                        <img src={brand.logo} alt={brand.name} className="h-52 rounded-lg mt-3 object-contain opacity-80 group-hover:opacity-100 transition duration-500 mb-4" />
                                        <p className="text-sm sm:text-base font-medium tracking-wide text-gray-300 group-hover:text-white transition-colors duration-500 "> {brand.name} </p> </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="text-center mb-16">

                        <p className="uppercase tracking-[0.35em] text-sm text-purple-300 mb-5">
                            Client Experiences
                        </p>

                        <h2 className="font-display text-4xl sm:text-6xl font-bold text-white mb-6">
                            Experiences Guests <br />
                            Actually Remember
                        </h2>

                        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                            Every testimonial below represents a real luxury event experience
                            delivered by TLB through magazine booths, wedding activations,
                            and corporate photo experiences.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {[
                            {
                                quote:
                                    "The magazine booth became the most engaging attraction at our event. Guests kept returning throughout the evening.",
                                name: "SimCorp Team",
                                role: "Corporate Event • Gurgaon",
                                logo: "/logos/simcorp.webp",
                                image:
                                    "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
                            },

                            {
                                quote:
                                    "TLB delivered a luxury guest experience that genuinely elevated the entire wedding atmosphere.",
                                name: "Rhea & Arjun",
                                role: "Luxury Wedding • Jaipur",
                                logo: "/logos/wedding-planner.webp",
                                image:
                                    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
                            },

                            {
                                quote:
                                    "The setup, lighting, and guest interaction felt premium from start to finish. Truly a standout activation.",
                                name: "Elite Event Company",
                                role: "Event Agency • Delhi NCR",
                                logo: "/logos/event-company.webp",
                                image:
                                    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
                            },
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-gold/40 transition-all duration-700"
                            >

                                <div className="absolute inset-0">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/75 to-black"></div>

                                </div>


                                <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-between">


                                    <div>


                                        {/* <img
                                            src={item.logo}
                                            alt={item.name}
                                            className="h-10 object-contain mb-6 opacity-90"
                                        /> */}

                                        <div className="flex mb-6">

                                            {Array.from({ length: 5 }).map((_, i) => (

                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    className="w-5 h-5 text-yellow-400 mr-1"
                                                >
                                                    <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.268L12 19.771l-7.417 4.092L6 15.595 0 9.748l8.332-1.73z" />
                                                </svg>

                                            ))}

                                        </div>

                                        <p className="text-lg text-gray-200 leading-relaxed">
                                            “{item.quote}”
                                        </p>

                                    </div>

                                    <div className="pt-8 mt-8 border-t border-white/10">

                                        <h4 className="text-xl font-semibold text-white mb-1">
                                            {item.name}
                                        </h4>

                                        <p className="text-sm tracking-wide text-gray-400">
                                            {item.role}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    <div className="max-w-5xl mx-auto mt-24 text-center">

                        <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
                            Premium Magazine Photo Booth Experiences Across India
                        </h3>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            The Luxury Booths specializes in luxury magazine photo booth experiences
                            for weddings, corporate events, banquets, exhibitions, luxury parties,
                            and private celebrations. Our team works with event planners,
                            hospitality venues, corporate organizations, and wedding agencies
                            to create high-engagement guest experiences through premium photo activations.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-10">

                            <a
                                href="/magazine-photo-booth"
                                className="px-5 py-3 rounded-full border border-gold/20 text-gray-200 hover:border-gold/50 transition"
                            >
                                Magazine Booth
                            </a>

                            <a
                                href="/mirror-selfie-booth"
                                className="px-5 py-3 rounded-full border border-white/10 text-gray-200 hover:border-purple-400 transition"
                            >
                                Mirror Booth
                            </a>

                            <a
                                href="/corporate-events"
                                className="px-5 py-3 rounded-full border border-white/10 text-gray-200 hover:border-blue-400 transition"
                            >
                                Corporate Events
                            </a>

                        </div>

                    </div>

                    <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">

                        {[
                            {
                                number: "200+",
                                label: "Luxury Events",
                            },
                            {
                                number: "50+",
                                label: "Corporate Activations",
                            },
                            {
                                number: "20+",
                                label: "Event Companies",
                            },
                            {
                                number: "100K+",
                                label: "Guest Interactions",
                            },
                        ].map((stat, index) => (

                            <div
                                key={index}
                                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
                            >

                                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-3">
                                    {stat.number}
                                </h3>

                                <p className="text-gray-400 tracking-wide">
                                    {stat.label}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>


            </section>

            {/* About Us Section */}
            <div>
                <SectionWrapper
                    id="about-section"
                    ariaLabel="Information about Magazine Photo Booth"
                    className="py-16 sm:py-20 px-4 sm:px-6"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-0 items-center">
                            <div className="">
                                <div>
                                    <Image
                                        src="https://res.cloudinary.com/dpnykjono/image/upload/v1769712833/simcorp_przalj.webp"
                                        alt="About Us"
                                        width={208}
                                        height={208}
                                        loading="lazy"
                                        className="w-full sm:w-80 h-full object-cover rounded-2xl glass-enhanced-mobile"
                                    />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h2 className="font-display text-5xl font-bold text-center mb-8 text-gradient">About Us</h2>
                                    <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-center">
                                        <strong>The Luxury Booths (TLB)</strong> is a luxury photo booth experience brand created for
                                        premium weddings, corporate galas, fashion events, and elite private celebrations.
                                        Our setups combine professional studio lighting, curated aesthetics, and instant
                                        high-quality prints to deliver a celebrity-style photo experience at every event.
                                    </p>
                                    <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed text-center">
                                        From intimate weddings to large corporate events, we've helped thousands of guests become cover
                                        stars with our innovative magazine photo booth experience.
                                    </p>

                                    <div className="space-y-4 text-center flex items-center flex-col justify-center">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-3 h-3 bg-gold rounded-full"></div>
                                            <span className="text-sm sm:text-base">Founded in 2024    </span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                                            <span className="text-sm sm:text-base">200+ Events Completed</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                                            <span className="text-sm sm:text-base">Award-Winning Service</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </div>

            {/* ✅ Available Cities (City Landing Page) */}
            <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-transparent via-gold/10 to-transparent">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-gradient mb-4">
                        Luxury Photo Booth Rental by City
                    </h2>

                    <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 text-base sm:text-lg">
                        Choose your city to explore luxury photo booth rental options including Magazine Photo Booth, Mirror Selfie Booth,
                        and Vintage Photo Booth - with instant premium prints and complete event-ready setup.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {cities.map((city) => (
                            <Link
                                key={city.slug}
                                href={`/photo-booth-rental-in-${city.slug}`}
                                className="px-4 py-2 rounded-full border border-gold/30 glass text-gray-200 hover:text-white hover:border-gold/60 text-sm sm:text-base"
                            >
                                {city.name} <span className="text-gray-400">({city.state})</span>
                            </Link>
                        ))}
                    </div>

                    {/* ✅ Optional: Small SEO line */}
                    <p className="text-center text-gray-400 text-sm sm:text-base mt-8">
                        Serving premium events in weddings, corporate activations, exhibitions, celebrity parties, and VIP celebrations.
                    </p>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <h2 className="font-display text-4xl font-bold mb-6">
                        Luxury Wedding Photo Booth Experiences
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        Looking for a luxury wedding photo booth experience?
                        Discover magazine booths, mirror booths, instant photography,
                        and guest engagement ideas designed specifically for premium weddings.
                    </p>

                    <Link
                        href="/photo-booth-for-weddings"
                        className="inline-flex mt-8 rounded-full border border-gold/30 px-6 py-3 hover:border-gold/60"
                    >
                        Explore Wedding Experiences
                    </Link>

                </div>
            </section>

            {/* FAQs & Logistics Section */}
            <SectionWrapper
                id="faq-section"
                ariaLabel="Frequently asked questions and logistics information"
                className="py-16 sm:py-20 px-4 sm:px-6 bg-linear-to-b-from-black to-gray-900"
            >
                <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
                    <FaqsSection />
                </div>
            </SectionWrapper>

            {/* Footer - Enhanced with legal links */}
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
                                        className={`w-10 h-10 glass rounded-full flex items-center justify-center cursor-pointer ${social.color}`}
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
                                    <Link href="/products"
                                        className="hover:text-white transition-colors"
                                    >
                                        Product
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
                                <li>
                                    <Link href={`/blog`} className="hover:text-white transition-colors">
                                        Blog
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

            {/* Enhanced WhatsApp CTA with dynamic data */}
            <WhatsAppCTA />
        </main>
    )
}