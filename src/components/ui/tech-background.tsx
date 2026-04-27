"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function Particles({ count = 5000 }) {
  const points = useRef<THREE.Points>(null!)
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const distance = 40
      const theta = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi)
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi)
      positions[i * 3 + 2] = distance * Math.cos(theta)
    }
    return positions
  }, [count])

  useFrame((state) => {
    const { clock } = state
    points.current.rotation.y = clock.getElapsedTime() * 0.05
    points.current.rotation.x = clock.getElapsedTime() * 0.02
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#8B0000"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Grid() {
  const gridRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    const { clock } = state
    gridRef.current.position.z = (clock.getElapsedTime() * 2) % 10
  })

  return (
    <group ref={gridRef}>
      <gridHelper args={[100, 50, "#8B0000", "#1a1a1a"]} position={[0, -10, 0]} rotation={[0, 0, 0]} />
      <gridHelper args={[100, 50, "#8B0000", "#1a1a1a"]} position={[0, -10, -100]} rotation={[0, 0, 0]} />
    </group>
  )
}

export function TechBackground() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617] pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,0,0,0.15),transparent_70%)]" />
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <Particles count={2000} />
        <Grid />
        <fog attach="fog" args={["#020617", 10, 50]} />
      </Canvas>
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
    </div>
  )
}
