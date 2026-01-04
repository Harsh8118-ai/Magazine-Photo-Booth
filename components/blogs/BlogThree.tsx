import Image from "next/image"
import { Calendar, Clock, User, Star, Camera, Sparkles, Layout } from "lucide-react"

export const metadata = {
  title: "How to Make Your Wedding Instagram-Worthy",
  description:
    "Learn how to make your wedding Instagram-worthy with expert styling tips, photo booth ideas, lighting tricks, and guest experience insights.",
}

const BlogInstagramWorthyWedding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900/20 to-blue-900/20">

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "How to Make Your Wedding Instagram-Worthy",
            description:
              "A practical guide to creating an Instagram-worthy wedding through décor, lighting, and premium guest experiences.",
            author: {
              "@type": "Organization",
              name: "The Luxury Booths",
            },
            publisher: {
              "@type": "Organization",
              name: "The Luxury Booths",
            },
            datePublished: "2025-08-15",
          }),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Header */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full border border-gold/30 mb-6">
            <Star className="w-4 h-4 text-gold mr-2" />
            <span className="text-gold text-sm font-medium">
              Wedding Styling Guide
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            How to Make Your Wedding
            <span className="block bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
              Instagram-Worthy
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">August 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">8 min read</span>
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
            alt="Instagram-worthy wedding setup with elegant decor and photo booth"
            width={1200}
            height={700}
            className="rounded-2xl border border-neutral-800"
            priority
          />
        </div>

        {/* Article */}
        <article className="prose prose-invert prose-lg max-w-none">

          {/* Intro */}
          <section className="bg-neutral-900/60 rounded-2xl p-8 border border-neutral-800 mb-10">
            <p>
              Modern weddings are no longer planned just for the guest list -
              they’re planned for the camera as well. Couples today want moments
              that look as beautiful on Instagram as they feel in real life.
            </p>
            <p>
              From our experience at luxury weddings, the most Instagram-worthy
              celebrations are those where design, lighting, and guest interaction
              are carefully thought through.
            </p>
          </section>

          {/* Key Elements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Elements That Make a Wedding Instagram-Worthy
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Camera className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Professional Lighting
                </h3>
                <p className="text-gray-300 text-sm">
                  Soft, well-placed lighting dramatically improves photos and
                  videos taken by both professionals and guests.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Layout className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Thoughtful Layouts
                </h3>
                <p className="text-gray-300 text-sm">
                  Clean stage layouts, uncluttered backdrops, and balanced décor
                  make photos instantly share-worthy.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Sparkles className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Premium Photo Booths
                </h3>
                <p className="text-gray-300 text-sm">
                  A <a href="/products/magazine-photo-booth">magazine photo booth</a> gives
                  guests editorial-style portraits they love sharing online.
                </p>
              </div>
            </div>
          </section>

          {/* Real Insight */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              What We Notice at Instagram-Ready Weddings
            </h2>

            <div className="bg-neutral-900/40 rounded-xl p-6 border border-neutral-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                The most photographed weddings are not the most crowded with décor,
                but the ones where every element has visual breathing space.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Guests instinctively know where to take photos when focal points
                like booths, stages, and lounges are clearly defined.
              </p>
            </div>
          </section>

          {/* Takeaways */}
          <section className="bg-gold/5 border border-gold/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Key Takeaways
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Lighting matters more than excessive décor</li>
              <li>• Clean layouts photograph better than clutter</li>
              <li>• Photo booths encourage organic content creation</li>
              <li>• Guests share more when experiences feel premium</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Do Instagram-worthy weddings require big budgets?</strong><br />
                No. Strategic lighting, thoughtful layouts, and one standout feature
                can make a significant difference.
              </p>

              <p>
                <strong>Are photo booths necessary for Instagram content?</strong><br />
                While not mandatory, premium booths greatly increase guest-generated
                photos and reels.
              </p>

              <p>
                <strong>What time of day works best for Instagram photos?</strong><br />
                Evening events with controlled lighting usually perform best for
                both photography and video.
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
            Written by the Luxury Booths Team, based on real-world experience
            creating visually striking and guest-friendly wedding setups.
          </p>
          <div className="mt-3 text-sm">
            <a href="/gallery" className="text-gold hover:underline">
              View Real Weddings
            </a>
            <span className="mx-2">·</span>
            <a href="/products/magazine-photo-booth" className="text-gold hover:underline">
              Magazine Photo Booth
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default BlogInstagramWorthyWedding
