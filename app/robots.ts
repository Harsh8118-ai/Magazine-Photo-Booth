import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://theluxurybooths.com/sitemap.xml",
    host: "https://theluxurybooths.com",
  }
}
