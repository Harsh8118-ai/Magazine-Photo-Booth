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

  title: "Luxury Photo Booth Experience for Premium Events in Delhi NCR | The Luxury Booths",
  description:
    "The Luxury Booths is a premium luxury photo booth experience brand for high-end weddings, corporate events, and VIP celebrations across Delhi NCR. Vogue-style magazine booths, mirror selfie booths, and bespoke luxury setups.",
  alternates: {
    canonical: "https://theluxurybooths.com",
  },

  keywords: [
    "photobooths brand",
    "luxury photo booth brand",
    "premium photo booth experience",
    "luxury photo booth Delhi NCR",
    "vogue magazine booth",
    "vogue photo booth",
    "magazine photo booth",
    "mirror selfie booth",
    "vintage photo booth",
    "retro photo booth",
    "luxury wedding photo booth Delhi NCR",
    "corporate events",
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
              alternateName: "Luxury Photo Booth Experience Brand",
              url: "https://theluxurybooths.com",
            }),
          }}
        />


        {/* ---GTM CODE  */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MXKVF9BR');
  `}
        </Script>
        {/* ------- */}

        {/* ----Clarity Code  */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);
        t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wnyjlnbs6f");
  `}
        </Script>


      </head>

      <body className="bg-black text-white overflow-x-hidden">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MXKVF9BR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <RevealProvider />
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}