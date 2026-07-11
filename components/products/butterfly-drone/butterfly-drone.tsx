import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Facebook, Instagram, X, Linkedin } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Pricing from "./pricing"
import WhatsAppButton from "./whatsapp-button"
import Hero from "./hero"
import FooterClientTwo from "@/components/hero/footer.client-2"
import FloatingPricingButton from "@/components/floating-pricing-button"

const SITE_URL = "https://theluxurybooths.com"
const PAGE_PATH = "/butterfly-drone"
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`

const faqs = [
  {
    question: "How does the Butterfly Drone deliver the rings?",
    answer:
      "The rings are securely fastened to the drone before your ceremony begins. On cue, it flies a short, choreographed path and delivers them directly to the bride and groom, flown by our trained operator from start to finish.",
  },
  {
    question: "Is it safe to carry the rings mid-flight?",
    answer:
      "Yes. The rings are firmly secured using a tested attachment, and the flight is rehearsed in advance so the handoff happens smoothly and safely every time.",
  },
  {
    question: "Can it be used for proposals as well as ring ceremonies?",
    answer:
      "Yes. It works beautifully for proposals, engagement ceremonies, and ring ceremonies — anywhere you want the ring to arrive as a genuine surprise moment.",
  },
  {
    question: "Is it only for ring delivery, or can we use it elsewhere in our event?",
    answer:
      "Ring delivery is its signature use, but the same butterfly drone performance also works for wedding entrances, reception reveals, and corporate product launches.",
  },
  {
    question: "How long does the ring delivery flight take?",
    answer:
      "The flight itself is brief, usually under a minute, timed precisely to the moment your officiant or emcee calls for the rings.",
  },
  {
    question: "Can it fly indoors?",
    answer:
      "Yes. It's flown indoors regularly, in banquet halls and mandaps, with the flight plan adjusted for ceiling height and layout during the venue assessment.",
  },
  {
    question: "Does it make noise during the ceremony?",
    answer:
      "The flight mechanism is designed to be near-silent, so it doesn't compete with vows, mantras, or speeches during the moment it's used.",
  },
  {
    question: "What happens if it's windy or raining on the day?",
    answer:
      "Flight is weather-dependent. In strong wind or rain, we plan an indoor ring-delivery alternative in advance so the moment isn't left to chance.",
  },
  {
    question: "Do we need special permission from our venue?",
    answer:
      "Most banquet and hotel venues don't require special clearance since this isn't an outdoor camera drone, but we always confirm venue policy in advance as part of planning.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking at least 4-6 weeks ahead. This gives us time to rehearse the ring attachment and flight path specifically for your ceremony.",
  },
  {
    question: "What's included in the price?",
    answer:
      "Pricing covers the equipment, trained operator, rehearsal flight, and setup and pack-up for your event. See the pricing section below for details.",
  },
  {
    question: "How do we book the Butterfly Drone for our ring ceremony?",
    answer:
      "Message us on WhatsApp or submit an inquiry through this page with your event date, city and venue. We'll confirm availability and walk you through planning from there.",
  },
]

const galleryImages = [
  { id: 1, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1/-butterfly-drone-1.webp", alt: "Butterfly Drone delivering rings at an engagement ceremony" },
  { id: 2, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1/-butterfly-drone-2.webp", alt: "Butterfly drone flying the rings to the bride and groom at a ring ceremony" },
  { id: 3, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1/-butterfly-drone-3.webp", alt: "Close-up of the illuminated LED wings on the butterfly drone" },
  { id: 4, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1/-butterfly-drone-4.webp", alt: "Guests reacting to the butterfly drone ring delivery moment" },
  { id: 5, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1/-butterfly-drone-5.webp", alt: "Butterfly Drone performing a wedding entrance" },
  { id: 6, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1/-butterfly-drone-6.webp", alt: "Operator calibrating the butterfly drone before a ring ceremony" },
  { id: 7, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1/-butterfly-drone-7.webp", alt: "Butterfly drone reveal moment at a corporate product launch" },
  { id: 8, src: "https://res.cloudinary.com/dpnykjono/image/upload/f_auto,q_auto,w_300/v1/-butterfly-drone-8.webp", alt: "Bride and groom exchanging rings delivered by the butterfly drone" },
]

const features = [
  "Specially designed to carry and deliver rings mid-air to the bride and groom",
  "Realistic flapping-wing biomimetic design with illuminated LED wings",
  "Perfect for engagement ceremonies, ring ceremonies, proposals, weddings, and corporate events",
  "Works indoors and outdoors, flown by a trained professional operator",
]

const cities = [
  { slug: "delhi", name: "Delhi", state: "Delhi" },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
  { slug: "gurugram", name: "Gurugram", state: "Haryana" },
  { slug: "faridabad", name: "Faridabad", state: "Haryana" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
  { slug: "pune", name: "Pune", state: "Maharashtra" },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka" },
]

const timelineSteps = [
  {
    step: "01",
    title: "Arrival & Load-in",
    description:
      "Our team arrives ahead of schedule with the drone unit, controller and backup equipment, and checks in with your venue coordinator.",
  },
  {
    step: "02",
    title: "Setup & Calibration",
    description:
      "The flight zone is marked out, calibrated for the venue's ceiling height, lighting and layout, and cross-checked against the safety plan.",
  },
  {
    step: "03",
    title: "Test Flight",
    description:
      "A short, unannounced test flight confirms flight stability, battery charge and wind conditions before the live moment.",
  },
  {
    step: "04",
    title: "Live Performance",
    description:
      "The choreographed flight runs on your cue — an entrance, a reveal, or a standalone performance slot in your program.",
  },
  {
    step: "05",
    title: "Photo & Video Moment",
    description:
      "A few extra minutes are built in for guests and photographers to capture the moment up close after the main performance.",
  },
  {
    step: "06",
    title: "Pack-up & Departure",
    description:
      "Equipment is packed away quietly and the team exits without disrupting the rest of your event.",
  },
]

const bookingSteps = [
  {
    step: "01",
    title: "Inquiry",
    description: "Share your event date, venue and city with us on WhatsApp or through the form on this page.",
  },
  {
    step: "02",
    title: "Consultation",
    description: "We review your venue layout and program to confirm the drone performance is a good fit.",
  },
  {
    step: "03",
    title: "Planning & Choreography",
    description: "Flight timing is planned around your schedule — entrance, reveal, or a dedicated performance slot.",
  },
  {
    step: "04",
    title: "Event Day Execution",
    description: "Our team handles setup, the live performance and pack-up, start to finish.",
  },
]

const relatedExperiences = [
  {
    title: "Strip Photo Booth",
    description: "Instant DSLR-quality photo strips for guests, ready in 15 seconds.",
    href: "/strip-photo-booth",
  },
  {
    title: "Magazine Cover Booth",
    description: "Guests star on a custom magazine cover printed on the spot.",
    href: "/magazine-photo-booth",
  },
  {
    title: "Mirror Photo Booth",
    description: "An interactive full-length mirror booth with signature animations.",
    href: "/mirror-photo-booth",
  },
  {
    title: "Vintage Photo Booth",
    description: "A classic, film-style booth for a nostalgic guest experience.",
    href: "/vintage-photo-booth",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Butterfly Drone Ring Delivery",
  name: "Butterfly Drone Ring Ceremony Entrance",
  description:
    "A flying butterfly drone that delivers the rings to the bride and groom at engagement and ring ceremonies, and performs at weddings, receptions, and corporate events.",
  provider: {
    "@type": "Organization",
    name: "The Luxury Booths",
    url: SITE_URL,
  },
  areaServed: cities.map((city) => ({ "@type": "City", name: city.name })),
  url: PAGE_URL,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
    { "@type": "ListItem", position: 3, name: "Butterfly Drone", item: PAGE_URL },
  ],
}

const ButterflyDrone = () => {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/products" className="flex items-center gap-2 text-pink-500 hover:text-pink-400 transition-colors">
            <ArrowLeft size={20} />
            <span className="hidden sm:block">Back</span>
          </Link>
          <h1 className="text-xl sm:text-3xl font-serif font-bold text-pink-100">Butterfly Drone</h1>
          <div className="w-20" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4 text-pink-100 text-center text-balance">
            Butterfly Drone Ring Ceremony Entrance <br /><span className="text-2xl sm:text-2xl lg:text-3xl"> - A Flying Ring Delivery for Your Engagement</span>
          </h2>

          <p className="text-lg sm:text-xl text-pink-200 text-center max-w-3xl mx-auto mb-2">
            Your rings don&apos;t have to arrive on a cushion. Let them fly in.
          </p>

          <p className="text-base sm:text-lg text-pink-300/80 text-center max-w-3xl mx-auto mb-8">
            A biomimetic, LED-lit butterfly drone that carries your rings mid-air and delivers them straight to the
            bride and groom at your engagement or ring ceremony - flown by a trained operator, choreographed to your
            exact cue.
          </p>

          {/* Hero Image */}
          <Hero />

          <p className="text-center text-pink-300/80 max-w-4xl mx-auto mt-4">
            We provide the Butterfly Drone for ring ceremonies, engagements, and weddings across Delhi NCR
            including Delhi, Noida, Gurugram, Faridabad, and Ghaziabad, and for select events across India.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl sm:text-3xl font-serif font-bold text-pink-100 mb-4">
            More than an entrance. A ring delivery moment.
          </p>
          <p className="text-pink-200 leading-relaxed">
            Instead of a traditional ring bearer or cushion walk, the Butterfly Drone flies your rings
            directly to the bride and groom - choreographed to the exact second of your ring exchange, and captured
            on camera as it happens.
          </p>
        </div>
      </section>

      {/* What is a Butterfly Drone */}
      <section id="what-is-it" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-serif font-bold text-white mb-4">
          What Is a Butterfly Drone?
        </h2>
        <div className="space-y-4 text-pink-100/80 leading-relaxed">
          <p>
            A butterfly drone is a biomimetic flying device — engineered to replicate the
            flapping-wing flight of a real butterfly rather than fly on spinning propellers like a
            conventional camera drone. LED-lit wings and a slow, gliding flight path give it a
            lifelike, almost magical quality that reads as a live illusion rather than a piece of
            tech.
          </p>
          <p>
            At The Luxury Booths, we use it as a live entertainment moment: a single choreographed
            flight timed to a wedding entrance, a couple's first dance, a corporate product reveal,
            or a standalone performance slot within your event program. It's flown by a trained
            operator within a marked, controlled flight zone for the full duration of the
            performance — never left running unsupervised.
          </p>
          <p>
            Unlike a static prop or decoration, the appeal is entirely in the moment: guests watch
            it fly, react in real time, and it becomes the story of the evening — which is why it
            works particularly well as an entrance or reveal moment rather than background
            decor.
          </p>
          <p>
            A butterfly drone is a biomimetic flying device — engineered to replicate the
            flapping-wing flight of a real butterfly rather than fly on spinning propellers like a
            conventional camera drone. LED-lit wings and a slow, gliding flight path give it a
            lifelike, almost magical quality that reads as a live illusion rather than a piece of
            tech.
          </p>
          <p>
            The term <strong>"bionic"</strong> comes from the drone's biomimetic engineering,
            meaning it is designed to imitate the natural movement of a real butterfly rather than
            relying on the exposed propellers commonly seen on conventional drones. Its flapping-wing
            mechanism, lightweight construction, and graceful flight pattern create a more natural,
            elegant appearance, making it an ideal choice for luxury weddings, engagement ceremonies,
            premium celebrations, and high-end corporate events where aesthetics matter just as much
            as technology.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-pink-100 mb-8 text-center">Product Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-pink-200"
              >
                <span className="text-pink-500 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* USP Quote */}
          <div
            className="mt-12 p-6 bg-pink-900/30 border-l-4 border-pink-600 rounded-lg"
          >
            <p className="text-lg font-serif italic text-pink-100">
              &quot;The rings don&apos;t have to be carried in. They can fly in - a cinematic ring delivery moment your
              guests have probably never seen before.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Why Butterfly Drone Ring Entrances Are Trending */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/10 to-transparent">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-pink-100 mb-4 text-balance">
              Why Couples Are Choosing a Butterfly Drone for Their Ring Ceremony
            </h2>

            <p className="text-pink-200 max-w-3xl mx-auto leading-relaxed">
              Modern engagement and ring ceremonies are moving beyond the traditional cushion and ring bearer.
              Couples now want a moment that feels cinematic, personal, and genuinely surprising - and a butterfly
              drone ring entrance delivers exactly that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="rounded-2xl border border-pink-700/30 bg-pink-900/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-pink-100 mb-3">
                A Cinematic Ring Reveal
              </h3>

              <p className="text-pink-200/80 leading-relaxed">
                The rings arrive as part of a live, choreographed flight, timed to your officiant&apos;s cue rather
                than a slow walk down the aisle.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border border-pink-700/30 bg-pink-900/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-pink-100 mb-3">
                A Rare, Camera-Ready Moment
              </h3>

              <p className="text-pink-200/80 leading-relaxed">
                Photographers and videographers capture a moment guests haven&apos;t seen at a ceremony before, one
                that stands out in your wedding film.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-pink-700/30 bg-pink-900/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-pink-100 mb-3">
                A Modern Alternative to the Ring Bearer
              </h3>

              <p className="text-pink-200/80 leading-relaxed">
                No child or usher needs to carry the rings - the drone flies them directly to the couple, removing
                one more thing to coordinate on the day.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl border border-pink-700/30 bg-pink-900/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-pink-100 mb-3">
                Guest Reactions, Captured Live
              </h3>

              <p className="text-pink-200/80 leading-relaxed">
                The moment the butterfly lands, guests instinctively reach for their phones - it&apos;s one of the
                most shared clips from the ceremony.
              </p>
            </div>

            {/* Card 5 */}
            <div className="md:col-span-2 rounded-2xl border border-pink-700/30 bg-linear-to-r from-pink-900/30 to-pink-800/20 p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-pink-100 mb-4">
                Not Just for Ring Ceremonies
              </h3>

              <p className="text-pink-200/80 leading-relaxed max-w-4xl">
                While ring delivery is its signature use, the same butterfly drone performance also works
                beautifully as a wedding entrance, reception reveal, or corporate product launch moment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* How the Ring Delivery Works */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/10 to-transparent">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-pink-100 mb-4 text-balance">
              Built for the Most Important Handoff of the Day
            </h2>

            <p className="text-pink-200 max-w-3xl mx-auto leading-relaxed">
              Flying the rings in only works if it&apos;s done with total reliability. Here&apos;s how we make sure
              the moment goes exactly as planned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Secure attachment */}
            <div className="rounded-2xl border border-pink-700/30 bg-pink-900/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-pink-100 mb-3">
                Secure Ring Attachment
              </h3>

              <p className="text-pink-200/80 leading-relaxed">
                Rings are securely fastened to the drone before flight, using a setup tested during rehearsal so
                nothing is left to chance.
              </p>
            </div>

            {/* Rehearsed flight */}
            <div className="rounded-2xl border border-pink-700/30 bg-pink-900/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-pink-100 mb-3">
                A Rehearsed, Tested Flight
              </h3>

              <p className="text-pink-200/80 leading-relaxed">
                Every ring flight is test-flown before the live moment, timed precisely to your officiant&apos;s or
                coordinator&apos;s cue.
              </p>
            </div>

            {/* Trained operator */}
            <div className="rounded-2xl border border-pink-700/30 bg-pink-900/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-pink-100 mb-3">
                A Trained Operator, Every Time
              </h3>

              <p className="text-pink-200/80 leading-relaxed">
                The drone is flown live by an experienced pilot within a marked, controlled path - never left
                running unsupervised.
              </p>
            </div>

            {/* Backup plan */}
            <div className="rounded-2xl border border-pink-700/30 bg-pink-900/20 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-pink-100 mb-3">
                Backup Plan Built In
              </h3>

              <p className="text-pink-200/80 leading-relaxed">
                A backup unit and manual ring hand-off plan are kept ready, so your ceremony is never held up by a
                technical issue.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="md:col-span-2 rounded-2xl border border-pink-700/30 bg-linear-to-r from-pink-900/30 to-pink-800/20 p-6 sm:p-8">
              <h3 className="text-2xl font-serif font-bold text-pink-100 mb-4">
                A Ring Ceremony Moment Guests Remember Long After the Celebration
              </h3>

              <p className="text-pink-200/80 leading-relaxed max-w-4xl">
                The Butterfly Drone turns the ring exchange into the most talked-about few seconds of your
                event - remembered in photos, videos, and guest conversations well after the day itself.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section id="timeline" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
          How the Experience Runs, Start to Finish
        </h2>
        <div className="space-y-6">
          {timelineSteps.map((item) => (
            <div key={item.step} className="flex gap-5">
              <div className="shrink-0 size-10 rounded-full bg-pink-900/40 border border-pink-500/40 flex items-center justify-center text-pink-300 font-serif font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-pink-100/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Behind Every Butterfly Drone Performance */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/10 to-transparent">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-pink-100 mb-4">
              Behind Every Butterfly Drone Performance
            </h2>

            <p className="text-pink-200 max-w-3xl mx-auto leading-relaxed">
              Every Butterfly Drone performance is carefully planned long before your guests
              arrive. Our goal isn't simply to fly a drone—it's to create a flawless,
              cinematic ring delivery that feels effortless while maintaining complete
              operational control from start to finish.
            </p>
          </div>

          <div className="space-y-6 text-pink-200 leading-relaxed">

            <p>
              Before every event, our team coordinates with your venue management,
              wedding planner, or event coordinator to understand the ceremony layout,
              ring exchange location, ceiling height, lighting conditions, and audience
              positioning. This allows us to design the safest and most visually appealing
              flight path specifically for your venue.
            </p>

            <p>
              Prior to the live performance, the Butterfly Drone is calibrated,
              the rings are securely attached using our tested mounting system,
              batteries are checked, backup equipment is prepared,
              and multiple rehearsal flights are completed to verify stability,
              timing, and precision before guests arrive.
            </p>

            <p>
              During the ceremony, the drone is flown exclusively by a trained operator
              who controls the entire performance in real time. Every movement—from takeoff
              to ring delivery and landing—is manually supervised to ensure reliability,
              safety, and perfect synchronization with your ceremony.
            </p>

            <p>
              Because every venue is different, no two Butterfly Drone performances are
              identical. Each experience is customized around your event timeline,
              venue layout, and ceremony flow, ensuring that the moment feels natural,
              memorable, and seamlessly integrated into your celebration rather than
              appearing as a standalone attraction.
            </p>

          </div>

        </div>
      </section>

      {/* Pricing Calculator */}
      <div id="pricing">
        <Pricing />
      </div>

      {/* Booking process */}
      <section id="booking-process" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
          How to Book
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bookingSteps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="size-10 mx-auto rounded-full bg-pink-900/40 border border-pink-500/40 flex items-center justify-center text-pink-300 font-serif font-bold mb-3">
                {item.step}
              </div>
              <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-pink-100/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-pink-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-pink-100 mb-8 text-center">Frequently Asked Questions</h3>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
              >
                <AccordionItem value={`faq-${index}`} className="glass-enhanced px-6 border-pink-700/50">
                  <AccordionTrigger className="text-pink-100 hover:text-pink-300 font-semibold py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-pink-200/80 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-serif font-bold text-pink-100 mb-8 text-center">Gallery</h3>

          <p className="text-center text-pink-300 mb-6">
            Real rings. Real ceremonies. Real reactions.
          </p>

          <div className="columns-2 sm:columns-3 gap-3 space-y-3">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="w-full break-inside-avoid cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-pink-500/50 transition"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={450}
                  sizes="(max-width: 768px) 50vw, 182px"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Available Cities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold text-pink-100 mb-6">
            Available in These Cities
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/-butterfly-drone/${c.slug}`}
                className="px-4 py-2 rounded-full border border-pink-700/40 text-pink-200 hover:border-pink-500"
              >
                {c.name} ({c.state})
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related experiences */}
      <section id="related-experiences" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
          Related Experiences
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedExperiences.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-6 rounded-lg bg-pink-900/20 border border-pink-500/30 hover:border-pink-400/70 transition-all block"
            >
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-pink-100/70">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-pink-900/20 via-pink-800/20 to-pink-900/20">
        <div
          className="max-w-3xl mx-auto text-center"
        >
          <div className="relative">
            <svg className="absolute -top-4 -left-4 size-12 text-pink-600/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-7-3S0 4.75 0 6v10c0 5 2 7 7 7z" />
            </svg>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-pink-100 mb-6 text-balance pl-8">
              &quot;The Ring Flew In - And Everyone Gasped&quot;
            </p>
            <p className="text-lg sm:text-xl text-pink-200 leading-relaxed mb-4">
              The Butterfly Drone turns a quiet ring exchange into the moment every guest remembers -
              a lifelike, LED-lit flight that carries the rings straight into the hands of the bride and groom.
            </p>
            <p className="text-pink-400/80 italic font-serif">
              A ring ceremony moment that becomes the highlight reel of your entire event.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-t from-pink-900/20 to-transparent">
        <div
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-pink-100 mb-4">
            Let the Rings Fly In
          </h2>
          <p className="text-pink-200 mb-8">Add a Butterfly Drone ring delivery to your engagement or ring ceremony</p>
          <WhatsAppButton />
        </div>
      </section>

      {/* Footer - Enhanced with legal links */}
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
                    className={`w-10 h-10 glass rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:neon-glow ${social.color}`}
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
                  <Link href="/-butterfly-drone" className="hover:text-white transition-colors">
                    Butterfly Drone
                  </Link>
                </li>
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
                  <Link href="/#products"
                    className="hover:text-white transition-colors"
                  >
                    Products
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
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                <p><a href="tel:+919266037002">📞 +91-9266037002</a></p>
                <p className="flex flex-row"><a href="mailto:theluxurybooths@gmail.com">✉️ theluxurybooths@gmail.com</a></p>
                <p><a href="https://maps.app.goo.gl/3XDsYrDYf6ModdjA8">📍 Sector 73, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201301</a></p>
              </div>
            </div>
          </div>
          <FloatingPricingButton />
          <FooterClientTwo />

        </div>
        <div className="py-9 sm:hidden"><span></span></div>
      </footer>
    </main>
  )
}

export default ButterflyDrone