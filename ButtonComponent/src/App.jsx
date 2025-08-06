import { useState } from 'react'
import './App.css'
import TextButton from './components/TextButton'
import CTAButton from './components/CTAButton'

function App() {

  return (
    <>
     <h1 className='text-center text-3xl p-6 font-sans font-semibold text-cyan-700'>Reuasable Button Components</h1>

     <div className='text-center'>
      <TextButton text={"Button"}/>
     </div>

     <div className='text-center'>
      <CTAButton/>
     </div>


    </>
  )
}

export default App
