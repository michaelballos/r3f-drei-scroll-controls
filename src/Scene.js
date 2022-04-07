import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  useScroll,
  useAnimations,
  useGLTF,
  ScrollControls,
  Scroll,
  GLTFLoader,
  UseLoader,
  OrbitControls,
} from '@react-three/drei'
import Model from './Model'

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
    mesh.current.position.y = 500 - data.range(0, 0.5 / 8) * 509.35
    // rotates capsule y
    mesh.current.rotation.y = data.range(0.5 / 8, 5 / 8) * 19
    // moves capsule away and starts z rotate
    mesh.current.position.y += data.range(1.5 / 8, 1 / 8) * 7
    mesh.current.rotation.x = data.range(1.5 / 8, 1 / 8) * 5
    mesh.current.rotation.z = data.range(2 / 8, 2 / 8) * 22
    // move capsule down, towards, and out of view
    mesh.current.position.z = -data.range(4 / 8, 2 / 8) * 35
    mesh.current.position.y -= data.range(4 / 8, 1 / 8) * 35
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
      <ambientLight intensity={0.05} />
      <pointLight position={[0, -30, -1]} intensity={0.5} />
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
      <ScrollControls pages={8}>
        <Capsule />
        <HtmlText />
      </ScrollControls>
    </Canvas>
  )
}

export default Scene
