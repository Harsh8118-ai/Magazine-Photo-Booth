
import type { Metadata } from "next"
import ImbesharamClient from "./imbesharam-client"

export const metadata: Metadata = {
  title: "IMbesharam Event Photo Gallery | The Luxury Booths",
  description:
    "Register to access the official IMbesharam event photo gallery, powered by The Luxury Booths.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "IMbesharam × The Luxury Booths",
    description: "Your moments. Your memories. No holding back.",
    type: "website",
  },
}

export default function ImbesharamGalleryPage() {
  return <ImbesharamClient />
}
