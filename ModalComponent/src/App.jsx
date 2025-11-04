import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicModal from './components/BasicModal'
import NestedModal from './components/NestedModal'
import ModalWithTransition from './components/ModalWithTransition'

function App() {

  return (
    <>
      <h1 className='text-center text-3xl text-pink-700 underline'>Modal Component</h1>

      <div className='m-8 '>
        <h1 className='text-center text-2xl font-semibold'>Basic Modal Component</h1>
        <div className='h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 '>
          <BasicModal title={"Modal Title"} text={"This is a basic modal component ."} />
        </div>
      </div>

      <div className='m-8 '>
        <h1 className='text-center text-2xl font-semibold'>Nested Modal Component</h1>
        <div className='h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 '>
          <NestedModal outertitle={"Modal Title"} outertext={"This is a basic modal component ."} NestedButton={"Open Nested Modal"} innertitle={"Nested Modal"} innerText={"This is a modal inside another modal."} />
        </div>
      </div>

      <div className='m-8 '>
        <h1 className='text-center text-2xl font-semibold'>Transition Modal Component</h1>
        <div className='h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 '>
          <ModalWithTransition title={"Animated Modal"} text={"This modal fades and scales in with smooth transitions."} />
        </div>
      </div>
    </>
  )
}

export default App
