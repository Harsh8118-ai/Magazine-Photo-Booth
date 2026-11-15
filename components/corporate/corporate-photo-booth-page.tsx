"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, type FormEvent } from "react"
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  ChevronDown,
  Image as ImageIcon,
  Megaphone,
  MonitorPlay,
  Printer,
  Sparkles,
  Users,
} from "lucide-react"
import FooterClientTwo from "@/components/hero/footer.client-2"
import { WhatsAppCTA } from "@/components/whatsapp-cta"

const PAGE_URL = "https://theluxurybooths.com/photo-booth-for-corporate-events"
const phoneNumber = "919266037002"

const faqs = [
  {
    question: "What types of corporate events can use a photo booth?",
    answer:
      "A photo booth can be planned for product launches, brand activations, exhibitions, trade shows, conferences, annual celebrations, award nights and employee engagement events. The right setup depends on your audience, venue and campaign objective.",
  },
  {
    question: "Can the photo booth be customised with our company branding?",
    answer:
      "TLB's magazine-cover and photo-print experiences can be planned around event-specific creative direction. Share your logo, brand guidelines, campaign theme and preferred artwork during the enquiry so the team can confirm the available customisation.",
  },
  {
    question: "Which photo booth is suitable for a product launch?",
    answer:
      "A Magazine Photo Booth can create an editorial-style branded portrait, while a Mirror Photo Booth or Strip Photo Booth may suit other interaction styles. The recommendation depends on the launch concept, space, audience and desired takeaway.",
  },
  {
    question: "Do you provide photo booth services outside Delhi NCR?",
    answer:
      "TLB is based in Noida, Delhi NCR and serves events across India. Travel feasibility, logistics and the final quotation are confirmed for each event location.",
  },
  {
    question: "What information is required for a corporate photo booth quotation?",
    answer:
      "Share your event date, city, venue if confirmed, event type, expected attendee count, operating hours, preferred experience and branding requirements. TLB can use these details to understand the brief and prepare a suitable proposal.",
  },
  {
    question: "Do you provide on-site staff?",
    answer:
      "TLB's event setup and staffing plan is confirmed according to the selected experience and event brief. Mention your venue timings, expected footfall and event format when requesting a quotation.",
  },
  {
    question: "How early should we enquire?",
    answer:
      "Enquire as early as your event plans allow, especially when custom artwork, approvals, travel or venue coordination are involved. Availability and preparation timelines must be confirmed directly with TLB.",
  },
]

const useCases = [
  {
    icon: Megaphone,
    title: "Brand activations",
    copy: "Give visitors a reason to stop, participate and leave with a branded photo keepsake connected to your campaign.",
  },
  {
    icon: Sparkles,
    title: "Product launches",
    copy: "Build a photo moment around a new product, launch theme or brand story, with creative details planned for the occasion.",
  },
  {
    icon: Users,
    title: "Conferences & networking",
    copy: "Add an approachable guest interaction to conferences, networking events and business gatherings.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Annual days & award nights",
    copy: "Create a polished portrait experience for employees, leadership teams, partners and invited guests.",
  },
  {
    icon: Camera,
    title: "Exhibitions & trade shows",
    copy: "Create an experience visitors can engage with at your stand, while giving your brand a memorable presence on the show floor.",
  },
  {
    icon: MonitorPlay,
    title: "Corporate celebrations",
    copy: "Bring a personalised photography experience to milestone celebrations, festive events and company parties.",
  },
]

