import { Card } from "@/components/ui/card"
import BlogCard from "@/components/BlogCard"
// import NewsletterSignup from "@/components/NewsletterSignup"
import Link from "next/link"
import Image from "next/image"
import blogPosts from "@/hooks/blogPosts"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photo Booth Blog | Wedding & Event Insights | The Luxury Booths",
  description:
    "Explore photo booth insights, trends, and guides for weddings, corporate events, exhibitions, and premium celebrations across India. Learn about magazine photo booths, mirror selfie booths, and event branding.",

  alternates: {
    canonical: "https://theluxurybooths.com/blog",
  },

  openGraph: {
    title: "Photo Booth Blog | The Luxury Booths",
    description:
      "Wedding and corporate event photo booth insights, luxury trends, and practical guides to help you book the perfect photo booth experience.",
    url: "https://theluxurybooths.com/blog",
    siteName: "The Luxury Booths",
    type: "website",
    images: [
      {
        url: "/luxury magazine photo booth rental setup.webp",
        width: 1200,
        height: 630,
        alt: "The Luxury Booths Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Photo Booth Blog | The Luxury Booths",
    description:
      "Read trends, guides, and insights on photo booths for weddings, corporate events & premium parties.",
    images: ["/luxury magazine photo booth rental setup.webp"],
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
              Blog & Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Practical insights, real event experiences, and expert guidance on
              luxury photo booths for weddings and premium events.
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
                  src="https://res.cloudinary.com/dpnykjono/image/upload/v1757750038/Main_Blog_nd7wlh.webp"
                  alt="photo booth setup at a wedding event"
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
