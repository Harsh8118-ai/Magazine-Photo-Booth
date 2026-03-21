import { Card } from "@/components/ui/card"
import BlogCard from "@/components/BlogCard"
import Link from "next/link"
import Image from "next/image"
import blogPosts from "@/hooks/blogPosts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Photo Booth Blog | Wedding, Corporate & Luxury Event Ideas in India",

  description:
    "Explore expert insights, ideas, and trends in our photo booth blog. Discover wedding photo booth ideas, corporate event experiences, magazine photo booths, mirror booths, 360 photo booths, and luxury event branding inspiration across India.",

  alternates: {
    canonical: "https://theluxurybooths.com/blog",
  },

  openGraph: {
    title:
      "Photo Booth Blog | Wedding & Corporate Event Ideas | The Luxury Booths",

    description:
      "Discover photo booth ideas, luxury wedding inspirations, corporate event trends, and expert guides for magazine booths, mirror booths, and 360 photo booths across India.",

    url: "https://theluxurybooths.com/blog",
    siteName: "The Luxury Booths",
    type: "website",

    images: [
      {
        url: "/magazine-photo-booth.webp",
        width: 1200,
        height: 630,
        alt: "Luxury Photo Booth Blog - The Luxury Booths",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Photo Booth Blog | Wedding & Corporate Event Ideas | The Luxury Booths",

    description:
      "Explore wedding photo booth ideas, corporate event inspiration, magazine booths, mirror booths, and luxury photo booth trends across India.",

    images: ["/magazine-photo-booth.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto w-full px-4 py-16 bg-gradient-to-r from-black via-neutral-900 to-black">
        <div className="max-w-6xl mx-auto">

          {/* Page Header */}
          <header className="text-center mb-14">

            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Luxury Photo Booth Blog
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore expert insights, creative ideas, and real event experiences
              from luxury photo booths across India. Discover wedding photo booth
              inspiration, corporate event branding ideas, magazine photo booths,
              mirror booths, and premium guest engagement experiences designed to
              elevate modern celebrations.
            </p>

          </header>


          {/* Featured Blog – Brand Authority */}
          <Card className="glassmorphism p-8 mb-14">

            <div className="grid md:grid-cols-2 gap-8 items-center">

              <div>

                <span className="inline-block bg-gold/90 text-black px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>

                <h2 className="text-3xl font-bold mt-4 mb-4 gradient-text">
                  Inside The Luxury Booths: Redefining Photo Booth Experiences in India
                </h2>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  A deep look into how The Luxury Booths delivers premium photo booth
                  experiences for weddings, corporate events, and high-end celebrations.
                  From magazine-style booths to professional-grade instant prints, this
                  guide explains what truly defines a luxury photo booth service.
                </p>

                <Link href="/blog/about-the-luxury-booths">

                  <button className="bg-gradient-to-r from-gold to-amber-600 hover:from-amber-600 hover:to-gold px-6 py-3 rounded-lg font-semibold transition-colors">
                    Read Article
                  </button>

                </Link>

              </div>


              <div>

                <Image
                  src="/the-luxury-booths.webp"
                  alt="luxury photo booth setup at wedding event in India"
                  width={500}
                  height={360}
                  className="rounded-xl object-cover"
                  priority
                />

              </div>

            </div>

          </Card>


          {/* Blog Grid */}
          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {blogPosts.map((post, index) => (

              <article key={index}>

                <Link href={`/blog/${post.slug}`}>
                  <BlogCard {...post} />
                </Link>

              </article>

            ))}

          </section>


        </div>
      </div>
    </>
  )
}