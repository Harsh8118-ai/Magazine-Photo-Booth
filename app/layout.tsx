import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import Script from "next/script"
import RevealProvider from "@/components/reveal-provider"


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "The Luxury Booths – Celebrity-Style Photo Booth Rentals.",
  description:
    "The Luxury Booths brings celebrity-style magazine covers to weddings, corporate events, and parties. Instant professional prints in 30 seconds.",
  keywords: [
    "photo booth",
    "magazine photo booth",
    "mirro selfie booth",
    "vintage photo booth",
    "retro photo booth",
    "wedding photo booth",
    "corporate events",
    "luxury photo booth",
    "celebrity covers",
    "instant prints",
    "event photography",
    "Los Angeles photo booth",
    "party entertainment",
  ],
  authors: [{ name: "The Luxury Booths" }],
  creator: "The Luxury Booths",
  publisher: "The Luxury Booths",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://theluxurybooths.com"),
  openGraph: {
    title: "The Luxury Booths – Celebrity-Style Photo Booth Rentals.",
    description:
      "The Luxury Booths for weddings, corporate events, and parties. Instant celebrity-style covers with professional prints.",
    url: "https://theluxurybooths.com",
    siteName: "The Luxury Booths",
    images: [
      {
        url: "https://res.cloudinary.com/dpnykjono/image/upload/v1765967591/The_Luxury_Booths_Profile_qhlimj.webp",
        width: 1200,
        height: 630,
        alt: "The Luxury Booths - Celebrity Style Covers",
      },
    ],

    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "https://res.cloudinary.com/dpnykjono/image/upload/v1765967591/The_Luxury_Booths_Profile_qhlimj.webp",
    apple: "https://res.cloudinary.com/dpnykjono/image/upload/v1765967591/The_Luxury_Booths_Profile_qhlimj.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Luxury Booths – Celebrity-Style Photo Booth Rentals.",
    description:
      "The Luxury Booths for weddings, corporate events, and parties. Instant celebrity-style covers.",
    images: ["https://res.cloudinary.com/dpnykjono/image/upload/v1765967591/The_Luxury_Booths_Profile_qhlimj.webp"],
    creator: "@theluxurybooths",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "BBikFu5Pfi8aCoGkZQqMLLnbMfGGkKIUksA625GxFPA",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The Luxury Booths",
              description: "The Luxury Booths for weddings, corporate events, and parties",
              url: "https://theluxurybooths.com",
              telephone: "+91-9266037002",
              email: "theluxurybooths@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "UP",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                "latitude": "28.5355",
                "longitude": "77.3910"
              },
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "₹35,000–₹75,000",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
              },
              service: [
                {
                  "@type": "Service",
                  "name": "Wedding Photo Booth Rental",
                  "description": "Luxury magazine-style photo booth rentals for weddings with instant professional prints, red carpet setup, and custom branding.",
                  "url": "https://theluxurybooths.com/products/mirror-selfie-booth",
                  "areaServed": {
                    "@type": "Place",
                    "name": "India"
                  },
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "The Luxury Booths"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Corporate Event Photo Booth Rental",
                  "description": "Premium photo booth solutions for corporate events, brand activations, and product launches with customized templates and on-site support.",
                  "url": "https://theluxurybooths.com/products/vintage-photo-booth",
                  "areaServed": {
                    "@type": "Place",
                    "name": "India"
                  },
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "The Luxury Booths"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Party & Birthday Photo Booth Rental",
                  "description": "Fun and interactive photo booth rentals for private parties, birthdays, and celebrations with instant prints and digital sharing.",
                  "url": "https://theluxurybooths.com/gallery",
                  "areaServed": {
                    "@type": "Place",
                    "name": "India"
                  },
                  "provider": {
                    "@type": "LocalBusiness",
                    "name": "The Luxury Booths"
                  }
                }
              ]
            }),
          }}
        />

        <Script
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "The Luxury Booths",
              "alternateName": "Luxury Photo Booth Rentals",
              "url": "https://theluxurybooths.com"
            }),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7L0PKPVM2S"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-7L0PKPVM2S', {
      page_path: window.location.pathname,
       send_page_view: false
    });
  `}
        </Script>



      </head>
      <body className="bg-black text-white overflow-x-hidden">
        <RevealProvider />
        {children}
        <Suspense fallback={<div>Loading...</div>}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}