import { faqData } from "../hooks/faqs.data"
import { FaqAccordionClient } from "./faqs-accordion.client"

export function FaqsSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-5xl font-bold text-center mb-16 text-gradient">
        Frequently Asked Questions
      </h2>

      {/* ✅ Server renders FAQ content */}
      <FaqAccordionClient faqs={faqData} />
    </div>
  )
}
