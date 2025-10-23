import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicModal from './components/BasicModal'

function App() {

  return (
    <>
      <h1 className='text-center text-3xl text-pink-700 underline'>Modal Component</h1>

     <div className='m-8 '>
        <h1 className='text-center text-2xl font-semibold'>Basic Modal Component</h1>
        <div className='h-[500px] flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 cursor-pointer'>
          <BasicModal title={"Modal Title"} text={"This is a basic modal component ."}/>
        </div>
      </div>

    </>
  )
}

export default App
