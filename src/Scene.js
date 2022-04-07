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
    mesh.current.position.y = 500 - data.range(0, 1 / 8) * 509.35
    //rotates capsule
    mesh.current.rotation.y = data.range(1 / 8, 2 / 8) * 5
    // moves capsule away and rotates it
    mesh.current.position.y += data.range(1.5 / 8, 1 / 8) * 9
    mesh.current.rotation.x = data.range(1.5 / 8, 1 / 8) * 2
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
          height: '800vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
        className='textContainer'
      >
        <p className='pageOne'>Designed By Ballos</p>
        <p className='pageTwo'>
          <span className='spanTwo'>Mind</span>
          Is A Powerful Tool
        </p>
        <div className='pageThreeDiv'>
          <p className='pageThree'>
            <span className='spanThree'>Broken</span>
            Enhanced
          </p>
        </div>
        <p className='pageFour'>Altered</p>
        <p className='pageFive'>This is the fifth page</p>
        <p className='pageSix'>This is the sixth page</p>
        <p className='pageSeven'>This is the seventh page</p>
        <p className='pageEight'>This is the eigth page</p>
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
      <ScrollControls pages={8}>
        <Capsule />
        <HtmlText />
      </ScrollControls>
    </Canvas>
  )
}

export default Scene
