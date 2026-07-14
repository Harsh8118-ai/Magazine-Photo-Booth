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
    "Explore premium photo booth rental products by The Luxury Booths - Magazine Photo Booth, Mirror Selfie Booth, and Vintage Photo Booth. Ideal for luxury weddings, corporate events, exhibitions & private parties across India.",

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
      "Explore our premium photo booth rental products - Magazine, Mirror Selfie, and Vintage setups for luxury events across India.",
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
    image: "https://res.cloudinary.com/dpnykjono/image/upload/w_300,q_auto,f_auto/v1781264412/Products/Magazine.webp",
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
    image: "https://res.cloudinary.com/dpnykjono/image/upload/w_300,q_auto,f_auto/v1766530221/Products/Mirror.webp",
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
    image: "https://res.cloudinary.com/dpnykjono/image/upload/w_300,q_auto,f_auto/v1771402905/vintage-booth.webp",
  },
  {
    id: "mirror-photo-booth",
    name: "Mirror Photo Booth",
    description:
      "Luxury interactive magic mirror booth with touchscreen animations, instant premium prints, and immersive guest experiences.",
    features: [
      "Interactive touchscreen mirror",
      "Instant premium-quality prints",
      "Fun animations & voice prompts",
      "Luxury red-carpet setup",
      "Custom branding & overlays",
    ],
    pricing: "Starting ₹35,000 + duration",
    href: "/mirror-photo-booth",
    image: "https://res.cloudinary.com/dpnykjono/image/upload/w_300,q_auto,f_auto/v1780398156/Mirror-1-8.webp",
  },
  {
    id: "strip-photo-booth",
    name: "Strip Photo Booth",
    description:
      "A trendy luxury strip photo booth experience with instant custom photo strips, DSLR photography, and premium event-themed designs.",
    features: [
      "Instant custom strip prints",
      "DSLR quality photography",
      "Luxury event-themed templates",
      "QR & WhatsApp digital sharing",
      "Perfect for weddings & parties",
    ],
    pricing: "Starting ₹25,000 + prints",
    href: "/strip-photo-booth",
    image:
      "https://res.cloudinary.com/dpnykjono/image/upload/w_300,q_auto,f_auto/v1780402924/Strip-5.webp",
  },
  {
    id: "butterfly-drone",
    name: "Butterfly Drone",
    description:
      "A luxury Butterfly Drone experience that delivers rings mid-air with lifelike flapping wings, creating an unforgettable entrance for engagements, weddings, and premium events.",
    features: [
      "Cinematic flying ring delivery",
      "Realistic biomimetic flapping wings",
      "LED illuminated butterfly design",
      "Professional operator & rehearsed flight",
      "Perfect for weddings & luxury events",
    ],
    pricing: "Starting ₹40,000",
    href: "/butterfly-drone",
    image:
      "https://res.cloudinary.com/dpnykjono/image/upload/w_300,q_auto,f_auto/v1783944184/Butterfly-Drone-7.webp",
  },
]

const galleryImages = [

  {
    id: 1,
    src: "/Images/1.webp",
    alt: "Magazine Photo Booth at luxury wedding in Delhi"
  },

  {
    id: 2,
    src: "/Images/2.webp",
    alt: "Mirror Photo Booth at corporate event in Noida"
  },

  {
    id: 3,
    src: "/Images/3.webp",
    alt: "Bride posing inside Magazine Photo Booth"
  },

  {
    id: 4,
    src: "/Images/4.webp",
    alt: "Luxury Mirror Selfie Booth with instant prints"
  },

  {
    id: 5,
    src: "/Images/5.webp",
    alt: "Vintage Photo Booth with DSLR camera and instant prints"
  },

  {
    id: 6,
    src: "/Images/6.webp",
    alt: "Luxury Magazine Booth for destination wedding"
  },

  {
    id: 7,
    src: "/Images/7.webp",
    alt: "Guests enjoying Magazine Photo Booth at premium wedding reception"
  },

  {
    id: 8,
    src: "/Images/8.webp",
    alt: "Luxury Vintage Photo Booth experience with customized prints"
  }

]

