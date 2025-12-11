"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"


const faqData = [
  // GENERAL & BRAND QUESTIONS
  {
    question: "What makes The Luxury Booths different from other photo booth companies?",
    answer:
      "We specialize in premium, high-end booth experiences with luxury lighting, custom branding, instant professional-grade prints, and a fully trained team. Every setup is designed to look elegant, modern, and event-ready and never cluttered or basic.",
  },
  {
    question: "Do you travel to different cities?",
    answer:
      "Yes, we serve Delhi, Noida, Gurgaon, Jaipur, Jim Corbett, and surrounding regions. We also travel across India for weddings, corporate events, and luxury celebrations.",
  },

  // SETUP & TECHNICAL REQUIREMENTS
  {
    question: "How long does setup take?",
    answer:
      "Our team requires 60–90 minutes for setup, depending on the booth type. This includes assembling the booth, configuring lighting, setting backdrops, and system testing.",
  },
  {
    question: "How much space do you need?",
    answer:
      "We require 8x10 feet for Magazine & Mirror Booth setups, and 6x8 feet for Vintage Booth and Instant Prints. Space requirements can be adjusted based on your venue layout.",
  },
  {
    question: "What are the power requirements?",
    answer:
      "A single 15-amp electrical outlet within 30–50 feet of the booth location is sufficient. All our equipment is safe and energy-efficient.",
  },
  {
    question: "Do you need internet/WiFi?",
    answer:
      "Internet is needed only if you request live-sharing features like WhatsApp sharing or instant cloud uploads. For printing and photo capture, internet is not required.",
  },

  // MAGAZINE PHOTO BOOTH FAQS
  {
    question: "How does the Magazine Photo Booth work?",
    answer:
      "Guests step inside a real magazine-style frame with LED lighting and a cinematic setup. Our photographer captures professional photos, which are then printed instantly with custom magazine-style covers.",
  },
  {
    question: "Can we customize the magazine cover?",
    answer:
      "Yes! We offer fully personalized magazine covers featuring your event name, couple names, brand logo, or theme colors. You will receive 2–3 design options to choose from.",
  },
  {
    question: "How much time do you need to design custom covers?",
    answer:
      "Custom magazine covers require 5–7 days for design and approval. For full event branding, allow 10–12 days. Express delivery can be arranged depending on the schedule.",
  },

  // MIRROR BOOTH FAQS
  {
    question: "What is included in the Mirror Booth experience?",
    answer:
      "Our Mirror Booth includes interactive animations, touch-to-start features, digital signatures on photos, fun props, premium lighting, and instant prints. It’s perfect for weddings, birthdays, and luxury events.",
  },
  {
    question: "Do guests get instant prints from the Mirror Booth?",
    answer:
      "Yes, instant 4x6 or 6x8 prints are available within seconds. Unlimited prints can be included depending on your package.",
  },

  // VINTAGE PHOTO BOOTH FAQS
  {
    question: "How is the Vintage Photo Booth different?",
    answer:
      "The Vintage Booth offers a retro aesthetic with warm tones, classic filters, and old-school charm. Prints resemble timeless film-style photos and great for weddings, themed parties, and premium décor events.",
  },
  {
    question: "Do you offer retro-style printed strips?",
    answer:
      "Yes, we offer vintage photo strips and classic retro prints for an authentic old-school experience.",
  },

  // INSTANT PRINTS SERVICE FAQS
  {
    question: "How fast are the instant prints?",
    answer:
      "Our high-speed dye-sublimation printers deliver professional-quality prints in 10–12 seconds per photo. The print quality is smudge-proof and lasts for decades.",
  },
  {
    question: "Can we add custom branding to the instant prints?",
    answer:
      "Absolutely. We can include your logo, wedding monogram, couple initials, event theme, or sponsor branding on each print.",
  },

  // PRINTS, DIGITAL MEDIA & SHARING
  {
    question: "What print sizes do you offer?",
    answer:
      "We offer 4x6, 5x7, 6x8, vintage strips, and magazine-style prints. You may choose one or include multiple options depending on your package.",
  },
  {
    question: "Is there a limit on prints?",
    answer:
      "Most of our packages come with unlimited prints. We also offer custom print limits depending on event size and budget.",
  },
  {
    question: "When will I receive digital photos?",
    answer:
      "Digital photos are delivered within 24–48 hours via Google Drive link. Same-day delivery can be arranged on request.",
  },

  // STAFF, SUPPORT & BACKUP
  {
    question: "How many staff members will be on-site?",
    answer:
      "We always provide 2 trained professionals, a camera expert and a booth manager to ensure smooth flow, proper lighting, and guest support.",
  },
  {
    question: "Do you bring backup equipment?",
    answer:
      "Yes, we carry backup cameras, lights, printers, and essential gear to ensure uninterrupted service at every event.",
  },

  // BOOKINGS, PAYMENTS & CANCELLATIONS
  {
    question: "How early should we book?",
    answer:
      "For weddings and peak-season events, we recommend booking 3–4 weeks in advance. For last-minute bookings, slots depend on availability.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellations 30+ days before the event get a full refund (minus admin charges). Cancellations within 14–29 days receive 50% refund. Under 14 days, the booking becomes non-refundable.",
  },
];


export function FaqsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-5xl font-bold text-center mb-16 text-gradient">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <Card key={index} className="glass border-0 overflow-hidden">
            <CardContent className="p-0">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="font-display text-lg font-semibold pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-purple-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="glass border-0 max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h3 className="font-display text-xl font-bold mb-3 text-gold">Need Help with Venue Planning?</h3>
            <p className="text-gray-300 mb-4">
              Our experienced team can visit your venue beforehand to assess the space and recommend the optimal booth
              placement for maximum guest engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919266037002"
                className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300"
              >
                Call for Site Visit
              </a>
              <a
                href="mailto:theluxurybooths@gmail.com"
                className="inline-flex items-center justify-center px-6 py-2 glass border border-gold text-gold hover:bg-gold hover:text-black rounded-lg font-semibold transition-all duration-300"
              >
                Email Questions
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
