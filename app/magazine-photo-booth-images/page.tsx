import MagazinePhotoBoothImages from "@/components/products/magazine-photo-booth-images/magazine-photo-booth-images"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Magazine Photo Booth Images | Design Ideas, Wedding & Event Gallery",
  description:
    "Explore premium magazine photo booth images including wedding magazine booth, vogue style photo booth, magazine cover booth design and luxury event setups. View real event gallery and design inspiration.",
  keywords: [
    "magazine photo booth images",
    "magazine photo booth design images",
    "vogue magazine photo booth images",
    "magazine cover photo booth images",
    "magazine booth images",
    "wedding magazine photo booth images",
    "corporate magazine photo booth images",
    "magazine photo booth setup images",
    "luxury magazine photo booth images",
    "photo booth magazine images",
    "magazine booth design inspiration",
    "magazine frame photo booth images",
    "magazine box photo booth images",
    "celebrity photo booth images",
    "vogue style photo booth images"
  ],
  openGraph: {
    title: "Magazine Photo Booth Images Gallery | The Luxury Booths",
    description:
      "Browse real magazine photo booth images from weddings, corporate events and luxury parties. Get design inspiration and see our premium setups.",
    type: "website",
    images: ["/magazine-photo-booth.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine Photo Booth Images Gallery | The Luxury Booths",
    description:
      "Luxury magazine photo booth image gallery including wedding and corporate event setups.",
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
    canonical: "https://theluxurybooths.com/magazine-photo-booth-images",
  },
}

export default function MagazinePhotoBoothImagesPage() {
  return <MagazinePhotoBoothImages />
}