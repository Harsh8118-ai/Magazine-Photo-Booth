"use client"

type FloatingPricingButtonProps = {
  targetId?: string
  label?: string
}

export default function FloatingPricingButton({
  targetId = "pricing",
  label = "Book Now",
}: FloatingPricingButtonProps) {

  const handleScroll = () => {
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <button
      onClick={handleScroll}
      className="sm:hidden fixed text-gold right-4 bottom-24 z-50 px-5 py-3 rounded-full glass-enhanced font-semibold shadow-lg hover:scale-105 transition-all neon-glow animate-[pulse_2.5s_ease-in-out_infinite]"
    >
      {label}
    </button>
  )
}