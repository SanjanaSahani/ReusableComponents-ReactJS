import React from 'react'

function ToggleButton() {
    return (
        <div className="min-h-[300px] bg-gradient-to-r from-gray-50 via-white to-gray-100 flex justify-center flex-wrap gap-10 items-center p-8 cursor-pointer">
            
            <label className="inline-flex items-center mb-5 cursor-pointer hover:scale-105 transition-transform duration-200">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500 shadow-md"></div>
                <span className="ms-3 text-sm font-medium text-gray-800">Small toggle</span>
            </label>

            <label className="inline-flex items-center mb-5 cursor-pointer hover:scale-105 transition-transform duration-200">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 shadow-md"></div>
                <span className="ms-3 text-sm font-medium text-gray-800">Default toggle</span>
            </label>

            <label className="inline-flex items-center mb-5 cursor-pointer hover:scale-105 transition-transform duration-200">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-500 shadow-md"></div>
                <span className="ms-3 text-sm font-medium text-gray-800">Large toggle</span>
            </label>

        </div>
    )
}

export default ToggleButton
