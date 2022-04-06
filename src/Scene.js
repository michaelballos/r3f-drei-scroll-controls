import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useScroll, ScrollControls, Scroll } from '@react-three/drei'
import { useSpring, a } from 'react-spring'

const Capsule = () => {
  const mesh = useRef()
  const data = useScroll()
  const [positionY, setPositionY] = useState(200)
  const [scroll, setScroll] = useState(0)
  const [rotationZ, setRotationZ] = useState(0)

  useFrame(() => {
    // set position y state as 200
    setPositionY((mesh.current.position.y = positionY))
    // set data scroll position
    setScroll(data.scroll.current + scroll)

    if (scroll > 0) {
      mesh.current.position.y = positionY - data.scroll.current * 635
    }
    if (data.scroll.current > 1) {
      mesh.current.rotation.z = data.scroll.current * 635
    }
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
    <Scroll html>
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
        <p className='pageOne'>This is the first page</p>
        <p className='pageTwo'>This is the second page</p>
        <p className='pageTwo'>This is the third page</p>
        <p className='pageTwo'>This is the fourth page</p>
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
