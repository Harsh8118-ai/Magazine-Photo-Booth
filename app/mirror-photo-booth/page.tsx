import MirrorPhotoBooth from "@/components/products/mirror-photo-booth/mirror-photo-booth"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mirror Photo Booth Rental Delhi NCR | Magic Mirror Booth | The Luxury Booths",
  description:
    "Luxury mirror photo booth rental in Delhi NCR with interactive touchscreen, animations & instant prints. Perfect for weddings, corporate events & premium parties.",
  keywords: [
    "mirror photo booth Delhi",
    "magic mirror photo booth",
    "mirror photo booth rental",
    "mirror selfie booth",
    "interactive photo booth",
    "luxury photo booth Delhi",
    "wedding mirror booth",
    "birthday mirror photo booth",
    "corporate photo booth Delhi",
    "magic mirror price India"
  ],
  openGraph: {
    title: "Mirror Photo Booth Rental in Delhi NCR | The Luxury Booths",
    description:
      "Interactive magic mirror booth with touchscreen animations & instant prints for luxury events.",
    type: "website",
    images: ["/mirror-photo-booth.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirror Photo Booth Rental in Delhi NCR | The Luxury Booths",
    description:
      "Premium mirror photo booth experience with touchscreen & instant prints.",
    images: ["/mirror-photo-booth.webp"],
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
    canonical: "https://theluxurybooths.com/mirror-photo-booth",
  },
}

export default function MirrorPhotoBoothPage() {
  return <MirrorPhotoBooth />
}