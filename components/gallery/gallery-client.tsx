"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"

type Event = {
  id: string
  name: string
  date: string
  type: string
  location: string
  photoCount: number
  thumb: string
}

export default function GalleryClient({ events }: { events: Event[] }) {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")

  const filtered = useMemo(() => {
    return events.filter((event) => {
      const matchesFilter =
        filter === "all" || event.type.toLowerCase() === filter.toLowerCase()

      const matchesSearch =
        search === "" ||
        event.name.toLowerCase().includes(search.toLowerCase()) ||
        event.date.includes(search) ||
        event.location.toLowerCase().includes(search.toLowerCase())

      return matchesFilter && matchesSearch
    })
  }, [search, filter, events])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-gradient">
            The Luxury Booths' Gallery
          </h1>
          <p className="text-gray-400  border-b border-gray-800">
            Browse photos from our magazine photo booth events
          </p>
          </div>
          </header> 


          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by couple name, date, or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition"
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["all", "wedding", "corporate", "birthday", "anniversary", "party" ].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full font-medium capitalize transition ${filter === type
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/50"
                    : "bg-gray-900 text-gray-400 border border-gray-700 hover:border-purple-500 hover:text-white"
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400">
            No events found matching your search
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            {filtered.map((event) => (
              <Link key={event.id} href={`/gallery/${event.id}`}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl bg-gray-900 mb-4">
                    <Image
                      src={event.thumb}
                      alt={event.name}
                      width={208}
                      height={208}
                      loading="lazy"
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className=" sm:text-xl font-bold group-hover:text-purple-400 transition">
                    {event.name}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">
                    {event.date} • {event.location} • {event.photoCount} photos
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
