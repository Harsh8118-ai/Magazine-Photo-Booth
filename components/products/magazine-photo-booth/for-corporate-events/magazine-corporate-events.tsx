import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  Download,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  PartyPopper,
  Presentation,
  Printer,
  QrCode,
  Sparkles,
  Users,
  Building2,
  Facebook,
  X,
} from "lucide-react"
import FooterClientTwo from "@/components/hero/footer.client-2"

const PAGE_URL =
  "https://theluxurybooths.com/magazine-photo-booth/for-corporate-events"
const WHATSAPP = "919266037002"
const PHONE = "+919266037002"
const EMAIL = "enquiry@theluxurybooths.com"

const enquiryUrl = (message: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`

/**
 * Add the final Cloudinary image URLs below.
 * Keep images relevant to the exact step / section described by each key.
 */
const EXPERIENCE_IMAGES = {
  hero: "",
  booth: "",
  guest: "",
  camera: "",
  result: "",
  qr: "",
  print: "",
}

const COVER_IMAGES = {
  editorial: "",
  corporate: "",
  launch: "",
}

const EVENT_IMAGES = {
  launches: "",
  conferences: "",
  celebrations: "",
  activations: "",
}

const faqs = [
  {
    question: "What is a Magazine Photo Booth for a corporate event?",
    answer:
      "It is an interactive photo experience in which guests become the cover star of a magazine-style design. The cover artwork can be planned around the company, campaign or event identity, subject to the creative scope agreed for the event.",
  },
  {
    question: "Can the magazine cover be customised with our company branding?",
    answer:
      "Yes. Share your logo, brand guidelines, campaign artwork and event theme during the enquiry. The final design, placement and production details are confirmed with The Luxury Booths team before the event.",
  },
  {
    question: "Which corporate events are suitable for this booth?",
    answer:
      "It can be considered for product launches, exhibitions, trade shows, conferences, annual days, award nights, employee engagement events, networking evenings and brand activations.",
  },
  {
    question: "Do guests receive printed magazine covers?",
    answer:
      "The experience can include a magazine-cover style photo output. Print format, quantity, digital delivery and any additional inclusions are confirmed in the event proposal so they match your brief.",
  },
  {
    question: "Can you set up the Magazine Photo Booth outside Delhi NCR?",
    answer:
      "The Luxury Booths is based in Delhi NCR and serves events across India. Travel, logistics, availability and event-specific requirements are reviewed before confirming an outstation booking.",
  },
  {
    question: "What details should I share to get a quotation?",
    answer:
      "Please share the event date, city and venue, event type, expected attendee count, operating hours, branding requirements and any preferred output or creative references. These details help the team scope the experience.",
  },
]

const steps = [
  {
    number: "01",
    title: "The booth",
    caption: "A life-size magazine frame becomes the centrepiece of the experience.",
    image: EXPERIENCE_IMAGES.booth,
    alt: "Illuminated walk-in magazine photo booth installation",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Step in & pose",
    caption: "Guests step into the frame and make the cover moment their own.",
    image: EXPERIENCE_IMAGES.guest,
    alt: "Guest posing at a magazine photo booth",
    icon: Users,
  },
  {
    number: "03",
    title: "The camera captures",
    caption: "The camera captures the moment in front of the magazine frame.",
    image: EXPERIENCE_IMAGES.camera,
    alt: "Camera setup capturing a guest at the magazine photo booth",
    icon: Camera,
  },
  {
    number: "04",
    title: "Your cover is ready",
    caption: "The photograph becomes a personalised magazine-cover image.",
    image: EXPERIENCE_IMAGES.result,
    alt: "Finished personalised magazine cover photograph",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Scan. Download. Share.",
    caption: "Guests scan the event QR code to access their digital photo.",
    image: EXPERIENCE_IMAGES.qr,
    alt: "Guest accessing a magazine photo through a QR code",
    icon: QrCode,
  },
  {
    number: "06",
    title: "Take home the print",
    caption: "A printed cover can turn the moment into a physical keepsake.",
    image: EXPERIENCE_IMAGES.print,
    alt: "Printed personalised magazine-cover photo keepsake",
    icon: Printer,
  },
]

const coverStyles = [
  {
    title: "Editorial & fashion",
    text: "A polished magazine-inspired look for guests who want their cover-star moment.",
    image: COVER_IMAGES.editorial,
    alt: "Editorial magazine-cover photo design",
    tag: "01 / EDITORIAL",
  },
  {
    title: "Corporate identity",
    text: "A cover direction that can incorporate your event identity and approved brand assets.",
    image: COVER_IMAGES.corporate,
    alt: "Corporate branded magazine-cover photo design",
    tag: "02 / CORPORATE",
  },
  {
    title: "Launch campaign",
    text: "A campaign-led design concept for launches, exhibitions and brand activations.",
    image: COVER_IMAGES.launch,
    alt: "Product launch magazine-cover photo design",
    tag: "03 / CAMPAIGN",
  },
]

const eventTypes = [
  {
    icon: Megaphone,
    title: "Brand activations",
    text: "Turn campaign participation into a personalised cover moment guests can associate with your brand.",
    image: EVENT_IMAGES.activations,
    alt: "Brand activation at a premium corporate event",
  },
  {
    icon: Sparkles,
    title: "Product launches",
    text: "Build a launch-specific editorial look around a new product, collection, service or brand story.",
    image: EVENT_IMAGES.launches,
    alt: "Product launch event experience",
  },
  {
    icon: Presentation,
    title: "Conferences & exhibitions",
    text: "Give attendees a distinctive interaction at your stand, conference or networking space.",
    image: EVENT_IMAGES.conferences,
    alt: "Corporate conference and exhibition event",
  },
  {
    icon: Users,
    title: "Employee engagement",
    text: "Create a shared experience for teams at annual days, town halls and recognition events.",
    image: EVENT_IMAGES.celebrations,
    alt: "Corporate employee celebration event",
  },
  {
    icon: Building2,
    title: "Corporate milestones",
    text: "Add a personalised photo moment to anniversaries, partner events and award nights.",
    image: EVENT_IMAGES.celebrations,
    alt: "Corporate milestone celebration",
  },
  {
    icon: PartyPopper,
    title: "Client & partner events",
    text: "Offer invited guests a polished keepsake that feels connected to the occasion.",
    image: EVENT_IMAGES.activations,
    alt: "Premium client and partner event",
  },
]

function Media({
  src,
  alt,
  className = "",
  aspect = "aspect-[4/5]",
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  aspect?: string
  priority?: boolean
}) {
  return (
    <div
      className={`group relative isolate overflow-hidden rounded-[1.35rem] bg-[#171613] ${aspect} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1100px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center border border-dashed border-white/15 px-5 text-center">
          <Sparkles size={22} className="mb-3 text-[#C8A85B]/75" />
          <span className="text-[10px] uppercase tracking-[.2em] text-white/50">
            Image placeholder
          </span>
          <span className="mt-2 max-w-55 text-xs leading-5 text-white/30">
            Add the relevant Cloudinary URL in the image configuration.
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-70" />
    </div>
  )
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[.28em] text-[#C8A85B] sm:text-[11px]">
      {children}
    </p>
  )
}

