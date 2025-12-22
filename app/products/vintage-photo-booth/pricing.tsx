"use client"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const Pricing = () => {
  const [printCount, setPrintCount] = useState(200)
  const [open, setOpen] = useState(false);

  const basePrice = 25000
  const extraPrintCost = 25

  const calculatePrice = (prints: number) => {
    if (prints <= 200) return basePrice
    return basePrice + (prints - 200) * extraPrintCost
  }

  const currentPrice = calculatePrice(printCount)
  const priceBreakdown = printCount > 200 ? (printCount - 200) * extraPrintCost : 0

  const printOptions = [200, 250, 300, 350, 400, 450, 500]

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
      {/* Pricing Calculator */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-amber-100 mb-2 text-center">Choose Your Print Package</h3>
          <p className="text-amber-300 text-center mb-8">Start with 200 premium prints • Base price - ₹25,000</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-enhanced p-8 rounded-lg border border-amber-700/50"
          >
            {/* Print Count Selector */}
            <div className="mb-8 relative">
              <label className="block text-sm font-semibold text-amber-200 mb-4">
                Number of Prints
              </label>
              <div
                onClick={() => setOpen(!open)}
                className="w-full px-4 py-3 bg-amber-900/30 border border-amber-700 rounded-lg text-white font-semibold cursor-pointer flex justify-between items-center"
              >
                {printCount} prints
                <span className="text-amber-400">▼</span>
              </div>

              {open && (
                <div className="absolute left-0 right-0 mt-2 bg-amber-900/90 border border-amber-700/50 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">
                  {printOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => {
                        setPrintCount(option);
                        setOpen(false);
                      }}
                      className={`px-4 py-3 cursor-pointer hover:bg-amber-800/50 ${option === printCount ? "bg-amber-800/60 text-amber-300" : "text-white"
                        }`}
                    >
                      {option} prints
                    </div>
                  ))}
                </div>
              )}
            </div>


            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-amber-700/30">
              <div className="flex justify-between text-amber-200">
                <span>Base Price (200 prints)</span>
                <span>₹{basePrice.toLocaleString()}</span>
              </div>
              {priceBreakdown > 0 && (
                <div className="flex justify-between text-amber-300">
                  <span>Extra {printCount - 200} prints × ₹25</span>
                  <span>₹{priceBreakdown.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-serif text-amber-100">Total Price</span>
              <span className="text-3xl font-serif font-bold text-amber-400">₹{currentPrice.toLocaleString()}</span>
            </div>

            <button
              onClick={sendWhatsAppBookingMessage}
              className="w-full block text-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-600/50 transition-all transform hover:scale-105"
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
