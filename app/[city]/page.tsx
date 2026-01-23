import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Star, Zap, Users, Award } from "lucide-react"
import { Facebook, Instagram, X, Linkedin } from "lucide-react"

import { SectionWrapper } from "@/components/section-wrapper"
import FooterClientTwo from "@/components/hero/footer.client-2"
import HeroClient from "@/components/hero/hero.client"
import { FaqsSection } from "@/components/faqs-section"
import { Button3D } from "@/components/3d-button"
import { ParallaxSection } from "@/components/parallax-section"
import WhatsAppCTA from "@/components/whatsapp-cta.client"
import { AvailabilityChecker } from "@/components/availability-checker"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FloatingNavigation } from "@/components/floating-navigation"
import MultiVideoReels from "@/components/multi-video-reels.client"
import Floating3DScene from "@/components/floating-3d-scene.client"
import CityProductsSection from "@/components/city-products-section"


const cities: Record<
  string,
  {
    name: string
    state?: string
    nearby?: string[]
    areas?: string[]
  }
> = {
  "delhi-ncr": {
    name: "Delhi NCR",
    state: "Delhi NCR",
    nearby: ["Delhi", "Noida", "Ghaziabad", "Gurugram", "Faridabad"],
    areas: ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad"],
  },

  delhi: {
    name: "Delhi",
    state: "Delhi NCR",
    nearby: ["Noida", "Ghaziabad", "Gurugram", "Faridabad"],
    areas: ["South Delhi", "West Delhi", "Central Delhi", "Dwarka"],
  },

  ghaziabad: {
    name: "Ghaziabad",
    state: "Delhi NCR",
    nearby: ["Delhi", "Noida", "Faridabad", "Gurugram"],
    areas: ["Indirapuram", "Vaishali", "Raj Nagar", "Crossings Republik"],
  },

  noida: {
    name: "Noida",
    state: "Delhi NCR",
    nearby: ["Delhi", "Ghaziabad", "Faridabad", "Gurugram"],
    areas: ["Sector 18", "Sector 62", "Sector 76", "Noida Extension"],
  },

  gurugram: {
    name: "Gurugram",
    state: "Delhi NCR",
    nearby: ["Delhi", "Noida", "Faridabad", "Ghaziabad"],
    areas: ["Golf Course Road", "Cyber City", "Sector 29", "Sohna Road"],
  },

  gurgaon: {
    name: "Gurgaon",
    state: "Delhi NCR",
    nearby: ["Delhi", "Noida", "Faridabad", "Ghaziabad"],
    areas: ["Golf Course Road", "Cyber City", "Sector 29", "Sohna Road"],
  },

  faridabad: {
    name: "Faridabad",
    state: "Delhi NCR",
    nearby: ["Delhi", "Noida", "Ghaziabad", "Gurugram"],
    areas: ["Sector 15", "Sector 16", "Sector 21", "Surajkund Road"],
  },

  jaipur: {
    name: "Jaipur",
    state: "Rajasthan",
    nearby: ["Amer", "Vaishali Nagar", "Malviya Nagar"],
    areas: ["C-Scheme", "Vaishali Nagar", "Malviya Nagar", "Tonk Road"],
  },

  udaipur: {
    name: "Udaipur",
    state: "Rajasthan",
    nearby: ["Nathdwara", "Rajsamand"],
    areas: ["Fateh Sagar", "Lake Pichola", "Hiran Magri", "R K Circle"],
  },

  mumbai: {
    name: "Mumbai",
    state: "Maharashtra",
    nearby: ["Thane", "Navi Mumbai"],
    areas: ["Andheri", "BKC", "Juhu", "South Mumbai"],
  },

  pune: {
    name: "Pune",
    state: "Maharashtra",
    nearby: ["Hinjewadi", "Wakad", "Kharadi"],
    areas: ["Baner", "Viman Nagar", "Koregaon Park", "Kothrud"],
  },
}