function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Magazine Photo Booth for Corporate Events | The Luxury Booths",
        description:
          "An interactive magazine-cover photo booth experience for corporate events, brand activations, product launches and conferences.",
        isPartOf: { "@id": "https://theluxurybooths.com/#website" },
        about: { "@id": `${PAGE_URL}#service` },
        breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}#service`,
        name: "Magazine Photo Booth for Corporate Events",
        serviceType: [
          "Corporate magazine photo booth",
          "Branded magazine-cover photo experience",
        ],
        description:
          "Magazine-cover style photo booth experience for corporate events and brand activations.",
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
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://theluxurybooths.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Magazine Photo Booth",
            item: "https://theluxurybooths.com/magazine-photo-booth",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "For Corporate Events",
            item: PAGE_URL,
          },
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
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  )
}

export default function MagazineCorporateEvents() {
  const heroMessage =
    "Hello The Luxury Booths, I would like to enquire about a Magazine Photo Booth for a corporate event. Please share availability and details."

  const detailedMessage =
    "Hello The Luxury Booths, I would like to enquire about a Magazine Photo Booth for my corporate event.\n\nEvent date:\nCity / venue:\nEvent type:\nExpected attendees:\nOperating hours:\nBranding requirements:\n"

  return (
    <main className="overflow-hidden bg-[#090909] text-[#F5F1E8]">
      <StructuredData />

      {/* Compact sticky navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#090909]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          <Link
            href="/magazine-photo-booth"
            className="inline-flex items-center gap-2 text-xs text-white/65 transition hover:text-white"
          >
            <ArrowRight className="rotate-180" size={15} />
            <span className="hidden sm:inline">Magazine Photo Booth</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <Link
            href="/"
            aria-label="The Luxury Booths home"
            className="text-[10px] font-medium uppercase tracking-[.25em] text-[#D4B66A] sm:text-xs"
          >
            The Luxury Booths
          </Link>

          <a
            href={enquiryUrl(heroMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4B66A] px-4 py-2.5 text-[11px] font-semibold text-black transition hover:bg-[#E7D19A] sm:px-5 sm:text-xs"
          >
            Enquire <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8A85B]/8 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl text-center">
          <SectionEyebrow>Corporate events · Brand experiences · Delhi NCR & India</SectionEyebrow>
          <h1 className="mx-auto mt-6 max-w-5xl text-[2.65rem] font-light leading-[1.04] tracking-[-.045em] sm:text-6xl lg:text-[5.4rem]">
            Your guests.
            <br className="sm:hidden" />{" "}
            <span className="font-serif italic text-[#D4B66A]">The cover stars.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
            A walk-in magazine photo booth that turns guests into the face of
            their own cover — with a digital photo to share and an optional
            printed keepsake, based on your event package.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={enquiryUrl(heroMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4B66A] px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-[#E7D19A]"
            >
              Plan your experience <ArrowRight size={16} />
            </a>
            <Link
              href="/magazine-photo-booth/images"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm text-white/80 transition hover:border-white/50 hover:text-white"
            >
              Explore the gallery <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[.16em] text-white/40 sm:text-[11px]">
            <span>Brand activations</span>
            <span>Product launches</span>
            <span>Conferences</span>
            <span>Corporate celebrations</span>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl sm:mt-16">
          <Media
            src={EXPERIENCE_IMAGES.hero || EXPERIENCE_IMAGES.booth}
            alt="Magazine photo booth installation at a corporate event"
            aspect="aspect-[5/4] sm:aspect-[16/7]"
            className="rounded-3xl sm:rounded-4xl"
            priority
          />
          <div className="mt-3 flex items-center justify-between text-[9px] uppercase tracking-[.2em] text-white/35 sm:text-[10px]">
            <span>An experience they step into</span>
            <span>01 — The magazine moment</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-white/[0.07] bg-[#10100E] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <SectionEyebrow>More than a photo opportunity</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight sm:text-5xl">
              Give every guest
              <span className="font-serif italic text-[#D4B66A]"> a cover story.</span>
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            The Magazine Photo Booth creates an interactive moment around a
            larger-than-life magazine frame. Guests pose for their photograph
            and receive a magazine-inspired visual that can be aligned with
            your event theme or brand identity. Final artwork, digital delivery
            and print inclusions are agreed during planning.
          </p>
        </div>
      </section>

      {/* Experience walkthrough */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-14 sm:flex-row sm:items-end">
            <div>
              <SectionEyebrow>See how it works</SectionEyebrow>
              <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-5xl">
                Six steps. <span className="font-serif italic">One cover story.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/45">
              From the first step inside to the final photo output, explore
              the guest journey.
            </p>
          </div>

          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            {steps.map(({ number, title, caption, image, alt, icon: Icon }) => (
              <article key={number} className="group min-w-0">
                <div className="relative">
                  <Media src={image} alt={alt} />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[9px] tracking-[.2em] text-white/85 backdrop-blur-md">
                    {number} / 06
                  </span>
                </div>
                <div className="mt-5 flex items-start gap-3">
                  <div className="mt-0.5 rounded-full border border-[#C8A85B]/30 p-2 text-[#D4B66A]">
                    <Icon size={16} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight sm:text-xl">{title}</h3>
                    <p className="mt-1.5 max-w-sm text-sm leading-6 text-white/45">{caption}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cover design showcase */}
      <section className="border-y border-white/[0.07] bg-[#10100E] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <SectionEyebrow>Make it yours</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-5xl">
              One experience.
              <span className="font-serif italic text-[#D4B66A]"> Different covers.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
              Explore possible creative directions. Final cover design and
              branding are developed around the agreed event brief.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {coverStyles.map((cover) => (
              <article key={cover.title} className="group">
                <div className="relative">
                  <Media src={cover.image} alt={cover.alt} aspect="aspect-[4/5]" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/55 px-3 py-1.5 text-[9px] tracking-[.18em] text-white/80 backdrop-blur-md">
                    {cover.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-medium">{cover.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/45">{cover.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate use cases */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl sm:mb-14">
            <SectionEyebrow>Made for participation</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-light leading-tight sm:text-5xl">
              A memorable moment for
              <span className="font-serif italic text-[#D4B66A]"> every occasion.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              A flexible photo experience for corporate gatherings, customer
              engagement and brand-led events.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map(({ icon: Icon, title, text, image, alt }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-[1.35rem] border border-white/9 bg-[#10100E]"
              >
                <Media
                  src={image}
                  alt={alt}
                  aspect="aspect-[16/10]"
                  className="rounded-none"
                />
                <div className="p-6 sm:p-7">
                  <Icon size={21} className="text-[#D4B66A]" strokeWidth={1.6} />
                  <h3 className="mt-4 text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand customisation */}
      <section className="border-y border-white/[0.07] bg-[#10100E] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionEyebrow>Designed around your event</SectionEyebrow>
            <h2 className="mt-4 text-3xl font-light leading-tight sm:text-5xl">
              Your event identity.
              <span className="font-serif italic text-[#D4B66A]"> Their cover moment.</span>
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Share your logo, approved brand assets, campaign artwork and
              creative references with the team. The cover direction, design
              details and production requirements can then be discussed as
              part of your event proposal.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Event theme and campaign-led artwork",
                "Approved company logos and brand assets",
                "Personalised magazine-style photo layouts",
                "Digital and print options discussed in advance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/65">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#D4B66A]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Media
            src={EXPERIENCE_IMAGES.result}
            alt="Personalised magazine cover design with event branding"
            aspect="aspect-[4/5] sm:aspect-[5/4]"
          />
        </div>
      </section>

      {/* Delivery details */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3 sm:gap-10">
          <div className="flex items-start gap-4">
            <Camera className="mt-1 shrink-0 text-[#D4B66A]" size={21} />
            <div>
              <h3 className="text-base font-medium">An editorial-style photo</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">
                A personalised magazine-cover look for every guest.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Download className="mt-1 shrink-0 text-[#D4B66A]" size={21} />
            <div>
              <h3 className="text-base font-medium">Digital access via QR</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">
                Guests can scan to access and share their photo, subject to the
                delivery setup agreed for the event.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Printer className="mt-1 shrink-0 text-[#D4B66A]" size={21} />
            <div>
              <h3 className="text-base font-medium">A print to take away</h3>
              <p className="mt-2 text-sm leading-6 text-white/45">
                Physical keepsakes can be included according to the confirmed
                event package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service area / trust */}
      <section className="border-y border-white/[0.07] bg-[#10100E] px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow>Where we serve</SectionEyebrow>
            <h2 className="mt-3 text-2xl font-light sm:text-4xl">
              Delhi NCR. <span className="font-serif italic text-[#D4B66A]">Pan India.</span>
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/50">
              Based in Delhi NCR, The Luxury Booths considers events across
              India. Availability, travel, logistics and venue requirements
              are reviewed for each enquiry.
            </p>
          </div>
          <a
            href={enquiryUrl("Hello The Luxury Booths, I would like to check availability for a corporate Magazine Photo Booth at my event.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#C8A85B]/50 px-6 py-3.5 text-sm text-[#E0C982] transition hover:bg-[#C8A85B]/10"
          >
            Check availability <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <SectionEyebrow>A few details</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-light sm:text-4xl">Good to know</h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-sm font-medium marker:hidden sm:text-base">
                  {faq.question}
                  <span className="shrink-0 text-xl font-light text-[#D4B66A] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pt-3 text-sm leading-7 text-white/50">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final conversion section */}
      <section className="relative overflow-hidden border-t border-white/[0.07] bg-[#11100D] px-5 py-20 text-center sm:px-8 sm:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A85B]/[0.07] blur-[120px]" />
        <div className="relative mx-auto max-w-3xl">
          <SectionEyebrow>Start planning your experience</SectionEyebrow>
          <h2 className="mt-4 text-3xl font-light leading-tight sm:text-5xl">
            Ready to put your guests
            <span className="font-serif italic text-[#D4B66A]"> on the cover?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Share your event date, city and audience size. The team can help
            shape the experience around your event brief.
          </p>
          <a
            href={enquiryUrl(detailedMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4B66A] px-8 py-4 text-sm font-semibold text-black transition hover:bg-[#E7D19A]"
          >
            Enquire on WhatsApp <ArrowRight size={16} />
          </a>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 text-xs text-white/40 sm:flex-row sm:gap-6">
            <a href={`tel:${PHONE}`} className="transition hover:text-white">
              {PHONE.replace("+91", "+91 ")}
            </a>
            <span className="hidden sm:inline">·</span>
            <a href={`mailto:${EMAIL}`} className="transition hover:text-white">
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* Existing site footer */}
      <footer
        id="contact-section"
        className="border-t border-white/8 bg-[#0B0B0A] px-4 py-10 sm:px-6 sm:py-12"
        role="contentinfo"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="mb-4 text-xl font-semibold text-[#D4B66A] sm:text-2xl">
                The Luxury Booths
              </h3>
              <p className="mb-5 text-sm leading-6 text-white/45">
                The Luxury Booths is a luxury photo booth experience brand for
                premium weddings, corporate events and VIP celebrations.
              </p>
              <div className="flex items-center gap-3">
                {[
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/profile.php?id=61570489859940",
                    icon: Facebook,
                  },
                  {
                    name: "Instagram",
                    url: "https://www.instagram.com/theluxurybooths",
                    icon: Instagram,
                  },
                  { name: "X", url: "https://twitter.com", icon: X },
                  {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/theluxurybooths",
                    icon: Linkedin,
                  },
                ].map(({ name, url, icon: Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit The Luxury Booths on ${name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/55 transition hover:border-[#C8A85B]/50 hover:text-[#D4B66A]"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Services</h4>
              <ul className="space-y-2.5 text-sm text-white/45">
                {[
                  ["Magazine Photo Booth", "/magazine-photo-booth"],
                  ["Mirror Selfie Booth", "/mirror-selfie-booth"],
                  ["Vintage Photo Booth", "/vintage-photo-booth"],
                  ["Mirror Photo Booth", "/mirror-photo-booth"],
                  ["Strip Photo Booth", "/strip-photo-booth"],
                  ["Butterfly Drone", "/butterfly-drone"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Company</h4>
              <ul className="space-y-2.5 text-sm text-white/45">
                {[
                  ["Home", "/#hero-section"],
                  ["Products", "/products"],
                  ["About Us", "/about"],
                  ["Reviews", "/#testimonials-section"],
                  ["Blog", "/blog"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
              <div className="space-y-3 text-sm text-white/45">
                <a href={`tel:${PHONE}`} className="flex items-start gap-2 transition hover:text-white">
                  <Camera size={15} className="mt-0.5 shrink-0" />
                  +91 92660 37002
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 transition hover:text-white">
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  {EMAIL}
                </a>
                <a
                  href="https://maps.app.goo.gl/3XDsYrDYf6ModdjA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition hover:text-white"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  Sector 73, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201301
                </a>
              </div>
            </div>
          </div>
          <FooterClientTwo />
        </div>
      </footer>
    </main>
  )
}
