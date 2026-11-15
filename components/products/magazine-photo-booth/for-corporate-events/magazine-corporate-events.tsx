import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  Megaphone,
  PartyPopper,
  Presentation,
  Sparkles,
  Users,
Facebook, Instagram, X, Linkedin
} from "lucide-react"
import FooterClientTwo from "@/components/hero/footer.client-2"

const PAGE_URL = "https://theluxurybooths.com/magazine-photo-booth/for-corporate-events"
const WHATSAPP = "919266037002"
const enquiryUrl = (message: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`

const faqs = [
  {
    question: "What is a Magazine Photo Booth for a corporate event?",
    answer: "It is an interactive photo experience in which guests become the cover star of a magazine-style design. The cover artwork can be planned around the company, campaign or event identity, subject to the creative scope agreed for the event.",
  },
  {
    question: "Can the magazine cover be customised with our company branding?",
    answer: "Yes. Share your logo, brand guidelines, campaign artwork and event theme during the enquiry. The final design, placement and production details are confirmed with the TLB team before the event.",
  },
  {
    question: "Which corporate events are suitable for this booth?",
    answer: "It can be considered for product launches, exhibitions, trade shows, conferences, annual days, award nights, employee engagement events, networking evenings and brand activations.",
  },
  {
    question: "Do guests receive printed magazine covers?",
    answer: "The experience is designed around a magazine-cover style photo output. Print format, quantity, digital delivery and any additional inclusions should be confirmed in the event proposal so they match your brief.",
  },
  {
    question: "Can you set up the Magazine Photo Booth outside Delhi NCR?",
    answer: "The Luxury Booths is based in Delhi NCR and serves events across India. Travel, logistics, availability and event-specific requirements are reviewed before confirming an outstation booking.",
  },
  {
    question: "What details should I share to get a quotation?",
    answer: "Please share the event date, city and venue, event type, expected attendee count, operating hours, branding requirements and any preferred output or creative references. These details help the team scope the experience.",
  },
]

const eventTypes = [
  { icon: Megaphone, title: "Brand activations", text: "Turn campaign participation into a personalised cover moment that guests can take away and associate with your brand." },
  { icon: Sparkles, title: "Product launches", text: "Build a launch-specific editorial look around a new product, collection, service or brand story." },
  { icon: Presentation, title: "Conferences & exhibitions", text: "Give attendees a distinctive interaction at your stand, conference or networking space." },
  { icon: Users, title: "Employee engagement", text: "Create a shared experience for teams at annual days, town halls, celebrations and recognition events." },
  { icon: Building2, title: "Corporate milestones", text: "Add a personalised photo moment to anniversaries, partner events, award nights and company celebrations." },
  { icon: PartyPopper, title: "Client & partner events", text: "Offer invited guests a polished keepsake that feels connected to the occasion rather than generic event merchandise." },
]

const steps = [
  ["Share your event brief", "Tell us the date, venue, audience size, event format and what the experience should achieve."],
  ["Shape the magazine creative", "Discuss the cover concept, brand identity, event messaging and artwork direction."],
  ["Confirm the event plan", "Align on setup, operating hours, venue logistics, staffing and the agreed output."],
  ["Create the cover moment", "Guests take part in the experience and receive the agreed magazine-style photo output."],
]

function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Magazine Photo Booth for Corporate Events | The Luxury Booths",
        description: "Branded magazine-cover photo booth experiences for corporate events, product launches, conferences and brand activations.",
        isPartOf: { "@id": "https://theluxurybooths.com/#website" },
        about: { "@id": `${PAGE_URL}#service` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Magazine Photo Booth for Corporate Events",
        serviceType: ["Corporate magazine photo booth", "Branded magazine-cover photo experience", "Corporate event photo booth rental"],
        description: "Magazine-cover style photo booth experience planned around corporate events, brand activations, product launches, conferences and exhibitions.",
        provider: { "@type": "Organization", name: "The Luxury Booths", url: "https://theluxurybooths.com" },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Delhi NCR, India" },
          { "@type": "Country", name: "India" },
        ],
        url: PAGE_URL,
        image: "https://theluxurybooths.com/magazine-photo-booth-corporate-events.webp",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://theluxurybooths.com/" },
          { "@type": "ListItem", position: 2, name: "Magazine Photo Booth", item: "https://theluxurybooths.com/magazine-photo-booth" },
          { "@type": "ListItem", position: 3, name: "For Corporate Events", item: PAGE_URL },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
}

