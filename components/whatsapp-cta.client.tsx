"use client"

import dynamic from "next/dynamic"

const WhatsAppCTA = dynamic(
  () => import("./whatsapp-cta").then(m => m.WhatsAppCTA),
  { ssr: false }
)

export default WhatsAppCTA
