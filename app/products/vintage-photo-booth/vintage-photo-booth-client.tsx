"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Clock, Sparkles, Share2, FileImage } from "lucide-react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const VintagePhotoBoothClient = () => {
  const [printCount, setPrintCount] = useState(200)
  const [selectedImage, setSelectedImage] = useState(0)

  const basePrice = 25000
  const extraPrintCost = 70

  const calculatePrice = (prints: number) => {
    if (prints <= 200) return basePrice
    return basePrice + (prints - 200) * extraPrintCost
  }

  const currentPrice = calculatePrice(printCount)
  const priceBreakdown = printCount > 200 ? (printCount - 200) * extraPrintCost : 0

  const printOptions = [200, 250, 300, 350, 400, 450, 500]

  const highlights = [
    {
      icon: Clock,
      title: "Instant Prints",
      description: "Every photo printed in 30 seconds on premium glossy paper",
    },
    {
      icon: FileImage,
      title: "DSLR Quality",
      description: "Studio-grade portraits with warm vintage tones",
    },
    {
      icon: Sparkles,
      title: "Unlimited Sessions",
      description: "Guests enjoy multiple photo sessions during the event",
    },
    {
      icon: Share2,
      title: "WhatsApp Sharing",
      description: "Digital copies can be shared instantly via QR / WhatsApp",
    },
  ]

  const faqs = [
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
        "Yes, absolutely! Digital copies are available via QR codes and WhatsApp sharing, making it easy for guests to get their photos instantly.",
    },
    {
      question: "Can we customize the print design?",
      answer:
        "Yes, we add event branding, names, date, and theme colors to every print. Your event will be uniquely represented on each photo.",
    },
    {
      question: "Will your team operate the booth?",
      answer:
        "2 trained professionals will be present throughout the event to operate the booth and ensure the best experience for your guests.",
    },
  ]

  const galleryImages = [
    { id: 1, src: "/placeholder.svg?key=uwbp9" },
    { id: 2, src: "/placeholder.svg?key=3swyx" },
    { id: 3, src: "/placeholder.svg?key=183fq" },
    { id: 4, src: "/placeholder.svg?key=3sj0j" },
    { id: 5, src: "/placeholder.svg?key=xf1no" },
    { id: 6, src: "/placeholder.svg?key=cda7v" },
  ]

  const features = [
    "Beautiful retro wooden design",
    "Perfect for weddings, birthdays, baby showers, corporate events",
    "Works indoors and outdoors",
    "Ideal for aesthetic themes: rustic, vintage, outdoor, boho, pastel, romantic",
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-amber-600 hover:text-amber-500 transition-colors">
            <ChevronLeft size={20} />
            Back
          </Link>
          <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-100">Vintage Photo Booth</h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-900/20 to-transparent">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 text-amber-100 text-center text-balance">
            Vintage Photo Booth — Capture Timeless Memories
          </h2>
          <p className="text-lg sm:text-xl text-amber-200 text-center max-w-3xl mx-auto mb-2">
            A retro-style wooden photo booth that clicks stunning photographs and prints them instantly within 30
            seconds.
          </p>
          <p className="text-base sm:text-lg text-amber-300/80 text-center max-w-3xl mx-auto mb-8">
            Bring an antique charm to your celebration with a DSLR-powered vintage booth that combines nostalgic
            photography with modern instant printing.
          </p>

          {/* Hero Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-amber-700/50 mb-8 max-h-96">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Vintage Photo Booth Hero"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-amber-900/20 border border-amber-700/50 hover:border-amber-600/80 transition-all"
                >
                  <Icon className="size-8 text-amber-600 mb-4" />
                  <h3 className="text-lg font-bold text-amber-100 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-amber-200/70">{highlight.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-amber-100 mb-8 text-center">Product Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 text-amber-200"
              >
                <span className="text-amber-600 mt-1">✓</span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* USP Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 p-6 bg-amber-900/30 border-l-4 border-amber-600 rounded-lg"
          >
            <p className="text-lg font-serif italic text-amber-100">
              "A high-engagement booth with the best Return on Investment — guaranteed crowd magnet."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-amber-100 mb-2 text-center">Choose Your Print Package</h3>
          <p className="text-amber-300 text-center mb-8">Start with 200 premium prints • Base price — ₹25,000</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-enhanced p-8 rounded-lg border border-amber-700/50"
          >
            {/* Print Count Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-amber-200 mb-4">Number of Prints</label>
              <select
                value={printCount}
                onChange={(e) => setPrintCount(Number.parseInt(e.target.value))}
                className="w-full px-4 py-3 bg-amber-900/30 border border-amber-700 rounded-lg text-white font-semibold focus:border-amber-600 focus:outline-none"
              >
                {printOptions.map((option) => (
                  <option key={option} value={option}>
                    {option} prints
                  </option>
                ))}
              </select>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 pb-6 border-b border-amber-700/30">
              <div className="flex justify-between text-amber-200">
                <span>Base Price (200 prints)</span>
                <span>₹{basePrice.toLocaleString()}</span>
              </div>
              {priceBreakdown > 0 && (
                <div className="flex justify-between text-amber-300">
                  <span>Extra {printCount - 200} prints × ₹70</span>
                  <span>₹{priceBreakdown.toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Total Price */}
            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-serif text-amber-100">Total Price</span>
              <span className="text-3xl font-serif font-bold text-amber-400">₹{currentPrice.toLocaleString()}</span>
            </div>

            <Link
              href="/#booking-section"
              className="w-full block text-center px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-600/50 transition-all transform hover:scale-105"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-amber-100 mb-8 text-center">Frequently Asked Questions</h3>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`faq-${index}`} className="glass-enhanced px-6 border-amber-700/50">
                  <AccordionTrigger className="text-amber-100 hover:text-amber-300 font-semibold py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-amber-200/80 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-amber-100 mb-8 text-center">Gallery</h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative aspect-video rounded-lg overflow-hidden border-2 border-amber-700/50 mb-6 max-h-96"
          >
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt="Gallery image"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {galleryImages.map((image, index) => (
              <motion.button
                key={image.id}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index ? "border-amber-600" : "border-transparent hover:border-amber-700/50"
                }`}
              >
                <Image src={image.src || "/placeholder.svg"} alt="Gallery thumbnail" fill className="object-cover" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/20 via-amber-800/20 to-amber-900/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
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
              The vintage booth captures not just photographs—it captures the essence of your event with warmth, charm,
              and authentic moments that guests will treasure forever.
            </p>
            <p className="text-amber-400/80 italic font-serif">
              A high-engagement booth with the best Return on Investment — guaranteed crowd magnet.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-amber-900/20 to-transparent">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mb-4">
            Add Timeless Elegance to Your Event
          </h2>
          <p className="text-amber-200 mb-8">Experience the charm of vintage photography at your celebration</p>
          <Link
            href="/#booking-section"
            className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-amber-600/50 transition-all transform hover:scale-105"
          >
            Book Your Vintage Booth
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

export default VintagePhotoBoothClient
