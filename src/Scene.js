import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'

const Capsule = () => {
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    mesh.current.rotation.x = mesh.current.rotation.z += 0.005
  })

  return (
    <mesh ref={mesh}>
      <octahedronGeometry attach='geometry' args={[1, 3, 52]} />
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  )
}

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, -7, 2]} intensity={15} />
    </>
  )
}

const Scene = () => {
  return (
    <Canvas
      shadowMap
      camera={{
        position: [0, 5, 10],
        fov: 60,
      }}
    >
      <Lighting />
      <Capsule />
    </Canvas>
  )
}

export default Scene
