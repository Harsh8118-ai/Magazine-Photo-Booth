import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import MagazinePhotoBoothCity from "@/components/products/magazine-photo-booth/[city]/magazine-photo-booth";


const cities: Record<string, { name: string; state: string; canonicalSlug?: string }> = {
  delhi: { name: "Delhi", state: "Delhi NCR" },
  ghaziabad: { name: "Ghaziabad", state: "Delhi NCR" },
  noida: { name: "Noida", state: "Delhi NCR" },
  gurugram: { name: "Gurugram", state: "Delhi NCR" },
  gurgaon: { name: "Gurgaon", state: "Delhi NCR", canonicalSlug: "gurugram" },
  faridabad: { name: "Faridabad", state: "Delhi NCR" },
  jaipur: { name: "Jaipur", state: "Rajasthan" },
  udaipur: { name: "Udaipur", state: "Rajasthan" },
  mumbai: { name: "Mumbai", state: "Maharashtra" },
  pune: { name: "Pune", state: "Maharashtra" },
}

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const data = cities[city]
  if (!data) return {}

  const canonicalSlug = data.canonicalSlug ?? city
  const canonicalUrl = `https://theluxurybooths.com/products/magazine-photo-booth/${canonicalSlug}`

  const title = `Magazine Photo Booth Rental in ${data.name} | The Luxury Booths`
  const description = `Book a luxury magazine photo booth rental in ${data.name} for weddings, corporate events, exhibitions & private parties. Get instant Vogue-style cover prints with premium setup and professional lighting.`

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    keywords: [
      `magazine photo booth rental ${data.name.toLowerCase()}`,
      `magazine photo booth ${data.name.toLowerCase()}`,
      `luxury photo booth ${data.name.toLowerCase()}`,
      `wedding photo booth ${data.name.toLowerCase()}`,
      `corporate photo booth ${data.name.toLowerCase()}`,
    ],

    openGraph: {                        
      title,
      description,
      url: canonicalUrl,
      siteName: "The Luxury Booths",
      type: "website",
      images: [
        {
          url: "/luxury magazine photo booth rental setup.webp",
          width: 1200,
          height: 630,
          alt: `Magazine Photo Booth in ${data.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/luxury magazine photo booth rental setup.webp"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
      },
    },
  }
}

export default async function CityMagazineBoothPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const data = cities[city]
  if (!data) return notFound()

  const canonicalSlug = data.canonicalSlug ?? city
  const pageUrl = `https://theluxurybooths.com/products/magazine-photo-booth/${canonicalSlug}`


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Magazine Photo Booth Rental in ${data.name}`,
    description: `Luxury magazine cover photo booth rental in ${data.name} for weddings, corporate events, exhibitions & private parties.`,
    serviceType: "Magazine Photo Booth Rental",
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: data.name,
    },
    provider: {
      "@type": "LocalBusiness",
      name: "The Luxury Booths",
      url: "https://theluxurybooths.com",
      telephone: "+91-9266037002",
      email: "theluxurybooths@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "35000",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  }


  return (
    <>
      <Script
        id={`schema-magazine-city-${city}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <MagazinePhotoBoothCity
        cityName={data.name}
        stateName={data.state}
      />
    </>
  )
}
