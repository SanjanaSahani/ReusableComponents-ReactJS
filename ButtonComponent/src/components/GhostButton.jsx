import React from 'react'

function GhostButton({text}) {
  return (
    <div className='flex justify-center gap-10 cursor-pointer'>
          <button className='px-4 py-2 rounded-md font-sm  text-green-500 hover:bg-green-100 hover:text-green-800 border-green-500 border-2' type="button">{text}</button>
          
          <button className='px-4 py-2 rounded-md font-sm  text-orange-500 hover:bg-orange-100 hover:text-orange-800 border-orange-500 border-2' type="button">{text = "Create Account"}</button>

          <button className='px-4 py-2 rounded-md font-sm  text-purple-500 hover:bg-purple-100 hover:text-purple-800 border-purple-500 border-2' type="button">{text = "Login"}</button>
    </div>
  )
}

export default GhostButton