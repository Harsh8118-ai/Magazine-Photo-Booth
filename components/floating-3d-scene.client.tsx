"use client"

import dynamic from "next/dynamic"

const Floating3DScene = dynamic(
  () => import("@/components/floating-3d-scene").then(m => m.Floating3DScene),
  { ssr: false }
)

export default Floating3DScene
