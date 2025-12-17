import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import Script from "next/script"


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
  title: "The Luxury Booths - Step Inside. Become the Cover Star.",
  description:
    "The Luxury Booths brings celebrity-style magazine covers to weddings, corporate events, and parties. Instant professional prints in 30 seconds.",
  keywords: [
    "photo booth",
    "magazine photo booth",
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
    title: "The Luxury Booths - Step Inside. Become the Cover Star.",
    description:
      "The Luxury Booths for weddings, corporate events, and parties. Instant celebrity-style covers with professional prints.",
    url: "https://magazinephotobooth.com",
    siteName: "The Luxury Booths",
    images: [
      {
        url: "/magazine-photobooth.png",
        width: 1200,
        height: 630,
        alt: "The Luxury Booths - Celebrity Style Covers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Luxury Booths - Step Inside. Become the Cover Star.",
    description:
      "The Luxury Booths for weddings, corporate events, and parties. Instant celebrity-style covers.",
    images: ["/magazine-photobooth.png"],
    creator: "@luxurybooth",
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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
              telephone: "(555) 123-4567",
              email: "theluxurybooths@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "UP",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "34.0522",
                longitude: "-118.2437",
              },
              openingHours: "Mo-Su 09:00-22:00",
              priceRange: "₹35,000–₹75,000",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
              },
              service: [
                {
                  "@type": "Service",
                  name: "Wedding Photo Booth",
                  description: "Luxury magazine photo booth for weddings",
                },
                {
                  "@type": "Service",
                  name: "Corporate Event Photo Booth",
                  description: "Professional photo booth for corporate events",
                },
                {
                  "@type": "Service",
                  name: "Party Photo Booth",
                  description: "Fun magazine photo booth for private parties",
                },
              ],
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
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}