import MagazinePhotoBoothForSale from "@/components/products/magazine-photo-booth/for-sale/magazine-photo-booth-for-sale"
import type { Metadata } from "next"

export const metadata: Metadata = {

  title: "Magazine Photo Booth for Sale | Buy Magazine Booth Setup for Business",

  description:
    "Buy premium magazine photo booth setup for business. Luxury walk-in magazine cover photo booth for sale with high ROI potential for event planners, photographers and startups.",

  keywords: [
    "magazine photo booth for sale",
    "buy magazine photo booth",
    "magazine booth setup",
    "magazine cover booth",
    "photo booth business setup",
    "photo booth business kit",
    "walk in photo booth frame",
    "photo booth business investment",
    "event photo booth business",
    "premium photo booth setup india",
    "magazine booth price india",
    "start photo booth business india",
  ],

  alternates: {
    canonical:
      "https://theluxurybooths.com/magazine-photo-booth/for-sale",
  },

  openGraph: {
    title: "Magazine Photo Booth for Sale | Business Setup",
    description:
      "Buy magazine photo booth setup for business with high ROI potential. Premium walk-in magazine cover booth designed for event professionals.",
    url: "https://theluxurybooths.com/magazine-photo-booth/for-sale",
    siteName: "The Luxury Booths",
    images: [
      {
        url: "https://theluxurybooths.com/images/magazine-photo-booth.webp",
        width: 1200,
        height: 630,
        alt: "magazine photo booth setup for business",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Magazine Photo Booth for Sale | Business Setup",
    description:
      "Buy premium magazine photo booth setup for business with strong ROI potential.",
    images: [
      "https://theluxurybooths.com/images/magazine-photo-booth.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function MagazinePhotoBoothImagesPage() {
  return <MagazinePhotoBoothForSale />
}