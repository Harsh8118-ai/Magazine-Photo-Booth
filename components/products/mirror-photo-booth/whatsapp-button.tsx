type Props = {
  hours?: number
  price?: number
}

const COMPANY_WHATSAPP = "919266037002"

const WhatsAppCTA = ({
  hours = 3,
  price = 35000,
}: Props) => {
  const message =
    `Hello! I am interested in booking the *Mirror Photo Booth*.\n\n` +
    `Selected Duration: ${hours} Hours\n` +
    `Total Price: ₹${price.toLocaleString("en-IN")}\n\n` +
    `Please share availability and booking details.`

  const whatsappUrl =
    `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center px-6 py-4 rounded-xl bg-linear-to-r from-purple-500 to-fuchsia-500 text-white font-bold hover:scale-[1.02] transition-all"
    >
      Book Mirror Booth Now
    </a>
  )
}

export default WhatsAppCTA