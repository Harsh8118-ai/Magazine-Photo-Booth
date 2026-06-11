"use client";

export default function WhatsAppCTA() {

    const message = encodeURIComponent(
        "Hi, I’m interested in booking The Luxury Booths for a wedding celebration. Please share availability, pricing, and experience details."
    );

    const whatsappURL = `https://wa.me/919266037002?text=${message}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="
                fixed
                bottom-6
                right-6
                z-50

                flex
                h-14
                w-14
                items-center
                justify-center

                rounded-full
                bg-[#25D366]

                shadow-[0_10px_40px_rgba(37,211,102,0.35)]

                transition-all
                duration-300

                hover:scale-110
            "
        >

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-7 w-7"
            >
                <path d="M20.52 3.48a11.8 11.8 0 0 0-8.49-3.5C5.38-.02 0 5.36 0 12.02c0 2.12.55 4.1 1.52 5.84L0 24l6.3-1.65a12 12 0 0 0 5.73 1.46h.01c6.62 0 12-5.38 12-12.02 0-3.21-1.25-6.24-3.52-8.31zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.32l-.35-.2-3.74.98 1-3.64-.23-.37a9.52 9.52 0 1 1 8.16 4.55zm5.51-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.54-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.27.3-1.06 1.03-1.06 2.5 0 1.46 1.09 2.87 1.25 3.06.15.2 2.15 3.28 5.2 4.6.73.32 1.3.5 1.74.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.43.25-.7.25-1.3.17-1.43-.08-.13-.27-.2-.57-.35z" />
            </svg>

        </a>
    );
}
