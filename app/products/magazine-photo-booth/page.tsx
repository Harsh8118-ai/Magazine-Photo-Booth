import type { Metadata } from "next"
import MagazinePhotoBoothClient from "./magazine-photo-booth-client"

export const metadata: Metadata = {
  title: "Magazine Photo Booth - Luxury Celebrity Cover Experience | Magazine Photo Booth",
  description:
    "Transform your event with our luxury magazine photo booth. Professional instant prints featuring guests as magazine cover stars. Perfect for weddings, corporate events & parties.",
  keywords:
    "magazine photo booth, luxury photo booth, celebrity photo booth, instant magazine prints, event photo booth, wedding photo booth, corporate photo booth",
  openGraph: {
    title: "Magazine Photo Booth - Become the Cover Star",
    description: "Luxury magazine photo booth with instant celebrity-style cover prints for your event",
    type: "website",
    images: ["/magazine-cover-template.png"],
  },
}

export default function MagazinePhotoBoothPage() {
  return <MagazinePhotoBoothClient />
}
