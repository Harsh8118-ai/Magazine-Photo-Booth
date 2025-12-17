import MirrorSelfieBoothClient from "./MirrorSelfieBoothClient"

export const metadata = {
  title: "Mirror Selfie Booth for Luxury Events | The Luxury Booths",
  description:
    "Luxury mirror selfie booth with personalized vinyl text, LED lights, and red-carpet setup. Perfect for weddings, birthdays, and premium events.",
  keywords: ["mirror selfie booth", "red carpet photo booth", "luxury event booth", "personalized mirror booth"],
  alternates: {
    canonical: "https://theluxurybooths.com/products/mirror-selfie-booth",
  },
  openGraph: {
  title: "Mirror Selfie Booth for Luxury Events",
  description: "...",
  url: "https://theluxurybooths.com/products/mirror-selfie-booth",
  images: [{ url: "/og-mirror-selfie.png" }],
},
}

export default function MirrorSelfieBoothPage() {
  return <MirrorSelfieBoothClient />
}
