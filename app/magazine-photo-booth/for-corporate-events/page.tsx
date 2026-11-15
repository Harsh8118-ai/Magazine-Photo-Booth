import type { Metadata } from "next"
import MagazineCorporateEvents from "@/components/products/magazine-photo-booth/for-corporate-events/magazine-corporate-events"

const pageTitle = "Magazine Photo Booth for Corporate Events | The Luxury Booths"
const pageDescription =
  "Bring an editorial touch to corporate events with a branded Magazine Photo Booth. Ideal for product launches, conferences, exhibitions, brand activations and employee celebrations across India."
const pageUrl = "https://theluxurybooths.com/magazine-photo-booth/for-corporate-events"

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "magazine photo booth for corporate events",
    "corporate magazine photo booth",
    "magazine photo booth corporate event rental",
    "branded magazine photo booth",
    "magazine cover photo booth for brand activation",
    "corporate event photo booth India",
    "magazine photo booth for product launch",
    "magazine booth for exhibition",
    "branded photo booth for conferences",
    "corporate photo booth Delhi NCR",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: "The Luxury Booths",
    title: pageTitle,
    description: pageDescription,
    locale: "en_IN",
    images: [{
      url: "https://theluxurybooths.com/magazine-photo-booth-corporate-events.webp",
      width: 1200,
      height: 630,
      alt: "Magazine Photo Booth experience for corporate events by The Luxury Booths",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["https://theluxurybooths.com/magazine-photo-booth-corporate-events.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

export default function MagazinePhotoBoothCorporateEventsPage() {
  return <MagazineCorporateEvents />
}
