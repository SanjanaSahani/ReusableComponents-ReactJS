import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StandardImageList from './components/StandardImageList'
import QuiltedImageList from './components/QuiltedImageList'
import WovenImageList from './components/WovenImageList'
import MasonryImageList from './components/MasonryImageList'
import ImageListItemBar from './components/ImageListItemBar'

const images = [
  'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format&dpr=2',
  'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format&dpr=2',
];



function App() {

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-4  underline'>Images List</h1>

      <div className='m-8 '>
        <h1 className='text-center text-2xl'>Standard Images List</h1>
        <div className='flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 cursor-pointer'>
          <StandardImageList images={images} />
        </div>
      </div>


      <div className='m-8 '>
        <h1 className='text-center text-2xl'>Quilted Images List</h1>
        <div className='flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 cursor-pointer'>
          <QuiltedImageList images={images} />
        </div>
      </div>

      <div className='m-8 '>
        <h1 className='text-center text-2xl'>Woven Images List</h1>
        <div className='flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 cursor-pointer'>
          <WovenImageList images={images} />
        </div>
      </div>

      
      <div className='m-8 '>
        <h1 className='text-center text-2xl'>Masonry Images List</h1>
        <div className='flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 cursor-pointer'>
          <MasonryImageList images={images} />
        </div>
      </div>

      
      <div className='m-8 '>
        <h1 className='text-center text-2xl'>ImageList With Title Bars</h1>
        <div className='flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 cursor-pointer'>
          <ImageListItemBar images={images} />
        </div>
      </div>

    </>
  )
}

export default App
