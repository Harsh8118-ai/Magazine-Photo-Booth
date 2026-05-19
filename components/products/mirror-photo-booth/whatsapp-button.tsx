"use client"

type Props = {
  hours?: number
  price?: number
}

const WhatsAppCTA = ({
  hours = 3,
  price = 35000
}: Props) => {

  const COMPANY_WHATSAPP = "919266037002"

  const sendWhatsAppBookingMessage = () => {

    const message =
      `Hello! I am interested in booking the *Mirror Photo Booth*.\n\n` +
      `Selected Duration: ${hours} Hours\n` +
      `Total Price: ₹${price.toLocaleString()}\n\n` +
      `Please share availability and booking details.`

    const url =
      `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  return (
    <button
      onClick={sendWhatsAppBookingMessage}
      className="w-full px-6 py-4 rounded-xl bg-linear-to-r from-purple-500 to-fuchsia-500 text-white font-bold hover:scale-[1.02] transition-all"
    >
      Book Mirror Booth Now
    </button>
  )
}

export default WhatsAppCTA