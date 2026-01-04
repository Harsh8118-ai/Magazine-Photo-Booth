import Image from "next/image"
import { Calendar, Clock, User, Star, Camera, Sparkles, Crown } from "lucide-react"

export const metadata = {
  title: "Best Photo Booth Ideas for Luxury Weddings",
  description:
    "Explore the best photo booth ideas for luxury weddings, from magazine-style booths to elegant minimal setups that elevate guest experience and wedding aesthetics.",
}

const BlogLuxuryPhotoBoothIdeas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900/20 to-blue-900/20">

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Best Photo Booth Ideas for Luxury Weddings",
            description:
              "A curated guide to the most elegant and premium photo booth ideas for luxury weddings.",
            author: {
              "@type": "Organization",
              name: "The Luxury Booths",
            },
            publisher: {
              "@type": "Organization",
              name: "The Luxury Booths",
            },
            datePublished: "2025-08-10",
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Header */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full border border-gold/30 mb-6">
            <Star className="w-4 h-4 text-gold mr-2" />
            <span className="text-gold text-sm font-medium">
              Luxury Wedding Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Best Photo Booth Ideas
            <span className="block bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
              for Luxury Weddings
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">August 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">10 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">Luxury Booths Team</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src="https://res.cloudinary.com/dpnykjono/image/upload/v1757750038/Main_Blog_nd7wlh.webp"
            alt="Luxury photo booth setup at an elegant wedding reception"
            width={1200}
            height={700}
            className="rounded-2xl border border-neutral-800"
            priority
          />
        </div>

        {/* Article */}
        <article className="prose prose-invert prose-lg max-w-none">

          {/* Introduction */}
          <section className="bg-neutral-900/60 rounded-2xl p-8 border border-neutral-800 mb-10">
            <p>
              Luxury weddings are no longer defined only by décor and venues.
              Today, couples focus heavily on guest experience - and photo booths
              have evolved into one of the most expressive elements of the celebration.
            </p>
            <p>
              From our experience working at premium weddings, the most successful
              photo booths are those that blend seamlessly with the wedding’s
              aesthetic while offering guests something memorable to take home.
            </p>
          </section>

          {/* Ideas Grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Photo Booth Ideas That Elevate Luxury Weddings
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Camera className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Magazine Photo Booth
                </h3>
                <p className="text-gray-300 text-sm">
                  A magazine-style booth creates editorial portraits with clean
                  layouts and premium typography, making guests feel like cover stars.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Crown className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Minimal Luxury Booth
                </h3>
                <p className="text-gray-300 text-sm">
                  Neutral backdrops, soft lighting, and subtle branding work perfectly
                  for modern and destination weddings.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Sparkles className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Floral & Custom Backdrops
                </h3>
                <p className="text-gray-300 text-sm">
                  Custom floral or textured backdrops aligned with wedding décor
                  elevate the booth into a design element.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Camera className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Black & White Portrait Booth
                </h3>
                <p className="text-gray-300 text-sm">
                  Timeless monochrome portraits are becoming a favorite at
                  high-end weddings for their classic appeal.
                </p>
              </div>

            </div>
          </section>

          {/* Key Takeaways */}
          <section className="bg-gold/5 border border-gold/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Key Takeaways
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Luxury photo booths should blend with wedding aesthetics</li>
              <li>• Magazine-style booths offer premium keepsakes</li>
              <li>• Minimal designs often feel more upscale</li>
              <li>• Guest experience matters more than props</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Which photo booth works best for luxury weddings?</strong><br />
                Magazine-style and minimal luxury booths are the most popular choices
                for premium weddings.
              </p>

              <p>
                <strong>Are luxury photo booths suitable for destination weddings?</strong><br />
                Yes. Most luxury setups are modular and can be adapted for destination
                venues and outdoor locations.
              </p>

              <p>
                <strong>Can photo booths be customized to match wedding themes?</strong><br />
                Absolutely. Custom layouts, backdrops, and print designs help align
                the booth with the overall wedding aesthetic.
              </p>
            </div>
          </section>

        </article>

        {/* Author */}
        <section className="mt-16 border-t border-neutral-800 pt-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            About the Author
          </h3>
          <p className="text-gray-400">
            Written by the Luxury Booths Team, based on hands-on experience delivering
            premium photo booth setups for luxury weddings across India.
          </p>
          <div className="mt-3 text-sm">
            <a href="/products/magazine-photo-booth" className="text-gold hover:underline">
              Magazine Photo Booth
            </a>
            <span className="mx-2">·</span>
            <a href="/gallery" className="text-gold hover:underline">
              View Wedding Gallery
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default BlogLuxuryPhotoBoothIdeas
