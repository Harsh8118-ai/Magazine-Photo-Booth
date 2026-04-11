"use client"
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { VenueRequirements } from "@/components/venue-requirements"
import { Button3D } from "@/components/3d-button"
import Link from "next/link"

const MiddleTwoSection = () => {
    const faqs = [
        {
            question: "How many times can guests use the luxury magazine photo booth at my event?",
            answer: "Guests can enjoy unlimited sessions in our booth, so everyone can appear on as many celebrity-style magazine covers as they like."
        },
        {
            question: "How fast are the instant magazine cover prints?",
            answer: "Our luxury magazine photo booth delivers high-quality printed covers in just 30 seconds after each photo is taken."
        },
        {
            question: "Can we customize the magazine layouts for our event?",
            answer: "Yes! Choose from a range of luxury magazine templates or fully customize the cover to match your event’s theme and branding."
        },
        {
            question: "Is professional photography included with the magazine photo booth?",
            answer: "Yes, expert photographers ensure every cover shot is perfectly captured, giving your guests a true celebrity-style experience."
        },
        {
            question: "Is the magazine photo booth suitable for corporate or brand events?",
            answer: "Absolutely! Our booth enhances corporate events, product launches, and activations by creating engaging, shareable magazine-style photos."
        },
    ];

    const images = [
        {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1769261764/reyansh-birthday-party-4.webp",
            alt: "magazine photo booth at premium birthday party in Delhi NCR"
        },
        {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1769257579/taazaa.webp",
            alt: "Vogue-style magazine photo booth branding at corporate event in Noida"
        },
        {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1769340103/paras-and-anushree-3.webp",
            alt: "Magazine photo booth at cocktail in Delhi NCR"
        },
        {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1769348075/vikas-ans-sweta-4.webp",
            alt: "magazine photo booth setup for wedding couple in Gurugram"
        },
        {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1769261764/reyansh-birthday-party-3.webp",
            alt: "magazine photo booth experience at kids birthday celebration"
        },
        {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1769257579/taazaa-2.webp",
            alt: "Corporate magazine photo booth for brand activation event in Delhi NCR"
        },
        {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1769604826/jai-ans-shreya_rnea5o.webp",
            alt: "Luxury wedding magazine photo booth with Vogue cover style in Delhi"
        },
        {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1769348075/vikas-ans-sweta-3.webp",
            alt: "Elegant magazine photo booth for destination-style wedding shoot"
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    }


    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            {/* What We Need From Your Venue  */}
            <ScrollReveal direction="up" delay={0.2}>
                <SectionWrapper
                    id="venue-requirements-section"
                    ariaLabel="Frequently asked questions and logistics information"
                    className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
                >
                    <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
                        <VenueRequirements />
                    </div>
                </SectionWrapper>
            </ScrollReveal>

            {/* MPB Business Section  */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-gold/10 to-transparent">

                <div className="max-w-6xl mx-auto">

                    <div className="glass-enhanced border border-gold/20 rounded-2xl p-8 sm:p-12 relative overflow-hidden">

                        <div className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-gold/10 opacity-40 pointer-events-none" />

                        <div className="relative z-10">

                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-6 text-center">

                                Offer Magazine Photo Booth Under Your Own Brand

                            </h2>


                            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-8">

                                Expand your event business with a premium magazine cover style photo booth designed for luxury weddings,
                                corporate events and brand activations. The magazine booth creates high visual impact, encourages social sharing,
                                and positions your brand as a premium service provider in the event industry.

                            </p>


                            <div className="grid md:grid-cols-3 gap-6 mb-10">

                                <div className="glass p-6 rounded-xl border border-white/10">

                                    <h3 className="text-lg font-semibold mb-2 text-gold">

                                        Premium Brand Positioning

                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">

                                        Deliver a luxury photo experience that elevates your service offering beyond standard photo booths.

                                    </p>

                                </div>



                                <div className="glass p-6 rounded-xl border border-white/10">

                                    <h3 className="text-lg font-semibold mb-2 text-gold">

                                        High Demand Experience

                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">

                                        Magazine cover style photography is trending in weddings, corporate events and premium celebrations.

                                    </p>

                                </div>



                                <div className="glass p-6 rounded-xl border border-white/10">

                                    <h3 className="text-lg font-semibold mb-2 text-gold">

                                        Business Growth Opportunity

                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">

                                        Add a premium revenue stream to your photography, event planning or brand activation services.

                                    </p>

                                </div>

                            </div>



                            <div className="text-center">

                                <Link

                                    href="/magazine-photo-booth/for-sale"

                                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-300 text-black font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"

                                >

                                    Explore Business Opportunity

                                </Link>

                            </div>


                        </div>

                    </div>

                </div>

            </section>

            {/* Various Keywords */}
            <section className="py-14 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-gold/10 to-transparent">

                <div className="max-w-5xl mx-auto">

                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-6 text-center">

                        Magazine Photo Booth is Known by Many Names

                    </h2>

                    <p className="text-gray-300 text-center leading-relaxed mb-8">

                        The magazine photo booth is popularly known by different names depending on event style,
                        design inspiration, or industry terminology. While some call it a Vogue photo booth,
                        others refer to it as a magazine cover booth or editorial style photo booth.

                    </p>


                    <div className="flex flex-wrap justify-center gap-3">

                        {[
                            "Magazine Box",
                            "Magazine Cover Photo Booth",
                            "Selfie Cube Photo Booth",
                            "Fashion Magazine Booth",
                            "Magazine Frame Booth",
                            "Celebrity Photo Booth",
                            "Magazine Style Photo Booth",
                            "Cover Page Photo Booth",
                            "Walk-in Magazine Booth",
                            "Luxury Magazine Booth"
                        ].map((keyword) => (

                            <span
                                key={keyword}
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 text-sm"
                            >

                                {keyword}

                            </span>

                        ))}

                    </div>

                </div>

            </section>

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
                            {/* <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4 mb-12"> */}
                            {images.map((image, index) => (
                                <ScrollReveal key={index} direction="scale" delay={index * 0.05}>
                                    <div className="break-inside-avoid overflow-hidden rounded-xl glass-enhanced scale-on-hover cursor-pointer">

                                        <a href="/magazine-photo-booth/images">
                                            <Image
                                                src={image.url}
                                                alt={image.alt}
                                                width={800}
                                                height={1000}
                                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            /></a>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                        {/* </div> */}

                        <div className="text-center">
                            <a href="/magazine-photo-booth/images">
                                <Button3D
                                    variant="outline"
                                    className="border-purple-400 px-10 py-5 text-xl text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                                >
                                    View Full Gallery
                                </Button3D>
                            </a>
                        </div>

                    </div>
                </SectionWrapper>
            </ScrollReveal>

            {/* FAQ Section */}
            <ScrollReveal direction="up" delay={0.2}>
                <SectionWrapper
                    id="faq-section"
                    ariaLabel="Frequently Asked Questions"
                    className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-amber-900/10 to-black"
                >
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 mb-12 text-center">
                            Frequently Asked Questions
                        </h3>

                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <AccordionItem value={`faq-${index}`} className="glass-enhanced px-6 border-amber-700/50">
                                        <AccordionTrigger className="text-amber-100 hover:text-amber-300 font-semibold py-4">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-amber-200/80 pb-4">{faq.answer}</AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </div>
                </SectionWrapper>
            </ScrollReveal>
        </>
    )
}

export default MiddleTwoSection
