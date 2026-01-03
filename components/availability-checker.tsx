"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, CardTwo } from "@/components/ui/card"
import { Calendar, MapPin, Phone, CheckCircle } from "lucide-react"

export function AvailabilityChecker() {
  const [date, setDate] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {
    // DO NOT prevent default
    // DO NOT use fetch
    setLoading(true)
    setSubmitted(true)
  }

  return (
    <CardTwo className="glass border-0 max-w-md mx-auto">
      <CardContent className="p-6">
        <h3 className="font-display text-xl font-bold mb-4">
          Check Availability
        </h3>

        {submitted ? (
          <div className="flex items-center gap-2 text-green-400">
            <CheckCircle className="h-5 w-5" />
            <p className="font-semibold">
              Thank you! We’ll contact you shortly.
            </p>
          </div>
        ) : (
          <form
            name="availability-check"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="availability-check" />
            <input type="hidden" name="bot-field" />

            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-purple-400" />
                Event Date
              </label>
              <Input
                type="date"
                name="event_date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="glass"
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                City
              </label>
              <Input
                type="text"
                name="city"
                placeholder="Enter your city"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="glass"
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple-400" />
                Phone Number
              </label>
              <Input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                required
                pattern="[0-9]{10}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="glass"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600"
            >
              {loading ? "Submitting..." : "Check Availability"}
            </Button>
          </form>
        )}
      </CardContent>
    </CardTwo>
  )
}
