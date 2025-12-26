import GalleryClient from "./gallery-client"

const events = [
  {
    id: "wedding-001",
    name: "Sharma Wedding",
    date: "2024-03-15",
    type: "Wedding",
    location: "Delhi",
    photoCount: 127,
    thumb: "/happy-bride-testimonial.png",
  },
  {
    id: "wedding-002",
    name: "Patel Wedding",
    date: "2024-03-10",
    type: "Wedding",
    location: "Mumbai",
    photoCount: 156,
    thumb: "/magazine-cover-template.png",
  },
  {
    id: "corporate-001",
    name: "Tech Summit 2024",
    date: "2024-02-28",
    type: "Corporate",
    location: "Bangalore",
    photoCount: 89,
    thumb: "/magazine-photobooth.png",
  },
  {
    id: "corporate-002",
    name: "Product Launch",
    date: "2024-02-14",
    type: "Corporate",
    location: "Noida",
    photoCount: 74,
    thumb: "/photo-booth-team.png",
  },
  {
    id: "birthday-001",
    name: "Sarah 30th Birthday",
    date: "2024-03-05",
    type: "Birthday",
    location: "Gurgaon",
    photoCount: 112,
    thumb: "/celebrity-magazine-cover.png",
  },
  {
    id: "party-001",
    name: "New Year Party 2024",
    date: "2024-01-01",
    type: "Party",
    location: "Delhi",
    photoCount: 98,
    thumb: "/photo-booth-bts.png",
  },
]

export default function GalleryPage() {
  return <GalleryClient events={events} />
}
