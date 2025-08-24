import { useState } from 'react'
import './App.css'
import MediaCard from './components/MediaCard'
import OutlinedCard from './components/OutlinedCard'

function App() {

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-4  underline'>Reusable Card Components</h1>

      <div className='m-8'>
        <h1 className='text-center text-2xl'>Outlined Card</h1>
        <OutlinedCard text1={"Word of the Day"} text2={"be•nev•o•lent"} paragraph1={"adjective"} paragraph2={"well meaning and kindly."} paragraph3={"a benevolent smile"}/>
      </div>

      <div className='m-8'>
        <h1 className='text-center text-2xl'>Media Card</h1>
        <MediaCard img={"https://w0.peakpx.com/wallpaper/162/188/HD-wallpaper-iguana-green-rare-gallery.jpg"} text={"Lizard"} paragraph={"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"} />
      </div>



    </>
  )
}

export default App
