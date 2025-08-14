"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqData = [
  {
    question: "How long does setup take?",
    answer:
      "Our professional team requires 60-90 minutes for complete setup, including booth assembly, lighting configuration, and system testing. We arrive early to ensure everything is perfect before your guests arrive.",
  },
  {
    question: "How much space do you need?",
    answer:
      "We require a minimum of 8x10 feet of floor space for the booth setup. This includes space for the booth structure, backdrop, lighting equipment, and guest queuing area.",
  },
  {
    question: "What are the power requirements?",
    answer:
      "We need access to one standard 15-amp electrical outlet within 50 feet of the booth location. Our equipment is energy-efficient and won't overload your venue's electrical system.",
  },
  {
    question: "What print sizes do you offer?",
    answer:
      "We provide high-quality prints in 4x6 and 6x8 inch formats. All prints are produced on premium photo paper with vibrant colors and professional finish that guests will treasure.",
  },
  {
    question: "Is there a limit on prints?",
    answer:
      "Our Premium and Luxury packages include unlimited prints throughout your event. The Basic package includes 50 prints, with additional prints available for $2 each.",
  },
  {
    question: "How many staff members will be on-site?",
    answer:
      "We provide 2 professional staff members: a photographer to capture perfect shots and a booth attendant to assist guests, manage props, and ensure smooth operation throughout your event.",
  },
  {
    question: "Do you have backup equipment?",
    answer:
      "Yes! We bring backup cameras, printers, lighting, and all essential equipment to every event. Our redundant systems ensure your photo booth experience continues uninterrupted.",
  },
  {
    question: "When will I receive digital photos?",
    answer:
      "All digital photos are delivered via a secure Google Drive link within 48 hours of your event. You'll receive high-resolution versions of every photo taken during your event.",
  },
  {
    question: "How much lead time for custom branding?",
    answer:
      "Custom magazine covers and booth branding require 2-3 weeks lead time for design, approval, and production. Rush orders may be available for an additional fee.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Cancellations made 30+ days before the event receive a full refund minus a $100 processing fee. Cancellations 14-29 days prior receive 50% refund. Cancellations within 14 days are non-refundable due to committed resources.",
  },
]

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
    </div>
  )
}
