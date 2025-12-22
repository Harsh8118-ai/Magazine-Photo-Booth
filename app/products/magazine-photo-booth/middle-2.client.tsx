"use client"
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { SectionWrapper } from "@/components/section-wrapper"
import { ScrollReveal } from "@/components/scroll-reveal"
import { VenueRequirements } from "@/components/venue-requirements"
import { Button3D } from "@/components/3d-button"
import { AdvancedBookingSystem } from "@/components/advanced-booking-system"

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
    return (
        <>
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
                    id="venue-requirements-section"
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
                                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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
