import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import Models from './Models'
import './styles.css'
import Loader from './Loader'

ReactDOM.render(
  <Canvas camera={{ position: [0, 1, 10], fov: 35, near: 0.1, far: 1000 }}>
    <pointLight castShadow position={[-1, 3, -1]} />
    <Suspense
      fallback={
        <Html
          fullscreen={true}
          calculatePosition={(el, camera, size) => {
            return [size.width / 2, size.height / 2]
          }}>
          <Loader />
        </Html>
      }>
      <Models />
    </Suspense>
    <OrbitControls />
  </Canvas>,
  document.getElementById('root')
)