const experiences = [
  {
    title: "Magazine Photo Booth",
    description:
      "Editorial-style magazine-cover portraits that can be designed around a campaign, company or event identity.",
    image: "/magazine-photo-booth-corporate-events.webp",
    alt: "Editorial magazine photo booth experience for corporate events",
    href: "/magazine-photo-booth",
    tag: "Brand storytelling",
  },
  {
    title: "Mirror Photo Booth",
    description:
      "An interactive mirror-led experience for guests who enjoy a guided, playful photo moment and instant keepsakes.",
    image: "/mirror-photo-booth.webp",
    alt: "Interactive mirror photo booth for a corporate celebration",
    href: "/mirror-photo-booth",
    tag: "Guest interaction",
  },
  {
    title: "Strip Photo Booth",
    description:
      "A familiar photo-strip format that gives attendees a compact printed reminder of the event.",
    image: "/strip-photo-booth.webp",
    alt: "Instant photo strip booth experience",
    href: "/strip-photo-booth",
    tag: "Instant keepsakes",
  },
  {
    title: "Vintage Photo Booth",
    description:
      "A retro-inspired portrait setup for campaigns and events that call for a distinctive visual style.",
    image: "/vintage-photo-booth.webp",
    alt: "Vintage photo booth setup for events",
    href: "/vintage-photo-booth",
    tag: "Distinctive aesthetic",
  },
]

const process = [
  ["Share the brief", "Tell us about the event, audience, location, timings and campaign objective."],
  ["Choose the experience", "We help shortlist a photo booth format based on your event concept and venue."],
  ["Plan the creative", "Discuss logo placement, artwork, print design and the look you want guests to remember."],
  ["Coordinate the event", "Confirm the schedule, venue requirements, logistics and delivery plan with the TLB team."],
]

const corporatePhotos = [
  {
    src: "https://res.cloudinary.com/dpnykjono/image/upload/v1769257579/taazaa.webp",
    alt: "Taazaa Tech corporate event photo booth experience by The Luxury Booths",
  },
  {
    src: "https://res.cloudinary.com/dpnykjono/image/upload/v1769257579/taazaa-5.webp",
    alt: "Guests at the Taazaa Tech corporate photo booth activation",
  },
  {
    src: "https://res.cloudinary.com/dpnykjono/image/upload/v1769160644/1.webp",
    alt: "Corporate photo booth event setup by The Luxury Booths",
  },
  {
    src: "https://res.cloudinary.com/dpnykjono/image/upload/v1769160644/1-2.webp",
    alt: "Corporate event guest portrait from a TLB activation",
  },
]

function makeWhatsAppUrl(message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-28 sm:px-8">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-white/45">
        <li><Link href="/" className="hover:text-[#D4AF37]">Home</Link></li>
        <li aria-hidden="true">/</li>
        <li><Link href="/products" className="hover:text-[#D4AF37]">Experiences</Link></li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-white/80">Corporate Events</li>
      </ol>
    </nav>
  )
}

function CorporateStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Corporate Photo Booth Experiences | The Luxury Booths",
        description:
          "Corporate photo booth experiences for brand activations, product launches, exhibitions, conferences and company celebrations.",
        isPartOf: { "@id": "https://theluxurybooths.com/#website" },
        about: { "@id": `${PAGE_URL}#service` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Corporate Photo Booth Experiences",
        serviceType: [
          "Corporate photo booth rental",
          "Brand activation photo booth",
          "Product launch photo booth experience",
          "Corporate event photography experience",
        ],
        description:
          "Branded and interactive photo booth experiences for corporate events, exhibitions, product launches and brand activations.",
        provider: {
          "@type": "Organization",
          name: "The Luxury Booths",
          url: "https://theluxurybooths.com",
        },
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
          { "@type": "ListItem", position: 2, name: "Experiences", item: "https://theluxurybooths.com/products" },
          { "@type": "ListItem", position: 3, name: "Corporate Events", item: PAGE_URL },
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  )
}

