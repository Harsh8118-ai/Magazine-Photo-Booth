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

  title: "Luxury Photo Booth Brand for Premium Events in Delhi NCR | The Luxury Booths",
  description:
    "The Luxury Booths is a premium luxury photo booth experience brand for high-end weddings, corporate events, and VIP celebrations across Delhi NCR. Vogue-style magazine booths, mirror selfie booths, and bespoke luxury setups.",
  alternates: {
    canonical: "https://theluxurybooths.com",
  },

  keywords: [
    "photo booth",
    "photobooth",
    "photoshoot booth",
    "photo booth rental",
    "photobooths for rent",
    "photo booth near me",
    "photobooth near me",
    "photobooth noida",
    "photobooth delhi",
    "vogue magazine booth",
    "vogue photo booth",
    "magazine photo booth",
    "mirror selfie booth",
    "vintage photo booth",
    "retro photo booth",
    "wedding photo booth",
    "corporate events",
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
    title: "Luxury Photo Booth Brand for Premium Events in Delhi NCR | The Luxury Booths",
    description:
      "The Luxury Booths is a premium luxury photo booth experience brand for high-end weddings, corporate events, and VIP celebrations across Delhi NCR. Vogue-style magazine booths, mirror selfie booths, and bespoke luxury setups.",
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
    title: "Luxury Photo Booth Brand for Premium Events in Delhi NCR | The Luxury Booths",
    description:
      "The Luxury Booths is a premium luxury photo booth experience brand for high-end weddings, corporate events, and VIP celebrations across Delhi NCR. Vogue-style magazine booths, mirror selfie booths, and bespoke luxury setups.",
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
              "@type": ["LocalBusiness", "EventService", "Brand"],
              name: "The Luxury Booths",
              description:
                "Luxury photo booth experience brand specializing in premium weddings, high-end corporate events, fashion activations, and VIP celebrations.",
              url: "https://theluxurybooths.com",
              telephone: "+91-9266037002",
              email: "theluxurybooths@gmail.com",
              priceRange: "₹15,000–₹1,25,000",
              areaServed: ["Delhi NCR", "Noida", "Gurugram", "Ghaziabad", "Delhi"],
              sameAs: [
                "https://www.instagram.com/theluxurybooths",
                "https://www.linkedin.com/in/theluxurybooths"
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "UP",
                addressCountry: "IN"
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "200"
              }
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
              alternateName: "Photo Booth Rentals",
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