import React from 'react'

function FilledButton({ text }) {
  return (
    <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-white to-blue-100 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
      <button className='px-4 py-2 rounded-md font-sm bg-gray-100 text-black hover:bg-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105' type="button">{text}</button>

      <button className='px-4 py-2 rounded-md font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105' type="button">{text}</button>
      
      <button className='px-4 py-2 rounded-full font-sm bg-green-400 text-white hover:bg-green-200 hover:text-white shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105' type="button">{text}</button>

      <button className='px-4 py-2 font-sm bg-gray-100 text-black hover:bg-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105' type="button">{text}</button>

      <button className='px-4 py-2 font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105' type="button">{text}</button>

      <button className='px-4 py-2 font-sm bg-blue-400 text-white hover:bg-blue-200 hover:text-white shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-105' type="button">{text}</button>
    </div>
  )
}

export default FilledButton
