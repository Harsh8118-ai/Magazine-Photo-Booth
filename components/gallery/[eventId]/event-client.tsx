import Link from "next/link"
import Image from "next/image"
import { eventData } from "@/hooks/eventsData"


export default function EventClient({ eventId }: { eventId: string }) {
  const event = eventData[eventId as keyof typeof eventData]

  if (!event) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">Event Not Found</h1>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            This event page may have been removed or the link is incorrect.
          </p>
          <Link href="/gallery" className="text-purple-400 hover:text-purple-300 font-semibold">
            ← Back to Gallery
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ✅ Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-b from-purple-600/20 to-black border-b border-gray-800 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 font-semibold mb-6"
          >
            ← Back to Gallery
          </Link>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            {event.name}
          </h1>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-gray-300">
            <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10">
              📅 {event.date}
            </span>
            <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10">
              📍 {event.location}
            </span>
            <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-white/5 border border-white/10">
              🖼️ {event.photoCount} Photos
            </span>

            <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-purple-600/30 text-purple-200 border border-purple-500/40">
              {event.type}
            </span>
          </div>
        </div>
      </header>

      {/* ✅ Top Moments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Top Moments</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              A curated selection of our favorite shots from this event.
            </p>
          </div>
        </div>

        {/* ✅ Mobile: 2 cols | Desktop: 3 cols */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {event.topMoments.map((moment, index) => (
            <div
              key={moment.id}
              className="group cursor-pointer glass-enhanced rounded-2xl border border-white/10 overflow-hidden hover:border-gold/30 transition-all"
            >
              {/* ✅ Portrait friendly container */}
              <div className="relative aspect-[3/4] w-full bg-black/30">
                <Image
                  src={moment.url || "/placeholder.svg"}
                  alt={moment.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-contain p-3 group-hover:scale-[1.03] transition-transform duration-300"
                  priority={index < 2}
                />
              </div>

              {/* <div className="p-3 sm:p-4">
                <p className="text-gray-200 font-semibold text-sm sm:text-base line-clamp-1">
                  {moment.title}
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Videos */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 border-t border-white/5">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Event Highlights</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-8">
          Short highlight clips from the event atmosphere and premium booth moments.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {event.videos.map((video, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden border border-white/10 bg-gray-900/40 hover:border-purple-500/40 transition-colors"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              >
                <source src={video} type="video/mp4" />
              </video>

              <div className="p-4">
                <p className="text-gray-200 font-semibold text-sm sm:text-base">
                  Highlight {idx + 1}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Tap play to watch
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ✅ Download Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 border-t border-white/5">
        <div className="glass-enhanced border border-purple-500/40 rounded-2xl p-6 sm:p-10 text-center bg-gradient-to-r from-purple-600/15 to-purple-600/5">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Download All Event Photos
          </h2>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Access the full high-resolution event album on Google Drive.
          </p>

          <a
            href={event.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-7 py-3 rounded-xl font-bold transition-all bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/30"
          >
            📥 Open Google Drive Album
          </a>

          <p className="text-xs sm:text-sm text-gray-500 mt-4">
            Link will open in a new tab.
          </p>
        </div>
      </section>

      {/* ✅ Final CTA: Book Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-white/5">
        <div className="glass-enhanced border border-white/10 rounded-2xl p-6 sm:p-10 text-center bg-gradient-to-r from-black via-purple-600/10 to-purple-600/20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
            Book Us for Your Next Event
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Want this premium setup at your event? Our team will handle everything
            from professional setup to photo delivery.
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919266037002?text=Hi%20Luxury%20Booths!%20I%20want%20to%20book%20your%20photo%20booth%20for%20my%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl font-bold transition-all
                   bg-green-600 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30"
            >
              💬 WhatsApp Now
            </a>

            {/* Call */}
            <a
              href="tel:+919266037002"
              className="w-full sm:w-auto px-7 py-3 rounded-xl font-bold transition-all
                   bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/30"
            >
              📞 Call Now / Enquire
            </a>
          </div>

          {/* ✅ Small Trust Line */}
          <p className="text-xs sm:text-sm text-gray-400 mt-6">
            Fast response • Premium setup • High-quality prints • On-time delivery
          </p>
        </div>
      </section>

    </main>
  )
}
