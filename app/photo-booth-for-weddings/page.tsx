import type { Metadata } from "next";
import Hero from "./hero";

export const metadata: Metadata = {
    title:
        "Luxury Wedding Photo Booth Experiences | TLB",

    description:
        "Luxury wedding photo booth experiences by TLB featuring magazine booths, mirror booths, glam booths, instant prints, and immersive guest engagement experiences for premium weddings.",

    keywords: [
        "photo booth for wedding",
        "wedding photo booth",
        "luxury wedding photo booth",
        "magazine booth wedding",
        "mirror booth wedding",
        "glam booth wedding",
        "instant print booth",
        "luxury wedding experiences",
        "premium wedding entertainment",
        "wedding guest engagement",
        "TLB",
        "The Luxury Booths",
    ],

    openGraph: {
        title:
            "Luxury Wedding Photo Booth Experiences | TLB",

        description:
            "Luxury wedding photo booth experiences designed for premium weddings and unforgettable guest memories.",

        url:
            "https://theluxurybooths.com/photo-booth-for-weddings",

        siteName: "The Luxury Booths",

        images: [
            {
                url: "/wedding/hero.webp",
                width: 1200,
                height: 630,
                alt:
                    "Luxury Wedding Photo Booth Experience by TLB",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Luxury Wedding Photo Booth Experiences | TLB",

        description:
            "Luxury wedding photo booth experiences designed for premium weddings and unforgettable guest memories.",

        images: ["/wedding/hero.webp"],
    },

    alternates: {
        canonical:
            "https://theluxurybooths.com/photo-booth-for-weddings",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },

    category: "Luxury Wedding Experiences",
};

export default function Page() {
    return <Hero />;
}
