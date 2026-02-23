import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Facebook, Instagram, X, Linkedin } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Pricing from "../pricing"
import WhatsAppButton from "../whatsapp-button"
import Hero from "../hero"
import FooterClientTwo from "@/components/hero/footer.client-2"

type VintagePhotoBoothCityProps = {
  cityName?: string
  stateName?: string
}

export default function VintagePhotoBoothCity({
  cityName,
  stateName,
}: VintagePhotoBoothCityProps) {
  const locationText = cityName
    ? `${cityName}${stateName ? `, ${stateName}` : ""}`
    : "Delhi NCR"

  const faqs = [
    {
      question: `Why is the Vintage Photo Booth a perfect wedding return gift in ${cityName}?`,
      answer:
        "Guests receive a printed photograph customized with the couple’s names and wedding date. It’s a personal keepsake they can frame and cherish long after the wedding — unlike traditional gifts that are often forgotten.",
    },
    {
      question: "How many hours is the service for?",
      answer:
        "Up to 3 hours (extendable). The booth operates throughout your event with our professional team managing all operations.",
    },
    {
      question: "How many photos can guests click?",
      answer:
        "Unlimited sessions during the event! Guests can return as many times as they like to create more memories.",
    },
    {
      question: "Do guests get digital copies?",
      answer:
        "Yes, absolutely! Digital copies are available via QR codes and WhatsApp sharing.",
    },
    {
      question: "Can we customize the print design?",
      answer:
        "Yes, we customize every print with event names, dates, and theme colors.",
    },
  ]

  const features = [
    "Beautiful retro wooden design",
    "Perfect for weddings, birthdays, baby showers & corporate events",
    "Works indoors and outdoors",
    "Ideal for aesthetic themes: rustic, vintage, boho, pastel & romantic",
  ]

  const galleryImages = [
    { id: 1, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth.webp", alt: "Vintage photo booth setup with retro style and instant prints" },
    { id: 2, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-2.webp", alt: "Retro photo booth at an event with vintage booth experience" },
    { id: 3, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-3.webp", alt: "Classic vintage booth design with instant print photo booth service" },
    { id: 4, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-4.webp", alt: "Retro selfie photo booth with wooden vintage design" },
    { id: 5, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-5.webp", alt: "Vintage booth red carpet setup with instant print photo booth" },
    { id: 6, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-6.webp", alt: "Retro floral themed vintage photo booth with instant prints" },
    { id: 7, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-7.webp", alt: "Corporate event retro photo booth with vintage instant print experience" },
    { id: 8, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-8.webp", alt: "Guest enjoying vintage retro photo booth with instant prints" },
    { id: 9, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1769715337/vintage-booth-9.webp", alt: "Product launch event featuring vintage retro photo booth" },

  ];

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
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/products/vintage-photo-booth"
            className="flex items-center gap-2 text-amber-500 hover:text-amber-400"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:block">Back</span>
          </Link>
          <h1 className="text-xl sm:text-3xl font-serif font-bold text-amber-100">
            Vintage Photo Booth in {cityName}
          </h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-amber-900/20 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-amber-100 mb-4">
            Vintage Photo Booth Rental in {cityName}
          </h2>

          <p className="text-lg sm:text-xl text-amber-200 max-w-3xl mx-auto mb-2">
            Guests come dressed for your celebration. We make sure they leave with a printed memory of it.
          </p>

          <p className="text-amber-300/80 max-w-4xl mx-auto mb-8">
            A handcrafted vintage camera-style photo booth delivering instant prints customized with names, dates, and themes - now available in {locationText}.
          </p>

          <Hero />

          <p className="text-amber-300/80 mt-4 max-w-4xl mx-auto">
            Serving {cityName} and nearby locations with premium Vintage Photo Booth rentals for luxury weddings and celebrations.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center text-amber-100 mb-8">
            Product Features
          </h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <li key={i} className="flex gap-3 text-amber-200">
                <span className="text-amber-500">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 p-6 bg-amber-900/30 border-l-4 border-amber-600 rounded-lg">
            <p className="italic font-serif text-amber-100">
              “A calm, elegant photo booth that blends into décor and gives guests a memory to take home.”
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mb-4">
            More than a photo booth. A keepsake.
          </p>
          <p className="text-amber-200 leading-relaxed">
            Instead of traditional return gifts that are often forgotten, the Vintage Photo Booth gives guests a printed photograph from your wedding - personal, emotional, and timeless.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <Pricing />

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-center text-amber-100 mb-8">
            Frequently Asked Questions
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-amber-700/50">
                <AccordionTrigger className="text-amber-100">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-amber-200/80">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Available Cities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold text-amber-100 mb-6">
            Available in These Cities
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/products/vintage-photo-booth/${c.slug}`}
                className="px-4 py-2 rounded-full border border-amber-700/40 text-amber-200 hover:border-amber-500"
              >
                {c.name} ({c.state})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-amber-100 mb-8 text-center">Gallery</h3>

          <p className="text-center text-amber-300 mb-6">
            Real guests. Real moments. Printed memories.
          </p>

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

        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 via-amber-800/20 to-amber-900/20">
        <div
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <svg className="absolute -top-4 -left-4 size-12 text-amber-600/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-7-3S0 4.75 0 6v10c0 5 2 7 7 7z" />
            </svg>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 mb-6 text-balance pl-8">
              "Timeless Memories, Instant Smiles"
            </p>
            <p className="text-lg sm:text-xl text-amber-200 leading-relaxed mb-4">
              The vintage booth captures not just photographs, it captures the essence of your event with warmth, charm,
              and authentic moments that guests will treasure forever.
            </p>
            <p className="text-amber-400/80 italic font-serif">
              A timeless photo experience that turns guest moments into lifelong memories.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-amber-900/20 to-transparent">
        <div
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mb-4">
            Add Timeless Elegance to Your Event
          </h2>
          <p className="text-amber-200 mb-8">Experience the charm of vintage photography at your celebration</p>
          <WhatsAppButton />
        </div>
      </section>

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
                  <Link href="/#products"
                    className="hover:text-white transition-colors"
                  >
                    Products
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
    </main>
  )
}