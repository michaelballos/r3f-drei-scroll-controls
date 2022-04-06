import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useScroll, ScrollControls, Scroll } from '@react-three/drei'

const Capsule = () => {
  const mesh = useRef()

  return (
    <Scroll>
      <mesh ref={mesh}>
        <capsuleGeometry attach='geometry' args={[1, 3, 32]} />
        <meshLambertMaterial wireframe attach='material' color='white' />
      </mesh>
    </Scroll>
  )
}

const Lighting = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, -3, 4]} intensity={0.5} />
    </>
  )
}

const HtmlText = () => {
  return (
    <Scroll html>
      <div className='textContainer'>
        <p className='pageOne'>This is the first page</p>
        <p className='pageTwo'>This is the second page</p>
      </div>
    </Scroll>
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
      <ScrollControls pages={2}>
        <HtmlText />
      </ScrollControls>
    </Canvas>
  )
}

export default Scene
