import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Sparkles, Camera, Heart, Crown, Check } from "lucide-react"
import GalleryAndCTA from "./gallery"
import WhatsAppButton from "./whatsapp-button"

const MirrorSelfieBooth = () => {
  const mirrorBoothPrice = 14999

  const features = [
    {
      icon: Sparkles,
      title: "Customized Mirror Text",
      description: "Premium vinyl personalization with names, event titles, or branded messaging for a tailored experience.",
    },
    {
      icon: Heart,
      title: "Luxury Decor Styling",
      description: "Elegant floral arrangements, warm ambient lighting, and a rich red-carpet setup that elevates every photo.",
    },
    {
      icon: Camera,
      title: "Instant Phone Selfies",
      description: "Guests capture stunning mirror selfies directly on their phones, its quick, convenient, and instantly shareable.",
    },
    {
      icon: Crown,
      title: "Red-Carpet Celebrity Experience",
      description: "A show-stopping mirror booth setup that becomes the highlight and most-clicked attraction of the event.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header with back button */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gold hover:text-yellow-300 transition-colors">
            <ChevronLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-xl sm:text-3xl font-display font-bold text-gradient">Mirror Selfie Booth</h1>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent opacity-50" />

        <div className="max-w-6xl mx-auto relative z-10 animate-fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-center text-balance">
            The Luxury <span className="text-gradient">Mirror Selfie</span> Booth Experience
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto mb-8 text-balance">
            A glamorous red-carpet corner where guests capture and share unforgettable memories directly on their
            phones.
          </p>

          {/* Hero Image Placeholder */}
          <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-items-center">

              {/* Left: Image */}
              <div className="w-full flex justify-center animate-fade-left">
                <div className="inline-block rounded-xl overflow-hidden border border-gold/30">
                  <Image
                    src="/Cloudinary/Mirror-Booth.JPG"
                    alt="Mirror Selfie Booth Hero"
                    width={400}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Text */}
              <div className="w-full flex justify-center animate-fade-right">
                <div className="bg-gradient-to-r from-gold/10 via-purple-900/20 to-gold/10 p-8 sm:p-10 rounded-2xl shadow-lg max-w-xl text-center">
                  <p className="text-3xl sm:text-4xl font-display font-bold text-gold mb-6">
                    "Where Every Moment Becomes Iconic"
                  </p>

                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
                    The mirror selfie booth isn't just a photo opportunity - it's a glamorous focal
                    point where guests become the stars of their own red-carpet moment.
                  </p>

                  <p className="text-gold/80 italic">
                    Perfect for weddings, product launches, and luxury celebrations.
                  </p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-2 sm:py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center text-gradient">
            Premium Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`glass-enhanced p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all group animate-fade-up reveal-delay-${index + 1}`}
                >
                  <Icon className="size-8 sm:size-10 text-gold mb-4 group-hover:text-yellow-300 transition-colors" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/10 to-transparent">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-center text-gradient mb-8">
            Premium Pricing
          </h3>

        <div className="glass-enhanced p-8 rounded-lg border border-gold/30 mb-8 animate-fade-up">
            <div className="mb-6">
              <p className="text-gold/80 text-xl uppercase tracking-widest">Mirror Selfie Booth Service</p>
              <div className="flex items-baseline justify-between">
                <span className="text-md text-gray-300">Premium Setup & Personalization</span>
                <div>
                  <span className="text-4xl sm:text-5xl font-bold text-gold">₹{mirrorBoothPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gold/20 pt-6 mb-6">
              <p className="text-gray-400 text-sm mb-4">What's Included:</p>
              <ul className="space-y-3">
                {[
                  "Up to 6 hours of service with Professional setup",
                  "Premium 6×2 ft Mirror Booth with elegant stand",
                  "Luxury red-Carpet setup in front of the Mirror.",
                  "Personalized vinyl text (Names, Event details, Branding)",
                  "Elegant Floral decorations and backdrop",
                  "Designer wooden easel for custom frames and event instructions",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <Check className="size-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gold/80 italic text-sm mb-6 p-4 bg-gold/10 rounded-lg">
              * 50% advance payment required to lock your event date
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* Gallery & CTA Section */}
      <GalleryAndCTA />
    </main>
  )
}

export default MirrorSelfieBooth
