"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { CardContent, CardTwo } from "@/components/ui/card"

type FAQ = { question: string; answer: string }

export function FaqAccordionClient({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <CardTwo key={index} className="border-0 overflow-hidden">
          <CardContent className="p-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <h3 className="font-display text-lg font-semibold pr-4">
                {faq.question}
              </h3>
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
        </CardTwo>
      ))}
    </div>
  )
}
