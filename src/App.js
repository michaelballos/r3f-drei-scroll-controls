import './App.css'
import Scene from './Scene'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { GLTFLoader, useGLTF, useAnimations } from '@react-three/drei'

function App() {
  return (
    <div className='App'>
      <Scene />
    </div>
  )
}

export default App
