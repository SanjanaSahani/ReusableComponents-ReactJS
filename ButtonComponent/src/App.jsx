import { useState } from 'react'
import './App.css'
import TextButton from './components/TextButton'
import CTAButton from './components/CTAButton'
import GhostButton from './components/GhostButton'
import FilledButton from './components/FilledButton'
import ToggleButton from './components/ToggleButton'
import DropdownButton from './components/DropdownButton'

function App() {

  return (
    <>
      <h1 className='text-center text-3xl p-6 font-sans font-semibold text-cyan-700'>Reuasable Button Components</h1>

      <div className='text-center'>
        <h6 className='uppercase m-4 underline'>Text Button </h6>
        <TextButton text={"Button"} />
      </div>

      <div className='text-center'>
        <h6 className='uppercase m-4 underline'>CTA Button </h6>
        <CTAButton text={"Add To Cart"} />
      </div>

      <div className='text-center'>
        <h6 className='uppercase m-4 underline'>Ghost Button (Outline Button)</h6>
        <GhostButton text={"Sign Up"} />
      </div>

      <div className='text-center'>
        <h6 className='uppercase m-4 underline'>Filled Button</h6>
        <FilledButton text={"Create Account"} />
      </div>

      <div className='text-center'>
        <h6 className='uppercase m-4 underline'>Toggle Button</h6>
        <ToggleButton />
      </div>

     <div className='text-center'>
        <h6 className='uppercase m-4 underline'>Dropdown Button</h6>
        <DropdownButton />
      </div>

    </>
  )
}

export default App
