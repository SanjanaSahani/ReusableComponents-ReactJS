import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";


function CTAButton({text}) {
  return (
         <div className='flex justify-center flex-wrap gap-10 cursor-pointer'>
        <button className='px-4 py-2 rounded-md font-sm bg-gray-100 text-black hover:bg-gray-200 flex' type="button">{text} <span className='py-1 pl-2'><FaCartShopping /></span></button>

       
        <button className='px-4 py-2 rounded-md font-sm  text-green-500 hover:bg-green-100 hover:text-green-800 border-green-500 border-2 flex' type="button">{text} <span className='py-1 pl-2'><FaCartShopping /></span></button>

        <button className='px-4 py-2 rounded-md font-sm bg-blue-400 text-white hover:bg-blue-200 hover:text-white flex' type="button">{text} <span className='py-1 pl-2'><FaCartShopping /></span></button>

        <button className='px-4 py-2 rounded-full font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2 flex' type="button">{text} <span className='py-1 pl-2'><FaLongArrowAltRight /></span></button>

        <button className='px-4 py-2 rounded-full font-sm bg-green-400 text-white hover:bg-green-200 hover:text-white flex' type="button">{text} <span className='py-1 pl-2'><FaLongArrowAltRight /></span></button>

       
        <button className='px-4 py-2  font-sm bg-gray-100 text-black hover:bg-gray-200 flex' type="button">{text} <span className='py-1 pl-2'><FaLongArrowAltRight /></span></button>

        <button className='px-4 py-2 font-sm bg-black text-white hover:bg-gray-100 hover:text-black hover:border-black hover:border-2 flex' type="button">{text} <span className='py-1 pl-2'><IoBagHandleSharp /></span></button>

       
        <button className='px-4 py-2 font-sm  text-purple-400 hover:bg-purple-100 hover:text-purple-800 border-purple-500 border-2 flex' type="button">{text} <span className='py-1 pl-2'><IoBagHandleSharp /></span></button>
      </div>
  )
}

export default CTAButton