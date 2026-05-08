"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Sparkles,
  Camera,
  Share2,
  Zap
} from "lucide-react"

const Hero = () => {

  const highlights = [
    {
      icon: Sparkles,
      title: "Interactive Touchscreen",
      description:
        "Guests interact directly with the smart mirror using animations, touch prompts, and fun experiences.",
    },
    {
      icon: Camera,
      title: "Instant Premium Prints",
      description:
        "Luxury-quality instant prints delivered within seconds for unforgettable guest memories.",
    },
    {
      icon: Zap,
      title: "Unlimited Sessions",
      description:
        "Guests can enjoy unlimited mirror booth sessions throughout the event celebration.",
    },
    {
      icon: Share2,
      title: "WhatsApp Sharing",
      description:
        "Instant digital sharing for Instagram stories, reels, and WhatsApp memories.",
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center py-10">

      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative rounded-2xl overflow-hidden border border-purple-500/20">
          <Image
            src="/mirror-photo-booth.webp"
            alt="mirror photo booth wedding Delhi"
            width={520}
            height={720}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Highlights */}
      <div className="w-full lg:w-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-enhanced p-6 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all"
              >
                <Icon className="size-8 text-purple-400 mb-4" />

                <h3 className="text-lg font-bold mb-2 text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default Hero