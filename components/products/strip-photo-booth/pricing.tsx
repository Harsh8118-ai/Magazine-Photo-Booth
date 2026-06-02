"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const Pricing = () => {

  const [printCount, setPrintCount] = useState(200)
  const [open, setOpen] = useState(false)

  const basePrice = 25000
  const extraPrintCost = 70

  const calculatePrice = (prints: number) => {
    if (prints <= 200) return basePrice
    return basePrice + (prints - 200) * extraPrintCost
  }

  const currentPrice = calculatePrice(printCount)

  const priceBreakdown =
    printCount > 200
      ? (printCount - 200) * extraPrintCost
      : 0

  const printOptions = [200, 250, 300, 350, 400, 450, 500]

  const COMPANY_WHATSAPP = "919266037002"

  const sendWhatsAppBookingMessage = () => {

    const message =
      `Hello! I am interested in booking the *Strip Photo Booth*.\n\n` +
      `Selected Print Package: ${printCount} prints\n` +
      `Total Price: ₹${currentPrice.toLocaleString()}\n\n` +
      `Please share availability and booking details.`

    const url =
      `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  return (
    <>
      {/* Pricing Calculator */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto">

          <h3 className="text-3xl font-serif font-bold text-white mb-2 text-center">
            Choose Your Strip Print Package
          </h3>

          <p className="text-center text-pink-200 mb-8">
            Instant premium strip prints customized for your event.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-enhanced p-8 rounded-lg border border-pink-500/30"
          >

            {/* Print Count Selector */}
            <div className="mb-8 relative">

              <label className="block text-sm font-semibold text-pink-200 mb-4">
                Number of Prints
              </label>

              <div
                onClick={() => setOpen(!open)}
                className="w-full px-4 py-3 bg-pink-900/20 border border-pink-500/30 rounded-lg text-white font-semibold cursor-pointer flex justify-between items-center"
              >
                {printCount} prints

                <span className="text-pink-400">
                  ▼
                </span>

              </div>

              {open && (
                <div className="absolute left-0 right-0 mt-2 bg-pink-950/95 border border-pink-500/30 rounded-lg shadow-lg z-20 max-h-60 overflow-y-auto">

                  {printOptions.map((option) => (

                    <div
                      key={option}
                      onClick={() => {
                        setPrintCount(option)
                        setOpen(false)
                      }}
                      className={`px-4 py-3 cursor-pointer hover:bg-pink-800/40 ${
                        option === printCount
                          ? "bg-pink-800/50 text-pink-200"
                          : "text-white"
                      }`}
                    >
                      {option} prints
                    </div>

                  ))}

                </div>
              )}

            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-pink-500/20">

              <div className="flex justify-between text-pink-100">
                <span>Base Price (200 prints)</span>
                <span>₹{basePrice.toLocaleString()}</span>
              </div>

              {priceBreakdown > 0 && (
                <div className="flex justify-between text-pink-300">

                  <span>
                    Extra {printCount - 200} prints
                  </span>

                  <span>
                    ₹{priceBreakdown.toLocaleString()}
                  </span>

                </div>
              )}

            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center mb-8">

              <span className="text-lg font-serif text-white">
                Total Price
              </span>

              <span className="text-3xl font-serif font-bold text-pink-400">
                ₹{currentPrice.toLocaleString()}
              </span>

            </div>

            {/* Features */}
            <div className="mb-8 space-y-2 text-sm text-pink-100/80">

              <p>✓ DSLR Quality Photography</p>
              <p>✓ Instant Strip Prints</p>
              <p>✓ Custom Event Templates</p>
              <p>✓ QR & WhatsApp Sharing</p>
              <p>✓ Unlimited Guest Sessions</p>

            </div>

            {/* CTA */}
            <button
              onClick={sendWhatsAppBookingMessage}
              className="w-full block text-center px-6 py-3 bg-linear-to-r from-pink-500 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-pink-500/40 transition-all transform hover:scale-105"
            >
              Book Strip Photo Booth
            </button>

          </motion.div>

        </div>

      </section>
    </>
  )
}

export default Pricing

