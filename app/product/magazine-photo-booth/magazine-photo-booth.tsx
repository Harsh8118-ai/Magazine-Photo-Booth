import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Camera, Zap, Users, Star } from "lucide-react"
import { Facebook, Instagram, X, Linkedin } from "lucide-react";
import MiddleOneSection from "./middle-1.client"
import MiddleTwoSection from "./middle-2.client"
import FooterClientTwo from "@/components/hero/footer.client-2"

export default function MagazinePhotoBooth() {

  const features = [
    {
      icon: Star,
      title: "Celebrity-Style Covers",
      description: "Professional magazine layouts featuring your guests as the main attraction",
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

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Header with back button */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center  text-gold hover:text-yellow-300 transition-colors">
            <ArrowLeft size={20} />
            <span className="hidden sm:block">Back</span>
          </Link>
          <p className="text-xl sm:text-3xl font-display text-center font-bold text-gradient">
            Magazine Photo Booth
          </p>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/20 to-transparent opacity-50" />

        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-center text-balance">
            The Original <span className="text-gradient">Magazine Photo Booth</span> Experience
          </h1  >
          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8 text-balance">
            Transform your guests into magazine cover stars with instant, high-quality prints they'll treasure forever.
          </p>

          {/* Use Cases Section - Magazine Theme */}
          <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gold/10 to-transparent">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-start sm:gap-12 lg:gap-20">
              {/* Left Image */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-8 sm:mb-0">
                <div className="relative rounded-xl overflow-hidden glass-enhanced border border-gold/30">
                  <Image
                    src="/Cloudinary/Magazine-Booth/Hero.png"
                    alt="Luxury Magazine Photo Booth Experience"
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
                  Perfect for Every Premium Event in India
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
                  Our magazine photo booth is designed for events where presentation, branding, and guest experience truly matter.
                  With its editorial-style visuals and luxury execution, it seamlessly elevates events across India.
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
                      key={index} className="glass-enhanced p-6 rounded-xl border border-gold/20 hover:border-gold/50 transition-all">
                      <h3 className="text-xl font-semibold mb-3 text-gold">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>

                <p className="text-center sm:text-left text-gold/80 italic mt-12 max-w-3xl">
                  With customizable layouts, premium materials, and professional execution, our magazine photo booth adapts effortlessly to different event styles and themes across India.
                </p>
              </div>
            </div>
          </section>


        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold/10 via-transparent to-gold/10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-3xl sm:text-4xl font-display font-bold text-gold mb-6 text-balance">
            "Step Inside. Become the Cover Star."
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
            Our magazine photo booth doesn't just capture moments-it creates iconic,
            celebrity-style magazine covers that guests will cherish and share for years to come.
          </p>
          <p className="text-gold/80 italic">
            The perfect blend of luxury, fun, and unforgettable memories.
          </p>
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

      {/* <MiddleOne /> */}
      <MiddleOneSection />

      {/* <MiddleTwo /> */}
      <MiddleTwoSection />

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
                The Luxury Booths creates celebrity-style moments at your events.
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
                  <Link href="/#products"
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#about-section"
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
                <p>📍 Sector-73, Noida</p>
              </div>
            </div>
          </div>

          <FooterClientTwo />

        </div>
        <div className="py-9 sm:hidden"><span></span></div>
      </footer>

    </main>
  )
}
