import { Calendar, Clock, User, Star, Camera, Sparkles, Shield } from "lucide-react"

export const metadata = {
  title: "The Luxury Booths: Redefining Photo Booth Experiences in India",
  description:
    "Discover how The Luxury Booths creates premium photo booth experiences for weddings and events through design, reliability, and professional execution.",
}

const BlogLuxuryBooths = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900/20 to-blue-900/20">

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "The Luxury Booths: Redefining Photo Booth Experiences in India",
            description:
              "An inside look at how The Luxury Booths delivers premium photo booth experiences for weddings and events across India.",
            author: {
              "@type": "Organization",
              name: "The Luxury Booths",
            },
            publisher: {
              "@type": "Organization",
              name: "The Luxury Booths",
            },
            datePublished: "2025-07-01",
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
              Brand Insight
            </span>
          </div>

          {/* Optimized H1 */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Luxury Booths:
            <span className="block bg-gradient-to-r from-gold to-amber-400 bg-clip-text text-transparent">
              Redefining Photo Booth Experiences in India
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">July 2025</span>
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

        {/* Article */}
        <article className="prose prose-invert prose-lg max-w-none">

          {/* Introduction */}
          <section className="bg-neutral-900/60 rounded-2xl p-8 border border-neutral-800 mb-10">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Over the years, we’ve worked across weddings, corporate launches, and
              private celebrations where one thing became clear: guests don’t just
              want photos anymore - they want an experience.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              The Luxury Booths was built around this insight. Our focus has always
              been on delivering thoughtfully designed photo booth setups that feel
              intentional, premium, and reliable.
            </p>
          </section>

          {/* What Makes It Luxury */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              What Defines a Truly Luxury Photo Booth?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Camera className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Professional Photography
                </h3>
                <p className="text-gray-300 text-sm">
                  We use professional cameras, studio lighting, and controlled framing -
                  not tablet-based systems - to ensure every photo looks polished.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Sparkles className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Magazine-Style Presentation
                </h3>
                <p className="text-gray-300 text-sm">
                  Our <a href="/products/magazine-photo-booth">Magazine Photo Booth</a> setups
                  focus on clean layouts, premium typography, and elegant print finishes.
                </p>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                <Shield className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold mb-2">
                  Reliability & Experience
                </h3>
                <p className="text-gray-300 text-sm">
                  From power backup to print consistency, every technical detail is
                  planned to perform seamlessly throughout the event.
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Our Experience Across Weddings & Events
            </h2>

            <div className="bg-neutral-900/40 rounded-xl p-6 border border-neutral-800">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                At weddings, our booths often become a natural gathering point for
                guests - not because they’re directed to, but because the setup itself
                stands out visually.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                In corporate environments, brands choose us for consistency, clean
                presentation, and alignment with their visual identity.
              </p>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="bg-gold/5 border border-gold/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              Key Takeaways
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Luxury booths prioritize experience over novelty</li>
              <li>• Professional equipment impacts guest perception</li>
              <li>• Design consistency elevates event aesthetics</li>
              <li>• Reliability is essential for premium events</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4 text-gray-300">
              <p>
                <strong>What makes a luxury photo booth different?</strong><br />
                A luxury photo booth focuses on professional photography, premium design,
                and consistent output rather than novelty props or filters.
              </p>

              <p>
                <strong>Is a magazine photo booth suitable for weddings?</strong><br />
                Yes. Magazine-style booths are especially popular at weddings because
                they create elegant keepsakes that guests value.
              </p>

              <p>
                <strong>Do luxury booths require large spaces?</strong><br />
                Not necessarily. Our setups are adaptable and designed to fit both
                intimate venues and large event spaces.
              </p>
            </div>
          </section>
        </article>

        {/* Author Bio */}
        <section className="mt-16 border-t border-neutral-800 pt-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            About the Author
          </h3>
          <p className="text-gray-400">
            This article is written by the Luxury Booths Team - event professionals
            with hands-on experience delivering premium photo booth experiences across
            weddings, corporate events, and private celebrations in India.
          </p>
          <div className="mt-3 text-sm">
            <a href="/about" className="text-gold hover:underline">About Us</a> ·
            <a href="/gallery" className="ml-2 text-gold hover:underline">View Our Work</a>
          </div>
        </section>

      </div>
    </div>
  )
}

export default BlogLuxuryBooths
