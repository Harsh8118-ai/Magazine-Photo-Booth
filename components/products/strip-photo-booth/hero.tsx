"use client"

import Image from "next/image"
import {
  Clock,
  Sparkles,
  Share2,
  FileImage
} from "lucide-react"

import { motion } from "framer-motion"

const Hero = () => {

  const highlights = [
    {
      icon: Clock,
      title: "15 Second Prints",
      description:
        "Guests receive custom luxury photo strips instantly during the event.",
    },

    {
      icon: FileImage,
      title: "DSLR Quality",
      description:
        "Professional DSLR photography with premium lighting and sharp studio-quality output.",
    },

    {
      icon: Sparkles,
      title: "Custom Strip Designs",
      description:
        "Every strip is personalized according to your wedding or event theme aesthetics.",
    },

    {
      icon: Share2,
      title: "Instant Sharing",
      description:
        "Guests receive digital copies instantly through QR codes and WhatsApp sharing.",
    },
  ]

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 lg:gap-20 py-8">

        {/* Image */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-8 sm:mb-0">

          <div className="relative rounded-xl overflow-hidden">

            <Image
              src="https://res.cloudinary.com/dpnykjono/image/upload/v1780402924/Strip-5.webp"
              alt="Luxury Strip Photo Booth"
              width={350}
              height={450}
              sizes="(max-width: 768px) 50vw, 182px"
              className="object-contain"
              priority
            />

          </div>

        </div>

        {/* Highlights */}
        <section className="w-full px-2 sm:px-0">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {highlights.map((highlight, index) => {

              const Icon = highlight.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1
                  }}
                  className="p-6 rounded-lg bg-pink-900/20 border border-pink-500/30 hover:border-pink-400/70 transition-all"
                >

                  <Icon className="size-8 text-pink-400 mb-4" />

                  <h3 className="text-lg font-bold text-white mb-2">
                    {highlight.title}
                  </h3>

                  <p className="text-sm text-pink-100/70">
                    {highlight.description}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </section>

      </div>
    </>
  )
}

export default Hero

