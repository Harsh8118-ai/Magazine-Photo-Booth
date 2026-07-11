
import StripPhotoBooth from "@/components/products/strip-photo-booth/strip-photo-booth"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Strip Photo Booth Rental Delhi NCR | Luxury Photo Strip Booth for Weddings & Events",
  description:
    "Luxury strip photo booth rental in Delhi NCR with instant photo strip prints, DSLR photography, custom themed templates, and premium packaging. Perfect for weddings, sangeet, birthdays, corporate events, and luxury celebrations.",

  keywords: [
    "strip photo booth",
    "strip photo booth rental",
    "photo strip booth",
    "luxury strip photo booth",
    "strip photo booth in delhi ncr",
    "strip photo booth rental delhi",
    "instant photo strip printing",
    "wedding strip photo booth",
    "photo strip booth rental",
    "custom strip photo booth",
    "dslr strip photo booth",
    "enclosed photo booth",
    "strip photo booth price",
    "strip photo booth cost",
    "luxury photo booth wedding",
    "event photo booth delhi",
    "photo booth for sangeet",
    "photo booth for weddings",
    "instant print photo booth delhi ncr"
  ],

  openGraph: {
    title:
      "Strip Photo Booth Rental Delhi NCR | Luxury Photo Strip Booth for Weddings & Events",

    description:
      "Luxury strip photo booth rental with instant custom photo strip prints, DSLR setup, themed templates, and premium packaging for weddings and events in Delhi NCR.",

    type: "website",

    images: ["/strip-photo-booth.webp"],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Strip Photo Booth Rental Delhi NCR | Luxury Photo Strip Booth for Weddings & Events",

    description:
      "Luxury strip photo booth rental with instant custom photo strip prints, DSLR setup, themed templates, and premium packaging for weddings and events in Delhi NCR.",

    images: ["/strip-photo-booth.webp"],
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
    canonical: "https://theluxurybooths.com/strip-photo-booth",
  },
}

export default function StripPhotoBoothPage() {
  return <StripPhotoBooth />
}

