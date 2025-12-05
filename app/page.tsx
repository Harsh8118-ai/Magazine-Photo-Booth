"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Camera, Zap, Users, Award, CheckCircle, Calendar, Package, Home, MessageCircle } from "lucide-react"
import { AvailabilityChecker } from "@/components/availability-checker"
import { useRouter } from "next/navigation";
import { AiCoverPreview } from "@/components/ai-cover-preview"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { FaqsSection } from "@/components/faqs-section"
import { VenueRequirements } from "@/components/venue-requirements"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ClientLogos } from "@/components/client-logos"
import { AnimatedCounter } from "@/components/animated-counter"
import { Floating3DScene } from "@/components/floating-3d-scene"
import { Button3D } from "@/components/3d-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AdvancedBookingSystem } from "@/components/advanced-booking-system"
import { GalleryModal } from "@/components/gallery-modal"
import { LegalModal } from "@/components/legal-modal"
import { FloatingNavigation } from "@/components/floating-navigation"
import { SectionWrapper } from "@/components/section-wrapper"
import { Facebook, Instagram, X, Linkedin } from "lucide-react";

export default function MagazinePhotoBoothPage() {
  const [selectedPackage, setSelectedPackage] = useState("weddings")
  const [isVisible, setIsVisible] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: "privacy" | "terms" | "cookies" | null }>({
    isOpen: false,
    type: null,
  })

  const [bookingData, setBookingData] = useState({
    date: "",
    eventType: "",
    package: "",
    city: "",
  })

  const router = useRouter();

  const navigationSections = [
    { id: "hero-section", label: "Home", icon: Home },
    { id: "packages-section", label: "Packages", icon: Package },
    { id: "gallery-section", label: "Gallery", icon: Camera },
    { id: "booking-section", label: "Book Now", icon: Calendar },
    { id: "testimonials-section", label: "Reviews", icon: Users },
    { id: "contact-section", label: "Contact", icon: MessageCircle },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const galleryImages = Array.from(
    { length: 12 },
    (_, index) => `/magazine-photobooth.png?height=400&width=400&query=magazine photo booth event ${index + 1}`,
  )

  const handlePackageSelect = (packageName: string) => {
    setBookingData((prev) => ({ ...prev, package: packageName }))
    scrollToSection("booking-section")
  }

  const openLegalModal = (type: "privacy" | "terms" | "cookies") => {
    setLegalModal({ isOpen: true, type })
  }

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null })
  }

  const handleViewGallery = () => {
    router.push("/gallery");  
  };


  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingNavigation sections={navigationSections} />

      {/* Hero Section */}
      <SectionWrapper
        id="hero-section"
        as="header"
        ariaLabel="Hero section with main heading and call-to-action"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-40" aria-hidden="true">
            <source
              src="/placeholder.mp4?height=1080&width=1920&query=luxury photo booth guests posing magazine covers"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        </div>
        <Floating3DScene />

        {/* Hero Content */}
        <div
          className={`relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 ${isVisible ? "slide-in-up" : "opacity-0"}`}
        >
          <h1 className="font-display text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 text-gradient leading-tight">
            Luxury Booth
            <br />
            Become the Cover Star.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Luxury Booth brings celebrity-style covers to your event — with instant prints your
            guests will love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button3D
              size="lg"
              onClick={() => scrollToSection("booking-section")}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              aria-label="Book your Luxury Booth now"
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Book Now
            </Button3D>
            <Button3D
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("packages-section")}
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold border-gold text-gold hover:bg-gold hover:text-black bg-transparent"
              aria-label="View our packages and pricing"
            >
              <Package className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              See Packages
            </Button3D>
          </div>

          {/* Stats Bar - Improved mobile responsiveness and SEO */}
          <div
            className="glass-enhanced rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto"
            role="region"
            aria-label="Company statistics"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <AnimatedCounter end={12500} suffix="+" className="text-2xl sm:text-3xl font-bold text-gold mb-2" />
                <div className="text-xs sm:text-sm text-gray-400">Magazine Covers Printed</div>
              </div>
              <div>
                <AnimatedCounter end={250} suffix="+" className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2" />
                <div className="text-xs sm:text-sm text-gray-400">Successful Events</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">30s</div>
                <div className="text-xs sm:text-sm text-gray-400">Average Print Time</div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Conversion Features Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <SectionWrapper
          id="features-section"
          ariaLabel="Interactive features to try before booking"
          className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
              Try Before You Book
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-12 mb-12 sm:mb-16">
              <ScrollReveal direction="left" delay={0.3}>
                <article>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-6 text-center">Check Your Date</h3>
                  <AvailabilityChecker />
                </article>
              </ScrollReveal>

              {/* AI Preview  */}
              {/* <ScrollReveal direction="right" delay={0.4}>
                <article>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-6 text-center">Preview Your Cover</h3>
                  <AiCoverPreview />
                </article>
              </ScrollReveal> */}

            </div>
          </div>
        </SectionWrapper>
      </ScrollReveal>

      {/* How It Works Section */}
      <ParallaxSection speed={0.3}>
        <ScrollReveal direction="up" delay={0.1}>
          <SectionWrapper
            id="how-it-works-section"
            ariaLabel="Step-by-step process explanation"
            className="py-16 sm:py-20 px-4 sm:px-6"
          >
            <div className="max-w-7xl mx-auto">
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
                How It Works
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {[
                  {
                    step: "01",
                    title: "Step In",
                    desc: "Enter our luxury glass booth and strike your pose",
                    icon: Users,
                  },
                  {
                    step: "02",
                    title: "See Live Cover",
                    desc: "Watch yourself appear on a live magazine cover",
                    icon: Camera,
                  },
                  {
                    step: "03",
                    title: "Photographer Clicks",
                    desc: "Our professional captures the perfect shot",
                    icon: Zap,
                  },
                  {
                    step: "04",
                    title: "Get Your Print",
                    desc: "Receive your celebrity-style cover in 30 seconds",
                    icon: Award,
                  },
                ].map((item, index) => (
                  <ScrollReveal key={index} direction="scale" delay={0.1 * index}>
                    <Card
                      className="glass-enhanced scale-on-hover border-0 text-center group gpu-accelerated"
                      role="article"
                    >
                      <CardContent className="p-6 sm:p-8">
                        <div
                          className="text-4xl sm:text-6xl font-bold text-gold/20 mb-4 font-display"
                          aria-hidden="true"
                        >
                          {item.step}
                        </div>
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 rounded-full glass flex items-center justify-center group-hover:neon-glow transition-all duration-300">
                          <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold mb-3 font-display">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </ScrollReveal>
      </ParallaxSection>

      {/* Charges & Services Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <SectionWrapper
          id="packages-section"
          ariaLabel="Service charges and pricing information"
          className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-8 text-gradient">
              Charges & Services
            </h2>
            <p className="text-center text-gray-400 mb-12 sm:mb-16 text-lg">
              Professional magazine photo booth services with transparent pricing
            </p>

            <div className="glass-enhanced rounded-2xl p-6 sm:p-8 mb-8">
              <div className="space-y-6">
                {[
                  {
                    service: "Magazine Photo Booth Setup",
                    price: "₹35,000",
                    description: "Complete booth setup with professional equipment and magazine covers",
                  },
                  {
                    service: "Instant High Quality Prints",
                    price: "₹20,000",
                    description: "Premium quality instant prints for all guests",
                  },
                  {
                    service: "Professional Photography",
                    price: "₹5,000",
                    description: "Expert photographer to capture perfect shots",
                  },
                  {
                    service: "Transport Cost",
                    price: "As per distance from Noida",
                    description: "Travel charges calculated based on venue location",
                  },
                ].map((item, index) => (
                  <ScrollReveal key={index} direction="left" delay={0.1 * index}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-6 glass rounded-xl hover:neon-glow transition-all duration-300">
                      <div className="flex-1 mb-4 sm:mb-0">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">{item.service}</h3>
                        <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold text-gold font-display">{item.price}</div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="glass-enhanced rounded-2xl p-6 sm:p-8 text-center border border-gold/30">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gradient">Booking Information</h3>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  <span className="text-gold font-semibold">For Bookings:</span> You have to pay half of the amount of
                  the services you select as advance payment.
                </p>
                <div className="mt-6 text-sm text-gray-400">
                  Final pricing may vary based on event requirements and location
                </div>
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>
      </ScrollReveal>

      {/* What We Need From Your Venue  */}
      <ScrollReveal direction="up" delay={0.2}>
        <SectionWrapper
          id="faq-section"
          ariaLabel="Frequently asked questions and logistics information"
          className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
            <VenueRequirements />
          </div>
        </SectionWrapper>
      </ScrollReveal>

      {/* Event Gallery Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <SectionWrapper
          id="gallery-section"
          ariaLabel="Photo gallery of past events"
          className="py-16 sm:py-20 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 text-gradient">
              Event Gallery
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {Array.from({ length: 8 }).map((_, index) => (
                <ScrollReveal key={index} direction="scale" delay={0.05 * index}>
                  <div className="aspect-square overflow-hidden rounded-xl glass-enhanced scale-on-hover cursor-pointer gpu-accelerated">
                    <img
                      src={`/Images/${index + 1}.png`}
                      alt={`Event photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </ScrollReveal>   
              ))}
            </div>

            <div className="text-center">
              <Button3D
                variant="outline"
                onClick={handleViewGallery}
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
              >
                View Full Gallery
              </Button3D>
            </div>
          </div>
        </SectionWrapper>
      </ScrollReveal>

      {/* Trusted by Premium Parteners */}
      {/* <ScrollReveal direction="up" delay={0.2}>
        <SectionWrapper
          id="clients-section"
          ariaLabel="Client logos and partnerships"
          className="py-16 sm:py-20 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">
            <ClientLogos />
          </div>
        </SectionWrapper>
      </ScrollReveal> */}

      {/* Why Choose Us Section */}
      <ParallaxSection speed={0.2}>
        <ScrollReveal direction="up" delay={0.2}>
          <SectionWrapper
            id="why-choose-us-section"
            ariaLabel="Reasons to choose Luxury Booth"
            className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <ScrollReveal direction="left" delay={0.3}>
                  <div>
                    <h2 className="font-display text-3xl sm:text-5xl font-bold mb-8 text-gradient">Why Choose Us</h2>

                    <div className="space-y-6">
                      {[
                        {
                          icon: Award,
                          title: "Premium Quality",
                          desc: "Professional-grade equipment and instant high-quality prints",
                        },
                        { icon: Users, title: "Expert Team", desc: "Experienced photographers and event specialists" },
                        {
                          icon: Zap,
                          title: "Instant Results",
                          desc: "Get your magazine covers printed in just 30 seconds",
                        },
                        { icon: Star, title: "5-Star Reviews", desc: "Trusted by 500+ events with perfect ratings" },
                      ].map((item, index) => (
                        <ScrollReveal key={index} direction="left" delay={0.1 * index}>
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-enhanced flex items-center justify-center flex-shrink-0">
                              <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
                            </div>
                            <div>
                              <h3 className="text-lg sm:text-xl font-bold mb-2 font-display">{item.title}</h3>
                              <p className="text-gray-400 text-sm sm:text-base">{item.desc}</p>
                            </div>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 text-gold fill-current" />
                        ))}
                      </div>
                      <span className="text-base sm:text-lg font-semibold">4.9/5 from 200+ reviews</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.4}>
                  <div className="relative">
                    <div className="glass-enhanced rounded-2xl p-6 sm:p-8 scale-on-hover gpu-accelerated">
                      <img
                        src="/photo-booth-team.png"
                        alt="Our team in action"
                        className="w-full h-48 sm:h-64 object-cover rounded-xl mb-6"
                      />
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-gold fill-current" />
                          ))}
                        </div>
                        <p className="text-base sm:text-lg italic text-gray-300 mb-4">
                          "Professional service from start to finish. Our guests are still talking about the amazing
                          magazine covers!"
                        </p>
                        <div className="font-semibold text-sm sm:text-base">Emma & James Wilson</div>
                        <div className="text-xs sm:text-sm text-gray-400">Wedding, Napa Valley</div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </SectionWrapper>
        </ScrollReveal>
      </ParallaxSection>

      {/* Event Enquiry Form  */}
      <ScrollReveal direction="up" delay={0.2}>
        <SectionWrapper
          id="booking-section"
          ariaLabel="Booking form and contact information"
          className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
        >
          <AdvancedBookingSystem />
        </SectionWrapper>
      </ScrollReveal>

      {/* What Our Clients Say */}
      <ScrollReveal direction="up" delay={0.2}>
        <SectionWrapper
          id="testimonials-section"
          ariaLabel="Customer testimonials and reviews"
          className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20"
        >
          <div className="max-w-7xl mx-auto">
            <TestimonialCarousel />
          </div>
        </SectionWrapper>
      </ScrollReveal>

      {/* About Us Section */}
      <ParallaxSection speed={0.3}>
        <ScrollReveal direction="up" delay={0.2}>
          <SectionWrapper
            id="about-section"
            ariaLabel="Information about Magazine Photo Booth"
            className="py-16 sm:py-20 px-4 sm:px-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-0 items-center">
                <ScrollReveal direction="left" delay={0.3}>
                  <div>
                    <img
                      src="/Images/AboutUs.png"
                      alt="Our team"
                      className="w-full sm:w-80 h-full sm:h-full object-cover rounded-2xl glass-enhanced"
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.4}>
                  <div>
                    <h2 className="font-display text-5xl font-bold text-center mb-8 text-gradient">About Us</h2>
                    <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed text-center">
                      We're passionate about creating unforgettable moments. Our team of professional photographers and
                      event specialists brings years of experience to make your event extraordinary.
                    </p>
                    <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed text-center">
                      From intimate weddings to large corporate events, we've helped thousands of guests become cover
                      stars with our innovative magazine photo booth experience.
                    </p>

                    <div className="space-y-4 text-center flex items-center flex-col justify-center">
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-gold rounded-full"></div>
                        <span className="text-sm sm:text-base">Founded in 2024    </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        <span className="text-sm sm:text-base">100+ Events Completed</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <span className="text-sm sm:text-base">Award-Winning Service</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </SectionWrapper>
        </ScrollReveal>
      </ParallaxSection>

      {/* FAQs & Logistics Section */}
      <ScrollReveal direction="up" delay={0.2}>
        <SectionWrapper
          id="faq-section"
          ariaLabel="Frequently asked questions and logistics information"
          className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900"
        >
          <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20">
            <FaqsSection />
          </div>
        </SectionWrapper>
      </ScrollReveal>

      {/* Footer - Enhanced with legal links */}
      <footer
        id="contact-section"
        className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-900 border-t border-gray-800"
        role="contentinfo"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gradient">Luxury Booth</h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Luxury Booth creates celebrity-style moments at your events.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: "facebook", url: "https://www.facebook.com/profile.php?id=61570489859940", icon: <Facebook className="w-5 h-5" />, color: "hover:text-blue-500" },
                  { name: "instagram", url: "https://www.instagram.com/luxurybooth.in", icon: <Instagram className="w-5 h-5" />, color: "hover:text-pink-500" },
                  { name: "twitter", url: "https://twitter.com", icon: <X className="w-5 h-5" />, color: "hover:text-sky-400" },
                  { name: "linkedin", url: "https://www.linkedin.com/in/luxury-booth/", icon: <Linkedin className="w-5 h-5" />, color: "hover:text-blue-600" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <button
                    onClick={() => scrollToSection("packages-section")}
                    className="hover:text-white transition-colors"
                  >
                    Wedding Booths
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("packages-section")}
                    className="hover:text-white transition-colors"
                  >
                    Corporate Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("packages-section")}
                    className="hover:text-white transition-colors"
                  >
                    Private Parties
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("booking-section")}
                    className="hover:text-white transition-colors"
                  >
                    Custom Branding
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => scrollToSection("about-section")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => setIsGalleryOpen(true)} className="hover:text-white transition-colors">
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("testimonials-section")}
                    className="hover:text-white transition-colors"
                  >
                    Reviews
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("booking-section")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <p><a href="tel:+919266037002">📞 +91-9266037002</a></p>
                <p className="flex flex-row">✉️ luxurymagazinebooth@gmail.com</p>
                <p>📍 Sector-73, Noida</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-sm sm:text-base">
                  &copy; 2024 Luxury Booth. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Licensed & Insured
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
                <button
                  onClick={() => openLegalModal("privacy")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openLegalModal("terms")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <button
                  onClick={() => openLegalModal("cookies")}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cookie Policy
                </button>
                <a
                  href="mailto:magazinephotobooth@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp CTA with dynamic data */}
      <WhatsAppCTA
        selectedDate={bookingData.date}
        selectedEventType={bookingData.eventType}
        selectedPackage={bookingData.package}
        selectedCity={bookingData.city}
      />

      <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} images={galleryImages} />
      <LegalModal isOpen={legalModal.isOpen} onClose={closeLegalModal} type={legalModal.type!} />
    </main>
  )
}