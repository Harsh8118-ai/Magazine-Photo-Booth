import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Luxury Photo Booth Products in India | The Luxury Booths",
  description:
    "Explore premium photo booth products in India — Magazine Photo Booth, Mirror Selfie Booth, and Vintage Photo Booth. Perfect for luxury weddings, corporate events, exhibitions & private parties.",
  alternates: {
    canonical: "https://theluxurybooths.com/products",
  },
  openGraph: {
    title: "Luxury Photo Booth Products in India | The Luxury Booths",
    description:
      "Explore our premium photo booth products for weddings, corporate events, exhibitions & private parties across India.",
    url: "https://theluxurybooths.com/products",
    siteName: "The Luxury Booths",
    type: "website",
    images: [
      {
        url: "https://theluxurybooths.com/magazine-cover-template.png",
        width: 1200,
        height: 630,
        alt: "The Luxury Booths - Photo Booth Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Photo Booth Products in India | The Luxury Booths",
    description:
      "Choose from Magazine Photo Booth, Mirror Selfie Booth, and Vintage Photo Booth for your next premium event in India.",
    images: ["https://theluxurybooths.com/magazine-cover-template.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
}

const products = [
  {
    id: "magazine-photo-booth",
    name: "Magazine Photo Booth",
    description:
      "Turn guests into cover stars with instant magazine-style prints, luxury layouts, and premium event execution.",
    features: [
      "Celebrity-style magazine covers",
      "Instant high-quality prints",
      "Digital gallery access",
      "Custom branding & frames",
      "Professional photography support",
    ],
    pricing: "Starting ₹35,000",
    href: "/products/magazine-photo-booth",
    image: "https://res.cloudinary.com/dpnykjono/image/upload/v1766530206/Products/Magazine.webp",
  },
  {
    id: "mirror-selfie-booth",
    name: "Mirror Selfie Booth",
    description:
      "An interactive LED mirror booth experience for luxury weddings, premium parties, and corporate brand activations.",
    features: [
      "Interactive LED mirror booth",
      "On-screen prompts & animations",
      "Red-carpet luxury styling",
      "Real-time effects & overlays",
      "Premium print quality output",
    ],
    pricing: "Starting ₹25,000",
    href: "/products/mirror-selfie-booth",
    image: "https://res.cloudinary.com/dpnykjono/image/upload/v1766530221/Products/Mirror.webp",
  },
  {
    id: "vintage-photo-booth",
    name: "Vintage Photo Booth",
    description:
      "A timeless vintage photo booth with classic aesthetics, perfect for romantic weddings and themed celebrations.",
    features: [
      "Classic vintage booth look",
      "Props & custom backdrops",
      "Print customization support",
      "Rustic & premium styling",
      "Theme-matched event experience",
    ],
    pricing: "Starting ₹25,000 + prints",
    href: "/products/vintage-photo-booth",
    image: "https://res.cloudinary.com/dpnykjono/image/upload/Products/Vintage.webp",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* ✅ Fixed Header (Back Button + Page Title) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
          {/* Back Button */}
          <Link
            href="/"
            className="flex items-center gap-2 text-gold hover:text-yellow-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:block font-medium">Back</span>
          </Link>

          {/* Center Title */}
          <p className="text-lg sm:text-2xl font-bold text-center text-gradient">
            Products
          </p>

          {/* Spacer for balance */}
          <div className="w-14 sm:w-20" />
        </div>
      </div>

      {/* ✅ Page Content Wrapper (padding-top because header is fixed) */}
      <div className="pt-24">
        {/* SEO Header */}
        <header className="px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              Our Luxury Photo Booth Products
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Choose the perfect photo booth experience for your event with{" "}
              <span className="text-gold font-semibold">
                Vogue-Style Magazine cover prints
              </span>
              , interactive mirror selfies, or vintage photo memories. Designed for premium events across India.
            </p>
          </div>
        </header>

        {/* Products Grid */}
        <section className="px-4 pb-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 hover:scale-[1.02] transition-all duration-300"
              >
                <Link href={product.href} className="block h-full">
                {/* Product Image */}
                <div className="relative aspect-[3/4] w-1/2 mx-auto overflow-hidden bg-gray-800 mt-3 rounded-2xl">
                  <Image
                    src={product.image}
                    alt={`${product.name} by The Luxury Booths`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    // className="object-cover"
                  />
                </div>

                {/* Product Content */}
                <div className="p-5 sm:p-6 flex flex-col h-full">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">
                    {product.name}
                  </h2>

                  <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-200 text-sm sm:text-[15px]"
                      >
                        <span className="text-gold mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="border-t border-white/10 pt-4 mb-4">
                    <p className="text-gold text-xl font-semibold">
                      {product.pricing}
                    </p>
                  </div>
                </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* SEO Trust Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Why Choose The Luxury Booths?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            We deliver premium photo booth experiences with professional execution, luxury aesthetics, instant prints,
            and fully customized branding — ideal for weddings, exhibitions, product launches, and celebrity events across India.
          </p>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Available in Noida, Delhi NCR, Gurgaon, Jaipur, Agra, Udaipur, and nearby locations.
          </p>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Book Your Photo Booth?
          </h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            Contact us today to reserve your preferred booth and make your event unforgettable.
          </p>
          <Link
            href="/#booking"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-purple/40 transition-shadow"
          >
            Book Now
          </Link>
        </section>

        {/* Mobile bottom spacing */}
        <div className="h-10 sm:h-0" />
      </div>
    </main>
  )
}
