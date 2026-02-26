import VintagePhotoBooth from "@/components/products/vintage-photo-booth/vintage-photo-booth"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vintage Photo Booth Rental Delhi NCR | Instant Prints for Weddings",
  description:
    "Vintage photo booth rental in Delhi NCR with instant printed photographs.A perfect wedding return gift customized with names and date. Trusted by premium events.",
  keywords: [
    "vintage photo booth",
    "vintage photobooths",
    "vintage photo booth near me",
    "vintage photobooth near me",
    "vintage photo booth rental",
    "vintage photo booth rental delhi ncr",
    "vintage photo booth for wedding",
    "mirror photo booth for wedding",
    "instant prints photo booth delhi",
    "retro photo booth for wedding",
    "luxury photo booth wedding"
  ],

  openGraph: {
    title: "Vintage Photo Booth Rental Delhi NCR | Instant Prints for Weddings",
    description:
      "Vintage photo booth rental in Delhi NCR with instant printed photographs.A perfect wedding return gift customized with names and date. Trusted by premium events.",
    type: "website",
    images: ["/vintage-photo-booth.webp"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vintage Photo Booth Rental Delhi NCR | Instant Prints for Weddings",
    description:
      "Vintage photo booth rental in Delhi NCR with instant printed photographs.A perfect wedding return gift customized with names and date. Trusted by premium events.",
    images: ["/vintage-photo-booth.webp"],
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
    canonical: "https://theluxurybooths.com/vintage-photo-booth",
  },
}

export default function VintagePhotoBoothPage() {
  return <VintagePhotoBooth />
}
