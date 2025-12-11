"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  // -------------------------
  // MAGAZINE PHOTO BOOTH
  // -------------------------
  {
    name: "Pratishtha Sharma",
    event: "Wedding, Delhi",
    rating: 5,
    text: "The magazine photo booth created such a rich and glamorous Vogue-style experience! It truly felt like stepping into a celebrity shoot. Everyone was obsessed with the covers and the whole setup felt premium.",
  },
  {
    name: "Paras Chandna",
    event: "Corporate Event, Noida",
    rating: 5,
    text: "We had the magazine booth for our corporate gala and it was the showstopper! The branded covers looked extremely professional and our team loved the influencer-style experience. Highly recommended!",
  },

  // -------------------------
  // MIRROR BOOTH
  // -------------------------
  {
    name: "Mohit Dhingra",
    event: "Engagement, Jaipur",
    rating: 5,
    text: "The Mirror Booth added so much charm to our engagement! The interactive animations, signatures on photos, and instant prints were a huge hit. Guests couldn’t stop taking pictures, fantastic experience!",
  },
  {
    name: "Priya",
    event: "Birthday Celebration, New Delhi",
    rating: 5,
    text: "Absolutely loved the Mirror Booth! The Luxury Booths team created such a premium atmosphere. The lighting, the mirror effects, and the crisp photos made my birthday feel super special.",
  },

  // ------------------------------
  // VINTAGE PHOTO BOOTH
  // ------------------------------
  {
    name: "Paras Chandna",
    event: "Family Event, Jim Corbett",
    rating: 5,
    text: "The Vintage Photo Booth brought such a nostalgic vibe to our event! The retro-style prints and warm tones looked stunning. It blended perfectly with the Jim Corbett atmosphere & everyone loved it!",
  },
  {
    name: "Pratishtha Sharma",
    event: "Themed Party, Delhi",
    rating: 5,
    text: "The Vintage Booth was an absolute masterpiece! It gave our décor a classic charm and the pictures looked beautifully timeless. A perfect blend of luxury and nostalgia.",
  },

  // -------------------------
  // BRAND – THE LUXURY BOOTHS
  // -------------------------
  {
    name: "Mohit Dhingra",
    event: "Corporate Launch, Noida",
    rating: 5,
    text: "The Luxury Booths team is outstanding! Their professionalism, creativity, and attention to detail made our event seamless. We’ve worked with many vendors, but their quality stands out every time.",
  },
  {
    name: "Priya",
    event: "Bridal Shower, Jaipur",
    rating: 5,
    text: "The Luxury Booths truly live up to their name. The setups, the staff, the experience and everything felt high-end and beautifully executed. They made the entire event look and feel grand.",
  },
];


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
            <blockquote className="text-xl md:text-2xl italic text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4">
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
