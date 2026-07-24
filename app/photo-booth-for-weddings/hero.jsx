import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Facebook, Instagram, X, Linkedin } from "lucide-react";

import { ArrowLeft } from "lucide-react";

import WhatsAppCTA from "./whatsapp-cta";
import FooterClientTwo from "@/components/hero/footer.client-2";

export default function Hero() {

    const whatsappMessage = encodeURIComponent(
        "Hi, I’m interested in booking The Luxury Booths for a wedding celebration. Please share availability, pricing, and experience details."
    );

    const whatsappURL = `https://wa.me/919266037002?text=${whatsappMessage}`;

    const faqSchema = {
        "@context": "https://schema.org",

        "@type": "FAQPage",

        mainEntity: [

            {
                "@type": "Question",

                name: "What is a wedding photo booth?",

                acceptedAnswer: {
                    "@type": "Answer",

                    text:
                        "A wedding photo booth is an interactive photography experience designed to entertain guests while creating memorable instant photographs during the celebration.",
                },
            },

            {
                "@type": "Question",

                name: "What is a magazine booth for weddings?",

                acceptedAnswer: {
                    "@type": "Answer",

                    text:
                        "A magazine booth is a luxury editorial-style photo booth inspired by fashion magazine covers and celebrity photography experiences.",
                },
            },

            {
                "@type": "Question",

                name: "Do wedding photo booths include instant prints?",

                acceptedAnswer: {
                    "@type": "Answer",

                    text:
                        "Yes. TLB provides premium-quality instant print experiences for guests during wedding celebrations.",
                },
            },

            {
                "@type": "Question",

                name: "Why are photo booths popular at luxury weddings?",

                acceptedAnswer: {
                    "@type": "Answer",

                    text:
                        "Luxury weddings use photo booths because they create immersive guest engagement, instant memories, social sharing moments, and premium interactive experiences.",
                },
            },

        ],
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",

        name: "Wedding Photo Booth Experiences",

        description:
            "Luxury wedding photo booth experiences featuring magazine booths, mirror booths, instant prints, editorial portraits, and immersive guest engagement.",

        provider: {
            "@type": "Organization",
            name: "The Luxury Booths",
            url: "https://theluxurybooths.com",
        },

        areaServed: {
            "@type": "Country",
            name: "India",
        },

        serviceType: [
            "Wedding Photo Booth",
            "Magazine Booth",
            "Mirror Booth",
            "Luxury Wedding Entertainment",
            "Wedding Guest Experience",
        ],

        url: "https://theluxurybooths.com/photo-booth-for-weddings",
    };

    const organizationSchema = {
        "@context": "https://schema.org",

        "@type": "Organization",

        name: "The Luxury Booths",

        url: "https://theluxurybooths.com",

        logo:
            "https://theluxurybooths.com/logo.png",

        email:
            "theluxurybooths@gmail.com",

        telephone:
            "+91-9266037002",

        sameAs: [
            "https://www.instagram.com/theluxurybooths",
            "https://www.linkedin.com/in/theluxurybooths",
            "https://www.facebook.com/profile.php?id=61570489859940",
        ],
    };

    const webPageSchema = {
        "@context": "https://schema.org",

        "@type": "WebPage",

        name:
            "Photo Booth for Weddings",

        description:
            "Luxury wedding photo booth experiences designed for unforgettable guest memories and premium celebrations.",

        url:
            "https://theluxurybooths.com/photo-booth-for-weddings",

        isPartOf: {
            "@type": "WebSite",
            name: "The Luxury Booths",
            url: "https://theluxurybooths.com",
        },

        about: [
            {
                "@type": "Thing",
                name: "Wedding Photo Booth",
            },

            {
                "@type": "Thing",
                name: "Luxury Wedding Entertainment",
            },

            {
                "@type": "Thing",
                name: "Magazine Booth",
            },
        ],
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://theluxurybooths.com",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Photo Booth For Weddings",
                item: `https://theluxurybooths.com/photo-booth-for-weddings`,
            },
            
        ],
    };

    return (
        <>
            <WhatsAppCTA />
   
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />

            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />

            <Script
                id="webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageSchema),
                }}
            />

            <main className="overflow-hidden bg-black text-white">

                <div className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl">

                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                        <Link
                            href="/"
                            className="flex items-center gap-2 text-white/70 transition hover:text-white"
                        >

                            <ArrowLeft size={18} />

                            <span className="hidden sm:block text-sm">
                                Back
                            </span>

                        </Link>

                        <h1 className="text-xs sm:text-lg uppercase tracking-[0.3em] text-[#D4AF37]">
                            Photo Booth for Weddings
                        </h1>

                        <div className="w-15" />

                    </div>

                </div>

                <section className="relative min-h-screen px-6 pb-24 pt-40 md:px-10">

                    {/* Glow */}

                    <div className="absolute inset-0 overflow-hidden">

                        <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

                    </div>

                    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

                            <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                                Luxury Wedding Experiences
                            </span>

                            <h2 className="mt-8 text-5xl font-light leading-[1.02] md:text-7xl">

                                Luxury Wedding
                                <br />
                                Photo Booth
                                <br />
                                Experiences

                            </h2>

                            <p className="mt-10 max-w-lg text-lg leading-relaxed text-white/65">

                                Immersive wedding experiences designed
                                to create unforgettable guest moments
                                through magazine booths, cinematic
                                portraits, instant prints, and
                                celebrity-style interactions.

                            </p>

                            {/* CTA */}

                            <div className="mt-14 flex flex-wrap gap-4">

                                <Link
                                    href={whatsappURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        rounded-full
                                        bg-linear-to-r
                                        from-[#D4AF37]
                                        to-[#F5D06F]
                                        px-8
                                        py-4
                                        text-sm
                                        font-medium
                                        text-black
                                        transition-all
                                        duration-300
                                        hover:scale-[1.03]
                                    "
                                >
                                    Book Wedding Experience
                                </Link>

                                <Link
                                    href="/products"
                                    className="
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/3
                                        px-8
                                        py-4
                                        text-sm
                                        text-white/90
                                        transition-all
                                        duration-300
                                        hover:border-[#D4AF37]/40
                                    "
                                >
                                    Explore Booth Setups
                                </Link>

                            </div>

                            {/* Trust */}

                            <div className="mt-16 flex flex-wrap gap-6 text-sm text-white/45">

                                <span>Editorial Portraits</span>

                                <span>Instant Memories</span>

                                <span>Luxury Guest Experiences</span>

                                <span>Modern Wedding Atmosphere</span>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="relative overflow-hidden rounded-[42px] border border-white/10">

                                <Image
                                    src="https://res.cloudinary.com/dpnykjono/image/upload/v1781184664/For-Weddings.webp"
                                    alt="Luxury wedding photo booth experience by TLB"
                                    width={700}
                                    height={1000}
                                    priority
                                    className="h-full w-full object-cover "
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                            </div>

                            {/* Floating Card */}

                            <div className="absolute -bottom-10 left-6 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
                                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                                    Premium Experience
                                </p>
                                <h3 className="mt-4 text-2xl font-light leading-snug">
                                    Designed To
                                    <br />
                                    Be Remembered
                                </h3>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="px-6 py-32 md:px-10">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-20 max-w-3xl">

                            <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                                Immersive Wedding Atmosphere
                            </span>

                            <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">

                                Where Wedding
                                <br />
                                Memories Become
                                <br />
                                Experiences

                            </h2>

                        </div>

                        {/* Gallery Grid */}

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                            {/* Large Image */}

                            <div className="hidden sm:block relative min-h-175 overflow-hidden rounded-[36px] border border-white/10 lg:col-span-2 lg:row-span-2">

                                <Image
                                    src="https://res.cloudinary.com/dpnykjono/image/upload/v1781258087/For-Weddings-1.webp"
                                    alt="Luxury wedding magazine booth by TLB"
                                    fill
                                    className="object-cover"
                                />


                            </div>

                            <div className="sm:hidden relative min-h-105 overflow-hidden rounded-[36px] border border-white/10">
                                <Image
                                    src="https://res.cloudinary.com/dpnykjono/image/upload/v1781258087/For-Weddings-1.webp"
                                    alt="Luxury wedding magazine booth by TLB"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Small Cards */}

                            {[
                                {
                                    src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-4.webp",
                                    alt: "Wedding guests enjoying luxury photo booth experience",
                                },

                                {
                                    src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_500,c_fill/Mirror-Booth_rheieh.webp",
                                    alt: "Luxury mirror booth for weddings",
                                },

                                {
                                    src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_500,c_fill/v1780402924/Strip-5.webp",
                                    alt: "Luxury wedding instant print booth",
                                },

                                {
                                    src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_500,c_fill/Mirror-1-8.webp",
                                    alt: "Glam booth portraits at luxury wedding",
                                },

                            ].map((image, index) => (

                                <div
                                    key={index}
                                    className="
                                        relative
                                        min-h-105
                                        overflow-hidden
                                        rounded-[36px]
                                        border
                                        border-white/10
                                    "
                                >

                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                    />

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

                <section className="relative px-6 py-40 text-center md:px-10">

                    <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[160px]" />

                    <div className="relative z-10 mx-auto max-w-5xl">

                        <h2 className="text-5xl font-light leading-[1.1] md:text-7xl">

                            This Isn’t Just
                            <br />
                            A Photo Booth

                        </h2>

                        <p className="mx-auto mt-14 max-w-3xl text-xl leading-relaxed text-white/65">

                            People rarely remember table settings
                            or floral arrangements years later.

                            <br />
                            <br />

                            They remember the moments that made
                            them feel something.

                            <br />
                            <br />

                            The laughter.
                            The interactions.
                            The instant photographs everyone shared.
                            The atmosphere guests kept talking about
                            long after the wedding ended.

                        </p>

                    </div>

                </section>

                <section className="px-6 py-32 md:px-10">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-20 max-w-3xl">

                            <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                                Luxury Booth Experiences
                            </span>

                            <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">

                                Designed For
                                <br />
                                Modern Weddings

                            </h2>

                        </div>

                        {/* Cards */}

                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                            {[
                                {
                                    title: "Magazine Photo Booth",
                                    description:
                                        "Editorial-style wedding portraits inspired by luxury fashion magazines.",
                                    image:
                                        "https://res.cloudinary.com/dpnykjono/image/upload/v1769257579/taazaa-2.webp",
                                    url: "/magazine-photo-booth"
                                },

                                {
                                    title: "Mirror Photo Booth",
                                    description:
                                        "Interactive mirror experiences designed for immersive guest engagement.",
                                    image:
                                        "https://res.cloudinary.com/dpnykjono/image/upload/v1780398155/Mirror-1-3.webp",
                                    url: "/mirror-photo-booth"
                                },

                                {
                                    title: "Vintage Photo Booth",
                                    description:
                                        "A handcrafted vintage photo booth that clicks photographs across your event and prints them instantly",
                                    image:
                                        "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-9.webp",
                                    url: "/vintage-photo-booth"
                                },

                            ].map((booth, index) => (

                                <div
                                    key={index}
                                    className="
                                        overflow-hidden
                                        rounded-[36px]
                                        border
                                        border-white/10
                                        bg-white/3">
                                    <Link href={booth.url}>
                                        <div className="relative h-105">

                                            <Image
                                                src={booth.image}
                                                alt={booth.title}
                                                fill
                                                className="object-cover"
                                            />

                                        </div>


                                        <div className="p-8">

                                            <h3 className="text-2xl font-light">
                                                {booth.title}
                                            </h3>

                                            <p className="mt-5 leading-relaxed text-white/60">
                                                {booth.description}
                                            </p>

                                        </div></Link>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

                <section className="px-6 py-40 md:px-10">

                    <div className="mx-auto grid max-w-7xl items-start gap-24 lg:grid-cols-[1.1fr_.9fr]">

                        {/* IMAGE */}

                        <div
                            className="relative overflow-hidden rounded-[40px] border border-white/10 lg:-mt-20 lg:ml-10 shadow-[0_40px_120px_rgba(0,0,0,0.5)]">

                            <Image
                                src="https://res.cloudinary.com/dpnykjono/image/upload/v1781262040/For-Weddings-2.webp"
                                alt="Luxury wedding guest experience by TLB"
                                width={900}
                                height={1100}
                                className="h-full w-full object-cover"
                            />

                        </div>

                        {/* CONTENT */}

                        <div>

                            <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                                Why Luxury Weddings Choose TLB
                            </span>

                            <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">

                                Experiences
                                <br />
                                Guests Actually
                                <br />
                                Remember

                            </h2>

                            <div className="mt-14 space-y-10">

                                {[
                                    "Celebrity-style guest interactions",
                                    "Editorial-quality wedding portraits",
                                    "Instant social sharing experiences",
                                    "Luxury visual aesthetics",
                                    "Immersive wedding atmosphere",
                                ].map((item, index) => (

                                    <div
                                        key={index}
                                        className="border-b border-white/10 pb-6">

                                        <p className="text-lg text-white/75">
                                            {item}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>

                <section className="px-6 py-32 md:px-10">

                    <div className="mx-auto max-w-6xl">

                        <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                            Modern Wedding Experiences
                        </span>

                        <h2 className="mt-6 text-4xl font-light leading-tight md:text-6xl">

                            Why Wedding
                            <br />
                            Photo Booths Became
                            <br />
                            Essential

                        </h2>

                        <div className="mt-16 grid gap-10 md:grid-cols-2">

                            <div>

                                <h3 className="text-2xl font-light">
                                    Guest Engagement
                                </h3>

                                <p className="mt-6 leading-relaxed text-white/60">

                                    Wedding photo booths naturally
                                    create interaction between guests,
                                    making the celebration feel more
                                    immersive and memorable.

                                </p>

                            </div>

                            <div>

                                <h3 className="text-2xl font-light">
                                    Social Sharing Culture
                                </h3>

                                <p className="mt-6 leading-relaxed text-white/60">

                                    Modern wedding guests love capturing
                                    editorial-style moments for Instagram,
                                    reels, and instant sharing.

                                </p>

                            </div>

                            <div>

                                <h3 className="text-2xl font-light">
                                    Instant Memories
                                </h3>

                                <p className="mt-6 leading-relaxed text-white/60">

                                    Instant prints create physical
                                    keepsakes guests actually take home
                                    and remember long after the event.

                                </p>

                            </div>

                            <div>

                                <h3 className="text-2xl font-light">
                                    Luxury Wedding Atmosphere
                                </h3>

                                <p className="mt-6 leading-relaxed text-white/60">

                                    Premium photo booth experiences
                                    increase the perceived luxury and
                                    emotional value of modern weddings.

                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                <section className="relative px-6 py-52 text-center md:px-10">

                    <div className="absolute inset-0 overflow-hidden">

                        <div className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[220px]" />

                    </div>

                    <div className="relative z-10 mx-auto max-w-6xl">

                        <p className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                            The Luxury Booths
                        </p>

                        <h2 className="mt-12 text-6xl font-light leading-[1.05] md:text-8xl">

                            The Best Weddings
                            <br />
                            Are Remembered
                            <br />
                            Through Experiences

                        </h2>

                    </div>

                </section>

                <section className="px-6 py-32 md:px-10">

                    <div className="mx-auto max-w-5xl">

                        <span className="text-xs uppercase tracking-[0.35em] text-[#D4AF37]">
                            FAQs
                        </span>

                        <h2 className="mt-6 text-4xl font-light md:text-6xl">
                            Wedding Photo Booth FAQs
                        </h2>

                        <div className="mt-16 space-y-8">

                            {[
                                {
                                    question:
                                        "What is a wedding photo booth?",

                                    answer:
                                        "A wedding photo booth is an interactive photography experience designed to entertain guests while creating instant memories during the celebration.",
                                },

                                {
                                    question:
                                        "What is a magazine booth?",

                                    answer:
                                        "A magazine booth is a luxury editorial-style photo experience inspired by fashion magazine covers and celebrity photography.",
                                },

                                {
                                    question:
                                        "Do wedding photo booths include instant prints?",

                                    answer:
                                        "Yes. TLB offers premium-quality instant print experiences for weddings and luxury events.",
                                },

                                {
                                    question:
                                        "Why are magazine booths trending at weddings?",

                                    answer:
                                        "Magazine booths create highly shareable celebrity-style photos that guests love posting across Instagram and social media.",
                                },

                            ].map((faq, index) => (

                                <div
                                    key={index}
                                    className={`
    rounded-4xl
    border
    border-white/10
    bg-white/3
    p-8

    transition-all
    duration-500

    hover:border-[#D4AF37]/20
    hover:bg-white/5

    ${index % 2 === 0
                                            ? "ml-0 md:mr-24"
                                            : "md:ml-24"}`}>

                                    <h3 className="text-2xl font-light">
                                        {faq.question}
                                    </h3>

                                    <p className="mt-5 leading-relaxed text-white/60">
                                        {faq.answer}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

                <section className="px-6 pb-24 md:px-10">

                    <div className="mx-auto max-w-5xl border-t border-white/10 pt-16">

                        <h2 className="text-2xl font-light">
                            Continue Exploring TLB Experiences
                        </h2>

                        <div className="mt-10 flex flex-wrap gap-6 text-white/60">

                            <Link
                                href="/magazine-photo-booth"
                                className="transition hover:text-[#D4AF37]"
                            >
                                Magazine Booth
                            </Link>

                            <Link
                                href="/products"
                                className="transition hover:text-[#D4AF37]"
                            >
                                Pricing
                            </Link>

                            <Link
                                href="/corporate-events"
                                className="transition hover:text-[#D4AF37]"
                            >
                                Corporate Events
                            </Link>

                            <Link
                                href="/magazine-photo-booth/images"
                                className="transition hover:text-[#D4AF37]"
                            >
                                Wedding Booth Images
                            </Link>

                        </div>

                    </div>

                </section>

                <section className="relative px-6 py-40 text-center md:px-10">

                    <div className="absolute inset-0 overflow-hidden">

                        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

                    </div>

                    <div className="relative z-10 mx-auto max-w-4xl">

                        <h2 className="text-5xl font-light leading-tight md:text-7xl">

                            Because The Best
                            <br />
                            Weddings Are
                            <br />
                            Remembered Through
                            <br />
                            Experiences

                        </h2>

                        <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/65">

                            Create immersive wedding moments your
                            guests will remember long after the
                            celebration ends.

                        </p>

                        <div className="mt-14">

                            <Link
                                href={whatsappURL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    rounded-full
                                    bg-linear-to-r
                                    from-[#D4AF37]
                                    to-[#F5D06F]
                                    px-10
                                    py-5
                                    text-sm
                                    font-medium
                                    text-black
                                    transition-all
                                    duration-300
                                    hover:scale-[1.03]
                                "
                            >
                                Book Wedding Experience
                            </Link>

                        </div>

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
                                        <Link href="/butterfly-drone" className="hover:text-white transition-colors">
                                            Butterfly Drone
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

            </main>
        </>
    );
}