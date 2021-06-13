import React from 'react'
import { useGLTF } from '@react-three/drei'

const Model = ({ g }) => {
  return (
    <mesh geometry={g}>
      <meshStandardMaterial />
    </mesh>
  )
}

const Models = (props) => {
  const { nodes: nodes1 } = useGLTF('/models/abstract1.glb')
  const { nodes: nodes2 } = useGLTF('/models/abstract2.glb')
  const { nodes: nodes3 } = useGLTF('/models/abstract3.glb')
  const { nodes: nodes4 } = useGLTF('/models/abstract4.glb')
  const { nodes: nodes5 } = useGLTF('/models/abstract5.glb')
  const { nodes: nodes6 } = useGLTF('/models/abstract6.glb')
  const { nodes: nodes7 } = useGLTF('/models/abstract7.glb')
  const { nodes: nodes8 } = useGLTF('/models/abstract8.glb')
  const { nodes: nodes9 } = useGLTF('/models/abstract9.glb')
  const { nodes: nodes10 } = useGLTF('/models/abstract10.glb')
  const { nodes: nodes11 } = useGLTF('/models/abstract11.glb')

  return (
    <>
      <Model g={nodes1.mesh_0.geometry} />
      <Model g={nodes2.mesh_0.geometry} />
      <Model g={nodes3.mesh_0.geometry} />
      <Model g={nodes4.mesh_0.geometry} />
      <Model g={nodes5.mesh_0.geometry} />
      <Model g={nodes6.mesh_0.geometry} />
      <Model g={nodes7.mesh_0.geometry} />
      <Model g={nodes8.mesh_0.geometry} />
      <Model g={nodes9.mesh_0.geometry} />
      <Model g={nodes10.mesh_0.geometry} />
      <Model g={nodes11.mesh_0.geometry} />
    </>
  )
}

useGLTF.preload('/models/abstract1.glb')
useGLTF.preload('/models/abstract2.glb')
useGLTF.preload('/models/abstract3.glb')
useGLTF.preload('/models/abstract4.glb')
useGLTF.preload('/models/abstract5.glb')
useGLTF.preload('/models/abstract6.glb')
useGLTF.preload('/models/abstract7.glb')
useGLTF.preload('/models/abstract8.glb')
useGLTF.preload('/models/abstract9.glb')
useGLTF.preload('/models/abstract10.glb')
useGLTF.preload('/models/abstract11.glb')

export default Models
