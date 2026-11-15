import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Loader } from '@react-three/drei'
import { BODIES } from '../../data'
import { Ground } from './Ground'
import { Model } from './Model'
import { HudOverlay } from './HudOverlay'
import { ErrorBoundary } from '../common/ErrorBoundary'

export function SceneCanvas({ chapter }) {
  const currentChapter = chapter || {}
  const body = BODIES[currentChapter.body || 'mars'] || BODIES.mars

  return (
    <aside className="stage">
      <ErrorBoundary
        fallback={(error, reset) => (
          <div className="stage-error-fallback">
            <p>Unable to load 3D visualizer: {error?.message || 'WebGL Error'}</p>
            <button onClick={reset}>Retry 3D View</button>
          </div>
        )}
      >
        <Canvas shadows dpr={[1, 2]} camera={{ position: [7, 3.5, 9], fov: 45, near: 0.05, far: 3000 }} gl={{ antialias: true }}>
          <color attach="background" args={['#000000']} />
          <Stars radius={900} depth={200} count={6000} factor={7} fade speed={0.3} />
          {/* Natural sunlight only */}
          <ambientLight intensity={body?.ambient ?? 0.12} />
          <directionalLight
            position={[30, 22, 18]}
            intensity={body?.sun ?? 3.2}
            castShadow
            shadow-mapSize={[4096, 4096]}
            shadow-bias={-0.0004}
            shadow-normalBias={0.03}
            shadow-camera-left={-14}
            shadow-camera-right={14}
            shadow-camera-top={14}
            shadow-camera-bottom={-14}
            shadow-camera-near={1}
            shadow-camera-far={120}
          />
          <Suspense fallback={null}>
            <group key={currentChapter.id || 'default'}>
              <Ground body={body} lat={currentChapter.lat} lon={currentChapter.lon} />
              {currentChapter.model && (
                <Model url={currentChapter.model} scale={currentChapter.scale} tilt={currentChapter.tilt} />
              )}
            </group>
          </Suspense>
          <OrbitControls
            target={[0, 1, 0]}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            minDistance={3}
            maxDistance={300}
            maxPolarAngle={Math.PI / 2.02}
          />
        </Canvas>
        <HudOverlay name={currentChapter.name} coords={currentChapter.coords} />
        <Loader />
      </ErrorBoundary>
    </aside>
  )
}