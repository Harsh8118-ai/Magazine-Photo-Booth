"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"


export function WhatsAppCTA() {
  const [isHovered, setIsHovered] = useState(false)

  const generateWhatsAppMessage = () => {
    const message = "Hi! I’m interested in booking The Luxury Booths for an upcoming event. Please share availability, packages, and pricing details."
    return encodeURIComponent(message)
  }

  const generateWhatsAppURL = () => {
    const phoneNumber = "9266037002"
    const message = generateWhatsAppMessage()
    const utmParams = "utm_source=website&utm_medium=whatsapp&utm_campaign=booking_inquiry"
    return `https://wa.me/${phoneNumber}?text=${message}&${utmParams}`
  }

  return (
    <div className="fixed right-4 sm:right-6 lg:left-6 lg:right-auto z-50 bottom-[calc(1rem+env(safe-area-inset-bottom))] sm:bottom-[calc(2.5rem+env(safe-area-inset-bottom))] lg:bottom-[calc(3rem+env(safe-area-inset-bottom))]" >
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
          className="w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 !p-0 hover:scale-110" >
          <a href={generateWhatsAppURL()} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-full h-full size-full"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M20.52 3.48a11.8 11.8 0 0 0-8.49-3.5C5.38-.02 0 5.36 0 12.02c0 2.12.55 4.1 1.52 5.84L0 24l6.3-1.65a12 12 0 0 0 5.73 1.46h.01c6.62 0 12-5.38 12-12.02 0-3.21-1.25-6.24-3.52-8.31zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.2-3.74.98 1-3.64-.23-.37a9.52 9.52 0 1 1 8.16 4.55zm5.51-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.27.3-1.06 1.03-1.06 2.5 0 1.46 1.09 2.87 1.25 3.06.15.2 2.15 3.28 5.2 4.6.73.32 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35z" />
            </svg>
          </a>
        </Button>
      </div>
    </div>
  )
}
