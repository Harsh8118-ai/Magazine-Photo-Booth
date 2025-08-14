"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah & Mike Johnson",
    event: "Wedding, Beverly Hills",
    rating: 5,
    text: "The magazine photo booth was the absolute highlight of our wedding! Our guests couldn't stop talking about their celebrity covers. The quality was incredible and the team was so professional.",
    image: "/happy-bride-testimonial.png",
  },
  {
    name: "Jennifer Martinez",
    event: "Corporate Gala, Downtown LA",
    rating: 5,
    text: "We hired them for our annual company gala and it was a huge hit! The custom branding on the magazine covers with our company logo looked amazing. Highly recommend for corporate events.",
    image: "/professional-woman-smiling.png",
  },
  {
    name: "David & Lisa Chen",
    event: "Anniversary Party, Malibu",
    rating: 5,
    text: "What an incredible experience! The 3D booth setup was stunning and our guests loved posing for their magazine covers. The prints were ready in seconds and the quality was outstanding.",
    image: "/happy-couple-anniversary.png",
  },
  {
    name: "Rachel Thompson",
    event: "Birthday Celebration, West Hollywood",
    rating: 5,
    text: "Best decision ever! The magazine photo booth made my 30th birthday unforgettable. Everyone felt like a celebrity and the custom covers were the perfect party favor. Amazing service!",
    image: "/woman-birthday-celebration.png",
  },
  {
    name: "Michael Rodriguez",
    event: "Product Launch, Santa Monica",
    rating: 5,
    text: "The team exceeded our expectations for our product launch event. The branded magazine covers featuring our new product were genius marketing. Professional, creative, and flawless execution.",
    image: "/businessman-product-launch.png",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-5xl font-bold text-center mb-16 text-gradient">What Our Clients Say</h2>

      <Card className="glass border-0 relative overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-gold fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={currentTestimonial.image || "/placeholder.svg"}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gold"
              />
              <div className="text-left">
                <div className="font-display text-lg font-semibold text-white">{currentTestimonial.name}</div>
                <div className="text-purple-400 font-medium">{currentTestimonial.event}</div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full glass hover:neon-glow transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <Button
              variant="ghost"
              size="sm"
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full glass hover:neon-glow transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </CardContent>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 pb-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setIsAutoPlaying(false)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-400 scale-125" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}
