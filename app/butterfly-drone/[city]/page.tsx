import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ButterflyDroneCity from "@/components/products/butterfly-drone/[city]/butterfly-drone"

const cities: Record<
  string,
  { name: string; state: string; canonicalSlug?: string }
> = {
  delhi: { name: "Delhi", state: "Delhi NCR" },
  ghaziabad: { name: "Ghaziabad", state: "Delhi NCR" },
  noida: { name: "Noida", state: "Delhi NCR" },
  gurugram: { name: "Gurugram", state: "Delhi NCR" },
  faridabad: { name: "Faridabad", state: "Delhi NCR" },
  ahmedabad: { name: "Ahmedabad", state: "Gujarat" },
  jaipur: { name: "Jaipur", state: "Rajasthan" },
  udaipur: { name: "Udaipur", state: "Rajasthan" },
  mumbai: { name: "Mumbai", state: "Maharashtra" },
  pune: { name: "Pune", state: "Maharashtra" },
  bangalore: { name: "Bangalore", state: "Karnataka" },
}

export function generateStaticParams() {
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
  const canonicalUrl = `https://theluxurybooths.com/butterfly-drone/${canonicalSlug}`

  const title = `Butterfly Drone Rental in ${data.name} | Luxury Butterfly Drone for Weddings & Events`
  const description = `Book a Butterfly Drone in ${data.name} for weddings, corporate events, product launches, and premium celebrations. Realistic flying butterfly drones with professional operators.`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      "butterfly drone",
      "butterfly drone",
      "butterfly drone rental",
      "butterfly drone rental",
      "butterfly drone for wedding",
      "wedding butterfly drone",
      "luxury butterfly drone",
      "flying butterfly drone",
      "butterfly drone show",
      "butterfly drone performance",
      "butterfly drone entertainment",
      "butterfly drone experience",
      "corporate event butterfly drone",
      "brand activation butterfly drone",
      "event entertainment",
      "luxury wedding entertainment",
      "wedding entrance ideas",
      "premium event entertainment",
      `butterfly drone rental ${data.name.toLowerCase()}`,
      `butterfly drone ring delivery ${data.name.toLowerCase()}`,
      `ring ceremony drone ${data.name.toLowerCase()}`,
      `wedding butterfly drone ${data.name.toLowerCase()}`,
      `engagement ring delivery ${data.name.toLowerCase()}`,
      `bionic butterfly drone ${data.name.toLowerCase()}`,
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "The Luxury Booths",
      type: "website",
      images: [
        {
          url: "/butterfly-drone.webp",
          width: 1200,
          height: 630,
          alt: `Butterfly Drone Ring Delivery in ${data.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/butterfly-drone.webp"],
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

export default async function CityButterflyDronePage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const data = cities[city]

  if (!data) notFound()

  const canonicalSlug = data.canonicalSlug ?? city

  return (
    <ButterflyDroneCity
      cityName={data.name}
      stateName={data.state}
      citySlug={canonicalSlug}
    />
  )
}
