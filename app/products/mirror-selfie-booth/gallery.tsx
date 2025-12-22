"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import WhatsAppButton from "./whatsapp-button"

const GalleryAndCTA = () => {

  const galleryImages = [
    { id: 1, src: "/Cloudinary/Mirror-Booth/1 (1).jpg", alt: "Mirror selfie booth at wedding" },
    { id: 2, src: "/Cloudinary/Mirror-Booth/1 (2).jpg", alt: "Mirror booth at party" },
    { id: 3, src: "/Cloudinary/Mirror-Booth/1 (3).jpg", alt: "Mirror booth setup" },
    { id: 4, src: "/Cloudinary/Mirror-Booth/1 (4).jpg", alt: "Mirror selfie Booth" },
    { id: 5, src: "/Cloudinary/Mirror-Booth/1 (5).jpg", alt: "Red carpet setup" },
    { id: 6, src: "/Cloudinary/Mirror-Booth/1 (6).jpg", alt: "Floral decoration" },
    { id: 7, src: "/Cloudinary/Mirror-Booth/1 (7).jpg", alt: "Corporate event" },
    { id: 8, src: "/Cloudinary/Mirror-Booth/1 (8).jpg", alt: "Guest experience" },
    { id: 9, src: "/Cloudinary/Mirror-Booth/1 (9).jpg", alt: "Product launch" },
    { id: 10, src: "/Cloudinary/Mirror-Booth/1 (10).jpg", alt: "House Party" },
    { id: 11, src: "/Cloudinary/Mirror-Booth/1 (11).png", alt: "LED setup" },
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
                  width={800}
                  height={800}
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
