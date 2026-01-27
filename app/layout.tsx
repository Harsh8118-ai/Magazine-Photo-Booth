import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter, Comic_Neue } from "next/font/google"
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

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-comic-neue",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://theluxurybooths.com"),

  title: "Luxury Photo Booth Rental in India | The Luxury Booths.",
  description:
    "The Luxury Booths brings premium photo booth rental in India with instant celebrity-style prints to luxury weddings, corporate events, and vvip parties.",
  alternates: {
    canonical: "https://theluxurybooths.com",
  },

  keywords: [
    "photo booth",
    "photo booth near me",
    "vogue magazine booth",
    "vogue photo booth",
    "magazine photo booth",
    "mirror selfie booth",
    "vintage photo booth",
    "retro photo booth",
    "wedding photo booth",
    "corporate events",
    "luxury photo booth",
    "Delhi NCR photo booth",
    "Noida photo booth",
    "Gurugram photo booth",
    "instant prints"
  ],
  authors: [{ name: "The Luxury Booths" }],
  creator: "The Luxury Booths",
  publisher: "The Luxury Booths",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: "Luxury Photo Booth Rental in India | The Luxury Booths.",
    description:
      "The Luxury Booths brings premium photo booth rental in India with instant celebrity-style prints to luxury weddings, corporate events, and vvip parties.",
    url: "https://theluxurybooths.com",
    siteName: "The Luxury Booths",
    images: [
      {
        url: "/the-luxury-booths.webp",
        width: 1200,
        height: 630,
        alt: "The Luxury Booths - Magazine Photo Booth",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Photo Booth Rental in India | The Luxury Booths.",
    description:
      "The Luxury Booths brings premium photo booth rental in India with instant celebrity-style prints to luxury weddings, corporate events, and vvip parties.",
    images: ["/the-luxury-booths.webp"],
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

  icons: {
    icon: "/the-luxury-booths.webp",
    apple: "/the-luxury-booths.webp",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${comicNeue.variable} ${inter.variable} antialiased`}>
      <head>

        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "The Luxury Booths",
              description: "The Luxury Photo Booths for weddings, corporate events, and parties",
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
              areaServed: ["Delhi NCR", "Noida", "Gurugram", "India"],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200",
              },
              service: [
                {
                  "@type": "Service",
                  name: "Magazine Photo Booth Rental",
                  description:
                    "Luxury magazine cover photo booth experience with instant premium prints and celebrity-style setup.",
                  url: "https://theluxurybooths.com/products/magazine-photo-booth",
                },
                {
                  "@type": "Service",
                  name: "Mirror Selfie Booth Rental",
                  description:
                    "Interactive mirror selfie booth for weddings, parties, and corporate activations with instant prints.",
                  url: "https://theluxurybooths.com/products/mirror-selfie-booth",
                },
                {
                  "@type": "Service",
                  name: "Vintage Photo Booth Rental",
                  description:
                    "Classic vintage photo booth setup for retro-style celebrations and premium event experiences.",
                  url: "https://theluxurybooths.com/products/vintage-photo-booth",
                },
              ]
            }),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "The Luxury Booths",
              alternateName: "Luxury Photo Booth Rentals",
              url: "https://theluxurybooths.com",
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
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}