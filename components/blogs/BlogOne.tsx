import { Calendar, Clock, User, Star, Camera, Sparkles, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Why the Magazine Photo Booth is the #1 Wedding Trend in India for 2026",
  description:
    "Discover why magazine photo booths are becoming the most in-demand wedding trend in India for 2026, offering luxury aesthetics, premium prints, and unforgettable guest experiences.",
}

const BlogMagazineWeddingTrend = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900/20 to-blue-900/20">

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "Why the Magazine Photo Booth is the #1 Wedding Trend in India for 2026",
            description:
              "An in-depth look at why magazine photo booths are redefining luxury weddings across India in 2026.",
            author: {
              "@type": "Organization",
              name: "The Luxury Booths",
            },
            publisher: {
              "@type": "Organization",
              name: "The Luxury Booths",
            },
            datePublished: "2025-08-01",
          }),
        }}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Blog Header */}
        <header className="text-center mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-gold/10 rounded-full border border-gold/30 mb-6">
            <Star className="w-4 h-4 text-gold mr-2" />
            <span className="text-gold text-sm font-medium">
              Wedding Trends 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Why the Magazine Photo Booth is{" "}
            <span className="block bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
              the #1 Wedding Trend in India for 2026
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">August 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">9 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">Luxury Booths Team</span>
            </div>
          </div>
        </header>

        {/* Visual Section */}
        <div className="mb-12">
          <img
            src="https://res.cloudinary.com/dpnykjono/image/upload/v1757750038/Main_Blog_nd7wlh.webp"
            alt="Magazine photo booth at a luxury Indian wedding"
            className="rounded-2xl border border-neutral-800"
          />
        </div>

        {/* Article */}
        <article className="prose prose-invert prose-lg max-w-none">

          {/* Introduction */}
          <section className="bg-neutral-900/60 rounded-2xl p-8 border border-neutral-800 mb-10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Indian weddings have always been about grandeur, storytelling, and
              memorable experiences. But as couples move into 2026, the focus has
              clearly shifted from excess to elegance.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From our on-ground experience at weddings across India, one trend
              consistently stands out - the magazine photo booth. It’s no longer
              just an add-on; it has become a defining element of modern luxury
              weddings.
            </p>
          </section>

          {/* Why It’s Trending */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Magazine Photo Booths Are Taking Over Indian Weddings
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Camera className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Editorial-Style Photography
                </h3>
                <p className="text-gray-300 text-sm">
                  Magazine booths create portraits that look professionally
                  published, not casual snapshots - a perfect match for luxury
                  weddings.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Premium Takeaway Prints
                </h3>
                <p className="text-gray-300 text-sm">
                  Guests leave with a beautifully designed magazine-style print,
                  making it a keepsake rather than a disposable photo.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <TrendingUp className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Social & Cultural Appeal
                </h3>
                <p className="text-gray-300 text-sm">
                  These booths align perfectly with India’s love for style,
                  celebration, and share-worthy moments.
                </p>
              </div>
            </div>
          </section>

          {/* Real Wedding Insight */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              What We’re Seeing at Real Weddings
            </h2>

            <div className="bg-neutral-900/40 rounded-xl p-6 border border-neutral-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                At recent weddings, couples are positioning magazine booths near
                cocktail areas or reception entrances - turning them into a visual
                centerpiece rather than a side attraction.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Guests don’t rush through the experience. They pose, experiment,
                and proudly collect their prints, often returning multiple times.
              </p>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="bg-gold/5 border border-gold/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Key Takeaways
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Magazine photo booths elevate wedding aesthetics instantly</li>
              <li>• Guests value premium, tangible keepsakes</li>
              <li>• Editorial-style photos feel timeless, not trendy</li>
              <li>• Perfect fit for luxury and destination weddings in India</li>
            </ul>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong>Is a magazine photo booth suitable for all wedding sizes?</strong><br />
                Yes. These booths work equally well for intimate weddings and large
                luxury celebrations.
              </p>

              <p>
                <strong>Do magazine booths replace traditional photographers?</strong><br />
                No. They complement wedding photography by offering guests a
                dedicated, interactive experience.
              </p>

              <p>
                <strong>Will this trend last beyond 2026?</strong><br />
                Based on current demand and guest response, magazine booths are
                evolving into a long-term staple rather than a short-lived trend.
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
            This article is written by the Luxury Booths Team, drawing from real
            wedding experiences and on-ground event execution across India.
          </p>
          <div className="mt-3 text-sm">
            <a href="/about" className="text-gold hover:underline">About Us</a> ·
            <a href="/gallery" className="ml-2 text-gold hover:underline">View Our Work</a> ·
            <a href="/products/magazine-photo-booth" className="ml-2 text-gold hover:underline">
              Magazine Photo Booth
            </a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default BlogMagazineWeddingTrend
