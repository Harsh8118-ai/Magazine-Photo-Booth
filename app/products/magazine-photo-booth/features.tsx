import { Camera, Zap, Users, Star } from "lucide-react"

const QuoteAndFeatures = () => {
  const features = [
    {
      icon: Star,
      title: "Celebrity-Style Covers",
      description: "Professional magazine layouts featuring your guests as the main attraction",
    },
    {
      icon: Zap,
      title: "Instant Prints",
      description: "High-quality magazine cover prints delivered in 30 seconds",
    },
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Expert photographers ensuring picture-perfect moments",
    },
    {
      icon: Users,
      title: "Unlimited Sessions",
      description: "All your guests can become cover stars throughout the event",
    },
  ]

  return (
    <>
      {/* Quote Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gold/10 via-transparent to-gold/10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <p className="text-3xl sm:text-4xl font-display font-bold text-gold mb-6 text-balance">
            "Step Inside. Become the Cover Star."
          </p>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4">
            Our magazine photo booth doesn't just capture moments—it creates iconic,
            celebrity-style magazine covers that guests will cherish and share for years to come.
          </p>
          <p className="text-gold/80 italic">
            The perfect blend of luxury, fun, and unforgettable memories.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gold/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center text-gradient">
            Why Choose Our Magazine Booth
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="glass-enhanced p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <Icon className="size-8 sm:size-10 text-gold mb-4 transition-colors group-hover:text-yellow-300" />
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default QuoteAndFeatures