export default function MagazineCorporateEvents() {
  return (
    <main className="overflow-hidden bg-[#080808] text-white">
      <StructuredData />

      <div className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/40 backdrop-blur-xl">

                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                        <Link
                            href="/"
                            className="flex items-center gap-2 text-white/70 transition hover:text-white"
                        >

                            <ArrowLeft size={18} />

                            <span className="hidden sm:block text-sm">
                                Back
                            </span>

                        </Link>

                        <h1 className="text-xs sm:text-lg uppercase tracking-[0.3em] text-[#D4AF37]">
                            Magazine Photo Booth for Corporate Events
                        </h1>

                        <div className="w-15" />

                    </div>

                </div>

      <section className="relative isolate px-5 pb-24 pt-12 sm:px-8 sm:pb-32 lg:pt-20">
        <div className="pointer-events-none absolute -left-40 top-0 h-112 w-md rounded-full bg-[#D4AF37]/10 blur-[140px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.92fr] lg:gap-16">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[.34em] text-[#D4AF37]">The editorial guest experience</p>
            <h2 className="mt-6 max-w-3xl text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Put your people <span className="font-serif italic text-[#D4AF37]">on the cover.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Make your next corporate event feel like a cover story. The Magazine Photo Booth turns guests into the centre of a custom magazine-style photo experience, shaped around your brand and occasion.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={enquiryUrl("Hello The Luxury Booths, I would like to enquire about a Magazine Photo Booth for a corporate event. Please share availability and details.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#efd477]">
                Enquire for your event <ArrowRight size={16} />
              </a>
              <Link href="/magazine-photo-booth/images" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm text-white/80 transition hover:border-[#D4AF37] hover:text-[#D4AF37]">
                Explore booth images <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-xs text-white/45">
              <span>Brand activations</span><span>Product launches</span><span>Conferences</span><span>Corporate celebrations</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-150">
            <div className="absolute -inset-5 rounded-4xl border border-[#D4AF37]/15" />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#151515] shadow-2xl shadow-black/50">
              <Image src="/magazine-photo-booth-corporate-events.webp" alt="Magazine Photo Booth setup for corporate events by The Luxury Booths" width={1200} height={1200} priority sizes="(max-width: 1024px) 100vw, 48vw" className="aspect-4/4.5 w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/30 to-transparent p-6 sm:p-8">
                <p className="text-[10px] uppercase tracking-[.28em] text-[#E4C66E]">Your brand. Their moment.</p>
                <p className="mt-2 font-serif text-2xl italic sm:text-3xl">A cover worth keeping.</p>
              </div>
            </div>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[.2em] text-white/35">A personalised magazine-cover photo experience</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="text-[10px] uppercase tracking-[.3em] text-[#D4AF37]">More than a photo opportunity</p>
            <h2 className="mt-5 text-3xl font-light leading-tight sm:text-5xl">A brand experience guests become part of.</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="border-l border-[#D4AF37]/50 pl-5">
              <Camera className="text-[#D4AF37]" size={22} />
              <h3 className="mt-4 text-lg">Personal participation</h3>
              <p className="mt-2 text-sm leading-7 text-white/55">Guests do not just view the campaign. They step into the frame and become part of the event's visual story.</p>
            </div>
            <div className="border-l border-[#D4AF37]/50 pl-5">
              <Sparkles className="text-[#D4AF37]" size={22} />
              <h3 className="mt-4 text-lg">Event-led creative</h3>
              <p className="mt-2 text-sm leading-7 text-white/55">The magazine-cover concept can be planned around the event theme, brand identity and campaign direction.</p>
            </div>
            <div className="border-l border-[#D4AF37]/50 pl-5">
              <Users className="text-[#D4AF37]" size={22} />
              <h3 className="mt-4 text-lg">A natural conversation starter</h3>
              <p className="mt-2 text-sm leading-7 text-white/55">A distinctive cover moment gives colleagues, clients and visitors an easy reason to participate together.</p>
            </div>
            <div className="border-l border-[#D4AF37]/50 pl-5">
              <Check className="text-[#D4AF37]" size={22} />
              <h3 className="mt-4 text-lg">A keepsake with context</h3>
              <p className="mt-2 text-sm leading-7 text-white/55">The agreed photo output can carry the event's visual identity beyond the venue as a personalised reminder.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[.3em] text-[#D4AF37]">Designed around your occasion</p>
            <h2 className="mt-5 text-3xl font-light sm:text-5xl">One experience. Many corporate moments.</h2>
            <p className="mt-5 text-sm leading-7 text-white/55">The creative direction and event plan should reflect what brings your audience together.</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-[#0b0b0b] p-7 sm:p-8">
                <Icon size={23} className="text-[#D4AF37]" />
                <h3 className="mt-5 text-lg font-medium">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101010] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <Image src="/magazine-photo-booth.webp" alt="Magazine Photo Booth installation by The Luxury Booths" width={1200} height={900} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-5/4 w-full object-cover" />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[.3em] text-[#D4AF37]">Custom creative direction</p>
            <h2 className="mt-5 text-3xl font-light leading-tight sm:text-5xl">Make the cover feel like your brand.</h2>
            <p className="mt-6 text-sm leading-7 text-white/60">From the cover concept to the final photo layout, the creative brief is where your event identity comes through. Share your brand assets and references early so the artwork can be reviewed and aligned before event day.</p>
            <ul className="mt-7 space-y-3 text-sm text-white/65">
              {["Company or campaign-led cover concept", "Logo, event title and approved brand elements", "Creative aligned with the event's visual theme", "Print and digital output requirements discussed in advance"].map((item) => (
                <li key={item} className="flex items-start gap-3"><Check size={16} className="mt-0.5 shrink-0 text-[#D4AF37]" />{item}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-6 text-white/35">Final customisation, output formats and inclusions are subject to the event brief and written confirmation.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[.3em] text-[#D4AF37]">How it comes together</p>
            <h2 className="mt-5 text-3xl font-light sm:text-5xl">A considered process from brief to event day.</h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], index) => (
              <div key={title} className="border-t border-[#D4AF37]/45 pt-5">
                <span className="text-xs tracking-[.2em] text-[#D4AF37]">0{index + 1}</span>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101010] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-[10px] uppercase tracking-[.3em] text-[#D4AF37]">Frequently asked questions</p>
          <h2 className="mt-5 text-center text-3xl font-light sm:text-5xl">Planning a corporate magazine booth?</h2>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-sm font-medium sm:text-base">
                  {faq.question}
                  <span className="text-xl font-light text-[#D4AF37] transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-7 text-white/55">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#D4AF37]/[.07] to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[.3em] text-[#D4AF37]">Corporate bookings · Delhi NCR · Pan India</p>
          <h2 className="mt-5 text-4xl font-light leading-tight sm:text-6xl">Give your next event a cover moment.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">Tell us what you are planning. We will discuss the creative direction, event requirements and a suitable Magazine Photo Booth setup for your brief.</p>
          <a href={enquiryUrl("Hello The Luxury Booths, I am planning a corporate event and would like to enquire about your Magazine Photo Booth.\n\nEvent date:\nCity / venue:\nEvent type:\nExpected attendees:\nOperating hours:\nBranding requirements:\n") } target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#efd477]">
            Discuss your event <ArrowRight size={16} />
          </a>
          <p className="mt-5 text-xs text-white/35">Call <a href="tel:+919266037002" className="text-white/60 hover:text-[#D4AF37]">+91 92660 37002</a> · <a href="mailto:enquiry@theluxurybooths.com" className="text-white/60 hover:text-[#D4AF37]">enquiry@theluxurybooths.com</a></p>
        </div>
      </section>

      {/* Footer */}
                <footer
                    id="contact-section"
                    className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-900 border-t border-gray-800"
                    role="contentinfo"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
                            <div className="sm:col-span-2 lg:col-span-1">
                                <h3 className="font-display text-xl sm:text-2xl font-bold mb-4 text-gradient">The Luxury Booths</h3>
                                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                                    The Luxury Booths is a luxury photo booth experience brand for premium weddings,
                                    corporate events, and VIP celebrations.
                                </p>
                                <div className="flex space-x-4">
                                    {[
                                        { name: "facebook", url: "https://www.facebook.com/profile.php?id=61570489859940", icon: <Facebook className="w-5 h-5" />, color: "hover:text-blue-500" },
                                        { name: "instagram", url: "https://www.instagram.com/theluxurybooths", icon: <Instagram className="w-5 h-5" />, color: "hover:text-pink-500" },
                                        { name: "twitter", url: "https://twitter.com", icon: <X className="w-5 h-5" />, color: "hover:text-sky-400" },
                                        { name: "linkedin", url: "https://www.linkedin.com/in/theluxurybooths", icon: <Linkedin className="w-5 h-5" />, color: "hover:text-blue-600" },
                                    ].map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`Visit our ${social.name} page`}
                                            className={`w-10 h-10 glass rounded-full flex items-center justify-center cursor-pointer ${social.color}`}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4 text-sm sm:text-base">Services</h4>
                                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                                    <li>
                                        <Link href="/magazine-photo-booth" className="hover:text-white transition-colors">
                                            Magazine Photo Booth
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/mirror-selfie-booth" className="hover:text-white transition-colors">
                                            Mirror Selfie Booth
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/vintage-photo-booth" className="hover:text-white transition-colors">
                                            Vintage Photo Booth
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/mirror-photo-booth" className="hover:text-white transition-colors">
                                            Mirror Photo Booth
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/strip-photo-booth" className="hover:text-white transition-colors">
                                            Strip Photo Booth
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/butterfly-drone" className="hover:text-white transition-colors">
                                            Butterfly Drone
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="hover:text-white transition-colors">
                                            Polaroid Photo Booth (coming soon)
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
                                <ul className="space-y-2 text-gray-400 text-sm sm:text-base">

                                    <li>
                                        <Link href="/#hero-section"
                                            className="hover:text-white transition-colors"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/products"
                                            className="hover:text-white transition-colors"
                                        >
                                            Product
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about"
                                            className="hover:text-white transition-colors"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/#testimonials-section"
                                            className="hover:text-white transition-colors"
                                        >
                                            Reviews
                                        </Link>

                                    </li>
                                    <li>
                                        <Link href={`/blog`} className="hover:text-white transition-colors">
                                            Blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                                <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                                    <p><a href="tel:+919266037002">📞 +91-9266037002</a></p>
                                    <p className="flex flex-row"><a href="mailto:enquiry@theluxurybooths.com">✉️ enquiry@theluxurybooths.com</a></p>
                                    <p><a href="https://maps.app.goo.gl/3XDsYrDYf6ModdjA8">📍 Sector 73, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201301</a></p>
                                </div>
                            </div>
                        </div>

                        <FooterClientTwo />

                    </div>
                    <div className="py-9 sm:hidden"><span></span></div>
                </footer>
    </main>
  )
}
