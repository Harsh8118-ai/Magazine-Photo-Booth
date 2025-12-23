"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardTwo } from "@/components/ui/card"
import { Calendar, CheckCircle, Clock, X } from "lucide-react"

export function AvailabilityChecker() {
  const [selectedDate, setSelectedDate] = useState("")
  const [availability, setAvailability] = useState<"available" | "waitlist" | "booked" | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const checkAvailability = async () => {
    if (!selectedDate) return

    setIsChecking(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock availability logic based on date
    const date = new Date(selectedDate)
    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

    // Weekend dates are more likely to be booked/waitlist
    if (isWeekend) {
      setAvailability(Math.random() > 0.6 ? "available" : Math.random() > 0.5 ? "waitlist" : "booked")
    } else {
      setAvailability(Math.random() > 0.8 ? "waitlist" : "available")
    }

    setIsChecking(false)
  }

  const getStatusConfig = () => {
    switch (availability) {
      case "available":
        return {
          icon: CheckCircle,
          text: "Available",
          color: "text-green-400",
          bgColor: "bg-green-400/10",
          borderColor: "border-green-400/30",
          cta: "Book This Date",
        }
      case "waitlist":
        return {
          icon: Clock,
          text: "Waitlist",
          color: "text-yellow-400",
          bgColor: "bg-yellow-400/10",
          borderColor: "border-yellow-400/30",
          cta: "Join Waitlist",
        }
      case "booked":
        return {
          icon: X,
          text: "Booked",
          color: "text-red-400",
          bgColor: "bg-red-400/10",
          borderColor: "border-red-400/30",
          cta: "Contact for Alternatives",
        }
      default:
        return null
    }
  }

  const statusConfig = getStatusConfig()

  return (
    <CardTwo className="glass border-0 max-w-md mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Calendar className="h-5 w-5 text-purple-400 mr-2" />
          <h3 className="font-display text-xl font-bold">Check Availability</h3>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="eventdate" className="block text-sm font-semibold mb-2">Event Date</label>
            <Input
              id="eventdate"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="glass border-gray-600 focus:border-purple-400"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <Button
            onClick={checkAvailability}
            disabled={!selectedDate || isChecking}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            {isChecking ? "Checking..." : "Check Availability"}
          </Button>

          {statusConfig && (
            <div className={`p-4 rounded-lg border ${statusConfig.bgColor} ${statusConfig.borderColor}`}>
              <div className="flex items-center mb-3">
                <statusConfig.icon className={`h-5 w-5 ${statusConfig.color} mr-2`} />
                <span className={`font-semibold ${statusConfig.color}`}>{statusConfig.text}</span>
              </div>

              <Button
                onClick={() => scrollToSection("products")}
                className={`w-full ${availability === "available"
                    ? "bg-green-600 hover:bg-green-700"
                    : availability === "waitlist"
                      ? "bg-yellow-600 hover:bg-yellow-700"
                      : "glass border border-red-400 text-red-400 hover:bg-red-400 hover:text-black"
                  }`}
              >
                {statusConfig.cta}
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </CardTwo>
  )
}