function getCityData(citySlug: string) {
  const city = cities[citySlug?.toLowerCase()]
  return city || null
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const cityData = getCityData(city)

  if (!cityData) return {}

  const title = `Luxury Photo Booth Rental in ${cityData.name} | The Luxury Booths`
  const description = `Book Premium Magazine Photo Booth, Mirror Selfie Booth & Vintage Photo Booth in ${cityData.name}. Instant luxury prints, trained staff, and premium event-ready setup.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://theluxurybooths.com/photo-booth-rental-in-${city}`,
    },
    openGraph: {
      title,
      description,
      url: `https://theluxurybooths.com/photo-booth-rental-in-${city}`,
      siteName: "The Luxury Booths",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function CityHomePage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const cityData = getCityData(city)

  const seoCityUrl = `/photo-booth-rental-in-${city}`

  if (!cityData) return notFound()

  const navigationSections = [
    { id: "hero-section", label: "Home", icon: "home" },
    { id: "product", label: "Product", icon: "package", isExternal: true, href: `/products` },
    { id: "gallery-section", label: "Gallery", icon: "camera" },
    { id: "blog", label: "Blog", icon: "blog", isExternal: true, href: "/blog" },
    { id: "testimonials-section", label: "Reviews", icon: "users" },
    { id: "faq-section", label: "FAQs", icon: "message" },
  ] as const

  const nearbyText = cityData.nearby?.length ? cityData.nearby.join(", ") : ""
  const areasText = cityData.areas?.length ? cityData.areas.join(", ") : ""

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden overflow-y-visible">
      <FloatingNavigation sections={navigationSections} />

      {/* Hero Section */}
      <SectionWrapper
        id="hero-section"
        as="header"
        ariaLabel="Hero section with main heading and call-to-action"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Floating Background */}
        <div className="hidden lg:block">
          <Floating3DScene />
        </div>

        {/* Hero Content */}
        <div className={`relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6`}>
          <p className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-gradient leading-tight">
            The <br />
            Luxury Booths
          </p>

          {/* ✅ City Based H1 */}
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gradient leading-tight">
            Luxury Photo Booth Rental in {cityData.name} for Weddings, Corporate & VIP Events
          </h1>

          {/* ✅ City Based Hero Paragraph */}
          <p className="text-lg sm:text-xl lg:text-xl mb-8 text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Looking for a <span className="text-white font-semibold">Luxury Photo Booth rental in {cityData.name}</span>?
            We deliver Premium Vogue Magazine cover prints, mirror selfie experiences and vintage photo booth setups that
            instantly elevate any event.
          </p>

          {/* ✅ Local Proof line */}
          <p className="text-lg sm:text-xl lg:text-xl mb-8 text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Trusted for high-end weddings, celebrity-style parties, corporate activations, brand launches, and VIP celebrations
            with instant photo prints your guests take home as luxury souvenirs.
            {areasText ? (
              <span className="block mt-2 text-gray-400 text-base sm:text-lg">
                Serving {cityData.name} including {areasText}
                {nearbyText ? ` • Nearby: ${nearbyText}` : ""}
              </span>
            ) : null}
          </p>

          <h2 className="font-display text-xl sm:text-2xl font-semibold text-center mb-6 text-gray-200">
            Premium Magazine, Mirror & Vintage Photo Booth Experiences in {cityData.name}
          </h2>

          <HeroClient />
        </div>
      </SectionWrapper>

      {/* Conversion Features Section */}
      <SectionWrapper
        id="features-section"
        ariaLabel="Interactive features to try before booking"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
            Try Before You Book in {cityData.name}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <article>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-6 text-center">
                  Check Your Date in {cityData.name}
                </h3>
                <AvailabilityChecker />
              </article>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ✅ Products Section (City-aware) */}
      <CityProductsSection citySlug={city} cityName={cityData.name} />

      {/* Video Clips Carousel */}
      <div>
        <MultiVideoReels
          title={`Our Instagram Reels (${cityData.name} + More)`}
          videoUrls={[
            "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4",
            "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4",
            "https://res.cloudinary.com/dpnykjono/video/upload/v1765275714/He_tried._He_failed._He_tried_again_and_that_lift_became_their_favourite_memory_of_the_night._%EF%B8%8F_blvzwi.mp4",
          ]}
        />
      </div>

      {/* Event Gallery Section */}
      <SectionWrapper
        id="gallery-section"
        ariaLabel="Photo gallery of past events"
        className="py-16 sm:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
            Event Gallery ({cityData.name})
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index}>
                <div className=" overflow-hidden rounded-xl glass-enhanced scale-on-hover cursor-pointer gpu-accelerated">
                  <Image
                    src={`/Images/${index + 1}.png`}
                    alt={`Event photo ${index + 1} in ${cityData.name}`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="/gallery">
              <Button3D
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                aria-label="View Full Gallery"
              >
                View Gallery
              </Button3D>
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <ParallaxSection speed={0.2}>
        <SectionWrapper
          id="why-choose-us-section"
          ariaLabel="Reasons to choose The Luxury Booths"
          className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="">
                <div>
                  <h2 className="font-display text-3xl sm:text-5xl font-bold mb-8 text-gradient">
                    Why Choose Us in {cityData.name}
                  </h2>

                  <div className="space-y-6">
                    {[
                      {
                        icon: Award,
                        title: "Premium Quality",
                        desc: "Professional-grade equipment and instant high-quality prints",
                      },
                      { icon: Users, title: "Expert Team", desc: "Experienced photographers and event specialists" },
                      {
                        icon: Zap,
                        title: "Instant Results",
                        desc: "Get your magazine covers printed in just 30 seconds",
                      },
                      { icon: Star, title: "5-Star Reviews", desc: "Trusted by 500+ events with perfect ratings" },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-enhanced flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 font-display">{item.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* ✅ Small local trust line */}
                  <p className="text-gray-400 mt-6 text-sm sm:text-base">
                    On-time luxury setup across {cityData.name}
                    {areasText ? ` • Popular in: ${areasText}` : ""}
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 sm:h-6 sm:w-6 text-gold fill-current"
                          aria-label={`Rating star ${i + 1}`}
                        />
                      ))}
                    </div>
                    <span className="text-base sm:text-lg font-semibold">5/5 from 200+ reviews</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="relative">
                  <div className="glass-enhanced rounded-2xl p-6 sm:p-8 scale-on-hover gpu-accelerated">
                    <Image
                      src="/photo-booth-team.jpg"
                      alt={`Our team in action in ${cityData.name}`}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6"
                    />
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-gold fill-current" />
                        ))}
                      </div>
                      <p className="text-base sm:text-lg italic text-gray-300 mb-4">
                        “From the first interaction to the final print, everything was flawless.
                        Our guests couldn’t stop talking about the magazine-style photos - truly unforgettable.”
                      </p>
                      <div className="font-semibold text-sm sm:text-base">Ankit Verma</div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Birthday, {cityData.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </ParallaxSection>

      {/* What Our Clients Say */}
      <SectionWrapper
        id="testimonials-section"
        ariaLabel="Customer testimonials and reviews"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <TestimonialCarousel />
        </div>
      </SectionWrapper>

      {/* About Us Section */}
      <ParallaxSection speed={0.3}>
        <SectionWrapper
          id="about-section"
          ariaLabel="Information about Magazine Photo Booth"
          className="py-16 sm:py-20 px-4 sm:px-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-0 items-center">
              <div className="">
                <div>
                  <Image
                    src="https://res.cloudinary.com/dpnykjono/image/upload/AboutUs.webp"
                    alt="About Us"
                    width={208}
                    height={208}
                    loading="lazy"
                    className="w-full sm:w-80 h-full object-cover rounded-2xl glass-enhanced"
                  />
                </div>
              </div>

              <div>
                <div>
                  <h2 className="font-display text-5xl font-bold text-center mb-8 text-gradient">About Us</h2>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-center">
                    We're passionate about creating unforgettable moments. Our team of professional photographers and
                    event specialists brings years of experience to make your event extraordinary.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed text-center">
                    From intimate weddings to large corporate events, we've helped thousands of guests become cover
                    stars with our innovative magazine photo booth experience.
                  </p>

                  {/* ✅ City serving statement */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-center">
                    We provide luxury photo booth rentals in {cityData.name}
                    {nearbyText ? ` and nearby locations like ${nearbyText}.` : "."}
                  </p>

                  <div className="space-y-4 text-center flex items-center flex-col justify-center mt-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-gold rounded-full"></div>
                      <span className="text-sm sm:text-base">Founded in 2024</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-sm sm:text-base">200+ Events Completed</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm sm:text-base">Award-Winning Service</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </ParallaxSection>

      {/* FAQs & Logistics Section */}
      <SectionWrapper
        id="faq-section"
        ariaLabel="Frequently asked questions and logistics information"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
          {/* ✅ Keep your existing FAQ component */}
          <FaqsSection />

          {/* ✅ Extra Local SEO FAQ (City based) */}
          <div className="glass-enhanced rounded-2xl p-6 sm:p-8 border border-gold/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gradient">
              Photo Booth Rental in {cityData.name} — Quick FAQs
            </h3>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                <span className="text-gold font-semibold">Do you provide setups in {cityData.name}?</span> Yes, we deliver
                luxury Magazine, Mirror and Vintage photo booth setups across {cityData.name}.
              </p>
              <p>
                <span className="text-gold font-semibold">Which areas do you cover?</span>{" "}
                {areasText ? `We frequently cover ${areasText}.` : `We cover major venues across ${cityData.name}.`}
              </p>
              <p>
                <span className="text-gold font-semibold">How early should we book?</span> For peak wedding and corporate
                seasons, we recommend booking early to lock your date.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
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
                The Luxury Booths creates celebrity-style moments at your events in {cityData.name}.
              </p>

              <div className="flex space-x-4">
                {[
                  {
                    name: "facebook",
                    url: "https://www.facebook.com/profile.php?id=61570489859940",
                    icon: <Facebook className="w-5 h-5" />,
                    color: "hover:text-blue-500",
                  },
                  {
                    name: "instagram",
                    url: "https://www.instagram.com/theluxurybooths",
                    icon: <Instagram className="w-5 h-5" />,
                    color: "hover:text-pink-500",
                  },
                  {
                    name: "twitter",
                    url: "https://twitter.com",
                    icon: <X className="w-5 h-5" />,
                    color: "hover:text-sky-400",
                  },
                  {
                    name: "linkedin",
                    url: "https://www.linkedin.com/in/theluxurybooths",
                    icon: <Linkedin className="w-5 h-5" />,
                    color: "hover:text-blue-600",
                  },
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
                  <Link href={`/products/magazine-photo-booth`} className="hover:text-white transition-colors">
                    Magazine Photo Booth
                  </Link>
                </li>
                <li>
                  <Link href={`/products/mirror-selfie-booth`} className="hover:text-white transition-colors">
                    Mirror Selfie Booth
                  </Link>
                </li>
                <li>
                  <Link href={`/products/vintage-photo-booth`} className="hover:text-white transition-colors">
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
                  <Link href={`${seoCityUrl}#hero-section`} className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={`/products`} className="hover:text-white transition-colors">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href={`${seoCityUrl}#about-section`} className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={`${seoCityUrl}#testimonials-section`} className="hover:text-white transition-colors">
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <p>
                  <a href="tel:+919266037002">📞 +91-9266037002</a>
                </p>
                <p className="flex flex-row">
                  <a href="mailto:theluxurybooths@gmail.com">✉️ theluxurybooths@gmail.com</a>
                </p>
                <p>📍 Sector-73, Noida</p>

                {/* ✅ City Serving note */}
                <p className="text-xs sm:text-sm text-gray-500">
                  Serving in {cityData.name}
                  {nearbyText ? ` • Nearby: ${nearbyText}` : ""}
                </p>
              </div>
            </div>
          </div>

          <FooterClientTwo />
        </div>

        <div className="py-9 sm:hidden">
          <span></span>
        </div>
      </footer>

      <WhatsAppCTA />
    </main>
  )
}
