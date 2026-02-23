import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ParallaxSection } from "@/components/parallax-section"
import { Button3D } from "@/components/3d-button"
import { SectionWrapper } from "@/components/section-wrapper"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import FooterClientTwo from "@/components/hero/footer.client-2"
import { Facebook, Instagram, Linkedin, X } from "lucide-react"

export const metadata = {
  title:
    "About The Luxury Booths | Luxury Photo Booth Brand in Delhi NCR",
  description:
    "The Luxury Booths (TLB) is a luxury photo booth brand based in Delhi NCR, specializing in premium weddings, high-end corporate events, fashion activations, and VIP celebrations across India.",
  alternates: {
    canonical: "https://theluxurybooths.com/about",
  },

  openGraph: {
    title: "About The Luxury Booths | Luxury Photo Booth Brand",
    description:
      "The Luxury Booths is a luxury photo booth brand based in Delhi NCR, delivering premium photo booth experiences for high-end weddings, corporate events, and VIP celebrations across India.",
    url: "https://theluxurybooths.com/about",
    siteName: "The Luxury Booths",
    type: "website",
    images: [
      {
        url: "/luxury magazine photo booth rental setup.webp",
        width: 1200,
        height: 630,
        alt: "The Luxury Booths – Luxury Photo Booth Experience Brand",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About The Luxury Booths | Luxury Photo Booth Brand",
    description:
      "The Luxury Booths is a premium luxury photo booth experience brand in Delhi NCR for weddings, corporate events, and VIP celebrations across India.",
    images: ["/luxury magazine photo booth rental setup.webp"],
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

export default function AboutPage() {

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
      pricing: "Starting ₹25,000",
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
      pricing: "Starting ₹25,000 + prints",
      href: "/vintage-photo-booth",
      image: "https://res.cloudinary.com/dpnykjono/image/upload/v1771402905/vintage-booth.webp",
    },
  ]

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ✅ ORGANIZATION / BRAND SCHEMA */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Brand", "EventService", "Organization", "LocalBusiness"],
            name: "The Luxury Booths",
            url: "https://theluxurybooths.com",
            description:
              "Luxury photo booth brand based in Delhi NCR specializing in premium weddings, high-end corporate events, fashion activations, and VIP celebrations.",
            foundingDate: "2024",
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Delhi NCR"
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Noida",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN"
            },
            sameAs: [
              "https://www.instagram.com/theluxurybooths",
              "https://www.linkedin.com/in/theluxurybooths"
            ]
          }),
        }}
      />

      {/* =========================
          HERO / BRAND DEFINITION
         ========================= */}
      <SectionWrapper id="about-hero" className="py-24 px-4 sm:px-6 text-center">
        <h1 className="font-display text-4xl sm:text-6xl font-bold mb-8 text-gradient">
          About The Luxury Booths
        </h1>

        <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed">
          <strong className="text-white">The Luxury Booths (TLB)</strong> is a luxury photo booth
          experience brand specializing in premium weddings, high-end corporate events,
          fashion activations, and VIP celebrations across India. Known for Vogue-style
          magazine photo booths, mirror selfie experiences, and bespoke vintage setups,
          The Luxury Booths delivers studio-quality photography with instant luxury prints
          designed for elite events.
        </p>
      </SectionWrapper>

      {/* =========================
          EXPERIENCE VS RENTAL
         ========================= */}
      <ParallaxSection speed={0.25}>
        <SectionWrapper id="experience-not-rental" className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 text-gradient">
              A Luxury Experience - Not Just a Photo Booth Rental
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Unlike traditional photo booth rentals, The Luxury Booths is built as an
              experience-first brand. Every setup is designed with professional studio
              lighting, high-end cameras, curated aesthetics, and premium print materials
              to ensure each photograph feels editorial, timeless, and event-worthy.
            </p>
          </div>
        </SectionWrapper>
      </ParallaxSection>


      {/* =========================
          TRUSTED IN DELHI NCR
         ========================= */}
      <ParallaxSection speed={0.25}>
        <SectionWrapper id="experience-not-rental" className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 text-gradient">
              Luxury Photo Booth Brand Trusted in Delhi NCR
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              The Luxury Booths is trusted by event planners, wedding designers,
              and corporate brands across Delhi NCR — including Noida, South Delhi,
              Gurugram, and premium destination venues.
            </p>
          </div>
        </SectionWrapper>
      </ParallaxSection>


      {/* =========================
          SIGNATURE EXPERIENCES
         ========================= */}
      <SectionWrapper id="signature-experiences" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 text-gradient">
            Our Signature Photo Booth Experiences
          </h2>

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

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300 text-lg">
            <p>• Vogue Magazine Photo Booth — Editorial covers with celebrity-style lighting</p>
            <p>• Mirror Selfie Booth — Interactive mirror experience with instant prints</p>
            <p>• Vintage Photo Booth — Timeless retro aesthetics with premium output</p>
            <p>• Bespoke Luxury Installations — Custom-designed booths for elite events</p>
          </div> */}
        </div>
      </SectionWrapper>

      {/* =========================
          EVENTS SPECIALIZATION
         ========================= */}
      <ParallaxSection speed={0.3}>
        <SectionWrapper id="events-specialization" className="py-20 px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-8 text-gradient">
            Events We Specialize In
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            Luxury Weddings, Destination Weddings, Corporate Events, Brand Activations,
            Fashion Shows, Celebrity Parties, and Private VIP Celebrations.
          </p>
        </SectionWrapper>
      </ParallaxSection>

      {/* =========================
          GEOGRAPHIC AUTHORITY
         ========================= */}
      <SectionWrapper id="geographic-presence" className="py-20 px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl sm:text-5xl font-bold mb-6 text-gradient">
          Serving Premium Events Across India
        </h2>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto">
          Based in Delhi NCR, The Luxury Booths serves premium events across India including
          Delhi, Noida, Gurugram, Mumbai, Jaipur, Udaipur, Bangalore, Pune, and other major cities.
          Our team travels nationwide to deliver consistent luxury experiences wherever excellence
          is expected.
        </p>
        <p className="text-gray-400 text-sm mt-4">
          Headquartered in Delhi NCR, we frequently serve events in Noida, Gurgaon, Delhi, and surrounding premium venues.
        </p>
      </SectionWrapper>

      {/* =========================
          CREDIBILITY & VISION
         ========================= */}
      <ParallaxSection speed={0.2}>
        <SectionWrapper id="brand-vision" className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-8 text-gradient">
              Our Vision
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our vision is to redefine how photography is experienced at luxury events.
              We believe photo booths should feel immersive, editorial, and memorable -
              not ordinary.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              At The Luxury Booths, we combine craftsmanship, technology, and design to
              transform fleeting moments into lasting luxury keepsakes.
            </p>
          </div>
        </SectionWrapper>
      </ParallaxSection>

      {/* =========================
          CTA / INTERNAL LINKING
         ========================= */}
      <SectionWrapper id="about-cta" className="py-20 px-4 sm:px-6 text-center">
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/products">
            <Button3D
              variant="outline"
              className="border-purple-400 px-10 py-5 mt-3 text-xl text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
              aria-label="View Full Gallery"
            >Explore Our Booths</Button3D>
          </Link>
          <Link href="/gallery">
            <Button3D
              variant="outline"
              className="border-purple-400 px-10 py-5 mt-3 text-xl text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
              aria-label="View Full Gallery"
            >View Event Gallery</Button3D>
          </Link>
          <Link href="/#contact-section">
            <Button3D
              variant="outline"
              className="border-purple-400 px-10 py-5 mt-3 text-xl text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
              aria-label="View Full Gallery"
            >Contact Us</Button3D>
          </Link>
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
                  <Link href="/products/magazine-photo-booth" className="hover:text-white transition-colors">
                    Magazine Photo Booth
                  </Link>
                </li>
                <li>
                  <Link href="/products/mirror-selfie-booth" className="hover:text-white transition-colors">
                    Mirror Selfie Booth
                  </Link>
                </li>
                <li>
                  <Link href="/products/vintage-photo-booth" className="hover:text-white transition-colors">
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

      {/* Enhanced WhatsApp CTA with dynamic data */}
      <WhatsAppCTA />

    </main>
  )
}