"use client"

import { CheckCircle, Crown, Camera, Printer, Sparkles } from "lucide-react"

type PackageKey = "regular" | "elite" | "premium"

const COMPANY_WHATSAPP = "919266037002"

const packages = [
  {
    key: "regular" as PackageKey,
    name: "Regular",
    subtitle: "Magazine Setup",
    price: 35000,
    icon: Sparkles,
    tag: "Starter",
    border: "border-white/10",
    buttonStyle:
      "bg-gradient-to-r from-gold to-yellow-300 text-black hover:shadow-lg hover:shadow-gold/20",
    highlights: [
      "Luxury Magazine Photo Booth Setup",
      "Premium lighting + professional backdrop setup",
      "Magazine-style cover display experience",
      "Best for weddings, exhibitions & product launches",
      "1 Attendant included",
    ],
  },
  {
    key: "elite" as PackageKey,
    name: "Elite",
    subtitle: "Magazine Setup + Photography",
    price: 45000,
    icon: Camera,
    tag: "Most Booked",
    border: "border-gold/40",
    buttonStyle:
      "bg-gradient-to-r from-gold to-yellow-300 text-black hover:shadow-lg hover:shadow-gold/25",
    highlights: [
      "Everything included in Magazine Booth Setup",
      "Professional Photographer Included",
      "Perfect angle + pose guidance for guests",
      "All photos delivered in a Digital Gallery (link)",
      "Social Media Collab Setup (easy sharing)",
      "1 Attendant included",
    ],
  },
  {
    key: "premium" as PackageKey,
    name: "Premium",
    subtitle: "Setup + Photography + Prints",
    price: 70000,
    icon: Crown,
    tag: "Luxury",
    border: "border-purple-500/40",
    buttonStyle:
      "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 hover:shadow-[0_0_35px_rgba(168,85,247,0.28)]",
    highlights: [
      "Everything included in Setup + Photography",
      "200 Instant Premium Prints Included",
      "Magazine-style Instant Photo Prints (Premium Quality)",
      "Prints delivered in Premium Customized Folders",
      "Folders include event branding (names/logo/theme)",
      "Perfect for luxury weddings & VIP events",
      "2 Attendants included",
    ],
  },
]

export default function WhatsAppButton() {
  const sendWhatsAppBookingMessage = (pkg: (typeof packages)[number]) => {
    const message =
      `Hello! I want to book the *Magazine Photo Booth*.\n\n` +
      `📦 Package: *${pkg.name}* (${pkg.subtitle})\n` +
      `💰 Price: ₹${pkg.price.toLocaleString()}\n\n` +
      `Please share availability and next steps.`

    const url = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gradient mb-3">
            Packages & Pricing
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto">
            Select a package and book instantly on WhatsApp.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6">
          {packages.map((pkg) => {
            const Icon = pkg.icon

            const premiumGlow =
              pkg.key === "premium"
                ? "shadow-[0_0_45px_rgba(168,85,247,0.25)]"
                : pkg.key === "elite"
                  ? "shadow-[0_0_35px_rgba(255,215,0,0.10)]"
                  : ""

            return (
              <div
                key={pkg.key}
                className={`relative glass-enhanced rounded-2xl p-5 sm:p-7 border ${pkg.border} ${premiumGlow} transition-all duration-300`}
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-white border border-white/10">
                  {pkg.tag}
                </div>

                {/* Top */}
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">{pkg.subtitle}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Starting From</p>
                    <p className="text-2xl sm:text-3xl font-bold text-gold font-display">
                      ₹{pkg.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500">Transport</p>
                    <p className="text-sm text-gray-300">Extra</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-5">
                  <div className="grid grid-cols-1 gap-2">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-gray-200">
                        <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => sendWhatsAppBookingMessage(pkg)}
                  className={`mt-6 w-full py-3 rounded-xl font-bold text-sm sm:text-base transition-all active:scale-[0.99] ${pkg.buttonStyle}`}
                >
                  Book Now
                </button>
              </div>
            )
          })}
        </div>

        {/* Booking Info */}
        <div className="mt-8 glass-enhanced rounded-2xl p-5 sm:p-7 text-center border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Printer className="h-5 w-5 text-gold" />
            <p className="text-white font-semibold">Booking Note</p>
          </div>

          <p className="text-gray-300 text-sm sm:text-base">
            <span className="text-gold font-semibold">50% advance</span> required to confirm booking.
          </p>

          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Final pricing may vary depending on event requirements and travel distance.
          </p>
        </div>
      </div>
    </section>
  )
}
