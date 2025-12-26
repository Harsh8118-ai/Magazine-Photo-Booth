import type { Metadata } from "next"
import GalleryPage from "./gallery"

export const metadata: Metadata = {
  title: "Luxury Magazine Photo Booth Rental in India | The Luxury Booths",
  description:
  "Premium magazine photo booth rental in India with instant celebrity-style prints. Ideal for luxury weddings, corporate events, exhibitions & private parties.",
  keywords:
    "magazine photo booth, luxury photo booth, celebrity photo booth, instant magazine prints, event photo booth, wedding photo booth, corporate photo booth",
  openGraph: {
    title: "Luxury Magazine Photo Booth Rental in India | The Luxury Booths",
    description: "Luxury magazine photo booth with instant celebrity-style cover prints for your event",
    type: "website",
    images: ["/magazine-cover-template.png"],
  },
}

export default function MagazinePhotoBoothPage() {
  return <GalleryPage />
}
