"use client"

import dynamic from "next/dynamic"

const MultiVideoReels = dynamic(
  () => import("@/components/multi-video-reels").then(m => m.MultiVideoReels),
  { ssr: false }
)

export default MultiVideoReels
