"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import WhatsAppButton from "./whatsapp-button"

const GalleryAndCTA = () => {

  const galleryImages = [
    { id: 1, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-12.webp", alt: "Mirror selfie booth at wedding" },
    { id: 2, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-13.webp", alt: "Mirror booth at party" },
    { id: 3, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-14.webp", alt: "Mirror booth setup" },
    { id: 4, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-15.webp", alt: "Mirror selfie Booth" },
    { id: 5, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-16.webp", alt: "Red carpet setup" },
    { id: 6, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-17.webp", alt: "Floral decoration" },
    { id: 7, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-18.webp", alt: "Corporate event" },
    { id: 8, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-19.webp", alt: "Guest experience" },
    { id: 9, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-20.webp", alt: "Product launch" },
    { id: 10, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-21.webp", alt: "House Party" },
    { id: 11, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1766755168/1-22.webp", alt: "LED setup" },
  ]

  return (
    <>
      {/* Gallery Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8 text-center text-gradient">Gallery</h2>

          {/* Thumbnail Grid */}
          <div className="columns-2 sm:columns-3 gap-3 space-y-3">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.02 }}
                className="w-full break-inside-avoid cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-gold/50 transition"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={450}
                  sizes="(max-width: 768px) 45vw, 300px"
                  loading="lazy"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-gold/10 to-transparent">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Ready for Luxury?</h2>
          <p className="text-gray-300 mb-8">Bring the mirror selfie booth to your next premium event</p>
          <WhatsAppButton />
        </motion.div>
      </section>
    </>
  )
}

export default GalleryAndCTA
