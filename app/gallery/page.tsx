import GalleryPage from "@/components/gallery/gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Luxury Photo Booth Gallery | Weddings & Corporate Events | The Luxury Booths",
  description:
    "Explore The Luxury Booths gallery featuring real magazine photo booth setups and instant print moments from weddings, corporate events, birthdays, and VIP parties across India.",
  keywords:
    "luxury photo booth gallery, magazine photo booth gallery, wedding photo booth pictures, corporate photo booth gallery, event photo booth photos, instant print photo booth, celebrity magazine photo booth",
  openGraph: {
    title: "Luxury Photo Booth Gallery | The Luxury Booths",
    description:
      "Browse real events, premium magazine cover prints, and luxury photo booth moments from weddings, corporate activations, and private parties across India.",
    type: "website",
    images: ["/magazine-cover-template.webp"],
  },
}

export default function GalleryRoutePage() {
  return <GalleryPage />
}