export default function ProductsPage() {
  return (<>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://theluxurybooths.com/#organization",
          name: "The Luxury Booths",
          url: "https://theluxurybooths.com",
          logo: "https://theluxurybooths.com/logo.png",
          image: "https://theluxurybooths.com/magazine-photo-booth.webp",
          description:
            "The Luxury Booths provides premium photo booth rental experiences for weddings, corporate events, luxury celebrations, exhibitions, and celebrity events across India.",
          telephone: "+91-9266037002",
          email: "theluxurybooths@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 73",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            postalCode: "201301",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.instagram.com/theluxurybooths",
            "https://www.linkedin.com/in/theluxurybooths",
            "https://www.facebook.com/profile.php?id=61570489859940"
          ],
        }),
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({

          "@context": "https://schema.org",

          "@type": "BreadcrumbList",

          "itemListElement": [

            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://theluxurybooths.com"
            },

            {
              "@type": "ListItem",
              "position": 2,
              "name": "Products",
              "item": "https://theluxurybooths.com/products"
            }

          ]

        })
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({

          "@context": "https://schema.org",

          "@type": "Service",

          "name": "Luxury Photo Booth Rental",

          "provider": {
            "@id": "https://theluxurybooths.com/#organization"
          },

          "url": "https://theluxurybooths.com/products",

          "serviceType": "Photo Booth Rental",

          "description": "Luxury Magazine Photo Booth, Mirror Booth, Vintage Booth and interactive photo experiences for weddings, corporate events and premium celebrations.",

          "areaServed": [

            {
              "@type": "Country",
              "name": "India"
            }

          ],

          "offers": {

            "@type": "Offer",

            "priceCurrency": "INR",

            "price": "15000",

            "availability": "https://schema.org/InStock"

          }

        })
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({

          "@context": "https://schema.org",

          "@type": "ItemList",

          "name": "Luxury Photo Booth Products",

          "itemListOrder": "https://schema.org/ItemListOrderAscending",

          "numberOfItems": 6,

          "itemListElement": [

            {
              "@type": "ListItem",
              "position": 1,
              "url": "https://theluxurybooths.com/magazine-photo-booth"
            },

            {
              "@type": "ListItem",
              "position": 2,
              "url": "https://theluxurybooths.com/mirror-selfie-booth"
            },

            {
              "@type": "ListItem",
              "position": 3,
              "url": "https://theluxurybooths.com/vintage-photo-booth"
            },

            {
              "@type": "ListItem",
              "position": 4,
              "url": "https://theluxurybooths.com/mirror-photo-booth"
            },

            {
              "@type": "ListItem",
              "position": 5,
              "url": "https://theluxurybooths.com/strip-photo-booth"
            },

            {
              "@type": "ListItem",
              "position": 6,
              "url": "https://theluxurybooths.com/butterfly-drone"
            }

          ]

        })
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({

          "@context": "https://schema.org",

          "@type": "FAQPage",

          "mainEntity": [

            {
              "@type": "Question",
              "name": "Which photo booth is best for weddings?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Magazine Photo Booth is our most popular option for luxury weddings."
              }
            },

            {
              "@type": "Question",
              "name": "What is included in the rental?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Professional setup, DSLR photography, instant prints, digital sharing, customized branding, and booth attendants."
              }
            },

            {
              "@type": "Question",
              "name": "Do you travel outside Delhi NCR?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We provide premium photo booth rental services across India."
              }
            },

            {
              "@type": "Question",
              "name": "How many prints are included?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Print quantities depend on your selected package."
              }
            },

            {
              "@type": "Question",
              "name": "Can I customize branding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Templates, overlays, welcome screens and branding can all be customized."
              }
            },

            {
              "@type": "Question",
              "name": "How much space is required?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most setups require approximately an 8×8 ft space."
              }
            },

            {
              "@type": "Question",
              "name": "Do you provide attendants?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Every event includes trained booth operators."
              }
            },

            {
              "@type": "Question",
              "name": "How early should I book?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We recommend booking 3–8 weeks before your event."
              }
            }

          ]

        })
      }}
    />
    <main className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-gold hover:text-yellow-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:block font-medium">Back</span>
          </Link>

          <p className="text-lg sm:text-2xl font-bold text-center text-gradient">
            Products
          </p>

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

          {/* Premium Photo Booth Rental Services */}
          <section className="px-4 pb-16 mt-5 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">

              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                Premium Photo Booth Rental Services Across India
              </h2>

              <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-8">

                <p>
                  <strong className="text-white">The Luxury Booths</strong> offers premium
                  photo booth rental experiences for luxury weddings, corporate events,
                  destination weddings, exhibitions, product launches, celebrity events,
                  birthday celebrations, award nights, fashion shows, mall activations,
                  and private parties across India.
                </p>

                <p>
                  Every experience is carefully designed to become more than just a photo
                  booth. We create interactive entertainment that attracts guests,
                  encourages engagement, produces high-quality photographs, and gives
                  everyone a memorable keepsake to take home. From elegant Magazine Photo
                  Booths to interactive Mirror Booths and timeless Vintage Booths, every
                  setup is professionally managed from start to finish.
                </p>

                <p>
                  Our premium booths feature DSLR photography, instant studio-quality
                  prints, customized event branding, luxury booth styling, digital sharing
                  via QR Code and WhatsApp, personalized print templates, premium props,
                  and experienced booth attendants who ensure a seamless guest
                  experience throughout your event.
                </p>

                <p>
                  Whether you are planning an intimate wedding or a large corporate
                  activation, our team customizes every booth according to your event
                  theme, brand identity, venue aesthetics, and guest experience goals.
                  We have successfully delivered luxury photo booth experiences for
                  premium weddings, exhibitions, conferences, luxury brands, and
                  celebrity celebrations across Delhi NCR and multiple cities throughout
                  India.
                </p>

                <p>
                  Explore our collection below and discover which photo booth experience
                  perfectly matches your event.
                </p>

              </div>
            </div>
          </section>

          <section className="px-4 py-10">

            <div className="max-w-6xl mx-auto">

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">

                <div className="glass rounded-xl p-6">

                  <h2 className="text-4xl font-bold text-gold">
                    500+
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Events Completed
                  </p>

                </div>

                <div className="glass rounded-xl p-6">

                  <h2 className="text-4xl font-bold text-gold">
                    50,000+
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Photos Printed
                  </p>

                </div>

                <div className="glass rounded-xl p-6">

                  <h2 className="text-4xl font-bold text-gold">
                    100,000+
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Guests Served
                  </p>

                </div>

                <div className="glass rounded-xl p-6">

                  <h2 className="text-4xl font-bold text-gold">
                    India
                  </h2>

                  <p className="text-gray-300 mt-2">
                    Luxury Weddings • Corporate Events
                  </p>

                </div>

              </div>

            </div>
          </section>
        </header>

        <section className="px-4 pb-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article
                key={product.id}
                className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-gold/30 hover:scale-[1.02] transition-all duration-300"
              >
                <Link href={product.href} className="block h-full">

                  <div className="relative aspect-3/4 w-1/2 mx-auto overflow-hidden bg-gray-800 mt-3 rounded-2xl">
                    <Image
                      src={product.image}
                      alt={`${product.name} by The Luxury Booths`}
                      fill
                      loading="eager"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col h-full">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      {product.name}
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                      {product.description}
                    </p>

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

                    <div className="border-t border-white/10 pt-5 space-y-3">

                      <p className="text-gold text-2xl font-bold">
                        {product.pricing}
                      </p>

                      <div className="space-y-2">

                        <div className="flex items-center text-gray-300 font-medium">
                          ✓ View Details
                        </div>

                      </div>

                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-10">
              Which Photo Booth Should You Choose?
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-white/10">

              <table className="w-full text-left">

                <thead className="bg-white/5">
                  <tr>
                    <th className="p-4">Photo Booth</th>
                    <th className="p-4">Best For</th>
                  </tr>
                </thead>

                <tbody>

                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">Magazine Photo Booth</td>
                    <td className="p-4">Luxury Weddings & Celebrity Events</td>
                  </tr>

                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">Mirror Photo Booth</td>
                    <td className="p-4">Corporate Events & Brand Activations</td>
                  </tr>

                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">Vintage Photo Booth</td>
                    <td className="p-4">Rustic Weddings & Theme Parties</td>
                  </tr>

                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">Strip Photo Booth</td>
                    <td className="p-4">Birthdays, Parties & Youth Events</td>
                  </tr>

                  <tr className="border-t border-white/10">
                    <td className="p-4 font-semibold">Butterfly Drone</td>
                    <td className="p-4">Ring Ceremony & Wedding Entry</td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-10">
              Perfect For Every Premium Event
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

              {[
                "Luxury Weddings",
                "Corporate Events",
                "Destination Weddings",
                "Product Launches",
                "Mall Activations",
                "Birthday Parties",
                "Award Shows",
                "Fashion Shows",
                "Exhibitions",
                "Brand Activations",
                "Celebrity Events",
                "Private Celebrations",
              ].map((item) => (

                <div
                  key={item}
                  className="glass rounded-xl border border-white/10 p-5 text-center hover:border-gold transition"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

        </section>

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

        <section className="px-4 py-20 sm:px-6 lg:px-8">

          <div className="max-w-6xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="glass rounded-xl p-6 border border-white/10">
                <div className="text-yellow-400 text-xl mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-300 italic">
                  "The Magazine Booth became the highlight of the wedding. Guests couldn't stop talking about it."
                </p>

                <p className="mt-5 font-semibold">
                  — Wedding Planner
                </p>
              </div>

              <div className="glass rounded-xl p-6 border border-white/10">
                <div className="text-yellow-400 text-xl mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-300 italic">
                  "Our corporate activation generated huge engagement because of the Mirror Booth."
                </p>

                <p className="mt-5 font-semibold">
                  — Brand Manager
                </p>
              </div>

              <div className="glass rounded-xl p-6 border border-white/10">
                <div className="text-yellow-400 text-xl mb-4">
                  ★★★★★
                </div>

                <p className="text-gray-300 italic">
                  "Professional team, premium setup and amazing print quality."
                </p>

                <p className="mt-5 font-semibold">
                  — Event Organizer
                </p>
              </div>

            </div>

          </div>
        </section>

        <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Book Your Photo Booth?
          </h2>
          <p className="text-gray-300 mb-6 text-base sm:text-lg">
            Contact us today to reserve your preferred booth and make your event unforgettable.
          </p>
          <Link
            href="/#booking"
            className="inline-block px-8 py-3 bg-linear-to-r from-neon-purple to-neon-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-neon-purple/40 transition-shadow"
          >
            Book Now
          </Link>
        </section>

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
                    sizes="(max-width: 768px) 50vw, 182px"
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

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">

              {[
                {
                  q: "Which photo booth is best for weddings?",
                  a: "Our Magazine Photo Booth is the most popular choice for luxury weddings, while the Vintage Booth is ideal for rustic and heritage-themed celebrations."
                },
                {
                  q: "What is included in the photo booth rental?",
                  a: "Every booking includes professional setup, DSLR photography, instant prints, customized templates, premium props, digital sharing, and experienced booth attendants."
                },
                {
                  q: "Do you travel outside Delhi NCR?",
                  a: "Yes. We provide photo booth rental services across India including Jaipur, Agra, Udaipur, Mumbai, Bangalore, Hyderabad, Pune, Chandigarh and other cities."
                },
                {
                  q: "How many prints are included?",
                  a: "The number of prints depends on your selected package. Additional prints can always be added."
                },
                {
                  q: "Can I customize the booth branding?",
                  a: "Absolutely. We personalize print templates, booth branding, overlays, backdrops, welcome screens, and digital frames according to your event."
                },
                {
                  q: "How much space is required?",
                  a: "Most booths require approximately an 8×8 ft area, although the exact requirement depends on the selected setup."
                },
                {
                  q: "Do you provide professional attendants?",
                  a: "Yes. Every luxury booth is managed by trained professionals who assist guests throughout the event."
                },
                {
                  q: "How early should I book?",
                  a: "We recommend booking at least 3–8 weeks in advance, especially during wedding season."
                }

              ].map((faq) => (

                <div
                  key={faq.q}
                  className="glass rounded-xl border border-white/10 p-6"
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {faq.q}
                  </h3>

                  <p className="text-gray-300 leading-7">
                    {faq.a}
                  </p>

                </div>

              ))}

            </div>

          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">

          <div className="max-w-5xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-6">
              Cities We Serve
            </h2>

            <p className="text-gray-300 mb-8">
              We provide premium photo booth rental services across Delhi NCR and
              major cities throughout India.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <Link href="/photo-booth-rental-in-delhi" className="glass px-5 py-3 rounded-xl hover:border-gold border border-white/10">
                Delhi
              </Link>

              <Link href="/photo-booth-rental-in-noida" className="glass px-5 py-3 rounded-xl hover:border-gold border border-white/10">
                Noida
              </Link>

              <Link href="/photo-booth-rental-in-gurgaon" className="glass px-5 py-3 rounded-xl hover:border-gold border border-white/10">
                Gurgaon
              </Link>

              <Link href="/photo-booth-rental-in-jaipur" className="glass px-5 py-3 rounded-xl hover:border-gold border border-white/10">
                Jaipur
              </Link>

              <Link href="/photo-booth-rental-in-udaipur" className="glass px-5 py-3 rounded-xl hover:border-gold border border-white/10">
                Udaipur
              </Link>

              <Link href="/photo-booth-rental-in-ahmedabad" className="glass px-5 py-3 rounded-xl hover:border-gold border border-white/10">
                Ahmedabad
              </Link>

              <Link href="/photo-booth-rental-in-mumbai" className="glass px-5 py-3 rounded-xl hover:border-gold border border-white/10">
                Mumbai
              </Link>

              <Link href="/photo-booth-rental-in-pune" className="glass px-5 py-3 rounded-xl hover:border-gold border border-white/10">
                Pune
              </Link>

            </div>

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
                      className={`w-10 h-10 glass rounded-full flex items-center justify-center cursor-pointer ${social.color}`}
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
                    <Link href="/butterfly-drone" className="hover:text-white transition-colors">
                      Butterfly Drone
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
                  <li>
                    <Link href={`/blog`} className="hover:text-white transition-colors">
                      Blog
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

        <div className="h-10 sm:h-0" />
      </div>
    </main>
  </>
  )
}
