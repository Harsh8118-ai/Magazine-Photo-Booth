import MagazinePhotoBooth from "@/components/products/magazine-photo-booth/magazine-photo-booth"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Magazine Photo Booth Rental Delhi NCR | The Luxury Booths",
  description:
    "Premium magazine photo booth rental in Delhi NCR with instant celebrity-style prints. Ideal for luxury weddings, corporate events, exhibitions & private parties.",
  keywords: [
    "vogue magazine photo booth",
    "magazine photo booth",
    "magazine photo booth near me",
    "magazine photo booth price",
    "magazine photo booth rental",
    "photo booth magazine rental",
    "magazine box photo booth",
    "magazine cover photo booth",
    "photo booth magazine",
    "photobooth magazine",
    "luxury photo booth",
    "celebrity photo booth",
    "instant magazine prints",
    "event photo booth",
    "wedding photo booth",
    "corporate photo booth" 
  ],
  openGraph: {
    title: "Magazine Photo Booth Rental in Delhi NCR | The Luxury Booths",
    description: "Luxury magazine photo booth with instant celebrity-style cover prints for your event",
    type: "website",
    images: ["/magazine-photo-booth.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine Photo Booth Rental in Delhi NCR | The Luxury Booths",
    description:
      "Premium magazine photo booth rental with instant celebrity-style prints for luxury weddings & events.",
    images: ["/magazine-photo-booth.webp"],
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
    canonical: "https://theluxurybooths.com/magazine-photo-booth",
  },

}

export default function MagazinePhotoBoothPage() {
  return <MagazinePhotoBooth />
}
