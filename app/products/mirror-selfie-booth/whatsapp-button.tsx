"use client"

export default function WhatsAppButton() {
    const mirrorBoothPrice = 14999

    const COMPANY_WHATSAPP = "919266037002";

    const sendWhatsAppBookingMessage = () => {
        const message =
            `Hello! I'm interested in booking the *Mirror Selfie Booth*.\n\n` +
            `Please share availability and details.\n\n` +
            `Package Price: ₹${mirrorBoothPrice.toLocaleString()}`;

        const url = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    };


    return (
        <button
            onClick={sendWhatsAppBookingMessage}
            className="w-full block text-center px-6 py-3 bg-gradient-to-r from-gold to-yellow-300 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all transform hover:scale-105"
        >
            Book Now
        </button>
    )
}
