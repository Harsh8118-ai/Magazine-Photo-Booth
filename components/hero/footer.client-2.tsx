"use client"
import { useState } from "react"
import dynamic from "next/dynamic"

const GalleryModal = dynamic(
    () =>
        import("@/components/gallery-modal").then(
            (mod) => mod.GalleryModal
        ),
    {
        ssr: false,
    }
)

const LegalModal = dynamic(
    () =>
        import("@/components/legal-modal").then(
            (mod) => mod.LegalModal
        ),
    {
        ssr: false,
    }
)

export default function FooterClientTwo() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: "privacy" | "terms" | "cookies" | null }>({
        isOpen: false,
        type: null,
    })

    const galleryImages = Array.from(
        { length: 12 },
        (_, index) => `/magazine-photobooth.png?height=400&width=400&query=magazine photo booth event ${index + 1}`,
    )

    const openLegalModal = (type: "privacy" | "terms" | "cookies") => {
        setLegalModal({ isOpen: true, type })
    }

    const closeLegalModal = () => {
        setLegalModal({ isOpen: false, type: null })
    }

    return (
        <>
            <div className="border-t border-gray-800 pt-6 sm:pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <div className="text-center sm:text-left">
                        <p className="text-gray-400 text-sm sm:text-base">
                            &copy; 2024 The Luxury Booths. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm mt-1">
                            Licensed & Insured
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
                        <button
                            onClick={() => openLegalModal("privacy")}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </button>
                        <button
                            onClick={() => openLegalModal("terms")}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Terms of Service
                        </button>
                        <button
                            onClick={() => openLegalModal("cookies")}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Cookie Policy
                        </button>
                        <a
                            href="mailto:magazinephotobooth@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                </div>
            </div>

            <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} images={galleryImages} />
            <LegalModal isOpen={legalModal.isOpen} onClose={closeLegalModal} type={legalModal.type!} />
        </>
    )
}