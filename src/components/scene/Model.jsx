import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Draco decoder files are located locally in /draco/
useGLTF.setDecoderPath('/draco/')

export function Model({ url, scale = 3.2, tilt = [0, 0, 0] }) {
  const { scene } = useGLTF(url)

  const obj = useMemo(() => {
    if (!scene) return new THREE.Group()

    const o = scene.clone(true)
    const b = new THREE.Box3().setFromObject(o)
    const s = b.getSize(new THREE.Vector3())
    const maxDim = Math.max(s.x, s.y, s.z, 0.0001)

    o.scale.setScalar(scale / maxDim)

    const b2 = new THREE.Box3().setFromObject(o)
    const c = b2.getCenter(new THREE.Vector3())
    o.position.set(-c.x, -b2.min.y, -c.z)

    o.traverse((m) => {
      if (m.isMesh) {
        m.castShadow = true
        m.receiveShadow = true
      }
    })

    return o
  }, [scene, scale])

  return (
    <group rotation={tilt}>
      <primitive object={obj} />
    </group>
  )
}
