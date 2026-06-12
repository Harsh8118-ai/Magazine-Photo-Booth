import type { Metadata } from "next";
import Hero from "./hero";



export const metadata: Metadata = {
    metadataBase: new URL("https://theluxurybooths.com"),

    applicationName: "The Luxury Booths",

    authors: [
        {
            name: "The Luxury Booths",
            url: "https://theluxurybooths.com",
        },
    ],

    creator: "The Luxury Booths",

    publisher: "The Luxury Booths",


    title:
        "Photo Booth for Weddings | Luxury Wedding Photo Booth Rental | The Luxury Booths",

    description:
        "Luxury wedding photo booth experiences featuring magazine booths, mirror booths, instant photography, editorial portraits, and immersive guest experiences. Designed to create unforgettable wedding memories and premium celebrations.",

    keywords: [
        "photo booth for wedding",
        "wedding photo booth",
        "luxury wedding photo booth",
        "magazine booth wedding",
        "wedding photo booth rental",
        "photo booth for wedding reception",
        "luxury wedding entertainment",
        "wedding photo booth ideas",
        "magazine photo booth for wedding",
        "mirror photo booth for wedding",
        "luxury wedding experiences",
        "TLB",
        "The Luxury Booths",
    ],

    openGraph: {
        title:
            "Photo Booth for Weddings | Luxury Wedding Photo Booth Rental | The Luxury Booths",

        description:
            "Luxury wedding photo booth experiences featuring magazine booths, mirror booths, instant photography, editorial portraits, and immersive guest experiences. Designed to create unforgettable wedding memories and premium celebrations.",

        url:
            "https://theluxurybooths.com/photo-booth-for-weddings",

        siteName: "The Luxury Booths",

        images: [
            {
                url: "https://res.cloudinary.com/dpnykjono/image/upload/v1781184664/For-Weddings.webp",
                width: 1200,
                height: 630,
                alt:
                    "Luxury Wedding Photo Booth Experience by The Luxury Booths",
            },
        ],

        locale: "en_IN",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Photo Booth for Weddings | Luxury Wedding Photo Booth Rental | The Luxury Booths",

        description:
            "Luxury wedding photo booth experiences featuring magazine booths, mirror booths, instant photography, editorial portraits, and immersive guest experiences. Designed to create unforgettable wedding memories and premium celebrations.",

        images: {
            url: "https://res.cloudinary.com/dpnykjono/image/upload/v1781184664/For-Weddings.webp",
            alt:
                "Luxury Wedding Photo Booth Experience by The Luxury Booths",
        },
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

    other: {
        "article:author": "The Luxury Booths",
    },

    category: "Luxury Wedding Experiences",
};

export default function Page() {
    return <Hero />;
}
