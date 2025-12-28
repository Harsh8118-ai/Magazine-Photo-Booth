"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button3D } from "@/components/3d-button"
import { Calendar, Users, Lock, Calculator, Camera, Printer, Gift, Send } from "lucide-react"

interface InquiryData {
  eventDate: string
  // eventType: string
  eventLocation: string
  photoBooth: boolean
  cameraService: "none" | "camera" | "cameraWithPrints"
  name: string
  // email: string
  // phone: string
  eventDetails: string
}

const services = {
  photoBooth: { name: "Magazine Photo Booth Setup", price: 35000, icon: Camera },
  camera: { name: "Professional Photography only", price: 5000, icon: Camera },
  cameraWithPrints: { name: "Photography with Instant Prints (200)", price: 25000, icon: Printer },
}

const freeAddOns = [
  { name: "Unlimited Prints", description: "No limit on photo prints during event" },
  { name: "Digital Gallery", description: "Online gallery for all event photos" },
  { name: "Custom Branding", description: "Personalized photo frames and layouts" },
  { name: "Social Media Collab", description: "Instant social media sharing setup" },
]

export function AdvancedBookingSystem() {
  const [inquiryData, setInquiryData] = useState<InquiryData>({
    eventDate: "",
    // eventType: "",
    eventLocation: "",
    photoBooth: false,
    cameraService: "none",
    name: "",
    // email: "",
    // phone: "",
    eventDetails: "",
  })

  // WHATSAPP LOGIC 
  const COMPANY_WHATSAPP = "919266037002";

  const sendWhatsAppMessage = () => {
  const booth = inquiryData.photoBooth ? "Yes" : "No";

  const cameraMap: Record<string, string> = {
    none: "No Photography",
    camera: "Professional Photography Only",
    cameraWithPrints: "Photography with Instant Prints (200)"
  };

  const cameraSelected = cameraMap[inquiryData.cameraService];

  const formattedDate = inquiryData.eventDate
    ? new Date(inquiryData.eventDate).toLocaleDateString()
    : "Not provided";

  const message =
    `New Event Inquiry\n\n` +
    `📅 Event Date: ${formattedDate}\n` +
    `📍 Location: ${inquiryData.eventLocation}\n` +
    `📸 Photo Booth: ${booth}\n` +
    `📷 Photography Service: ${cameraSelected}\n` +
    `👤 Client Name: ${inquiryData.name}\n\n` +
    `💬 Event Details:\n${inquiryData.eventDetails || "None"}\n\n` +
    `💰 Estimated Total: ₹${quote.total.toLocaleString()}\n` +
    `(Transport Included: ${quote.transportCost > 0 ? "Yes" : "No"})`;

  const url = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};


  const [quote, setQuote] = useState({
    subtotal: 0,
    transportCost: 0,
    total: 0,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    calculateQuote()
  }, [inquiryData])

  const calculateQuote = () => {
    let subtotal = 0

    // Calculate service costs
    if (inquiryData.photoBooth) {
      subtotal += services.photoBooth.price
    }

    if (inquiryData.cameraService === "camera") {
      subtotal += services.camera.price
    } else if (inquiryData.cameraService === "cameraWithPrints") {
      subtotal += services.cameraWithPrints.price
    }

    // Transport cost calculation (simplified - would be dynamic based on location)
    const transportCost = inquiryData.eventLocation && inquiryData.eventLocation.toLowerCase() !== "noida" ? 5000 : 0

    const total = subtotal + transportCost

    setQuote({ subtotal, transportCost, total })
  }

  const handleInputChange = (field: keyof InquiryData, value: any) => {
    setInquiryData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCameraServiceChange = (value: string) => {
    setInquiryData((prev) => ({
      ...prev,
      cameraService: value as "none" | "camera" | "cameraWithPrints",
    }))
  }

  const getQuoteBreakdown = () => {
    const items = []

    if (inquiryData.photoBooth) {
      items.push({
        name: "Magazine Photo Booth Setup",
        price: services.photoBooth.price,
      })
    }

    if (inquiryData.cameraService === "camera") {
      items.push({
        name: "Professional Photography",
        price: services.camera.price,
      })
    }

    if (inquiryData.cameraService === "cameraWithPrints") {
      items.push({
        name: "Camera with Instant Prints",
        price: services.cameraWithPrints.price,
      })
    }

    if (quote.transportCost > 0) {
      items.push({
        name: "Transport Cost (Outside Noida)",
        price: quote.transportCost,
      })
    }

    return items
  }

  const isFormValid = () => {
    return (
      inquiryData.eventDate &&
      // inquiryData.eventType &&
      inquiryData.eventLocation &&
      (inquiryData.photoBooth || inquiryData.cameraService !== "none") &&
      inquiryData.name 
      // &&
      // inquiryData.email &&
      // inquiryData.phone
    )
  }

  const handleSubmitInquiry = async () => {
    if (!isFormValid()) return
    setIsSubmitting(true)

    try {
      // Simulate API call to backend
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("[v0] Inquiry submitted:", {
        ...inquiryData,
        quote: quote,
        submittedAt: new Date().toISOString(),
      })

      sendWhatsAppMessage();
      
      setIsSubmitted(true)
    } catch (error) {
      console.error("[v0] Error submitting inquiry:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <div className="glass-enhanced rounded-2xl p-8 border-0">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h2 className="font-display text-3xl font-bold mb-4 text-gradient">Date Locked Successfully!</h2>
          <p className="text-gray-300 mb-6">
            Thank you for your inquiry. We've received your event details and will contact you within 24 hours to
            confirm availability and discuss your requirements.
          </p>
          <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-400/30 mb-6">
            <p className="text-sm text-purple-300">
              <strong>Event Date:</strong> {new Date(inquiryData.eventDate).toLocaleDateString()} <br />
              <strong>Estimated Total:</strong> ₹{quote.total.toLocaleString()}
            </p>
          </div>
          <Button3D
            onClick={() => {
              setIsSubmitted(false)
              setInquiryData({
                eventDate: "",
                // eventType: "",
                eventLocation: "",
                photoBooth: false,
                cameraService: "none",
                name: "",
                // email: "",
                // phone: "",
                eventDetails: "",
              })
            }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Submit Another Inquiry
          </Button3D>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-display text-5xl font-bold text-center mb-16 text-gradient">Event Inquiry Form</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inquiry Form */}
        <div className="lg:col-span-2 ">
          <Card className="glass-enhanced border border-gold/20">
            <CardHeader>
              <CardTitle className="font-display text-2xl flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-purple-400" />
                <span className="text-gold">
                   Event Details
                  </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gold">Event Date *</label>
                  <Input
                    type="date"
                    value={inquiryData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    className="bg-black/40 border-gold/30 text-white text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* <div>
                  <label className="block text-sm font-semibold mb-2">Event Type *</label>
                  <Select
                    value={inquiryData.eventType}
                    onValueChange={(value) => handleInputChange("eventType", value)}
                  >
                    <SelectTrigger className="glass border-gray-600">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="anniversary">Anniversary</SelectItem>
                      <SelectItem value="graduation">Graduation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2 text-gold">Event Location *</label>
                  <Input
                    placeholder="Enter complete event address"
                    value={inquiryData.eventLocation}
                    onChange={(e) => handleInputChange("eventLocation", e.target.value)}
                    className="bg-black/40 border-gold/30 text-white text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-3 rounded-lg placeholder-gray-500"
                  />
                  <p className="text-xs text-gray-400 mt-1">Transport charges apply for locations outside Noida</p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-4 text-gold">Service Selection *</label>
                <div className="space-y-4">
                  {/* Photo Booth */}
                  <div className="p-4 rounded-lg border border-gray-600 glass">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="photoBooth"
                          checked={inquiryData.photoBooth}
                          onChange={(e) => handleInputChange("photoBooth", e.target.checked)}
                          className="mr-3 h-4 w-4 text-purple-600 bg-transparent border-gray-600 rounded focus:ring-purple-500"
                        />
                        <Camera className="h-5 w-5 text-gold mr-3" />
                        <div>
                          <h3 className="font-semibold text-white">{services.photoBooth.name}</h3>
                          <p className="text-sm text-gray-400">Professional magazine-style photo booth setup</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className=" rounded px-2 py-1">
                          <div className="text-lg font-bold text-yellow-300">
                            ₹{services.photoBooth.price.toLocaleString()}
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Camera Services - Mutually Exclusive */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gold rounded px-2 py-1 inline-block">
                      Photography Service (Select One):
                    </h4>

                    {/* No Camera Service */}
                    <div className="p-4 rounded-lg border border-gray-600 glass">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="noCameraService"
                          name="cameraService"
                          value="none"
                          checked={inquiryData.cameraService === "none"}
                          onChange={(e) => handleCameraServiceChange(e.target.value)}
                          className="mr-3 h-4 w-4 bg-transparent border-gray-600 "
                        />
                        <div>
                          <h3 className="font-semibold text-white">No Photography Service</h3>
                          <p className="text-sm text-gray-400">Skip photography service</p>
                        </div>
                      </div>
                    </div>

                    {/* Camera Individual */}
                    <div className="p-4 rounded-lg border border-gray-600 glass">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="cameraOnly"
                            name="cameraService"
                            value="camera"
                            checked={inquiryData.cameraService === "camera"}
                            onChange={(e) => handleCameraServiceChange(e.target.value)}
                            className="mr-3 h-4 w-4 text-purple-600 bg-transparent border-gray-600 focus:ring-purple-500"
                          />
                          <Camera className="h-5 w-5 text-gold mr-3" />
                          <div>
                            <h3 className="font-semibold text-white">{services.camera.name}</h3>
                            <p className="text-sm text-gray-400">Professional photography service only</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="rounded px-2 py-1">
                            <div className="text-lg font-bold text-yellow-300">
                              ₹{services.camera.price.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Camera with Prints */}
                    <div className="p-4 rounded-lg border border-gray-600 glass">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="cameraWithPrints"
                            name="cameraService"
                            value="cameraWithPrints"
                            checked={inquiryData.cameraService === "cameraWithPrints"}
                            onChange={(e) => handleCameraServiceChange(e.target.value)}
                            className="mr-3 h-4 w-4 text-purple-600 bg-transparent border-gray-600 focus:ring-purple-500"
                          />
                          <Printer className="h-5 w-5 text-gold mr-3" />
                          <div>
                            <h3 className="font-semibold text-white">{services.cameraWithPrints.name}</h3>
                            <p className="text-sm text-gray-400">Photography with instant high-quality prints</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className=" rounded px-2 py-1">
                            <div className="text-lg font-bold text-yellow-300">
                              ₹{services.cameraWithPrints.price.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-display text-xl font-bold mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-gold" />
                  <span className="text-white">
                    Contact Information
                    </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2 text-gold">Full Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={inquiryData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="glass border-gold/30  text-white"
                    />
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gold">Event Details & Special Requests</label>
                <Textarea
                  placeholder="Tell us about your event, venue details, theme, special requirements, or any questions you have..."
                  value={inquiryData.eventDetails}
                  onChange={(e) => handleInputChange("eventDetails", e.target.value)}
                  className="glass border-gold/30 text-white  min-h-[120px]"
                />
              </div>

              <Separator className="bg-gray-700" />

              <div>
                <label className="text-sm font-semibold mb-4 flex items-center">
                  <Gift className="h-5 w-5 text-white mr-2" />
                  <span className="text-white text-lg">
                  Complimentary Add-ons
                  </span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {freeAddOns.map((addon, index) => (
                    <div key={index} className="p-3 rounded-lg glass border border-white/30">
                      <div className="flex items-center mb-1">
                        <Gift className="h-4 w-4 text-white mr-2" />
                        <h4 className="font-semibold text-white">{addon.name}</h4>
                        <Badge className="ml-auto bg-gray-400 text-xs">FREE</Badge>
                      </div>
                      <p className="text-xs text-gray-300">{addon.description}</p>
                    </div>
                  ))}
                </div>
              </div>


              
            </CardContent>
          </Card>
        </div>

        {/* Quote Calculator */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <Card className="glass-enhanced border-0 mb-6">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center text-gold">
                  <Calculator className="mr-2 h-5 w-5 text-gold" />
                  Estimated Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                {quote.total > 0 ? (
                  <div className="space-y-4">
                    {/* Quote Breakdown */}
                    <div className="space-y-2">
                      {getQuoteBreakdown().map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span className="text-gray-300">{item.name}</span>
                          <span className="font-semibold text-gold">₹{item.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>

                    <Separator className="bg-gray-700" />

                    {/* Totals */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-lg font-bold text-gold">
                        <span>Estimated Total</span>
                        <div className="bg-gray-900/80 rounded px-2 py-1">
                          <span className="text-gold">₹{quote.total.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-400/30">
                      <div className="flex items-center mb-2">
                        <Send className="h-4 w-4 text-blue-400 mr-2" />
                        <span className="text-sm font-semibold text-gold">Inquiry Process</span>
                      </div>
                      <div className="text-xs text-gray-300">
                        Submit your inquiry to lock your preferred date. We'll contact you within 24 hours to confirm
                        availability and finalize details.
                      </div>
                    </div>

                    <Button3D
                      onClick={handleSubmitInquiry}
                      disabled={!isFormValid() || isSubmitting}
                      className="w-full bg-gradient text-lg py-3"
                    >
                      <Lock className="mr-2 h-5 w-5 text-gold" />
                      {isSubmitting ? "Submitting..." : "Lock This Date"}
                    </Button3D>

                    {!isFormValid() && (
                      <p className="text-xs text-gray-400 text-center">Complete required fields to proceed</p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calculator className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Select services to see pricing</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
