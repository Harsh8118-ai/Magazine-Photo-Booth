import Link from "next/link"

// Mock data
const eventData = {
  "silver-ijya-gurugram": {
    name: "Sharma Wedding",
    date: "2024-03-15",
    type: "Wedding",
    location: "Delhi",
    photoCount: 127,
    driveLink: "https://drive.google.com/drive/folders/wedding-001",
    topMoments: [
      { id: 1, url: "/happy-bride-testimonial.png", title: "Bride's First Look" },
      { id: 2, url: "/magazine-cover-template.png", title: "Couple Dance" },
      { id: 3, url: "/magazine-photobooth.png", title: "Reception Moments" },
      { id: 4, url: "/photo-booth-team.png", title: "Family Photos" },
      { id: 5, url: "/celebrity-magazine-cover.png", title: "Candid Shots" },
      { id: 6, url: "/photo-booth-bts.png", title: "Evening Celebration" },
    ],
    videos: [
      "https://videos.pexels.com/video-files/853889/853889-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/1279365/1279365-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/1001303/1001303-sd_640_360_25fps.mp4",
    ],
  },
  "corporate-001": {
    name: "Tech Summit 2024",
    date: "2024-02-28",
    type: "Corporate",
    location: "Bangalore",
    photoCount: 89,
    driveLink: "https://drive.google.com/drive/folders/corporate-001",
    topMoments: [
      { id: 1, url: "/magazine-photobooth.png", title: "Keynote Session" },
      { id: 2, url: "/photo-booth-team.png", title: "Networking" },
      { id: 3, url: "/magazine-cover-template.png", title: "Panel Discussion" },
      { id: 4, url: "/celebrity-magazine-cover.png", title: "Prize Distribution" },
    ],
    videos: [
      "https://videos.pexels.com/video-files/853889/853889-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/1279365/1279365-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/1001303/1001303-sd_640_360_25fps.mp4",
    ],
  },
  "birthday-001": {
    name: "Sarah 30th Birthday",
    date: "2024-03-05",
    type: "Birthday",
    location: "Gurgaon",
    photoCount: 112,
    driveLink: "https://drive.google.com/drive/folders/birthday-001",
    topMoments: [
      { id: 1, url: "/celebrity-magazine-cover.png", title: "Cake Cutting" },
      { id: 2, url: "/happy-bride-testimonial.png", title: "Birthday Girl" },
      { id: 3, url: "/magazine-photobooth.png", title: "Friends Moment" },
      { id: 4, url: "/magazine-cover-template.png", title: "Party Time" },
    ],
    videos: [
      "https://videos.pexels.com/video-files/853889/853889-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/1279365/1279365-sd_640_360_25fps.mp4",
      "https://videos.pexels.com/video-files/1001303/1001303-sd_640_360_25fps.mp4",
    ],
  },
}

export default function EventClient({ eventId }: { eventId: string }) {
  const event = eventData[eventId as keyof typeof eventData]

  if (!event) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <Link href="/gallery" className="text-purple-400 hover:text-purple-300">
            ← Back to Gallery
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-b from-purple-600/20 to-black border-b border-gray-800 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/gallery" className="text-purple-400 hover:text-purple-300 mb-6 inline-block">
            ← Back to Gallery
          </Link>
          <h1 className="text-5xl font-bold mb-4 text-gradient">{event.name}</h1>
          <div className="flex flex-wrap gap-6 text-gray-400">
            <div>📅 {event.date}</div>
            <div>📍 {event.location}</div>
            <div>🖼️ {event.photoCount} Photos</div>
            <div className="inline-block px-3 py-1 rounded-full text-sm bg-purple-600/30 text-purple-300 border border-purple-500/50">
              {event.type}
            </div>
          </div>
        </div>
      </header>

      {/* Top Moments Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Top Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {event.topMoments.map((moment) => (
            <div key={moment.id}  className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-square bg-gray-900 mb-3">
                <img
                  src={moment.url || "/placeholder.svg"}
                  alt={moment.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 font-medium">{moment.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Videos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-3xl font-bold mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {event.videos.map((video, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden bg-gray-900">
              <video autoPlay loop muted className="w-full h-64 object-cover">
                <source src={video} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-600/10 border border-purple-500/50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Download All Event Photos</h2>
          <p className="text-gray-400 mb-6">Access high-resolution photos and complete event album</p>
          <a
            href={event.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-bold transition-colors"
          >
            📥 Open Google Drive Album
          </a>
        </div>
      </section>
    </main>
  )
}
