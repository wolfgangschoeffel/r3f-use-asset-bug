import { useProgress } from '@react-three/drei'
import React from 'react'

export default function Loader(props) {
  const { progress } = useProgress()

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: 'black',
        zIndex: 10000,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif'
      }}>
      {progress}
    </div>
  )
}
