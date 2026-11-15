import type { Metadata } from "next"
import CorporatePhotoBoothPage from "@/components/corporate/corporate-photo-booth-page"

const pageTitle = "Corporate Photo Booth Rental & Brand Activations | The Luxury Booths"
const pageDescription =
  "Create memorable corporate event experiences with branded photo booths, magazine-cover portraits and interactive guest engagement. Explore corporate photo booth rental by The Luxury Booths."

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "https://theluxurybooths.com/photo-booth-for-corporate-events",
  },
  openGraph: {
    type: "website",
    url: "https://theluxurybooths.com/photo-booth-for-corporate-events",
    siteName: "The Luxury Booths",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/magazine-photo-booth-corporate-events.webp",
        width: 1200,
        height: 630,
        alt: "Corporate magazine photo booth experience by The Luxury Booths",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/magazine-photo-booth-corporate-events.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function Page() {
  return <CorporatePhotoBoothPage />
}
