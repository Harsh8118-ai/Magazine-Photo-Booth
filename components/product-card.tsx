"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  image: string
  href: string
  icon?: LucideIcon
  accentColor?: "gold" | "amber"
  features: string[]
}

export function ProductCard({
  title,
  description,
  image,
  href,
  icon: Icon,
  accentColor = "gold",
  features,
}: ProductCardProps) {
  const colorClasses = {
    gold: {
      text: "text-gradient",
      border: "border-gold/30 hover:border-gold/50",
      bg: "from-purple-900/20 to-transparent",
    },
    amber: {
      text: "text-amber-100",
      border: "border-amber-700/50 hover:border-amber-600/80",
      bg: "from-amber-900/20 to-transparent",
    },
  }

  const colors = colorClasses[accentColor]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`group glass-enhanced rounded-lg overflow-hidden border ${colors.border} transition-all bg-gradient-to-b ${colors.bg}`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          {Icon && (
            <Icon className={`w-6 h-6 ${accentColor === "gold" ? "text-gold" : "text-amber-600"} flex-shrink-0 mt-1`} />
          )}
          <h3 className={`text-xl font-bold ${colors.text}`}>{title}</h3>
        </div>

        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-xs text-gray-500 flex items-start gap-2">
              <span className={`${accentColor === "gold" ? "text-gold" : "text-amber-600"} mt-0.5`}>•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Link href={href} className="block">
          <button
            className={`w-full py-2 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              accentColor === "gold"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-600/50"
                : "bg-gradient-to-r from-amber-600 to-amber-700 hover:shadow-lg hover:shadow-amber-600/50"
            }`}
          >
            Explore
          </button>
        </Link>
      </div>
    </motion.div>
  )
}
