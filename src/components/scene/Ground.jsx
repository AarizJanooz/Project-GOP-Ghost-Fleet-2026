import { useMemo } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

export const PLANET_RADIUS = 60
const D = Math.PI / 180

// Rotates the planet so the chosen latitude/longitude sits at the top, under the spacecraft
function surfaceQuaternion(lat, lon) {
  const theta = (90 - lat) * D
  const phi = (lon + 180) * D
  const n = new THREE.Vector3(
    -Math.cos(phi) * Math.sin(theta),
    Math.cos(theta),
    Math.sin(phi) * Math.sin(theta)
  )
  return new THREE.Quaternion().setFromUnitVectors(n, new THREE.Vector3(0, 1, 0))
}

export function Ground({ body, lat = 0, lon = 0 }) {
  const tex = useTexture(body?.map || '/textures/mars.jpg')
  const q = useMemo(() => surfaceQuaternion(lat, lon), [lat, lon])

  useMemo(() => {
    if (!tex) return
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 16
  }, [tex])

  return (
    <mesh quaternion={q} position={[0, -PLANET_RADIUS, 0]} receiveShadow>
      <sphereGeometry args={[PLANET_RADIUS, 256, 128]} />
      <meshStandardMaterial map={tex} bumpMap={tex} bumpScale={0.8} roughness={1} metalness={0} />
    </mesh>
  )
}