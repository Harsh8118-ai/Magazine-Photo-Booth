import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Camera, Zap, Users, Star } from "lucide-react"
import { Facebook, Instagram, X, Linkedin } from "lucide-react"
import FooterClientTwo from "@/components/hero/footer.client-2"

type MagazinePhotoBoothProps = {
  cityName?: string
  stateName?: string
}

export default function VintagePhotoBoothCity({
  cityName,
  stateName,
}: MagazinePhotoBoothProps) {
  const locationText = cityName
    ? `${cityName}${stateName ? `, ${stateName}` : ""}`
    : "Delhi NCR"

  const features = [
    {
      icon: Star,
      title: "Vogue-Style Editorial Look",
      description:
        "A luxury Vogue magazine photo booth style setup with premium lighting and cover-worthy frames",
    },
    {
      icon: Zap,
      title: "Instant Prints",
      description: "High-quality magazine cover prints delivered in 30 seconds",
    },
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Expert photographers ensuring picture-perfect moments",
    },
    {
      icon: Users,
      title: "Unlimited Sessions",
      description: "All your guests can become cover stars throughout the event",
    },
  ]

  const cities = [
    { slug: "delhi", name: "Delhi", state: "Delhi" },
    { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh" },
    { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
    { slug: "gurugram", name: "Gurugram", state: "Haryana" },
    { slug: "gurgaon", name: "Gurgaon", state: "Haryana" },
    { slug: "faridabad", name: "Faridabad", state: "Haryana" },
    { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
    { slug: "udaipur", name: "Udaipur", state: "Rajasthan" },
    { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
    { slug: "pune", name: "Pune", state: "Maharashtra" },
    { slug: "bangalore", name: "Bangalore", state: "Karnataka" },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header with back button */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center text-gold hover:text-yellow-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:block">Back</span>
          </Link>
          <p className="text-lg sm:text-3xl font-display text-center font-bold text-gradient">
            Magazine Photo Booth in {cityName}
          </p>
          <div className="" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-50" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* ✅ Dynamic H1 with City */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-center text-balance text-gradient">
            Magazine Photo Booth Rental in {cityName}
          </h1>

          {/* ✅ Dynamic paragraph with City */}
          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-2 text-balance">
            The Luxury Booths provides premium <strong>Vogue Magazine Photo Booth Rental in {cityName}.</strong>
            </p>
          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8 text-balance">
            Transform your guests into Vogue-style magazine cover stars with instant, high-quality prints they'll treasure
            forever.
          </p>

          {/* Use Cases Section */}
          <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gold/10 to-transparent">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-start sm:gap-12 lg:gap-20">
              {/* Left Image */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-8 sm:mb-0">
                <div className="relative rounded-xl overflow-hidden glass-enhanced border border-gold/30">
                  <Image
                    src="/luxury magazine photo booth rental setup.webp"
                    alt={`luxury magazine photo booth rental setup in ${locationText}`}
                    width={400}
                    height={500}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>
              </div>

              {/* Right Highlights */}
              <div className="w-full sm:w-auto flex-1">
                <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-gradient text-center sm:text-left">
                  Trusted Magazine Photo Booth Rental in {cityName}
                </h2>

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Our Vogue Magazine Photo Booth is designed for events where presentation, branding, and guest experience truly
                  matter. With editorial-style visuals and luxury execution, it delivers a Vogue magazine photo booth
                  experience for premium events in {cityName}.
                </p>

                {/* ✅ City-based + fallback for India */}
                {cityName ? (
                  <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                    Serving {cityName} and nearby areas with premium on-site setup, professional execution, and instant
                    magazine-cover prints for weddings, corporate events, exhibitions, and private parties.
                  </p>
                ) : (
                  <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                    Available across Noida, Delhi NCR, Gurgaon, Jaipur, Udaipur, Agra, and nearby cities. Our team travels
                    pan-India for premium weddings, corporate events, and exhibitions.
                  </p>
                )}

                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Trusted for premium weddings and corporate events across {cityName} venues, banquet halls, and luxury farmhouses.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Luxury Weddings & Receptions",
                      description:
                        "Create unforgettable keepsakes for your guests with celebrity-style magazine covers that perfectly complement premium wedding celebrations.",
                    },
                    {
                      title: "Corporate Events & Brand Launches",
                      description:
                        "Deliver high-impact brand engagement with custom magazine layouts designed for corporate events, product launches, and activations.",
                    },
                    {
                      title: "Exhibitions & Trade Shows",
                      description:
                        "Attract attention, increase footfall, and encourage social sharing with an interactive photo experience that stands out on the show floor.",
                    },
                    {
                      title: "Celebrity & Influencer Events",
                      description:
                        "Editorial-style visuals crafted for instant sharing, making the magazine photo booth ideal for influencer and celebrity-driven events.",
                    },
                    {
                      title: "Private Parties & Milestone Celebrations",
                      description:
                        "Add a premium entertainment element to birthdays, anniversaries, and milestone celebrations with a truly luxury photo experience.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="glass-enhanced p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-all"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-gold">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center sm:text-left text-gold/80 italic mt-12 max-w-3xl">
                  With customizable layouts, premium materials, and professional execution, our magazine photo booth adapts
                  effortlessly to different event styles and themes across {locationText}.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Avaiable Cities  */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gold/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-gradient mb-4">
            Available in These Cities
          </h2>

          <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10 text-base sm:text-lg">
            We provide luxury magazine photo booth services with premium setup and instant Vogue-style prints across major cities in India.
            Select your city to see location-specific details.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/products/magazine-photo-booth/${city.slug}`}
                className="px-4 py-2 rounded-full border border-gold/30 glass text-gray-200 hover:text-white hover:border-gold/60 hover:neon-glow transition-all text-sm sm:text-base"
              >
                {city.name} <span className="text-gray-400">({city.state})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold/10 via-transparent to-gold/10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-3xl sm:text-4xl font-display font-bold text-gold mb-6 text-balance">
            "Step Inside. Become the Cover Star."
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
            Our magazine photo booth doesn't just capture moments — it creates iconic, celebrity-style magazine covers that
            guests will cherish and share for years to come.
          </p>
          <p className="text-gold/80 italic">The perfect blend of luxury, fun, and unforgettable memories.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gold/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center text-gradient">
            Why Choose Our Magazine Booth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="glass-enhanced p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <Icon className="size-8 sm:size-10 text-gold mb-4 transition-colors group-hover:text-yellow-300" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact-section"
        className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-900 border-t border-gray-800"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gradient">
                The Luxury Booths
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                The Luxury Booths creates celebrity-style moments at your events.
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
                  <Link href="/#hero-section" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#about-section" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials-section" className="hover:text-white transition-colors">
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
                <p>📍 Sector 73, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201301</p>
              </div>
            </div>
          </div>

          <FooterClientTwo />
        </div>

        <div className="py-9 sm:hidden">
          <span />
        </div>
      </footer>
    </main>
  )
}
