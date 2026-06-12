"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Facebook, Instagram, Linkedin, X, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import Hero from "./hero"
import Pricing from "./pricing"
import WhatsAppCTA from "./whatsapp-button"
import FooterClientTwo from "@/components/hero/footer.client-2"
import FloatingPricingButton from "@/components/floating-pricing-button"

const MirrorPhotoBooth = () => {

  const faqs = [
    {
      question: "What is a mirror photo booth?",
      answer:
        "A mirror photo booth is a luxury interactive touchscreen mirror that allows guests to click photos, interact with animations, and receive instant prints.",
    },
    {
      question: "Does the mirror booth provide instant prints?",
      answer:
        "Yes. Guests receive instant premium-quality prints customized with your event branding and theme.",
    },
    {
      question: "Is the mirror photo booth good for weddings?",
      answer:
        "Absolutely. Mirror booths are one of the most popular wedding attractions because they combine entertainment, interaction, and memorable keepsakes.",
    },
    {
      question: "Can branding and overlays be customized?",
      answer:
        "Yes. We customize print layouts, overlays, welcome screens, and event branding according to your event style.",
    },
    {
      question: "How many guests can use the mirror booth?",
      answer:
        "Unlimited sessions throughout the event. Guests can enjoy the booth multiple times with family and friends.",
    },
    {
      question: "Is it suitable for corporate events?",
      answer:
        "Yes. Mirror booths are excellent for corporate events, brand activations, product launches, and experiential marketing.",
    },
  ]

  const features = [
    "Interactive touchscreen mirror booth",
    "Fun animations and voice prompts",
    "Unlimited guest sessions",
    "Instant premium-quality prints",
    "WhatsApp sharing & digital delivery",
    "Luxury red carpet setup",
    "Professional booth attendants",
    "Custom branding & overlays",
  ]

  const galleryImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780398156/Mirror-1.webp",
      alt: "mirror photo booth wedding Delhi",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780398155/Mirror-1-2.webp",
      alt: "magic mirror booth experience",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780398155/Mirror-1-3.webp",
      alt: "interactive mirror photo booth",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780398155/Mirror-1-4.webp",
      alt: "mirror photo booth setup",
    },
    {
      id: 5,
      src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780398155/Mirror-1-5.webp",
      alt: "luxury wedding mirror booth",
    },
    {
      id: 6,
      src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780398155/Mirror-1-6.webp",
      alt: "corporate mirror booth",
    },
    {
      id: 7,
      src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780398155/Mirror-1-7.webp",
      alt: "mirror selfie booth",
    },
    {
      id: 8,
      src: "https://res.cloudinary.com/dpnykjono/image/upload/v1780398155/Mirror-1-8.webp",
      alt: "retro mirror booth",
    },
  ]

  const cities = [
    { slug: "delhi", name: "Delhi", state: "Delhi" },
    { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh" },
    { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
    { slug: "gurugram", name: "Gurugram", state: "Haryana" },
    { slug: "faridabad", name: "Faridabad", state: "Haryana" },
    { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
    { slug: "udaipur", name: "Udaipur", state: "Rajasthan" },
    { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
    { slug: "pune", name: "Pune", state: "Maharashtra" },
    { slug: "bangalore", name: "Bangalore", state: "Karnataka" },
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

          <Link
            href="/products"
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:block">Back</span>
          </Link>

          <h1 className="text-xl sm:text-3xl font-display font-bold text-gradient">
            Mirror Photo Booth
          </h1>

          <div className="w-20" />

        </div>

      </div>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-purple-900/20 to-transparent">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-center mb-6 text-balance">
            Retro Mirror Photo Booth Rental in Delhi NCR
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-4xl mx-auto mb-4">
            Interactive Touchscreen Magic Mirror Experience for Weddings, Corporate Events & Premium Celebrations
          </p>

          <p className="text-base sm:text-lg text-purple-300/80 text-center max-w-3xl mx-auto mb-10">
            Turn every guest into a star with interactive animations,
            instant prints, and social-media-ready memories.
          </p>

          <Hero />

        </div>

      </section>

      {/* What Is */}
      <section className="py-12 sm:py-20 px-4">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-gradient">
            What is a Mirror Photo Booth?
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            A mirror photo booth, also known as a magic mirror booth,
            is an interactive touchscreen mirror that allows guests to click photos,
            interact with animations, sign pictures digitally,
            and receive instant premium prints.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Unlike traditional booths, the mirror booth becomes part of the entertainment itself
            creating an immersive and unforgettable guest experience.
          </p>

        </div>

      </section>

      {/* Why Trending */}
      <section className="py-12 sm:py-20 px-4 bg-linear-to-b from-purple-900/10 to-transparent">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-gradient">
            Why Mirror Photo Booths Are Trending in India
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            From luxury weddings to high-end corporate events,
            mirror booths are becoming the most talked-about attraction.
            People naturally love attention, instant gratification,
            and Instagram-worthy experiences.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            The combination of touchscreen interaction,
            instant premium prints, animations, and social sharing
            makes the magic mirror booth one of the most engaging event experiences today.
          </p>
        </div>

      </section>

      {/* Features */}
      <section className="py-12 sm:py-20 px-4">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-10 text-gradient">
            Mirror Booth Features
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-300"
              >
                <Zap className="size-5 text-purple-400 mt-1 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}

          </ul>

        </div>

      </section>

      {/* Story */}
      <section className="py-12 sm:py-20 px-4 bg-linear-to-r from-purple-900/20 via-transparent to-purple-900/20">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-6">
            "Where Every Guest Becomes the Star"
          </p>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
            At a luxury wedding in Delhi,
            guests gathered around the mirror booth laughing,
            interacting with the touchscreen,
            and collecting instant prints within seconds.
          </p>

          <p className="text-purple-300/80 italic">
            What started as curiosity quickly became the highlight of the event.
          </p>

        </div>

      </section>

      {/* Pricing */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* FAQ */}
      <section className="py-12 sm:py-20 px-4 bg-linear-to-b from-purple-900/10 to-transparent">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-8 text-gradient">
            Frequently Asked Questions
          </h2>

          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >

            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="glass-enhanced px-6 border-purple-500/20"
              >

                <AccordionTrigger className="font-semibold text-white">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>

              </AccordionItem>
            ))}

          </Accordion>

        </div>

      </section>

      {/* Cities */}
      <section className="py-16 px-4">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6 text-gradient">
            Available in These Cities
          </h2>

          <div className="flex flex-wrap justify-center gap-3">

            {cities.map((city) => (
              <span
                key={city.slug}
                // href={`/mirror-photo-booth/${city.slug}`}
                className="px-4 py-2 rounded-full border border-purple-500/30 text-gray-300 hover:border-purple-400"
              >
                {city.name} ({city.state})
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* Gallery */}
      <section className="py-12 sm:py-20 px-4">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-display font-bold text-center mb-8 text-gradient">
            Gallery
          </h2>

          <div className="columns-2 sm:columns-3 gap-3 space-y-3">

            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="break-inside-avoid overflow-hidden rounded-xl border border-white/10 hover:border-purple-400/40 transition"
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={450}
                  sizes="(max-width: 768px) 50vw, 182px"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 px-4 bg-linear-to-t from-purple-900/20 to-transparent">

        <div className="max-w-2xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
            Ready for the Mirror Booth Experience?
          </h2>

          <p className="text-gray-300 mb-8">
            Bring interactive luxury entertainment to your next celebration.
          </p>

          <a href="#pricing">
            <button
              className="w-full px-6 py-4 rounded-xl bg-linear-to-r from-purple-500 to-fuchsia-500 text-white font-bold hover:scale-[1.02] transition-all"
            >
              Book Mirror Booth Now
            </button></a>

        </div>

      </section>

      {/* Footer */}
      <footer
        id="contact-section"
        className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-900 border-t border-gray-800"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">

            <div className="sm:col-span-2 lg:col-span-1">

              <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gradient">
                The Luxury Booths
              </h3>

              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Luxury photo booth experiences for weddings,
                premium celebrations, and corporate events.
              </p>

              <div className="flex space-x-4">

                {[
                  {
                    name: "facebook",
                    url: "https://www.facebook.com/profile.php?id=61570489859940",
                    icon: <Facebook className="w-5 h-5" />,
                  },
                  {
                    name: "instagram",
                    url: "https://www.instagram.com/theluxurybooths",
                    icon: <Instagram className="w-5 h-5" />,
                  },
                  {
                    name: "twitter",
                    url: "https://twitter.com",
                    icon: <X className="w-5 h-5" />,
                  },
                  {
                    name: "linkedin",
                    url: "https://www.linkedin.com/in/theluxurybooths",
                    icon: <Linkedin className="w-5 h-5" />,
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 glass rounded-full flex items-center justify-center"
                  >
                    {social.icon}
                  </a>
                ))}

              </div>

            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">
                Services
              </h4>

              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">

                <li>
                  <Link href="/magazine-photo-booth">
                    Magazine Photo Booth
                  </Link>
                </li>

                <li>
                  <Link href="/mirror-selfie-booth">
                    Mirror Selfie Booth
                  </Link>
                </li>

                <li>
                  <Link href="/vintage-photo-booth">
                    Vintage Photo Booth
                  </Link>
                </li>
                <li>
                  <Link href="/mirror-photo-booth" className="hover:text-white transition-colors">
                    Mirror Photo Booth
                  </Link>
                </li>
                <li>
                  <Link href="/strip-photo-booth" className="hover:text-white transition-colors">
                    Strip Photo Booth
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
              <h4 className="font-semibold mb-4 text-sm sm:text-base">
                Company
              </h4>

              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">

                <li>
                  <Link href="/#hero-section">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/#products">
                    Products
                  </Link>
                </li>

                <li>
                  <Link href="/about">
                    About Us
                  </Link>
                </li>

              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">
                Contact
              </h4>

              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <p>📞 +91-9266037002</p>
                <p>✉️ theluxurybooths@gmail.com</p>
                <p>📍 Noida, Uttar Pradesh</p>
              </div>
            </div>

          </div>
          <FloatingPricingButton />
          <FooterClientTwo />

        </div>

      </footer>

    </main>
  )
}

export default MirrorPhotoBooth