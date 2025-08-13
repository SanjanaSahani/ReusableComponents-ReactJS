import React from 'react'

function TextButton({ text }) {
  return (
    <>
      <div className="min-h-[300px] bg-gray-100 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
        <button className='px-4 py-2 rounded-md font-sm bg-gray-100 text-black hover:bg-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 rounded-md font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 font-sm text-green-500 hover:bg-green-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 rounded-md font-sm bg-blue-400 text-white hover:bg-blue-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 rounded-full font-sm bg-gray-100 text-black hover:bg-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 rounded-full font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 rounded-full font-sm bg-green-400 text-white hover:bg-green-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 rounded-full font-sm text-orange-400 hover:bg-orange-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 font-sm bg-gray-100 text-black hover:bg-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 font-sm bg-blue-400 text-white hover:bg-blue-200 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>

        <button className='px-4 py-2 font-sm text-purple-400 hover:bg-purple-100 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105' type="button">{text}</button>
      </div>
    </>
  )
}

export default TextButton
