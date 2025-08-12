import React from 'react'

function GhostButton({ text }) {
  return (
    <div className='flex justify-center flex-wrap gap-10 cursor-pointer'>
      <button className='px-4 py-2 rounded-md font-sm  text-green-500 hover:bg-green-100 hover:text-green-800 border-green-500 border-2' type="button">{text}</button>

      <button className='px-4 py-2 rounded-md font-sm  text-orange-500 hover:bg-orange-100 hover:text-orange-800 border-orange-500 border-2' type="button">{text = "Create Account"}</button>

      <button className='px-4 py-2 rounded-md font-sm  text-purple-500 hover:bg-purple-100 hover:text-purple-800 border-purple-500 border-2' type="button">{text = "Login"}</button>

      <button className='px-4 py-2  font-sm  text-orange-500  hover:text-orange-800' type="button">{text = "Use Email, Instead"}</button>

      <button className='px-4 py-2  font-sm  text-blue-500  hover:text-blue-800 flex' type="button">{text = "Already have an account?"}<span className='text-blue-950 pl-2'>Login</span></button>
      <button className='px-4 py-2  font-sm  text-gray-500  hover:text-gray-800 flex' type="button">{text = "Don't have an account?"}<span className='text-blue-400 pl-2'>Sign Up</span></button>

    </div>
  )
}

export default GhostButton