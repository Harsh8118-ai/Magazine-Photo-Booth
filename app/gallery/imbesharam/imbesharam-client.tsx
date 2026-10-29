
"use client"

import { useState } from "react"
import dynamic from "next/dynamic"


const LegalModal = dynamic(
  () =>
    import("@/components/legal-modal").then(
      (mod) => mod.LegalModal
    ),
  {
    ssr: false,
  }
)

const driveLink = process.env.NEXT_PUBLIC_IMBESHARAM_DRIVE_LINK

export default function ImbesharamClient() {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: "privacy" | "terms" | "cookies" | null }>({
    isOpen: false,
    type: null,
  })



  const openLegalModal = (type: "privacy" | "terms" | "cookies") => {
    setLegalModal({ isOpen: true, type })
  }

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null })
  }

  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [consent, setConsent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")

    if (!consent) {
      setError("Please agree to the photo-access terms.")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/event-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          consent,
          eventId: "imbesharam",
        }),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Registration failed. Please try again."
        )
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-dvh overflow-x-clip bg-[#11080D] text-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 pb-5 pt-2 sm:px-6 sm:pt-4">

        {/* Compact brand header */}
        <header className="flex min-h-12 items-center justify-between gap-3 border-b border-white/10 pb-3">
          <a
            href="https://theluxurybooths.com"
            aria-label="The Luxury Booths home"
            className="text-xs font-extrabold tracking-[0.13em] sm:text-sm"
          >
            THE LUXURY BOOTHS
          </a>

          <span className="shrink-0 text-[10px] font-semibold tracking-[0.12em] text-white/50 sm:text-xs">
            EVENT PHOTO ACCESS
          </span>
        </header>

        {/* Form comes first in the DOM and on mobile */}
        <div className="grid flex-1 content-start items-start gap-8 py-4 sm:py-6 md:grid-cols-2 md:items-center md:gap-12 md:py-10">

          <section
            aria-labelledby="registration-title"
            className="mx-auto w-full max-w-md md:mx-0 md:max-w-none"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#F42B78]/30 bg-[#1A0C13] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] sm:rounded-3xl sm:p-8">

              {/* Lightweight accent; no image or blur effects */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-[#F42B78]"
              />

              {!submitted ? (
                <>
                  <div className="mb-5 sm:mb-7">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF75A9] sm:text-xs">
                      IMBESHARAM × TLB
                    </p>

                    <h1
                      id="registration-title"
                      className="text-[27px] font-extrabold leading-tight tracking-tight sm:text-4xl"
                    >
                      Get your photos.
                    </h1>

                    <p className="mt-2 text-sm leading-5 text-white/60 sm:mt-3 sm:text-base">
                      Register to unlock your event gallery.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div>
                      <label
                        htmlFor="guest-name"
                        className="mb-1.5 block text-sm font-medium text-white/90"
                      >
                        Full name
                      </label>

                      <input
                        id="guest-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        autoCapitalize="words"
                        enterKeyHint="next"
                        required
                        minLength={2}
                        maxLength={100}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="min-h-12 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white outline-none placeholder:text-white/35 focus:border-[#F42B78] focus:ring-2 focus:ring-[#F42B78]/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="guest-contact"
                        className="mb-1.5 block text-sm font-medium text-white/90"
                      >
                        Phone number or email
                      </label>

                      <input
                        id="guest-contact"
                        name="contact"
                        type="text"
                        autoComplete="on"
                        enterKeyHint="done"
                        required
                        maxLength={254}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter phone or email"
                        className="min-h-12 w-full rounded-xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white outline-none placeholder:text-white/35 focus:border-[#F42B78] focus:ring-2 focus:ring-[#F42B78]/20"
                      />
                    </div>

                    <div>
                      <label className="flex cursor-pointer items-start gap-3 py-1 text-xs leading-[1.45rem] text-white/65 sm:text-sm">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => {
                            setConsent(e.target.checked)
                            if (e.target.checked) setError("")
                          }}
                          className="mt-1 size-5 shrink-0 accent-[#F42B78]"
                        />

                        <span>
                          I agree that The Luxury Booths may use my details
                          to provide access to this event&apos;s photo gallery.
                          {" "}
                          <button
                            onClick={() => openLegalModal("privacy")}
                            className="font-medium text-[#FF75A9] underline underline-offset-2"
                          >
                            Privacy Policy
                          </button>
                        </span>
                      </label>
                    </div>

                    {error && (
                      <p
                        role="alert"
                        aria-live="polite"
                        className="rounded-lg border border-red-400/20 bg-red-400/10 px-3 py-2 text-sm text-red-300"
                      >
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex min-h-12 w-full items-center justify-center rounded-xl bg-[#F42B78] px-4 py-3 text-sm font-extrabold tracking-wide text-white transition-colors hover:bg-[#D91D66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8BB5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A0C13] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "REGISTERING..." : "UNLOCK MY PHOTOS"}
                      {!loading && <span className="ml-2" aria-hidden="true">→</span>}
                    </button>

                    <p className="text-center text-[11px] leading-4 text-white/40">
                      Your details are used for gallery access, not marketing
                      subscriptions.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-4 text-center sm:py-6">
                  <div
                    aria-hidden="true"
                    className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#F42B78]/15 text-2xl font-bold text-[#FF75A9]"
                  >
                    ✓
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FF75A9]">
                    REGISTRATION COMPLETE
                  </p>

                  <h1 className="text-2xl font-extrabold sm:text-3xl">
                    You&apos;re all set.
                  </h1>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Your registration was successful. Your event photos are
                    ready when the gallery is available.
                  </p>

                  {driveLink ? (
                    <a
                      href={driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-[#F42B78] px-4 py-3 text-sm font-extrabold hover:bg-[#D91D66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8BB5]"
                    >
                      VIEW PHOTO GALLERY ↗
                    </a>
                  ) : (
                    <p className="mt-5 rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-white/60">
                      The gallery link will appear here once it is published.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setName("")
                      setContact("")
                      setConsent(false)
                      setError("")
                    }}
                    className="mt-5 min-h-11 px-3 text-sm text-white/60 underline underline-offset-4 hover:text-white"
                  >
                    Register another guest
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Collaboration content follows the form on mobile */}
          <section className="mx-auto w-full max-w-md pb-2 md:max-w-lg md:py-8">
            <div className="border-l-2 border-[#F42B78] pl-4 sm:pl-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF75A9] sm:text-sm">
                A special collaboration
              </p>

              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                IMBESHARAM
                <span className="mt-1 block text-white/45">×</span>
                <span className="mt-1 block">THE LUXURY BOOTHS</span>
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
                Two brands. One experience. Your moments, captured and
                ready to revisit.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35 sm:text-xs">
              <span className="size-1.5 rounded-full bg-[#F42B78]" />
              Made for moments worth remembering
            </div>
          </section>
        </div>

        <footer className="border-t border-white/10 py-4 text-center text-[10px] text-white/35 sm:text-xs">
          © {new Date().getFullYear()} The Luxury Booths
        </footer>
      </div>

      <LegalModal isOpen={legalModal.isOpen} onClose={closeLegalModal} type={legalModal.type!} />
    </main>
  )
}
