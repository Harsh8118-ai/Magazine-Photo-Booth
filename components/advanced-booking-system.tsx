"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button3D } from "@/components/3d-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, Users, CreditCard, Lock, Calculator, Smartphone, DollarSign } from "lucide-react"

interface BookingData {
  eventDate: string
  eventType: string
  package: string
  venueCity: string
  expectedGuests: string
  extraHours: number
  customBranding: boolean
  socialMediaStation: boolean
  premiumProps: boolean
  additionalPhotographer: boolean
  customBoothWrap: boolean
  name: string
  email: string
  phone: string
  eventDetails: string
}

const packages = {
  basic: { name: "Basic", price: 899, hours: 2 },
  premium: { name: "Premium", price: 1299, hours: 4 },
  luxury: { name: "Luxury", price: 1899, hours: 6 },
}

const addOns = {
  extraHour: { name: "Extra Hour", price: 200 },
  customBranding: { name: "Custom Branding", price: 150 },
  socialMediaStation: { name: "Social Media Station", price: 100 },
  premiumProps: { name: "Premium Props Package", price: 75 },
  additionalPhotographer: { name: "Additional Photographer", price: 300 },
  customBoothWrap: { name: "Custom Booth Wrap", price: 250 },
}

export function AdvancedBookingSystem() {
  const [bookingData, setBookingData] = useState<BookingData>({
    eventDate: "",
    eventType: "",
    package: "",
    venueCity: "",
    expectedGuests: "",
    extraHours: 0,
    customBranding: false,
    socialMediaStation: false,
    premiumProps: false,
    additionalPhotographer: false,
    customBoothWrap: false,
    name: "",
    email: "",
    phone: "",
    eventDetails: "",
  })

  const [quote, setQuote] = useState({
    subtotal: 0,
    tax: 0,
    total: 0,
    deposit: 0,
  })

  const [showPaymentOptions, setShowPaymentOptions] = useState(false)

  useEffect(() => {
    calculateQuote()
  }, [bookingData])

  const calculateQuote = () => {
    let subtotal = 0

    // Base package price
    if (bookingData.package && packages[bookingData.package as keyof typeof packages]) {
      subtotal += packages[bookingData.package as keyof typeof packages].price
    }

    // Add-ons
    subtotal += bookingData.extraHours * addOns.extraHour.price
    if (bookingData.customBranding) subtotal += addOns.customBranding.price
    if (bookingData.socialMediaStation) subtotal += addOns.socialMediaStation.price
    if (bookingData.premiumProps) subtotal += addOns.premiumProps.price
    if (bookingData.additionalPhotographer) subtotal += addOns.additionalPhotographer.price
    if (bookingData.customBoothWrap) subtotal += addOns.customBoothWrap.price

    const tax = subtotal * 0.0875 // 8.75% tax
    const total = subtotal + tax
    const deposit = total * 0.3 // 30% deposit

    setQuote({ subtotal, tax, total, deposit })
  }

  const handleInputChange = (field: keyof BookingData, value: any) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const getQuoteBreakdown = () => {
    const items = []

    if (bookingData.package && packages[bookingData.package as keyof typeof packages]) {
      const pkg = packages[bookingData.package as keyof typeof packages]
      items.push({ name: `${pkg.name} Package (${pkg.hours}hrs)`, price: pkg.price })
    }

    if (bookingData.extraHours > 0) {
      items.push({
        name: `Extra Hours (${bookingData.extraHours})`,
        price: bookingData.extraHours * addOns.extraHour.price,
      })
    }
    if (bookingData.customBranding) items.push({ name: addOns.customBranding.name, price: addOns.customBranding.price })
    if (bookingData.socialMediaStation)
      items.push({ name: addOns.socialMediaStation.name, price: addOns.socialMediaStation.price })
    if (bookingData.premiumProps) items.push({ name: addOns.premiumProps.name, price: addOns.premiumProps.price })
    if (bookingData.additionalPhotographer)
      items.push({ name: addOns.additionalPhotographer.name, price: addOns.additionalPhotographer.price })
    if (bookingData.customBoothWrap)
      items.push({ name: addOns.customBoothWrap.name, price: addOns.customBoothWrap.price })

    return items
  }

  const isFormValid = () => {
    return (
      bookingData.eventDate &&
      bookingData.eventType &&
      bookingData.package &&
      bookingData.venueCity &&
      bookingData.expectedGuests &&
      bookingData.name &&
      bookingData.email &&
      bookingData.phone
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-display text-5xl font-bold text-center mb-16 text-gradient">Book Your Event</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Booking Form */}
        <div className="lg:col-span-2">
          <Card className="glass-enhanced border-0">
            <CardHeader>
              <CardTitle className="font-display text-2xl flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-purple-400" />
                Event Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Event Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Event Date *</label>
                  <Input
                    type="date"
                    value={bookingData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    className="glass border-gray-600 focus:border-purple-400"
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Event Type *</label>
                  <Select
                    value={bookingData.eventType}
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
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Venue City *</label>
                  <Input
                    placeholder="Los Angeles, CA"
                    value={bookingData.venueCity}
                    onChange={(e) => handleInputChange("venueCity", e.target.value)}
                    className="glass border-gray-600 focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Expected Guests *</label>
                  <Select
                    value={bookingData.expectedGuests}
                    onValueChange={(value) => handleInputChange("expectedGuests", value)}
                  >
                    <SelectTrigger className="glass border-gray-600">
                      <SelectValue placeholder="Number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 guests</SelectItem>
                      <SelectItem value="51-100">51-100 guests</SelectItem>
                      <SelectItem value="101-200">101-200 guests</SelectItem>
                      <SelectItem value="201-300">201-300 guests</SelectItem>
                      <SelectItem value="300+">300+ guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <label className="block text-sm font-semibold mb-4">Package Selection *</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(packages).map(([key, pkg]) => (
                    <div
                      key={key}
                      onClick={() => handleInputChange("package", key)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        bookingData.package === key
                          ? "border-purple-400 bg-purple-400/10 neon-glow"
                          : "border-gray-600 glass hover:border-purple-400/50"
                      }`}
                    >
                      <div className="text-center">
                        <h3 className="font-display text-lg font-bold mb-2">{pkg.name}</h3>
                        <div className="text-2xl font-bold text-gold mb-1">${pkg.price}</div>
                        <div className="text-sm text-gray-400">{pkg.hours} hours included</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="block text-sm font-semibold mb-4">Add-ons & Upgrades</label>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Extra Hours</label>
                    <Select
                      value={bookingData.extraHours.toString()}
                      onValueChange={(value) => handleInputChange("extraHours", Number.parseInt(value))}
                    >
                      <SelectTrigger className="glass border-gray-600">
                        <SelectValue placeholder="Additional hours" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">No extra hours</SelectItem>
                        <SelectItem value="1">+1 hour (+$200)</SelectItem>
                        <SelectItem value="2">+2 hours (+$400)</SelectItem>
                        <SelectItem value="3">+3 hours (+$600)</SelectItem>
                        <SelectItem value="4">+4 hours (+$800)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: "customBranding", label: "Custom Branding", price: 150 },
                      { key: "socialMediaStation", label: "Social Media Station", price: 100 },
                      { key: "premiumProps", label: "Premium Props Package", price: 75 },
                      { key: "additionalPhotographer", label: "Additional Photographer", price: 300 },
                      { key: "customBoothWrap", label: "Custom Booth Wrap", price: 250 },
                    ].map((addon) => (
                      <div key={addon.key} className="flex items-center space-x-3">
                        <Checkbox
                          id={addon.key}
                          checked={bookingData[addon.key as keyof BookingData] as boolean}
                          onCheckedChange={(checked) => handleInputChange(addon.key as keyof BookingData, checked)}
                        />
                        <label htmlFor={addon.key} className="text-sm flex-1 cursor-pointer">
                          {addon.label} <span className="text-gold font-semibold">(+${addon.price})</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Separator className="bg-gray-700" />


              {/* Contact Information */}
              <div>
                <h3 className="font-display text-xl font-bold mb-4 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-purple-400" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-2">Full Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={bookingData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="glass border-gray-600 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={bookingData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="glass border-gray-600 focus:border-purple-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={bookingData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="glass border-gray-600 focus:border-purple-400"
                    />
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div>
                <label className="block text-sm font-semibold mb-2">Event Details & Special Requests</label>
                <Textarea
                  placeholder="Tell us about your event, venue details, theme, special requirements, or any questions you have..."
                  value={bookingData.eventDetails}
                  onChange={(e) => handleInputChange("eventDetails", e.target.value)}
                  className="glass border-gray-600 focus:border-purple-400 min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Calculator */}
        <div className="lg:col-span-1">
          <div className="sticky top-6">
            <Card className="glass-enhanced border-0 mb-6">
              <CardHeader>
                <CardTitle className="font-display text-xl flex items-center">
                  <Calculator className="mr-2 h-5 w-5 text-gold" />
                  Instant Quote
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
                          <span className="font-semibold">${item.price}</span>
                        </div>
                      ))}
                    </div>

                    <Separator className="bg-gray-700" />

                    {/* Totals */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-semibold">${quote.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Tax (8.75%)</span>
                        <span>${quote.tax.toFixed(2)}</span>
                      </div>
                      <Separator className="bg-gray-700" />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-gold">${quote.total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-400/30">
                      <div className="flex items-center mb-2">
                        <DollarSign className="h-4 w-4 text-green-400 mr-2" />
                        <span className="text-sm font-semibold">Deposit Required</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400">${quote.deposit.toFixed(2)}</div>
                      <div className="text-xs text-gray-400">30% to secure your date</div>
                    </div>

                    {/* Lock Date Button */}
                    <Button3D
                      onClick={() => setShowPaymentOptions(true)}
                      disabled={!isFormValid()}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg py-3"
                    >
                      <Lock className="mr-2 h-5 w-5" />
                      Lock This Date
                    </Button3D>

                    {!isFormValid() && (
                      <p className="text-xs text-gray-400 text-center">Complete required fields to proceed</p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Calculator className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">Select a package to see pricing</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Options */}
            {showPaymentOptions && quote.total > 0 && (
              <ScrollReveal direction="up">
                <Card className="glass-enhanced border-0">
                  <CardHeader>
                    <CardTitle className="font-display text-xl flex items-center">
                      <CreditCard className="mr-2 h-5 w-5 text-green-400" />
                      Payment Options
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm text-gray-300 mb-4">
                      Secure your date with a ${quote.deposit.toFixed(2)} deposit. Remaining balance due 7 days before
                      event.
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-3">
                      <Button3D className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                        <CreditCard className="mr-3 h-5 w-5" />
                        Pay with Stripe
                        <Badge className="ml-auto bg-green-600">Secure</Badge>
                      </Button3D>

                      <Button3D className="w-full justify-start bg-orange-600 hover:bg-orange-700">
                        <Smartphone className="mr-3 h-5 w-5" />
                        UPI Payment
                        <Badge className="ml-auto bg-green-600">Instant</Badge>
                      </Button3D>

                      <Button3D className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                        <DollarSign className="mr-3 h-5 w-5" />
                        Razorpay
                        <Badge className="ml-auto bg-green-600">Popular</Badge>
                      </Button3D>
                    </div>

                    <div className="flex items-center text-xs text-gray-400 mt-4">
                      <Lock className="h-3 w-3 mr-1" />
                      SSL encrypted • 256-bit security
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
