import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowLeft } from "lucide-react"



export default function MagazinePhotoBoothForSale() {


  const faqSchema = {

    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: [

      {

        "@type": "Question",

        name: "What is the price of magazine photo booth setup?",

        acceptedAnswer: {

          "@type": "Answer",

          text: "The investment for complete magazine photo booth setup starts around ₹175000 depending on customization and package inclusions.",

        },

      },

      {

        "@type": "Question",

        name: "Is magazine photo booth good business opportunity?",

        acceptedAnswer: {

          "@type": "Answer",

          text: "Yes, magazine photo booth business has strong ROI potential as guests share celebrity style photos creating viral marketing reach and brand visibility.",

        },

      },

      {

        "@type": "Question",

        name: "Can magazine photo booth design be customized?",

        acceptedAnswer: {

          "@type": "Answer",

          text: "Yes, magazine booth design can be customized with brand logo, event name, typography style and magazine cover layout.",

        },

      },

      {

        "@type": "Question",

        name: "What space is required for magazine booth setup?",

        acceptedAnswer: {

          "@type": "Answer",

          text: "Typically 10x10 feet clear space with power socket is required for magazine photo booth setup.",

        },

      },

    ],

  }



  return (

    <main className="min-h-screen bg-black text-white">

      <Script

        id="faq-schema"

        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}

      />

      {/* HEADER */}  
      <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur border-b border-white/10">

        <div className="max-w-7xl mx-auto pl-2 py-4 flex items-center justify-between">

          <Link

            href="/magazine-photo-booth"

            className="flex items-center gap-2 text-gold hover:text-yellow-300"

          >

            <ArrowLeft size={20} />


          </Link>
          <p className="text-xl sm:text-3xl font-bold text-gradient">
            Magazine Photo Booth for Sale
          </p>
          <div className="w-15" />
        </div>
      </div>  

      {/* IMAGE SEO */}   
      <section className="max-w-4xl mx-auto pt-20 px-6 sm:hidden">
        <div className="w-full mx-auto">
          <Image
            src="/magazine-photo-booth-corporate-events.webp"
            alt="magazine photo booth setup for business"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 800px"
            className="rounded-xl border border-white/10 w-full h-auto object-contain"
            priority
          />

        </div>

      </section>

      {/* HERO */}

      <section className="pt-32 pb-16 text-center max-w-5xl mx-auto px-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
          Buy Magazine Photo Booth Setup for Business
        </h1>


        <p className="text-gray-400 leading-relaxed">
          Start your own premium photo booth business with luxury walk-in magazine cover photo booth.
          Ideal for event planners, photographers and agencies looking to offer celebrity style photo experience
          with strong ROI potential and viral marketing impact.
        </p>

      </section>



      {/* PRODUCT OVERVIEW */}

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6 text-gradient">
          What is Magazine Photo Booth Setup
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Magazine photo booth is a walk-in magazine cover style frame that creates premium celebrity style photos
          for weddings, corporate events and brand activations. This magazine booth setup is designed to attract guests
          and generate high engagement content for social media.
        </p>



        <p className="text-gray-400 leading-relaxed">

          The magazine cover booth combines professional lighting, custom typography and instant photo prints

          to create a luxury event experience that stands out from traditional photo booths.

        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-6 text-gradient">
          How Magazine Photo Booth Business Works
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">

          Magazine photo booth business allows event professionals to offer premium photography experience for weddings, corporate events and brand activations.

          Businesses purchase magazine booth setup once and provide the service multiple times, generating recurring income.

        </p>

        <p className="text-gray-400 leading-relaxed">

          Guests love magazine cover photos because they create fashion magazine style appearance which increases sharing on social media platforms like Instagram.

        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-6 text-gradient">
          Profit Potential of Photo Booth Business
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">

          Photo booth business setup offers strong return on investment because demand is increasing in luxury weddings and premium events.

          Many event planners charge premium pricing for magazine booth experience because it improves event engagement and perceived value.

        </p>

        <p className="text-gray-400 leading-relaxed">

          With proper marketing and event partnerships, magazine booth business can become a strong revenue generating service.

        </p>

      </section>



      {/* ROI SECTION */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-8 text-gradient">

          ROI & Business Opportunity

        </h2>



        <div className="grid md:grid-cols-2 gap-8 text-gray-400">

          <div>

            <h3 className="font-semibold text-white mb-2">

              Viral Marketing Impact

            </h3>

            Guests share magazine cover photos on Instagram reels, stories and whatsapp generating thousands of impressions organically.

          </div>



          <div>

            <h3 className="font-semibold text-white mb-2">

              Lead Generation Opportunity

            </h3>

            Collect customer data through photo delivery system and build audience for future marketing campaigns.

          </div>



          <div>

            <h3 className="font-semibold text-white mb-2">

              Premium Brand Positioning

            </h3>

            Magazine booth positions your business as premium service provider compared to standard selfie booths.

          </div>



          <div>

            <h3 className="font-semibold text-white mb-2">

              High Demand Product

            </h3>

            Magazine photo booths are trending in luxury weddings and brand events creating strong business opportunity.

          </div>

        </div>

      </section>



      {/* WHAT INCLUDED */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-8 text-gradient">

          What Included in Package

        </h2>



        <ul className="text-gray-400 space-y-3">

          <li>Professional magazine photo booth setup</li>

          <li>DSLR camera compatible design</li>

          <li>Custom magazine cover layout</li>

          <li>Typography customization</li>

          <li>Brand logo placement option</li>

          <li>Online gallery sharing capability</li>

          <li>QR code integration option</li>

        </ul>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-6 text-gradient">
          Magazine Booth vs Traditional Photo Booth
        </h2>

        <p className="text-gray-400 leading-relaxed mb-4">

          Traditional photo booths capture photos but magazine booth creates premium brand experience.

          Walk in magazine cover frame creates fashion editorial look which attracts more attention at events.

        </p>

        <p className="text-gray-400 leading-relaxed">

          Magazine booth increases perceived value of event compared to simple selfie booth setup.

        </p>

      </section>



      {/* PRICING */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-6 text-gradient">

          Investment & Pricing

        </h2>



        <div className="glass border border-white/10 rounded-xl p-8">

          <p className="text-2xl font-bold text-gold mb-3">

            Complete Setup Package ₹175000

          </p>



          <p className="text-gray-400">

            One time investment for magazine booth business setup designed for premium events.

          </p>

        </div>

      </section>



      {/* REQUIREMENTS */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-6 text-gradient">

          Setup Requirements

        </h2>



        <ul className="text-gray-400 space-y-3">

          <li>10 x 10 feet space required</li>

          <li>Power socket access</li>

          <li>Indoor or covered area recommended</li>

          <li>Easy transport design</li>

        </ul>

      </section>



      {/* IMAGE LINK */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-6 text-gradient">

          Magazine Booth Design Examples

        </h2>



        <Link

          href="/magazine-photo-booth/images"

          className="inline-block text-gold"

        >

          View Magazine Booth Images →

        </Link>

      </section>



      {/* WHO SHOULD BUY */}

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-6 text-gradient">

          Who Should Buy Magazine Booth

        </h2>



        <ul className="text-gray-400 space-y-3">

          <li>event planners</li>

          <li>wedding planners</li>

          <li>photographers</li>

          <li>photo booth rental companies</li>

          <li>marketing agencies</li>

          <li>event decorators</li>

        </ul>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold mb-6 text-gradient">
          Also Known As
        </h2>

        <p className="text-gray-400 leading-relaxed">

          People search magazine photo booth using different names like magazine booth setup, magazine cover booth, walk in photo booth frame,
          photo booth business kit, premium photo booth investment, custom magazine booth design, event photo booth business opportunity.

        </p>

      </section>



      {/* CTA */}

      <section className="text-center pb-32 px-6">

        <h2 className="text-3xl font-bold mb-6 text-gradient">

          Start Your Photo Booth Business Today

        </h2>

        <p className="text-gray-400 mb-8">

          Secure your magazine photo booth setup and start offering premium event experience.

        </p>

        <div className="text-center mb-10">

          <Link href="/" className="text-gold block mb-2">
            Home
          </Link>

          <Link href="/pricing" className="text-gold block mb-2">
            Pricing
          </Link>

          <Link href="/magazine-photo-booth/images" className="text-gold block">
            Magazine Booth Images
          </Link>

        </div>


        <Link
          href="/contact"
          className="px-10 py-4 rounded-xl bg-gradient-to-r from-gold to-yellow-300 text-black font-semibold"
        >
          Get Purchase Details
        </Link>
      </section>



    </main>

  )

}