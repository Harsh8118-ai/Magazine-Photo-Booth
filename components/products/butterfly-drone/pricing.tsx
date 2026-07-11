"use client"
import { useState } from "react"
import { motion } from "framer-motion"

const Pricing = () => {
  const [flightCount, setFlightCount] = useState(1)
  const [open, setOpen] = useState(false);

  // TODO: confirm actual pricing with the business before publishing.
  const basePrice = 40000
  const extraFlightCost = 12000

  const flightOptions = [
    { flights: 1, label: "1 Flight - Ring Delivery" },
    { flights: 2, label: "2 Flights - Ring Delivery + Entrance" },
    { flights: 3, label: "3 Flights - Ring Delivery + Entrance + Reveal" },
    { flights: 4, label: "4 Flights - Full Event Coverage" },
  ]

  const calculatePrice = (flights: number) => {
    if (flights <= 1) return basePrice
    return basePrice + (flights - 1) * extraFlightCost
  }

  const currentPrice = calculatePrice(flightCount)
  const priceBreakdown = flightCount > 1 ? (flightCount - 1) * extraFlightCost : 0
  const currentOption = flightOptions.find((option) => option.flights === flightCount)

  const COMPANY_WHATSAPP = "919266037002";

  const sendWhatsAppBookingMessage = () => {
    const message =
      `Hello! I am interested in booking the *Butterfly Drone*.\n\n` +
      `Selected Package: ${currentOption?.label}\n` +
      `Total Price: ₹${currentPrice.toLocaleString()}\n\n` +
      `Please share availability and booking details.`;

    const url = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      {/* Pricing Calculator */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-pink-100 mb-2 text-center">Choose Your Flight Package</h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-enhanced p-8 rounded-lg border border-pink-700/50"
          >
            {/* Flight Package Selector */}
            <div className="mb-8 relative">
              <label className="block text-sm font-semibold text-pink-200 mb-4">
                Number of Flight Moments
              </label>
              <div
                onClick={() => setOpen(!open)}
                className="w-full px-4 py-3 bg-pink-900/30 border border-pink-700 rounded-lg text-white font-semibold cursor-pointer flex justify-between items-center"
              >
                {currentOption?.label}
                <span className="text-pink-400">▼</span>
              </div>

              {open && (
                <div className="absolute left-0 right-0 mt-2 bg-pink-900/90 border border-pink-700/50 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                  {flightOptions.map((option) => (
                    <div
                      key={option.flights}
                      onClick={() => {
                        setFlightCount(option.flights);
                        setOpen(false);
                      }}
                      className={`px-4 py-3 cursor-pointer hover:bg-pink-800/50 ${option.flights === flightCount ? "bg-pink-800/60 text-pink-300" : "text-white"
                        }`}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>


            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-pink-700/30">
              <div className="flex justify-between text-pink-200">
                <span>Base Price (1 Flight - Ring Delivery)</span>
                <span>₹{basePrice.toLocaleString()}</span>
              </div>
              {priceBreakdown > 0 && (
                <div className="flex justify-between text-pink-300">
                  <span>Extra {flightCount - 1} flight{flightCount - 1 > 1 ? "s" : ""} </span>
                  <span>₹{priceBreakdown.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-serif text-pink-100">Total Price</span>
              <span className="text-3xl font-serif font-bold text-pink-400">₹{currentPrice.toLocaleString()}</span>
            </div>

            <button
              onClick={sendWhatsAppBookingMessage}
              className="w-full block text-center px-6 py-3 bg-linear-to-r from-pink-600 to-pink-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-600/50 transition-all transform hover:scale-105"
            >
              Book Now
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Pricing