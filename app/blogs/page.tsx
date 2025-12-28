import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Journal | The Luxury Booths",
  description:
    "Luxury event trends, photo booth insights, and premium experiences by The Luxury Booths.",
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] text-gold uppercase mb-4">
              Journal
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gradient mb-6">
              Luxury Event Insights
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Explore trends, ideas, and experiences shaping luxury weddings,
              corporate events, and premium celebrations across India.
            </p>
          </div>

          {/* Blog Cards */}
          <Link href="/blogs/magazine-photo-booth">
            <article className="glass-enhanced border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/50 transition-all">
              <div className="relative aspect-[4/5] sm:aspect-[16/9]">
                <Image
                  src="https://res.cloudinary.com/dpnykjono/image/upload/v1766933540/WhatsApp_Image_2025-12-28_at_8.02.28_PM_l4d3ef.webp"
                  alt="Magazine Photo Booth Experience"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-xs tracking-widest text-gold uppercase mb-3">
                  Luxury Trend
                </p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                  Why the Magazine Photo Booth Is Redefining Luxury Events
                </h2>
                <p className="text-gray-400 text-sm sm:text-base max-w-3xl">
                  From weddings to brand launches, discover why editorial-style
                  magazine photo booths have become the most in-demand luxury
                  event experience.
                </p>
              </div>
            </article>
          </Link>
        </div>
      </section>
    </main>
  )
}
