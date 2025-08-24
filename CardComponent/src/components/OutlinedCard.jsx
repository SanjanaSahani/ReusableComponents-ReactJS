import React from 'react'

function OutlinedCard({ text1, text2, paragraph1, paragraph2, paragraph3 }) {
    return (
        <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
            <div className='h-auto w-[305px] bg-white rounded-md shadow-md border-[1px] border-gray-200'>
                <div className='pt-4 pb-2 px-4'>
                    <h4 className='text-gray-400'>{text1}</h4>
                    <h1 className='text-black text-2xl pt-2'>{text2}</h1>
                    <p className='text-gray-500 my-1.5'>{paragraph1}</p>
                  <div className='pt-2'>
                      <p className='text-black'>{paragraph2}</p>
                    <p className='text-black'>{paragraph3}</p>
                  </div>
                </div>
                <div className='mx-2 mb-2 flex gap-8 text-blue-500'>
                    <button type="button" className='text-sm font-semibold  hover:bg-gray-50 rounded-md py-2 cursor-pointer px-2'>LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default OutlinedCard