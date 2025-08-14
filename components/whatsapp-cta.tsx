"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

interface WhatsAppCTAProps {
  selectedDate?: string
  selectedEventType?: string
  selectedPackage?: string
  selectedCity?: string
  className?: string
}

export function WhatsAppCTA({
  selectedDate = "{DATE}",
  selectedEventType = "{EVENT_TYPE}",
  selectedPackage = "{PACKAGE}",
  selectedCity = "{CITY}",
  className = "",
}: WhatsAppCTAProps) {
  const [isHovered, setIsHovered] = useState(false)

  const generateWhatsAppMessage = () => {
    const message = `Hi! I want to book the Magazine Photo Booth on ${selectedDate} for a ${selectedEventType}. Package: ${selectedPackage}. Venue: ${selectedCity}. Please share availability & quote.`
    return encodeURIComponent(message)
  }

  const generateWhatsAppURL = () => {
    const phoneNumber = "1234567890" // Replace with actual WhatsApp business number
    const message = generateWhatsAppMessage()
    const utmParams = "utm_source=website&utm_medium=whatsapp&utm_campaign=booking_inquiry"
    return `https://wa.me/${phoneNumber}?text=${message}&${utmParams}`
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      <div className="relative">
        {isHovered && (
          <div className="absolute bottom-16 right-0 bg-black/90 text-white p-3 rounded-lg text-sm max-w-xs whitespace-nowrap mb-2 glass">
            Chat with us on WhatsApp
            <div className="absolute bottom-0 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90 transform translate-y-full"></div>
          </div>
        )}

        <Button
          asChild
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 p-0 hover:scale-110"
        >
          <a href={generateWhatsAppURL()} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
            <MessageCircle className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </div>
  )
}
