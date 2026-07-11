"use client"
import Image from "next/image"
import { Clock, Feather, Sparkles, Shield } from "lucide-react"
import { motion } from "framer-motion"


const Hero = () => {

  const highlights = [
    {
      icon: Clock,
      title: "Under 60 Seconds",
      description: "A brief, choreographed flight timed exactly to your ring exchange cue",
    },
    {
      icon: Feather,
      title: "Lifelike LED Wings",
      description: "Realistic flapping-wing design with illuminated wings, day or night",
    },
    {
      icon: Sparkles,
      title: "Secure Ring Delivery",
      description: "Rings are safely fastened and delivered mid-air to the bride and groom",
    },
    {
      icon: Shield,
      title: "Trained Operator",
      description: "Every flight is flown live by an experienced, professional pilot",
    },
  ]

  return (
    <><div className="flex flex-col sm:flex-row sm:items-start sm:gap-12 lg:gap-20 py-8">

      {/* Image */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-8 sm:mb-0">
        <div className="relative rounded-xl overflow-hidden">
          {/* TODO: replace with a real, original photo of the Butterfly Drone */}
          <Image
            src="https://res.cloudinary.com/dpnykjono/image/upload/v1/-butterfly-drone-hero.webp"
            alt="Butterfly Drone Hero"
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-pink-900/20 border border-pink-700/50 hover:border-pink-600/80 transition-all"
              >
                <Icon className="size-8 text-pink-600 mb-4" />
                <h3 className="text-lg font-bold text-pink-100 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-pink-200/70">{highlight.description}</p>
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