"use client"

import { useState } from "react"

const WhatsAppButton = () => {

  const [printCount] = useState(200)

  const basePrice = 25000
  const extraPrintCost = 70

  const calculatePrice = (prints: number) => {
    if (prints <= 200) return basePrice

    return basePrice + (prints - 200) * extraPrintCost
  }

  const currentPrice = calculatePrice(printCount)

  const COMPANY_WHATSAPP = "919266037002"

  const sendWhatsAppBookingMessage = () => {

    const message =
      `Hello! I am interested in booking the *Strip Photo Booth*.\n\n` +
      `Selected Print Package: ${printCount} prints\n` +
      `Estimated Starting Price: ₹${currentPrice.toLocaleString()}\n\n` +
      `Please share availability, pricing details, and booking process.`

    const url =
      `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  return (
    <>
      <button
        onClick={sendWhatsAppBookingMessage}
        className="w-full block text-center px-6 py-3 bg-linear-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/40 transition-all transform hover:scale-105"
      >
        Book Strip Photo Booth
      </button>
    </>
  )
}

export default WhatsAppButton

