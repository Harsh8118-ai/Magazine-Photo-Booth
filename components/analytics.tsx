"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    const url = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname

    window.dataLayer.push({
      event: "pageview",
      page: url,
    })
  }, [pathname, searchParams])

  return null
}