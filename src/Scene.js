import { useRef } from 'react'
import { Canvas, useFrame, gridHelper } from '@react-three/fiber'
import { useScroll, ScrollControls, Scroll } from '@react-three/drei'

const Capsule = () => {
  const mesh = useRef()
  const data = useScroll()
  useFrame(() => {
    mesh.current.position.y = data.range(0, 1 / 3) * 1
  })

  return (
    <mesh ref={mesh}>
      <capsuleGeometry attach='geometry' args={[1, 3, 32]} />
      <meshLambertMaterial wireframe attach='material' color='white' />
    </mesh>
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
      <div
        style={{
          height: '300vh',
          width: '100vw',
          display: 'flex',
          alignSelf: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
        className='textContainer'
      >
        <p className='pageOne'>This is the first page</p>
        <p className='pageTwo'>This is the second page</p>
      </div>
    </Scroll>
  )
}

const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, 5, 10],
        fov: 60,
      }}
    >
      <Lighting />
      <gridHelper />
      <ScrollControls pages={3}>
        <Capsule />
        <HtmlText />
      </ScrollControls>
    </Canvas>
  )
}

export default Scene
