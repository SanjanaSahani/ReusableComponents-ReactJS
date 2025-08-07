import React from 'react'

function TextButton({ text }) {
  return (
    <>
      <div className='flex justify-center gap-10 cursor-pointer'>
        <button className='px-4 py-2 rounded-md font-sm bg-gray-100 text-black hover:bg-gray-200 ' type="button">{text}</button>

        <button className='px-4 py-2 rounded-md font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2' type="button">{text}</button>

        <button className='px-4 py-2font-sm  text-green-500 hover:bg-green-100' type="button">{text}</button>

        <button className='px-4 py-2 rounded-md font-sm bg-blue-400 text-white hover:bg-blue-200 hover:text-white ' type="button">{text}</button>

        <button className='px-4 py-2 rounded-full font-sm bg-gray-100 text-black hover:bg-gray-200 ' type="button">{text}</button>

        <button className='px-4 py-2 rounded-full font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2' type="button">{text}</button>

        <button className='px-4 py-2 rounded-full font-sm bg-green-400 text-white hover:bg-green-200 hover:text-white ' type="button">{text}</button>

        <button className='px-4 py-2 rounded-full font-sm  text-orange-400 hover:bg-orange-100 ' type="button">{text}</button>

        <button className='px-4 py-2  font-sm bg-gray-100 text-black hover:bg-gray-200 ' type="button">{text}</button>

        <button className='px-4 py-2 font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2' type="button">{text}</button>

        <button className='px-4 py-2  font-sm bg-blue-400 text-white hover:bg-blue-200 hover:text-white ' type="button">{text}</button>

        <button className='px-4 py-2 font-sm  text-purple-400 hover:bg-purple-100 ' type="button">{text}</button>
      </div>
    </>
  )
}

export default TextButton