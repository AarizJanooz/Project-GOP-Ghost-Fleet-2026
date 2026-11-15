import { SceneCanvas } from './components/scene/SceneCanvas'

// Backwards-compatible export of the 3D Scene canvas
export default function Scene({ chapter }) {
  return <SceneCanvas chapter={chapter} />
}
