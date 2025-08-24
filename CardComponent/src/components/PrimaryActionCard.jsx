import React from 'react'

function PrimaryActionCard({ img, text, paragraph }) {
    return (
        <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
            <div className='h-auto max-w-[345px] bg-white rounded-b-md shadow-md'>
                <img className='rounded-t-md h-[140px] w-[345px]' src={img} alt={text || "Media Image"} />
                <div className='pt-4 pb-2 px-4'>
                    <h1 className='text-black text-2xl'>{text}</h1>
                    <p className='text-gray-500 my-1.5 text-sm'>{paragraph}</p>
                </div>
            </div>
        </div>
    )
}

export default PrimaryActionCard