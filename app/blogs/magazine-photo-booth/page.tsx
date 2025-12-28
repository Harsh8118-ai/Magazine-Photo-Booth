import { MagazinePhotoBoothBlog } from "@/content/blogs/magazine-photo-booth"

export const metadata = {
  title:
    "Why the Magazine Photo Booth Is the #1 Luxury Event Trend | The Luxury Booths",
  description:
    "Discover why magazine photo booths are the most popular luxury experience for weddings, corporate events, and brand activations in India.",
  openGraph: {
    images: ["/blogs/magazine-photo-booth/cover.webp"],
  },
}

export default function Page() {
  return <MagazinePhotoBoothBlog />
}
