import React from 'react'

function MediaCard() {
  return (
    <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
      <div className='h-auto max-w-[345px] bg-white rounded-b-md'>
        <img className='rounded-t-md h-[140px] w-[345px]' src="https://w0.peakpx.com/wallpaper/162/188/HD-wallpaper-iguana-green-rare-gallery.jpg" alt="lizard" />
        <div className='pt-4 pb-2 px-4'>
          <h1 className='text-black text-2xl'>Lizard</h1>
          <p className='text-gray-500 my-1.5 text-sm'>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</p>
          </div>
          <div className='mx-2 mb-2 flex gap-8 text-blue-500'>
            <button type='button' className='text-sm font-semibold hover:bg-gray-50 rounded-md py-2 px-2 cursor-pointer' >SHARE</button>
            <button type="button" className='text-sm font-semibold  hover:bg-gray-50 rounded-md py-2 cursor-pointer px-2'>LEARN MORE</button>
          </div>
        
      </div>
    </div> 
  )
}

export default MediaCard