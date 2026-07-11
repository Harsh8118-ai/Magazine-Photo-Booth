import ButterflyDrone from "@/components/products/butterfly-drone/butterfly-drone"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Butterfly Drone Rental Delhi NCR | Luxury Butterfly Drone for Weddings & Events",

  description:
    "Book a luxury Butterfly Drone experience for weddings, corporate events, product launches, and premium celebrations. Realistic flying butterfly drones with professional operators available across Delhi NCR and Pan India.",

  keywords: [
    "butterfly drone",
    "butterfly drone",
    "butterfly drone rental",
    "butterfly drone rental",
    "butterfly drone for wedding",
    "wedding butterfly drone",
    "luxury butterfly drone",
    "flying butterfly drone",
    "butterfly drone show",
    "butterfly drone performance",
    "butterfly drone entertainment",
    "butterfly drone experience",
    "corporate event butterfly drone",
    "brand activation butterfly drone",
    "event entertainment",
    "luxury wedding entertainment",
    "wedding entrance ideas",
    "premium event entertainment",
    "butterfly drone delhi",
    "butterfly drone delhi ncr",
    "butterfly drone india",
    "butterfly drone price",
    "butterfly drone booking",
    "butterfly drone for events"
  ],

  openGraph: {
    title:
      "Butterfly Drone Rental Delhi NCR | Luxury Butterfly Drone Experience",

    description:
      "Create unforgettable wedding and event moments with a luxury Butterfly Drone experience. Available for weddings, receptions, corporate events, luxury parties, and brand activations.",

    type: "website",

    images: ["/-butterfly-drone.webp"],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Butterfly Drone Rental Delhi NCR | Luxury Butterfly Drone Experience",

    description:
      "Luxury Butterfly Drone rental for weddings, corporate events, luxury celebrations, and experiential marketing across Delhi NCR and India.",

    images: ["/-butterfly-drone.webp"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://theluxurybooths.com/butterfly-drone",
  },
}

export default function ButterflyDronePage() {
  return <ButterflyDrone />
}