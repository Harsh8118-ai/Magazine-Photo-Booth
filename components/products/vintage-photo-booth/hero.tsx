"use client"
import Image from "next/image"
import { Clock, Sparkles, Share2, FileImage } from "lucide-react"
import { motion } from "framer-motion"


const Hero = () => {

  const highlights = [
    {
      icon: Clock,
      title: "Instant Prints",
      description: "Guests receive printed photographs within 30 seconds - a meaningful return gift",
    },
    {
      icon: FileImage,
      title: "DSLR Quality",
      description: "Studio-grade portraits with warm tones, sharp details, and timeless elegance",
    },
    {
      icon: Sparkles,
      title: "Unlimited Sessions",
      description: "Guests can return with family and friends throughout the event",
    },
    {
      icon: Share2,
      title: "WhatsApp Sharing",
      description: "Digital copies for today, printed memories for forever",
    },
  ]

  return (
    <><div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 lg:gap-20 py-8">

      {/* Image */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-8 sm:mb-0">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dpnykjono/image/upload/v1771402905/vintage-booth.webp"
            alt="Vintage Photo Booth Hero"
            width={350}
            height={450}
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-amber-900/20 border border-amber-700/50 hover:border-amber-600/80 transition-all"
              >
                <Icon className="size-8 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold text-amber-100 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-amber-200/70">{highlight.description}</p>
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
