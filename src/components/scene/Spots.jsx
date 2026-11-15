import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function glowTexture(rgb) {
  const c = document.createElement('canvas')
  c.width = c.height = 256
  const g = c.getContext('2d')
  if (!g) return new THREE.CanvasTexture(c)

  const r = g.createRadialGradient(128, 128, 0, 128, 128, 128)
  r.addColorStop(0, `rgba(${rgb},0.95)`)
  r.addColorStop(0.35, `rgba(${rgb},0.45)`)
  r.addColorStop(0.7, `rgba(${rgb},0.12)`)
  r.addColorStop(1, `rgba(${rgb},0)`)
  g.fillStyle = r
  g.fillRect(0, 0, 256, 256)
  return new THREE.CanvasTexture(c)
}

// Circular, pulsing pools of light on the surface: [x, z, radius, palette_index]
const SPOTS = [
  [0, 0, 5.2, 0],
  [-9, 5, 3.4, 1],
  [8, -7, 4.2, 2],
  [11, 8, 2.8, 0],
  [-12, -9, 3.8, 1],
  [2, -13, 3, 2]
]

const DEFAULT_PALETTE = ['255,170,70', '56,189,248', '255,110,60']

export function Spots({ palette = DEFAULT_PALETTE }) {
  const safePalette = Array.isArray(palette) && palette.length >= 3 ? palette : DEFAULT_PALETTE
  const refs = useRef([])
  const tex = useMemo(() => safePalette.map(glowTexture), [safePalette])

  useFrame(({ clock }) => {
    refs.current.forEach((g, i) => {
      if (!g || !g.children || g.children.length < 3) return
      const p = 0.5 + 0.5 * Math.sin(clock.elapsedTime * 1.6 + i * 1.1)
      const [glow, ring, light] = g.children

      if (glow?.material) {
        glow.material.opacity = 0.55 + 0.45 * p
        glow.scale.setScalar(0.92 + 0.12 * p)
      }
      if (ring?.material) {
        ring.material.opacity = 0.25 + 0.5 * p
        ring.scale.setScalar(1 + 0.05 * p)
      }
      if (light) {
        light.intensity = (i === 0 ? 60 : 30) * (0.6 + 0.6 * p)
      }
    })
  })

  return SPOTS.map(([x, z, rad, pi], i) => {
    const spotColor = safePalette[pi] || safePalette[0]
    return (
      <group key={i} ref={(el) => (refs.current[i] = el)} position={[x, 0.07, z]} rotation={[0, 0, 0]}>
        <mesh rotation-x={-Math.PI / 2}>
          <circleGeometry args={[rad, 64]} />
          <meshBasicMaterial
            map={tex[pi] || tex[0]}
            transparent
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
        <mesh rotation-x={-Math.PI / 2} position-y={0.01}>
          <ringGeometry args={[rad * 0.92, rad * 0.97, 96]} />
          <meshBasicMaterial
            color={`rgb(${spotColor})`}
            transparent
            opacity={0.5}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
        <pointLight
          position={[0, 2.2, 0]}
          color={`rgb(${spotColor})`}
          distance={rad * 3.2}
          decay={2}
        />
      </group>
    )
  })
}
