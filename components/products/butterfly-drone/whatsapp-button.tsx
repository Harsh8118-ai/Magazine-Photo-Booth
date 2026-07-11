"use client"
import { useState } from "react"

const WhatsAppButton = () => {
  const [flightCount] = useState(1)

  // TODO: confirm actual pricing with the business before publishing.
  const basePrice = 45000
  const extraFlightCost = 12000

  const calculatePrice = (flights: number) => {
    if (flights <= 1) return basePrice
    return basePrice + (flights - 1) * extraFlightCost
  }

  const currentPrice = calculatePrice(flightCount)

  const COMPANY_WHATSAPP = "919266037002";

  const sendWhatsAppBookingMessage = () => {
    const message =
      `Hello! I am interested in booking the *Butterfly Drone*.\n\n` +
      `Selected Package: 1 Flight - Ring Delivery\n` +
      `Starting Price: ₹${currentPrice.toLocaleString()}\n\n` +
      `Please share availability and booking details.`;

    const url = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <button
        onClick={sendWhatsAppBookingMessage}
        className="w-full block text-center px-6 py-3 bg-linear-to-r from-pink-600 to-pink-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-600/50 transition-all transform hover:scale-105"
      >
        Book Now
      </button>
    </>
  )
}

export default WhatsAppButton