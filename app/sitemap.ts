import type { MetadataRoute } from "next"

const baseUrl = "https://theluxurybooths.com"

const cities = [
  "delhi-ncr",
  "delhi",
  "ghaziabad",
  "noida",
  "gurugram",
  "faridabad",
  "jaipur",
  "udaipur",
  "mumbai",
  "pune",
  "bangalore",
]

const blogSlugs = [
  "about-the-luxury-booths",
  "magazine-photo-booth-wedding-trend-india-2026",
  "best-photo-booth-ideas-luxury-weddings",
  "instagram-worthy-wedding-ideas",
  "branded-event-activations-delhi-ncr",
  "what-is-a-magazine-photo-booth",
  "magazine-photo-booth-for-corporate-events",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-03-08")

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/magazine-photo-booth`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mirror-selfie-booth`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vintage-photo-booth`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]

  const cityLandingRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/photo-booth-rental-in-${city}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }))

  const magazineCityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/magazine-photo-booth/${city}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  const vintageCityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/vintage-photo-booth/${city}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    ...staticRoutes,
    ...cityLandingRoutes,
    ...magazineCityRoutes,
    ...vintageCityRoutes,
    ...blogRoutes,
  ]
}
