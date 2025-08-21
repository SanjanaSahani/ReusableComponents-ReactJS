import { useState } from 'react'
import './App.css'
import MediaCard from './components/MediaCard'

function App() {

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-4  underline'>Reusable Card Components</h1>

      <div>
        <h1 className='text-center text-2xl'>Media Card</h1>
        <p className='text-center text-gray-400'>Example of a card using an image to reinforce the content.</p>
        <MediaCard />
      </div>
    </>
  )
}

export default App
