import React from 'react'

function MediaCard({ text, paragraph, img }) {
  return (
    <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
      <div className='h-auto max-w-[345px] bg-white rounded-b-md shadow-md'>
        <img className='rounded-t-md h-[140px] w-[345px]' src={img} alt={text || "Media Image"} />
        <div className='pt-4 pb-2 px-4'>
          <h1 className='text-black text-2xl'>{text}</h1>
          <p className='text-gray-500 my-1.5 text-sm'>{paragraph}</p>
        </div>
        <div className='mx-2 mb-2 flex gap-8 text-blue-500'>
          <button type='button' className='text-sm font-semibold hover:bg-gray-50 rounded-md py-2 px-2 cursor-pointer' >SHARE</button>
          <button type="button" className='text-sm font-semibold  hover:bg-gray-50 rounded-md py-2 cursor-pointer px-2'>LEARN MORE</button>
        </div>
      </div>

 <div className='h-auto max-w-[345px] bg-white rounded-b-md shadow-md'>
                <img className='rounded-t-md h-[140px] w-[345px]' src={img} alt={text || "Media Image"} />
                <div className='pt-4 pb-2 px-4'>
                    <h1 className='text-black text-2xl'>{text}</h1>
                    <p className='text-gray-500 my-1.5 text-sm'>{paragraph}</p>
                </div>
                <div className='mx-2 mb-2 flex gap-8 text-blue-500'>
                    <button type='button' className='text-sm font-semibold hover:bg-gray-50 rounded-md py-2 px-2 cursor-pointer' >SHARE</button>
                </div>
            </div>

    </div>
  )
}

export default MediaCard
