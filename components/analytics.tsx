"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

const GA_ID = "G-7L0PKPVM2S"

export function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!window.gtag) return

    window.gtag("config", GA_ID, {
      page_path: pathname,
    })
  }, [pathname])

  return null
}
