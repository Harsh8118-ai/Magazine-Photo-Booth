"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function FloatingImage({
  position,
  rotation,
  scale,
  delay = 0,
  imageUrl = "/magazine-cover-template.png", // Added imageUrl prop with default
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  delay?: number
  imageUrl?: string // Added imageUrl prop type
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
    const loader = new THREE.TextureLoader()
    const imageTexture = loader.load(imageUrl)
    imageTexture.flipY = false // Prevent image from being flipped
    return imageTexture
  }, [imageUrl])

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1.33]} />
      <meshBasicMaterial map={texture} transparent opacity={0.4} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <FloatingImage
        position={[-3, 2, -2]}
        rotation={[0.1, 0.3, 0]}
        scale={0.8}
        delay={0}
        imageUrl="https://res.cloudinary.com/dpnykjono/image/upload/v1765974415/Floating-Booth_pap8vz.webp"
      />
      <FloatingImage
        position={[3, -1, -3]}
        rotation={[-0.1, -0.2, 0.1]}
        scale={0.6}
        delay={2}
        imageUrl="https://res.cloudinary.com/dpnykjono/image/upload/v1765974415/Floating-Booth_pap8vz.webp"
      />
      <FloatingImage
        position={[0, 3, -4]}
        rotation={[0.2, 0, -0.1]}
        scale={0.7}
        delay={4}
        imageUrl="https://res.cloudinary.com/dpnykjono/image/upload/v1765974415/Floating-Booth_pap8vz.webp"
      />
      <FloatingImage
        position={[-2, -2, -1]}
        rotation={[0, 0.5, 0.05]}
        scale={0.5}
        delay={1}
        imageUrl="https://res.cloudinary.com/dpnykjono/image/upload/v1765974415/Floating-Booth_pap8vz.webp"
      />
      <FloatingImage
        position={[2.5, 1, -2.5]}
        rotation={[-0.05, -0.4, 0]}
        scale={0.9}
        delay={3}
        imageUrl="https://res.cloudinary.com/dpnykjono/image/upload/v1765974415/Floating-Booth_pap8vz.webp"
      />
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
