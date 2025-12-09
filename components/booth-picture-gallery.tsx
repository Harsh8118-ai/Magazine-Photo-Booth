"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BoothPictureGalleryProps {
  images: Array<{ id: number; src: string; alt: string }>
  title: string
  columns?: number
}

export const BoothPictureGallery = ({ images, title, columns = 4 }: BoothPictureGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!images.length) return null

  const currentImage = images[selectedImage]
  const nextImage = () => setSelectedImage((prev) => (prev + 1) % images.length)
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="space-y-8">
      <h3 className="text-3xl sm:text-4xl font-display font-bold text-center text-gradient">{title}</h3>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full h-full max-w-4xl max-h-screen flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 z-10"
            >
              ✕
            </button>

            {/* Main Image */}
            <motion.div className="relative w-full aspect-video" layoutId="selectedImage">
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={currentImage.alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 text-white bg-gold/80 hover:bg-gold rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 text-white bg-gold/80 hover:bg-gold rounded-full p-3 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Display */}
      <motion.div
        layoutId="selectedImage"
        onClick={() => setLightboxOpen(true)}
        className="relative aspect-video rounded-lg overflow-hidden glass-enhanced border border-gold/30 cursor-pointer hover:border-gold/60 transition-colors"
      >
        <Image
          src={currentImage.src || "/placeholder.svg"}
          alt={currentImage.alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* Thumbnail Grid */}
      <div className={`grid gap-3 sm:gap-4`} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(100px, 1fr))` }}>
        {images.map((image, index) => (
          <motion.button
            key={image.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index ? "border-gold ring-2 ring-gold/50" : "border-gray-700 hover:border-gold/50"
            }`}
          >
            <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
          </motion.button>
        ))}
      </div>

      {/* Counter */}
      <div className="text-center text-sm text-gray-400">
        Image {selectedImage + 1} of {images.length}
      </div>
    </div>
  )
}
