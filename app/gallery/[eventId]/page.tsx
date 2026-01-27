import EventClient from "@/components/gallery/[eventId]/event-client"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "Luxury Magazine Photo Booth Event | The Luxury Booths",
  description:
    "Premium magazine photo booth event coverage in India. Explore luxury weddings, corporate events, and parties.",
  keywords:
    "magazine photo booth, event photos, wedding photography, corporate events, birthday party photos",
  openGraph: {
    title: "Luxury Magazine Photo Booth Event | The Luxury Booths",
    description: "Luxury magazine photo booth event highlights with high-resolution photos",
    type: "website",
    images: ["/luxury magazine photo booth rental setup.webp"],
  },
}

export default async function Page({
  params,
}: {
  params: Promise<{ eventId: string }>
}) {
  const { eventId } = await params

  return <EventClient eventId={eventId} />
}
