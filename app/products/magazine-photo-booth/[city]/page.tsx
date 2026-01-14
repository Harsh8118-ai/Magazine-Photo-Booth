import type { Metadata } from "next"
import { notFound } from "next/navigation"
import MagazinePhotoBooth from "@/components/products/magazine-photo-booth/[city]/magazine-photo-booth";


const cities: Record<string, { name: string; state: string }> = {
  delhi: { name: "Delhi", state: "Delhi" },
  ghaziabad: { name: "Ghaziabad", state: "Uttar Pradesh" },
  noida: { name: "Noida", state: "Uttar Pradesh" },
  gurugram: { name: "Gurugram", state: "Haryana" },
  gurgaon: { name: "Gurgaon", state: "Haryana" },
  faridabad: { name: "Faridabad", state: "Haryana" },
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

  return (
    <MagazinePhotoBooth
      cityName={data.name}
      stateName={data.state}
    />
  )
}
