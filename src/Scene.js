import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useScroll, ScrollControls, Scroll, Text } from '@react-three/drei'
import { useSpring, a } from 'react-spring'

const Capsule = () => {
  const mesh = useRef()
  const data = useScroll()
  /** 
  const {
    key(limit): value (func)
*/

  useFrame(() => {
    console.log(data.scroll.current)
    // starting position
    mesh.current.position.y = 500
    // pulls capsule towards camera
    mesh.current.position.y = 500 - data.range(0, 1 / 4) * 509.35
    //rotates capsule
    mesh.current.rotation.y = data.range(2 / 4, 2 / 2) * 10
  })

  return (
    <mesh ref={mesh}>
      <capsuleGeometry attach='geometry' args={[1, 3, 5]} />
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
    <Scroll className='scrollArea' html>
      <div
        style={{
          height: '400vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        className='textContainer'
      >
        <p className='pageOne'>Designed By Ballos</p>
        <p className='pageTwo'>Perception Is Everything</p>
        <p className='pageThree'>This is the third page</p>
        <p className='pageFour'>This is the fourth page</p>
      </div>
    </Scroll>
  )
}

const Scene = () => {
  return (
    <Canvas
      camera={{
        position: [0, -15, 0],
        fov: 60,
      }}
    >
      <Lighting />
      <gridHelper />
      <ScrollControls pages={4}>
        <Capsule />
        <HtmlText />
      </ScrollControls>
    </Canvas>
  )
}

export default Scene
