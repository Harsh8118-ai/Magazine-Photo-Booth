import Image from "next/image"
import Link from "next/link"
import { Star, Zap, Camera, Users } from "lucide-react"

export function MagazinePhotoBoothBlog() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.35em] text-gold uppercase mb-4">
            Luxury Event Trend
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-6">
            Why the Magazine Photo Booth Is Redefining Luxury Events
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            Magazine photo booths have become the gold standard for premium
            weddings, corporate events, and brand activations across India.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 mb-20">
        <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden glass-enhanced border border-gold/30">
          <Image
            src="/blogs/magazine-photo-booth/cover.webp"
            alt="Luxury Magazine Photo Booth Setup"
            width={1200}
            height={800}
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-16 text-gray-300 leading-relaxed text-sm sm:text-base">

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              What Is a Magazine Photo Booth?
            </h2>
            <p>
              A magazine photo booth is a premium photography experience that
              transforms guests into magazine cover stars. With professional
              lighting, editorial-style frames, and luxury backdrops, every photo
              looks polished, modern, and share-worthy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Why Magazine Photo Booths Are Trending
            </h2>
            <p>
              Today’s luxury events demand more than traditional photo booths.
              Guests expect immersive, Instagram-ready experiences that feel
              exclusive and premium.
            </p>
          </section>

          {/* Feature Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Star, title: "Celebrity-Style Covers", desc: "Guests feel like magazine cover stars" },
              { icon: Zap, title: "Instant Prints", desc: "High-quality magazine prints in seconds" },
              { icon: Camera, title: "Professional Lighting", desc: "Studio-grade photography setup" },
              { icon: Users, title: "High Guest Engagement", desc: "Creates a social & interactive experience" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="glass-enhanced p-6 rounded-xl border border-gold/20"
                >
                  <Icon className="h-8 w-8 text-gold mb-4" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Ideal for Weddings, Corporate Events & Brand Launches
            </h2>
            <p>
              Whether it’s a luxury wedding, a corporate gala, or a brand launch,
              magazine photo booths elevate the entire event experience while
              delivering memorable keepsakes.
            </p>
          </section>

          {/* CTA */}
          <section className="border border-gold/30 rounded-2xl p-8 text-center">
            <p className="text-gray-400 mb-4">
              Planning a premium event?
            </p>
            <Link
              href="/products/magazine-photo-booth"
              className="inline-block text-gold border-b border-gold tracking-wide"
            >
              Explore Magazine Photo Booth
            </Link>
          </section>
        </div>
      </section>
    </main>
  )
}
