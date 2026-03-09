import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Facebook, Instagram, Linkedin, X } from "lucide-react"
import { SectionWrapper } from "@/components/section-wrapper"
import { Button3D } from "@/components/3d-button"
import FooterClientTwo from "@/components/hero/footer.client-2"

export const metadata: Metadata = {
  title: "Photo Booth Rental in India | Magazine, Mirror & Vintage",
  description:
    "Explore premium photo booth rental products by The Luxury Booths — Magazine Photo Booth, Mirror Selfie Booth, and Vintage Photo Booth. Ideal for luxury weddings, corporate events, exhibitions & private parties across India.",

  alternates: {
    canonical: "https://theluxurybooths.com/products",
  },

  keywords: [
    "photo booth rental",
    "photo booth rental products",
    "magazine photo booth rental",
    "magazine photo booth price",
    "mirror selfie booth rental",
    "vintage photo booth rental",
    "luxury photo booth",
    "wedding photo booth rental",
    "corporate photo booth rental",
    "photo booth for exhibitions",
    "instant photo prints",
    "celebrity magazine photo booth",
    "Delhi NCR photo booth rental",
    "Noida photo booth rental",
    "Gurugram photo booth rental",
  ],

  openGraph: {
    title: "Photo Booth Rental Products | The Luxury Booths",
    description:
      "Choose from Magazine Photo Booth, Mirror Selfie Booth, and Vintage Photo Booth rentals for luxury weddings, corporate events & premium parties across India.",
    url: "https://theluxurybooths.com/products",
    siteName: "The Luxury Booths",
    type: "website",
    images: [
      {
        url: "/magazine-photo-booth.webp",
        width: 1200,
        height: 630,
        alt: "The Luxury Booths - Premium Photo Booth Products",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Photo Booth Rental Products | The Luxury Booths",
    description:
      "Explore our premium photo booth rental products — Magazine, Mirror Selfie, and Vintage setups for luxury events across India.",
    images: ["/magazine-photo-booth.webp"],
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
    href: "/magazine-photo-booth",
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
    pricing: "Starting ₹15,000",
    href: "/mirror-selfie-booth",
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
    pricing: "Starting ₹30,000 + prints",
    href: "/vintage-photo-booth",
    image: "https://res.cloudinary.com/dpnykjono/image/upload/v1771402905/vintage-booth.webp",
  },
]

const galleryImages = [
  { id: 1, src: "/Images/1.webp", alt: "Vogue-Magazine Photo Booth" },
  { id: 3, src: "/Images/3.webp", alt: "Photo Booth in Delhi NCR" },
  { id: 6, src: "/Images/6.webp", alt: "Magazine Photo Booth Rental In Delhi NCR" },
  { id: 7, src: "/Images/7.webp", alt: "Magazine Photo Booth in Wedding, Corporate and VVIP Events" },
  { id: 2, src: "/Images/2.webp", alt: "Mirror photo booth at an event with vintage booth experience" },
  { id: 4, src: "/Images/4.webp", alt: "Mirror selfie photo booth with wooden vintage design" },
  { id: 5, src: "/Images/5.webp", alt: "Vintage booth red carpet setup with instant print photo booth" },
  { id: 8, src: "/Images/8.webp", alt: "Guest enjoying vintage retro photo booth with instant prints" },
];

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

      <div className="pt-24">
        {/* SEO Header */}
        <header className="px-4 pb-10 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              Photo Booth Rental Products
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
            and fully customized branding - ideal for weddings, exhibitions, product launches, and celebrity events across India.
          </p>

          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Available in Noida, Delhi NCR, Gurugram, Jaipur, Agra, Udaipur, and nearby locations.
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

        {/* Event Gallery Section */}
        <SectionWrapper
          id="gallery-section"
          ariaLabel="Photo gallery of past events"
          className="py-16 sm:py-20 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
              Event Gallery
            </h2>

            <div className="columns-2 sm:columns-3 gap-3 space-y-3">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="w-full break-inside-avoid cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-gold/50 transition"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={450}
                    sizes="(max-width: 768px) 45vw, 300px"
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="/gallery">
                <Button3D
                  variant="outline"
                  className="border-purple-400 px-10 py-5 mt-3 text-xl text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                  aria-label="View Full Gallery"
                >
                  View Gallery
                </Button3D>
              </a>
            </div>

          </div>
        </SectionWrapper>

        {/* Footer - Enhanced with legal links */}
        <footer
          id="contact-section"
          className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-900 border-t border-gray-800"
          role="contentinfo"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gradient">The Luxury Booths</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  The Luxury Booths is a luxury photo booth experience brand for premium weddings,
                  corporate events, and VIP celebrations.
                </p>
                <div className="flex space-x-4">
                  {[
                    { name: "facebook", url: "https://www.facebook.com/profile.php?id=61570489859940", icon: <Facebook className="w-5 h-5" />, color: "hover:text-blue-500" },
                    { name: "instagram", url: "https://www.instagram.com/theluxurybooths", icon: <Instagram className="w-5 h-5" />, color: "hover:text-pink-500" },
                    { name: "twitter", url: "https://twitter.com", icon: <X className="w-5 h-5" />, color: "hover:text-sky-400" },
                    { name: "linkedin", url: "https://www.linkedin.com/in/theluxurybooths", icon: <Linkedin className="w-5 h-5" />, color: "hover:text-blue-600" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name} page`}
                      className={`w-10 h-10 glass rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:neon-glow ${social.color}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Services</h4>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <li>
                    <Link href="/magazine-photo-booth" className="hover:text-white transition-colors">
                      Magazine Photo Booth
                    </Link>
                  </li>
                  <li>
                    <Link href="/mirror-selfie-booth" className="hover:text-white transition-colors">
                      Mirror Selfie Booth
                    </Link>
                  </li>
                  <li>
                    <Link href="/vintage-photo-booth" className="hover:text-white transition-colors">
                      Vintage Photo Booth
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Polaroid Photo Booth (coming soon)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">

                  <li>
                    <Link href="/#hero-section"
                      className="hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/products"
                      className="hover:text-white transition-colors"
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link href="/about"
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#testimonials-section"
                      className="hover:text-white transition-colors"
                    >
                      Reviews
                    </Link>

                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <p><a href="tel:+919266037002">📞 +91-9266037002</a></p>
                  <p className="flex flex-row"><a href="mailto:theluxurybooths@gmail.com">✉️ theluxurybooths@gmail.com</a></p>
                  <p><a href="https://maps.app.goo.gl/3XDsYrDYf6ModdjA8">📍 Sector 73, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201301</a></p>
                </div>
              </div>
            </div>

            <FooterClientTwo />

          </div>
          <div className="py-9 sm:hidden"><span></span></div>
        </footer>

        {/* Mobile bottom spacing */}
        <div className="h-10 sm:h-0" />
      </div>
    </main>
  )
}
