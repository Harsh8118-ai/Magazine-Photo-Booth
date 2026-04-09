"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, useMemo } from "react"
import { eventData } from "@/hooks/eventsData"

type Category = "All" | "Wedding" | "Corporate" | "Birthday" | "Anniversary"

export default function MagazinePhotoBoothImages() {

  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const allImages = useMemo(() => {

    return Object.values(eventData).flatMap(event =>
      event.topMoments.map((img, index) => ({

        url: img.url,

        category: event.type as Category,

        alt:
          `${event.type.toLowerCase()} magazine photo booth image ${event.location}
          vogue style magazine cover photo booth
          luxury magazine booth setup
          celebrity style photo booth
          premium event photo booth ${index + 1}`

      }))
    )

  }, [])



  const filteredImages = useMemo(() => {

    if (activeCategory === "All") return allImages

    return allImages.filter(img => img.category === activeCategory)

  }, [activeCategory, allImages])

  const products = [
    {
      name: "Magazine Photo Booth",
      description:
        "Luxury vogue-style magazine cover photo booth with instant prints, custom branding and premium photography experience.",
      href: "/magazine-photo-booth",
      image:
        "https://res.cloudinary.com/dpnykjono/image/upload/v1766530206/Products/Magazine.webp",
    },

    {
      name: "Mirror Selfie Booth",
      description:
        "Interactive mirror selfie booth with animations, touch interface and luxury red carpet experience for premium events.",
      href: "/mirror-selfie-booth",
      image:
        "https://res.cloudinary.com/dpnykjono/image/upload/v1766530221/Products/Mirror.webp",
    },

    {
      name: "Vintage Photo Booth",
      description:
        "Classic vintage style photo booth with premium aesthetic and instant prints for weddings and themed celebrations.",
      href: "/vintage-photo-booth",
      image:
        "https://res.cloudinary.com/dpnykjono/image/upload/v1771402905/vintage-booth.webp",
    },
  ]

  return (

    <main className="min-h-screen bg-black text-white">



      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">

          <Link
            href="/magazine-photo-booth"
            className="flex items-center text-gold hover:text-yellow-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:block ml-2">Back</span>
          </Link>


          <p className="text-xl sm:text-3xl font-display font-bold text-gradient text-center">

            Magazine Photo Booth Images

          </p>


          <div className="w-20" />

        </div>

      </div>





      {/* HERO */}
      <section className="pt-28 pb-10 px-6 text-center max-w-5xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">

          Vogue Style Magazine Photo Booth Image Gallery

        </h1>


        <p className="text-gray-400 max-w-2xl mx-auto">

          Browse real magazine photo booth images from luxury weddings,
          corporate events, birthday celebrations and premium brand activations.

          Explore celebrity style magazine cover photo booth setups,
          custom magazine booth designs and professional instant print experiences.

        </p>

      </section>






      {/* FILTER */}
      <section className="max-w-6xl mx-auto px-6 mb-10">

        <div className="flex flex-wrap justify-center gap-3">

          {["All", "Wedding", "Corporate", "Birthday", "Anniversary"].map(cat => (

            <button

              key={cat}

              onClick={() => setActiveCategory(cat as Category)}

              className={`

              px-5
              py-2
              rounded-full
              text-sm
              transition-all
              duration-300

              ${activeCategory === cat

                  ? "bg-gradient-to-r from-gold to-yellow-300 text-black shadow-lg"

                  : "border border-white/20 text-gray-300 hover:border-gold hover:text-white"

                }

              `}
            >

              {cat}

            </button>

          ))}

        </div>

      </section>

      {/* PINTEREST GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div

          className="

          columns-2
          sm:columns-2
          md:columns-3
          lg:columns-4

          gap-4

          space-y-4

          "

        >


          {filteredImages.map((img, i) => (

            <div
              key={i}
              className="mb-4 break-inside-avoid group"  
            >

              <Image

                src={img.url}

                alt={img.alt}

                width={500}

                height={700}

                loading="lazy"

                sizes="(max-width:768px) 50vw,
                       (max-width:1200px) 33vw,
                       25vw"

                className="

                w-full
                h-auto
                rounded-xl

                object-cover

                transition-transform
                duration-500

                group-hover:scale-[1.02]

                "

              />

            </div>

          ))}

        </div>

      </section>


      {/* SEO CONTENT */}
      <section className="max-w-5xl mx-auto px-6 pb-32">

        <h2 className="text-3xl font-bold mb-6 text-gradient">

          Magazine Booth Design Image Inspiration

        </h2>


        <p className="text-gray-400 leading-relaxed mb-4">

          These magazine photo booth images showcase real luxury magazine cover photo booth setups
          used in weddings, corporate events, birthday parties and premium brand activations.

          Each magazine booth image demonstrates the final print quality,
          typography placement and lighting setup used in professional magazine style photo booths.

        </p>


        <p className="text-gray-400 leading-relaxed mb-4">

          Vogue magazine photo booth images are popular for luxury weddings and corporate events
          where branding and visual presentation are important.

          The magazine cover photo booth creates a celebrity style photography experience
          that guests remember and share on social media.

        </p>


        <p className="text-gray-400 leading-relaxed">

          Browse wedding magazine photo booth images,
          corporate magazine booth images,
          birthday magazine booth images and premium event photo booth gallery
          to understand how your final magazine prints will appear.

        </p>

      </section>

      {/* INTERNAL LINKS */}
      <section className="max-w-5xl mx-auto px-6 pb-32">

        <h2 className="text-2xl font-bold mb-8 text-gradient">

          Explore More Magazine Booth Content

        </h2>


        <div className="grid md:grid-cols-3 gap-5">

          <Link

            href="/magazine-photo-booth"

            className="border border-white/10 rounded-xl p-6 hover:border-gold transition"

          >

            Magazine Photo Booth Overview

          </Link>


          <Link

            href="/gallery"

            className="border border-white/10 rounded-xl p-6 hover:border-gold transition"

          >

            Full Event Gallery

          </Link>


          <Link

            href="/magazine-photo-booth-design"

            className="border border-white/10 rounded-xl p-6 hover:border-gold transition"

          >

            Magazine Booth Design Ideas

          </Link>

        </div>

      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-gold/10 to-transparent">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-display font-bold text-center text-gradient mb-4">

          Explore All Photo Booth Products

        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">

          Discover our luxury photo booth experiences including magazine photo booth,
          mirror selfie booth and vintage photo booth rental setups designed for weddings,
          corporate events, exhibitions and premium celebrations.

        </p>



        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {products.map((product) => (

            <Link
              key={product.name}
              href={product.href}
              className="group glass rounded-2xl border border-white/10 hover:border-gold/40 transition-all duration-300 hover:scale-[1.02]"
            >

              <div className="p-5">

                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl mb-4">

                  <Image
                    src={product.image}
                    alt={`${product.name} rental luxury event photo booth`}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>


                <h3 className="text-xl font-semibold mb-2">

                  {product.name}

                </h3>


                <p className="text-gray-400 text-sm leading-relaxed">

                  {product.description}

                </p>

              </div>

            </Link>

          ))}

        </div>



        <div className="text-center mt-12">

          <Link
            href="/products"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-gold to-yellow-300 text-black font-semibold hover:shadow-lg transition"
          >

            View All Booths

          </Link>

        </div>

      </div>

    </section>

    </main>

  )

}