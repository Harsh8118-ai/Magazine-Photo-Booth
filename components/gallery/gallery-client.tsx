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

  const cities = [
    { name: "Delhi", slug: "delhi" },
    { name: "Noida", slug: "noida" },
    { name: "Gurugram", slug: "gurugram" },
    { name: "Greater Noida", slug: "greater-noida" },
    { name: "Ghaziabad", slug: "ghaziabad" },
  ]

  return (
    <>
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
          {["all", "wedding", "corporate", "birthday", "anniversary", "party"].map((type) => (
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


      {/* ✅ SEO Content Block (very important) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-2xl bg-gray-950 border border-gray-800 p-6 sm:p-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gradient">
            Premium Magazine Photo Booth Moments
          </h3>

          <p className="text-gray-400 leading-relaxed">
            The Luxury Booths offers a premium{" "}
            <span className="text-white">Magazine Photo Booth</span> experience
            with instant celebrity-style prints, luxury lighting, and a
            high-end setup that looks stunning at weddings, corporate events, and
            private celebrations. Browse our gallery to see real event highlights
            from <span className="text-white">Delhi</span>,{" "}
            <span className="text-white">Noida</span>,{" "}
            <span className="text-white">Gurugram</span>, and more.
          </p>

          {/* Quick internal links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/products/magazine-photo-booth/${city.slug}`}
                className="px-4 py-2 rounded-full bg-black border border-gray-800 text-gray-300 text-sm hover:border-purple-500 hover:text-white transition"
              >
                Magazine Photo Booth in {city.name}
              </Link>
            ))}
          </div>

          {/* FAQs */}
          <div className="mt-10">
            <h4 className="text-xl font-bold mb-4">Gallery FAQs</h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="text-white font-semibold">
                  What is a Magazine Photo Booth?
                </p>
                <p className="mt-1">
                  It’s a luxury photo booth setup that gives guests Vogue-style
                  magazine cover prints instantly with premium lighting and a
                  celebrity feel.
                </p>
              </div>

              <div>
                <p className="text-white font-semibold">
                  Do you provide instant prints at events?
                </p>
                <p className="mt-1">
                  Yes — guests get instant magazine-style prints on-site, making
                  it a premium takeaway souvenir.
                </p>
              </div>

              <div>
                <p className="text-white font-semibold">
                  Which events are best for your photo booth?
                </p>
                <p className="mt-1">
                  Weddings, corporate activations, birthdays, anniversaries,
                  exhibitions, and VIP parties.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#products"
              className="px-6 py-3 rounded-xl font-semibold bg-purple-600 text-white text-center hover:opacity-90 transition"
            >
              View Packages
            </Link>

            <Link
              href="/#features-section"
              className="px-6 py-3 rounded-xl font-semibold bg-gray-900 border border-gray-700 text-white text-center hover:border-purple-500 transition"
            >
              Check Availability
            </Link>
          </div>
        </div>
      </section>

    </>
  )
}