export default function CorporatePhotoBoothPage() {
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    eventType: "Brand activation",
    eventDate: "",
    city: "",
    attendees: "",
    details: "",
  })
  const [showFaq, setShowFaq] = useState<number | null>(0)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const message = [
      "Hello The Luxury Booths, I would like to discuss a corporate event.",
      `Name: ${formState.name}`,
      `Company: ${formState.company || "Not provided"}`,
      `Email: ${formState.email || "Not provided"}`,
      `Phone: ${formState.phone}`,
      `Event type: ${formState.eventType}`,
      `Event date: ${formState.eventDate || "To be confirmed"}`,
      `City: ${formState.city}`,
      `Expected attendees: ${formState.attendees || "Not provided"}`,
      `Brief: ${formState.details || "Not provided"}`,
    ].join("\\n")

    window.open(makeWhatsAppUrl(message), "_blank", "noopener,noreferrer")
  }

  return (
    <main className="overflow-hidden bg-black text-white">
      <CorporateStructuredData />
      <Breadcrumbs />

      <section className="relative isolate px-5 pb-24 pt-12 sm:px-8 sm:pb-32 lg:pt-16">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[130px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[.32em] text-[#D4AF37]">
              Corporate photo booth experiences · India
            </p>
            <h1 className="mt-7 max-w-3xl text-4xl font-light leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Make your brand part of the <span className="text-[#D4AF37]">moment.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Premium photo booth experiences for corporate events, brand activations,
              product launches and exhibitions. Bring people into your brand story with
              considered creative, interactive photography and event-ready keepsakes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#F1D477]"
              >
                Plan your corporate event <ArrowRight size={16} />
              </a>
              <a
                href="#experiences"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm text-white transition hover:border-[#D4AF37]/70 hover:text-[#D4AF37]"
              >
                Explore experiences
              </a>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div><p className="text-lg font-medium text-white">Branded</p><p className="mt-1 text-xs text-white/45">Creative direction</p></div>
              <div><p className="text-lg font-medium text-white">Interactive</p><p className="mt-1 text-xs text-white/45">Guest participation</p></div>
              <div><p className="text-lg font-medium text-white">Event-ready</p><p className="mt-1 text-xs text-white/45">On-site experience</p></div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-5 rounded-4xl bg-[#D4AF37]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-4xl border border-white/10">
              <Image
                src="/magazine-photo-booth-corporate-events.webp"
                alt="Magazine-style branded photo booth experience for corporate events by The Luxury Booths"
                width={1200}
                height={1400}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="aspect-4/5 w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/85 to-transparent p-7 pt-24">
                <p className="text-xs uppercase tracking-[.28em] text-[#E4C46A]">The TLB experience</p>
                <p className="mt-2 text-2xl font-light">A photo moment with your brand in the frame.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/2.5 px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[.75fr_1.25fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">Made for business events</p>
            <h2 className="mt-4 text-3xl font-light sm:text-4xl">A guest experience. A brand touchpoint.</h2>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
            A corporate photo booth should feel connected to the event, not like an unrelated
            attraction. TLB works with the event brief to shape the booth experience, visual
            treatment and guest takeaway around the occasion.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">Where it fits</p>
            <h2 className="mt-5 text-3xl font-light sm:text-5xl">Photo booth ideas for every corporate format.</h2>
            <p className="mt-5 text-white/55 leading-7">Choose an experience based on what your event needs guests to do, feel and remember.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item, index) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-[#D4AF37]/45">
                  <div className="flex size-12 items-center justify-center rounded-full border border-[#D4AF37]/30 text-[#D4AF37]"><Icon size={21} /></div>
                  <p className="mt-7 text-xs text-white/35">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">{item.copy}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="experiences" className="bg-[#0b0b0b] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">Choose your format</p>
              <h2 className="mt-5 text-3xl font-light sm:text-5xl">Corporate photo booth experiences.</h2>
            </div>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-white">Explore all experiences <ArrowUpRight size={16} /></Link>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/2.5">
                <Link href={item.href} className="group block">
                  <div className="relative overflow-hidden">
                    <Image src={item.image} alt={item.alt} width={720} height={900} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="aspect-4/5 w-full object-cover transition duration-700 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[10px] uppercase tracking-wider">{item.tag}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="mt-3 min-h-20 text-sm leading-6 text-white/55">{item.description}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm text-[#D4AF37]">View experience <ArrowUpRight size={15} /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">Brand customisation</p>
            <h2 className="mt-5 text-3xl font-light leading-tight sm:text-5xl">Put your brand into the experience.</h2>
            <p className="mt-6 text-sm leading-7 text-white/60 sm:text-base">
              The creative treatment is part of the event brief. Discuss how your logo,
              campaign identity and event theme can appear across the photo experience
              and guest keepsake.
            </p>
            <a href={makeWhatsAppUrl("Hello TLB, I would like to discuss branded photo booth customisation for a corporate event.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/60 px-6 py-3 text-sm text-[#E3C36D] hover:bg-[#D4AF37] hover:text-black">
              Discuss brand customisation <ArrowRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="relative col-span-2 overflow-hidden rounded-2xl border border-white/10">
              <Image src="/magazine-photo-booth-corporate-events.webp" alt="Custom corporate magazine booth creative" width={1200} height={650} sizes="(max-width: 768px) 100vw, 60vw" className="aspect-16/8 w-full object-cover" />
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
              <ImageIcon className="text-[#D4AF37]" size={24} />
              <h3 className="mt-4 font-medium">Event-led artwork</h3>
              <p className="mt-2 text-xs leading-6 text-white/50">Creative aligned with the campaign, event theme and visual identity.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
              <Printer className="text-[#D4AF37]" size={24} />
              <h3 className="mt-4 font-medium">Branded takeaways</h3>
              <p className="mt-2 text-xs leading-6 text-white/50">Discuss logo placement and personalised print layouts for guests.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">Real event moments</p>
            <h2 className="mt-5 text-3xl font-light sm:text-5xl">Corporate event experiences by TLB.</h2>
            <p className="mt-5 text-sm leading-7 text-white/55">A look at event work represented in TLB's existing event portfolio.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {corporatePhotos.map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-xl border border-white/10">
                <Image src={photo.src} alt={photo.alt} width={700} height={850} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="aspect-4/5 w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[.25em] text-[#D4AF37]">Corporate event · Gurugram</p>
              <h3 className="mt-3 text-xl">Silver by IJYA</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">Listed in TLB's event records as a corporate event in Gurugram. Contact TLB for details about the experience and event requirements.</p>
            </article>
            <article className="rounded-2xl border border-white/10 p-6">
              <p className="text-xs uppercase tracking-[.25em] text-[#D4AF37]">Corporate event · Noida</p>
              <h3 className="mt-3 text-xl">Taazaa Tech Pvt. Ltd.</h3>
              <p className="mt-2 text-sm leading-6 text-white/55">Listed in TLB's event records as a corporate event in Noida, with event photographs available in the portfolio.</p>
            </article>
          </div>
          <Link href="/gallery" className="mt-8 inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:text-white">View the event gallery <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">From brief to event day</p>
            <h2 className="mt-5 text-3xl font-light sm:text-5xl">A clear process for your team.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([title, description], index) => (
              <div key={title} className="border-t border-[#D4AF37]/45 pt-5">
                <span className="text-sm text-[#D4AF37]">0{index + 1}</span>
                <h3 className="mt-5 text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-xs uppercase tracking-[.3em] text-[#D4AF37]">Good to know</p>
          <h2 className="mt-5 text-center text-3xl font-light sm:text-5xl">Corporate photo booth FAQs.</h2>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="py-5">
                <button type="button" aria-expanded={showFaq === index} onClick={() => setShowFaq(showFaq === index ? null : index)} className="flex w-full items-center justify-between gap-6 text-left">
                  <span className="text-sm font-medium sm:text-base">{faq.question}</span>
                  <ChevronDown size={18} className={`shrink-0 text-[#D4AF37] transition ${showFaq === index ? "rotate-180" : ""}`} />
                </button>
                {showFaq === index && <p className="max-w-3xl pt-4 text-sm leading-7 text-white/55">{faq.answer}</p>}
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-xs text-white/35">Answers reflect general service information. Confirm event-specific availability, inclusions and requirements with TLB.</p>
        </div>
      </section>

      <section id="enquiry" className="relative px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#D4AF37]/[0.07] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">Start a conversation</p>
            <h2 className="mt-5 text-4xl font-light sm:text-6xl">Let's plan your corporate event.</h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-white/55 sm:text-base">Share a few details about your event. Your information will be placed into a WhatsApp message so the TLB team can discuss the brief with you.</p>
            <div className="mt-8 space-y-3 text-sm text-white/60">
              <p><span className="text-[#D4AF37]">Phone:</span> <a href="tel:+919266037002" className="hover:text-white">+91 92660 37002</a></p>
              <p><span className="text-[#D4AF37]">Email:</span> <a href="mailto:enquiry@theluxurybooths.com" className="hover:text-white">enquiry@theluxurybooths.com</a></p>
              <p><span className="text-[#D4AF37]">Base:</span> Noida, Delhi NCR · Events across India</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/4 p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-xs text-white/60">Your name *
                <input required minLength={2} autoComplete="name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              </label>
              <label className="text-xs text-white/60">Company
                <input autoComplete="organization" value={formState.company} onChange={(e) => setFormState({ ...formState, company: e.target.value })} className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              </label>
              <label className="text-xs text-white/60">Phone / WhatsApp *
                <input required type="tel" autoComplete="tel" value={formState.phone} onChange={(e) => setFormState({ ...formState, phone: e.target.value })} className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              </label>
              <label className="text-xs text-white/60">Email
                <input type="email" autoComplete="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              </label>
              <label className="text-xs text-white/60">Event type
                <select value={formState.eventType} onChange={(e) => setFormState({ ...formState, eventType: e.target.value })} className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]">
                  {["Brand activation", "Product launch", "Exhibition / trade show", "Conference", "Annual day / award night", "Corporate celebration", "Other"].map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="text-xs text-white/60">Event date
                <input type="date" value={formState.eventDate} onChange={(e) => setFormState({ ...formState, eventDate: e.target.value })} className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              </label>
              <label className="text-xs text-white/60">City *
                <input required value={formState.city} onChange={(e) => setFormState({ ...formState, city: e.target.value })} placeholder="e.g. Gurugram" className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              </label>
              <label className="text-xs text-white/60">Expected attendees
                <input inputMode="numeric" value={formState.attendees} onChange={(e) => setFormState({ ...formState, attendees: e.target.value })} placeholder="Approximate number" className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              </label>
              <label className="text-xs text-white/60 sm:col-span-2">Tell us about the event
                <textarea rows={4} value={formState.details} onChange={(e) => setFormState({ ...formState, details: e.target.value })} placeholder="Venue, event timings, branding or experience preferences..." className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-6 py-4 text-sm font-semibold text-black transition hover:bg-[#F1D477]">
              Continue on WhatsApp <ArrowRight size={16} />
            </button>
            <p className="mt-3 text-center text-[11px] leading-5 text-white/35">Submitting opens WhatsApp with your event brief. No booking is made until TLB confirms it.</p>
          </form>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 text-center sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[.3em] text-[#D4AF37]">The Luxury Booths</p>
          <h2 className="mt-5 text-3xl font-light sm:text-5xl">Make the event memorable. Make the moment yours.</h2>
          <a href={makeWhatsAppUrl("Hello TLB, I would like to discuss a corporate photo booth experience.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-4 text-sm font-semibold text-black hover:bg-[#F1D477]">Talk to our team <ArrowRight size={16} /></a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#090909] px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/products" className="hover:text-white">All experiences</Link>
            <Link href="/magazine-photo-booth" className="hover:text-white">Magazine Photo Booth</Link>
            <Link href="/photo-booth-for-weddings" className="hover:text-white">Wedding experiences</Link>
            <Link href="/blog/branded-event-activations-delhi-ncr" className="hover:text-white">Corporate activation guide</Link>
            <Link href="/blog/magazine-photo-booth-for-corporate-events" className="hover:text-white">Corporate magazine booth guide</Link>
            <Link href="/gallery" className="hover:text-white">Event gallery</Link>
          </div>
          <FooterClientTwo />
        </div>
      </footer>
      <WhatsAppCTA />
    </main>
  )
}
