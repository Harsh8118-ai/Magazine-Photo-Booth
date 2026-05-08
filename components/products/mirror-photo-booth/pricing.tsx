"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import WhatsAppCTA from "./whatsapp-button"

const Pricing = () => {

  const [hours, setHours] = useState(3)
  const [open, setOpen] = useState(false)

  const basePrice = 35000
  const extraHourCost = 5000

  const calculatePrice = (selectedHours: number) => {
    if (selectedHours <= 3) return basePrice
    return basePrice + (selectedHours - 3) * extraHourCost
  }

  const currentPrice = calculatePrice(hours)
  const extraCost = hours > 3 ? (hours - 3) * extraHourCost : 0

  const hourOptions = [3, 4, 5, 6, 7, 8]

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">

      <div className="max-w-3xl mx-auto">

        <h3 className="text-3xl sm:text-4xl font-display font-bold text-center text-gradient mb-3">
          Customize Your Mirror Booth Experience
        </h3>

        <p className="text-center text-purple-300 mb-10">
          Luxury interactive mirror booth with instant prints & premium guest experience
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-enhanced p-8 rounded-2xl border border-purple-500/20"
        >

          {/* Hours Selector */}
          <div className="mb-8 relative">

            <label className="block text-sm font-semibold text-purple-300 mb-4">
              Event Duration
            </label>

            <div
              onClick={() => setOpen(!open)}
              className="w-full px-4 py-3 bg-purple-900/20 border border-purple-500/30 rounded-lg cursor-pointer flex justify-between items-center"
            >
              <span>{hours} Hours</span>
              <span className="text-purple-400">▼</span>
            </div>

            {open && (
              <div className="absolute left-0 right-0 mt-2 bg-black border border-purple-500/20 rounded-xl overflow-hidden z-20">

                {hourOptions.map((option) => (
                  <div
                    key={option}
                    onClick={() => {
                      setHours(option)
                      setOpen(false)
                    }}
                    className={`px-4 py-3 cursor-pointer hover:bg-purple-900/20 transition-all ${
                      hours === option ? "bg-purple-900/30 text-purple-300" : "text-white"
                    }`}
                  >
                    {option} Hours
                  </div>
                ))}

              </div>
            )}

          </div>

          {/* Price Breakdown */}
          <div className="space-y-4 mb-8 border-b border-purple-500/20 pb-6">

            <div className="flex justify-between text-gray-300">
              <span>Base Package (3 Hours)</span>
              <span>₹{basePrice.toLocaleString()}</span>
            </div>

            {extraCost > 0 && (
              <div className="flex justify-between text-purple-300">
                <span>Extra {hours - 3} Hour(s)</span>
                <span>₹{extraCost.toLocaleString()}</span>
              </div>
            )}

          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-8">

            <span className="text-lg font-semibold text-white">
              Total Price
            </span>

            <span className="text-4xl font-bold text-purple-400">
              ₹{currentPrice.toLocaleString()}
            </span>

          </div>

          {/* Included */}
          <div className="mb-8">
            <p className="text-sm text-purple-300 mb-4">
              What's Included:
            </p>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>✓ Interactive touchscreen mirror booth</li>
              <li>✓ Instant premium prints</li>
              <li>✓ Unlimited sessions</li>
              <li>✓ Custom branding & overlays</li>
              <li>✓ WhatsApp sharing</li>
              <li>✓ Professional booth attendants</li>
              <li>✓ Luxury event setup</li>

            </ul>
          </div>

          <WhatsAppCTA
            hours={hours}
            price={currentPrice}
          />

        </motion.div>

      </div>

    </section>
  )
}

export default Pricing