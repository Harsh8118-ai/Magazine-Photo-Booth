import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"
import VintagePhotoBoothCity from "@/components/products/vintage-photo-booth/[city]/vintage-photo-booth"


const cities: Record<
  string,
  { name: string; state: string; canonicalSlug?: string }
> = {
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

  bangalore: { name: "Bangalore", state: "Karnataka" },
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
  const canonicalUrl = `https://theluxurybooths.com/vintage-photo-booth/${canonicalSlug}`

  const title = `Vintage Photo Booth Rental in ${data.name} | Instant Prints for Weddings`
  const description = `Vintage photo booth rental in ${data.name} with instant printed photographs. A luxury wedding return gift customized with names, date & theme. Trusted by premium events.`

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    keywords: [
      `vintage photo booth rental ${data.name.toLowerCase()}`,
      `vintage photo booth ${data.name.toLowerCase()}`,
      `retro photo booth ${data.name.toLowerCase()}`,
      `wedding photo booth ${data.name.toLowerCase()}`,
      `instant prints photo booth ${data.name.toLowerCase()}`,
      `luxury photo booth ${data.name.toLowerCase()}`,
    ],

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "The Luxury Booths",
      type: "website",
      images: [
        {
          url: "/vintage-photo-booth.webp",
          width: 1200,
          height: 630,
          alt: `Vintage Photo Booth in ${data.name}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/vintage-photo-booth.webp"],
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


export default async function CityVintageBoothPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const data = cities[city]
  if (!data) return notFound()

  const canonicalSlug = data.canonicalSlug ?? city
  const pageUrl = `https://theluxurybooths.com/vintage-photo-booth/${canonicalSlug}`


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Vintage Photo Booth Rental in ${data.name}`,
    description: `Vintage photo booth rental in ${data.name} for weddings, corporate events, and private celebrations with instant printed photographs.`,
    serviceType: "Vintage Photo Booth Rental",
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
      price: "25000",
      availability: "https://schema.org/InStock",
      url: pageUrl,
    },
  }

  return (
    <>
      <Script
        id={`schema-vintage-city-${city}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <VintagePhotoBoothCity
        cityName={data.name}
        stateName={data.state}
      />
    </>
  )
}