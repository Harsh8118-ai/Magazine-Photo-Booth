"use client"

import { Card, CardContent } from "@/components/ui/card"

const weddingClients = [
  { name: "The Ritz-Carlton", logo: "luxury hotel wedding venue" },
  { name: "Four Seasons", logo: "premium wedding venue" },
  { name: "Beverly Hills Hotel", logo: "iconic wedding location" },
  { name: "Montage Resort", logo: "luxury resort wedding" },
  { name: "The Peninsula", logo: "elegant wedding venue" },
  { name: "St. Regis", logo: "luxury wedding hotel" },
]

const corporateClients = [
  { name: "Google", logo: "tech company logo" },
  { name: "Netflix", logo: "streaming company logo" },
  { name: "Tesla", logo: "electric car company logo" },
  { name: "Apple", logo: "technology company logo" },
  { name: "Meta", logo: "social media company logo" },
  { name: "Spotify", logo: "music streaming logo" },
]

export function ClientLogos() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-display text-5xl font-bold text-center mb-16 text-gradient">Trusted by Premium Brands</h2>

      <div className="space-y-12">
        {/* Wedding Venues */}
        <div>
          <h3 className="font-display text-2xl font-bold text-center mb-8 text-gold">Luxury Wedding Venues</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {weddingClients.map((client, index) => (
              <Card key={index} className="glass border-0 scale-on-hover group">
                <CardContent className="p-6 flex flex-col items-center justify-center h-24">
                  <img
                    src={`/abstract-geometric-shapes.png?height=40&width=120&query=${client.logo}`}
                    alt={client.name}
                    className="max-h-8 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Clients */}
        <div>
          <h3 className="font-display text-2xl font-bold text-center mb-8 text-purple-400">Corporate Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {corporateClients.map((client, index) => (
              <Card key={index} className="glass border-0 scale-on-hover group">
                <CardContent className="p-6 flex flex-col items-center justify-center h-24">
                  <img
                    src={`/abstract-geometric-shapes.png?height=40&width=120&query=${client.logo}`}
                    alt={client.name}
                    className="max-h-8 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 text-lg">
          Join hundreds of satisfied clients who chose us for their special events
        </p>
      </div>
    </div>
  )
}
