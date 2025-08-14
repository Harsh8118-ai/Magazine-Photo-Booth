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
    details: ["Within 50 feet of booth location", "Dedicated circuit preferred", "Standard 110V household outlet"],
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
                  <li key={idx} className="flex items-start text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Card className="glass border-0 max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h3 className="font-display text-xl font-bold mb-3 text-gold">Need Help with Venue Planning?</h3>
            <p className="text-gray-300 mb-4">
              Our experienced team can visit your venue beforehand to assess the space and recommend the optimal booth
              placement for maximum guest engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300"
              >
                Call for Site Visit
              </a>
              <a
                href="mailto:hello@magazinephotobooth.com"
                className="inline-flex items-center justify-center px-6 py-2 glass border border-gold text-gold hover:bg-gold hover:text-black rounded-lg font-semibold transition-all duration-300"
              >
                Email Questions
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
