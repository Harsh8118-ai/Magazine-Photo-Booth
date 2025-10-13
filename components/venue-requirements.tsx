"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Zap, Home, Truck, Maximize } from "lucide-react"

const requirements = [
  {
    icon: Maximize,
    title: "Space Requirements",
    description: "8x10 feet minimum floor space",
    details: ["Level, stable flooring", "Away from high-traffic areas", "Indoor or covered outdoor space"],
  },
  {
    icon: Zap,
    title: "Power Access",
    description: "One 15-amp electrical outlet",
    details: ["Within 50 feet of setup", "Dedicated circuit preferred", "Standard 110V household outlet"],
  },
  {
    icon: Truck,
    title: "Load-in Access",
    description: "Easy access for equipment delivery",
    details: ["Wide doorways (36+ inches)", "Elevator access if needed", "Close parking for setup crew"],
  },
  {
    icon: Home,
    title: "Backdrop Clearance",
    description: "8 feet ceiling height minimum",
    details: ["No low-hanging fixtures", "Clear wall space for backdrop", "Good ambient lighting preferred"],
  },
]

export function VenueRequirements() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-5xl font-bold text-center mb-8 text-gradient">What We Need From Your Venue</h2>

      <p className="text-center text-gray-300 mb-12 text-lg max-w-3xl mx-auto">
        To ensure the best photo booth experience, please confirm your venue meets these simple requirements. Our team
        will work with you to find the perfect setup location.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {requirements.map((req, index) => (
          <Card key={index} className="glass border-0 scale-on-hover group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center group-hover:neon-glow transition-all duration-300">
                <req.icon className="h-8 w-8 text-gold" />
              </div>
              <CardTitle className="font-display text-xl mb-2">{req.title}</CardTitle>
              <p className="text-purple-400 font-semibold">{req.description}</p>
            </CardHeader>

            <CardContent className="pt-0">
              <ul className="space-y-2">
                {req.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-500">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      
    </div>
  )
}
