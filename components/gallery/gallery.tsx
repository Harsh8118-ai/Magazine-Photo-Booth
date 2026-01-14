import GalleryClient from "./gallery-client"

const events = [
  {
    id: "silver-ijya-gurugram",
    name: "Silver By IJYA",
    date: "2025-10-09",
    type: "Corporate",
    location: "Gurugram",
    photoCount: 89,
    thumb: "https://res.cloudinary.com/dpnykjono/image/upload/v1766764258/Hero-2.webp",
  },
  {
    id: "jai-shreya-jim-corbett",
    name: "Jai & Shreya",
    date: "2025-11-16",
    type: "Wedding",
    location: "Jim Corbett",
    photoCount: 127,
    thumb: "/happy-bride-testimonial.png",
  },
  {
    id: "paras-anushree-noida",
    name: "Paras & Anushree",
    date: "2025-11-24",
    type: "Wedding",
    location: "Noida",
    photoCount: 156,
    thumb: "https://res.cloudinary.com/dpnykjono/image/upload/v1766764216/Hero.webp",
  },
  {
    id: "vikas-sweta-aligarh",
    name: "Vikas & Sweta",
    date: "2025-11-26",
    type: "Anniversary",
    location: "Aligarh",
    photoCount: 112,
    thumb: "/celebrity-magazine-cover.png",
  },
  {
    id: "simcorp-noida",
    name: "Simcorp",
    date: "2025-12-06",
    type: "Corporate",
    location: "Noida",
    photoCount: 74,
    thumb: "/photo-booth-team.jpg",
  },
  {
    id: "tariq-sumaiya-ghaziabad",
    name: "Tariq & Sumaiya",
    date: "2025-12-20",
    type: "Wedding",
    location: "Ghaziabad",
    photoCount: 98,
    thumb: "/photo-booth-bts.png",
  },
]

export default function GalleryPage() {
  return <GalleryClient events={events} />
}
