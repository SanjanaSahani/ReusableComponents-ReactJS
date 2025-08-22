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
        <MediaCard img={"https://w0.peakpx.com/wallpaper/162/188/HD-wallpaper-iguana-green-rare-gallery.jpg"} text={"Lizard"} paragraph={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"} />
      </div>
    </>
  )
}

export default App
