import Hero from "./hero"
import QuoteAndFeatures from "./features"
import MiddleOne from "./middle-1"
import MiddleTwo from "./middle-2"

export default function MagazinePhotoBooth() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <QuoteAndFeatures />
      <MiddleOne />
      <MiddleTwo />
    </main>
  )
}
