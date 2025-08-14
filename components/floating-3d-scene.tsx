"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function FloatingMagazine({
  position,
  rotation,
  scale,
  delay = 0,
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  delay?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() + delay
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.3
      meshRef.current.rotation.y = rotation[1] + Math.sin(time * 0.3) * 0.1
      meshRef.current.rotation.x = rotation[0] + Math.cos(time * 0.4) * 0.05
    }
  })

  const texture = useMemo(() => {
    const canvas = document.createElement("canvas")
    canvas.width = 256
    canvas.height = 340
    const ctx = canvas.getContext("2d")!

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 256, 340)
    gradient.addColorStop(0, "#8b5cf6")
    gradient.addColorStop(0.5, "#3b82f6")
    gradient.addColorStop(1, "#1e40af")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 256, 340)

    // Add magazine text
    ctx.fillStyle = "#ffffff"
    ctx.font = "bold 24px Arial"
    ctx.textAlign = "center"
    ctx.fillText("LUXURY", 128, 50)
    ctx.font = "16px Arial"
    ctx.fillText("MAGAZINE", 128, 75)

    // Add decorative elements
    ctx.fillStyle = "#fbbf24"
    ctx.fillRect(20, 100, 216, 2)
    ctx.fillRect(20, 250, 216, 2)

    return new THREE.CanvasTexture(canvas)
  }, [])

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1.33]} />
      <meshBasicMaterial map={texture} transparent opacity={0.3} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <FloatingMagazine position={[-3, 2, -2]} rotation={[0.1, 0.3, 0]} scale={0.8} delay={0} />
      <FloatingMagazine position={[3, -1, -3]} rotation={[-0.1, -0.2, 0.1]} scale={0.6} delay={2} />
      <FloatingMagazine position={[0, 3, -4]} rotation={[0.2, 0, -0.1]} scale={0.7} delay={4} />
      <FloatingMagazine position={[-2, -2, -1]} rotation={[0, 0.5, 0.05]} scale={0.5} delay={1} />
      <FloatingMagazine position={[2.5, 1, -2.5]} rotation={[-0.05, -0.4, 0]} scale={0.9} delay={3} />
    </>
  )
}

export function Floating3DScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
      >
        <Scene />
      </Canvas>
    </div>
  )
}
