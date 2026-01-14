import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import MagazinePhotoBoothCity from "@/components/products/magazine-photo-booth/[city]/magazine-photo-booth";


const cities: Record<string, { name: string; state: string }> = {
  delhi: { name: "Delhi", state: "Delhi NCR" },
  ghaziabad: { name: "Ghaziabad", state: "Delhi NCR" },
  noida: { name: "Noida", state: "Delhi NCR" },
  gurugram: { name: "Gurugram", state: "Delhi NCR" },
  gurgaon: { name: "Gurgaon", state: "Delhi NCR" },
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

  const title = `Luxury Magazine Photo Booth Rental in ${data.name} | The Luxury Booths`
  const description = `Book a luxury magazine photo booth in ${data.name} for weddings, corporate events, exhibitions & private parties. Get instant Vogue-style magazine cover prints with premium setup.`

  const url = `https://theluxurybooths.com/products/magazine-photo-booth/${city}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "The Luxury Booths",
      type: "website",
      images: [
        {
          url: "https://theluxurybooths.com/magazine-cover-template.png",
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
      images: ["https://theluxurybooths.com/magazine-cover-template.png"],
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

  const pageUrl = `https://theluxurybooths.com/products/magazine-photo-booth/${city}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Luxury Magazine Photo Booth Rental in ${data.name}`,
    description: `Book a luxury Vogue-style magazine photo booth in ${data.name} for weddings, corporate events, exhibitions & private parties.`,
    serviceType: "Photo Booth Rental",
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
        streetAddress: "Sector-73",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
  }


  return (
    <>
      <Script
        id={`schema-magazine-city-${city}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <MagazinePhotoBoothCity
        cityName={data.name}
        stateName={data.state}
      />
    </>
  )
}
