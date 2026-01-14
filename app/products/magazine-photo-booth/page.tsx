import MagazinePhotoBooth from "@/components/products/magazine-photo-booth/magazine-photo-booth"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Luxury Magazine Photo Booth Rental in India | The Luxury Booths",
  description:
    "Premium magazine photo booth rental in India with instant celebrity-style prints. Ideal for luxury weddings, corporate events, exhibitions & private parties.",
  keywords:
    "vogue magazine photo booth, magazine photo booth, luxury photo booth, celebrity photo booth, instant magazine prints, event photo booth, wedding photo booth, corporate photo booth",
  openGraph: {
    title: "Luxury Magazine Photo Booth Rental in India | The Luxury Booths",
    description: "Luxury magazine photo booth with instant celebrity-style cover prints for your event",
    type: "website",
    images: ["/magazine-cover-template.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Magazine Photo Booth Rental in India | The Luxury Booths",
    description:
      "Premium magazine photo booth rental with instant celebrity-style prints for luxury weddings & events.",
    images: ["/magazine-cover-template.png"],
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
    canonical: "https://theluxurybooths.com/products/magazine-photo-booth",
  },

}

export default function MagazinePhotoBoothPage() {
  return <MagazinePhotoBooth />
}
