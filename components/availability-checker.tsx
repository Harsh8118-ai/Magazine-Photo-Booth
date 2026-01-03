"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, CardTwo } from "@/components/ui/card"
import { Calendar, MapPin, Phone } from "lucide-react"

export function AvailabilityChecker() {
  return (
    <CardTwo className="glass border-0 max-w-md mx-auto">
      <CardContent className="p-6">
        <h3 className="font-display text-xl font-bold mb-4">
          Check Availability
        </h3>

        <form
          name="availability-check"
          method="POST"
          action="/"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="space-y-4"
        >
          {/* REQUIRED FOR NETLIFY */}
          <input type="hidden" name="form-name" value="availability-check" />
          <input type="hidden" name="bot-field" />

          {/* Event Date */}
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
              className="glass"
            />
          </div>

          {/* City */}
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
              className="glass"
            />
          </div>

          {/* Phone */}
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
              className="glass"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Check Availability
          </Button>
        </form>
      </CardContent>
    </CardTwo>
  )
}
