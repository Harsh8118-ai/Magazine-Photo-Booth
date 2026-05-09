"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}

const GA_ID = "G-7L0PKPVM2S"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!window.gtag) return

    const url = searchParams.toString()
  ? `${pathname}?${searchParams.toString()}`
  : pathname

    window.gtag("config", GA_ID, {
      page_path: url,
    })
  }, [pathname, searchParams])

  return null
}