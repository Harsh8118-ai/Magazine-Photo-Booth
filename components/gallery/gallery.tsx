import GalleryClient from "./gallery-client"
import Script from "next/script"

const events = [
  {
    id: "silver-ijya-gurugram",
    name: "Silver By IJYA",
    date: "2025-10-11",
    type: "Corporate",
    location: "Gurugram",
    photoCount: 587,
    thumb: "https://res.cloudinary.com/dpnykjono/image/upload/v1769160644/1-2.webp",
  },
  {
    id: "jai-shreya-jim-corbett",
    name: "Jai & Shreya",
    date: "2025-11-16",
    type: "Wedding",
    location: "Jim Corbett",
    photoCount: 627,
    thumb: "https://res.cloudinary.com/dpnykjono/image/upload/v1769183723/jai-and-shreya_ebyels.webp",
  },
  {
    id: "paras-anushree-noida",
    name: "Paras & Anushree",
    date: "2025-11-24",
    type: "Wedding",
    location: "Noida",
    photoCount: 556,
    thumb: "https://res.cloudinary.com/dpnykjono/image/upload/v1769182097/Paras-and-Anushree-optimized_xnwgms.webp",
  },
  {
    id: "vikas-sweta-aligarh",
    name: "Vikas & Sweta",
    date: "2025-11-26",
    type: "Anniversary",
    location: "Aligarh",
    photoCount: 712,
    thumb: "https://res.cloudinary.com/dpnykjono/image/upload/v1769348075/vikas-ans-sweta-4.webp",
  },
  // {
  //   id: "simcorp-noida",
  //   name: "Simcorp India LLP",
  //   date: "2025-12-06",
  //   type: "Corporate",
  //   location: "Noida",
  //   photoCount: 742,
  //   thumb: "/photo-booth-team",
  // },
  // {
  //   id: "tariq-sumaiya-ghaziabad",
  //   name: "Tariq & Sumaiya",
  //   date: "2025-12-20",
  //   type: "Wedding",
  //   location: "Ghaziabad",
  //   photoCount: 982,
  //   thumb: "/photo-booth-bts.png",
  // },
  {
    id: "taazaa-noida",
    name: "Taazaa Pvt. Ltd.",
    date: "2026-01-07",
    type: "Corporate",
    location: "Noida",
    photoCount: 675,
    thumb: "https://res.cloudinary.com/dpnykjono/image/upload/v1769257579/taazaa-4.webp",
  },
  {
    id: "reyansh-delhi",
    name: "Reyansh Birthday",
    date: "2026-01-09",
    type: "Birthday",
    location: "Delhi",
    photoCount: 631,
    thumb: "https://res.cloudinary.com/dpnykjono/image/upload/v1769261766/reyansh-birthday-party.png",
  },
  // {
  //   id: "inorphis-nexus-greater-noida",
  //   name: "inMorphis Services Pvt. Ltd.",
  //   date: "2026-01-16",
  //   type: "Corporate",
  //   location: "Greater Noida",
  //   photoCount: 834,
  //   thumb: "/photo-booth-bts.png",
  // },
]

export default function GalleryPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Luxury Booths - Event Gallery",
    itemListElement: events.map((event, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${event.name} - ${event.type} in ${event.location}`,
      url: `https://theluxurybooths.com/gallery/${event.id}`,
    })),
  }

  return (
    <>
      <main className="min-h-screen bg-black text-white">

        <Script
          id="gallery-itemlist-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />

        {/* Header */}
        <header className="sticky top-0 z-40 bg-black/80 backdrop-blur">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-gradient">
              The Luxury Photo Booth Gallery
            </h1>
            <p className="text-gray-400  border-b border-gray-800">
              Browse photos from our magazine photo booth events
            </p>
          </div>
        </header>

        <GalleryClient events={events} />
      </main>
    </>
  )
}
