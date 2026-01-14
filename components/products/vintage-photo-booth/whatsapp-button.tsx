"use client"
import { useState } from "react"

const WhatsAppButton = () => {
  const [printCount, setPrintCount] = useState(200)
  const basePrice = 25000
  const extraPrintCost = 25

  const calculatePrice = (prints: number) => {
    if (prints <= 200) return basePrice
    return basePrice + (prints - 200) * extraPrintCost
  }

  const currentPrice = calculatePrice(printCount)


  const COMPANY_WHATSAPP = "919266037002";

  const sendWhatsAppBookingMessage = () => {
    const message =
      `Hello! I am interested in booking the *Vintage Photo Booth*.\n\n` +
      `Selected Print Package: ${printCount} prints\n` +
      `Total Price: ₹${currentPrice.toLocaleString()}\n\n` +
      `Please share availability and booking details.`;

    const url = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      
            <button
              onClick={sendWhatsAppBookingMessage}
              className="w-full block text-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-600/50 transition-all transform hover:scale-105"
            >
              Book Now
            </button>

    </>
  )
}

export default WhatsAppButton
