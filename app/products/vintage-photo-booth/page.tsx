import VintagePhotoBoothClient from "./vintage-photo-booth-client"

export const metadata = {
  title: "Vintage Photo Booth for Weddings & Events | The Luxury Booths",
  description:
    "Premium vintage photo booth with instant DSLR prints in 30 seconds. Perfect for weddings, birthdays, and rustic events.",
  keywords: ["vintage photo booth", "wooden photo booth", "instant prints", "retro photo booth"],
  alternates: {
    canonical: "https://theluxurybooths.com/products/vintage-photo-booth",
  },
}

export default function VintagePhotoBoothPage() {
  return <VintagePhotoBoothClient />
}
