import React from 'react'

function PlusButton() {
  return (
     <div className="min-h-[300px] bg-gray-100 relative overflow-hidden">
      {/* 1) Classic Circle Plus - Bottom Right */}
      <button
        aria-label="Add"
        className="absolute bottom-6 right-6 flex items-center justify-center h-14 w-14 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/30 ring-1 ring-indigo-700/30 transition hover:scale-105 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        <span className="relative flex items-center justify-center">
          <span className="absolute h-6 w-[3px] bg-white rounded"></span>
          <span className="absolute w-6 h-[3px] bg-white rounded"></span>
        </span>
      </button>

      {/* 2) Extended Pill Plus - Bottom Center */}
      <button
        aria-label="Create"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-3.5 shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-700/30 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <span className="relative flex items-center justify-center h-5 w-5">
          <span className="absolute h-5 w-[2px] bg-white rounded"></span>
          <span className="absolute w-5 h-[2px] bg-white rounded"></span>
        </span>
        <span className="text-white font-medium">Create</span>
      </button>

      {/* 3) Square Rounded Plus - Bottom Left */}
      <button
        aria-label="Add"
        className="absolute bottom-6 left-6 flex items-center justify-center h-14 w-14 rounded-xl bg-pink-600 shadow-lg shadow-pink-600/30 ring-1 ring-pink-700/30 transition hover:rotate-6 hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300"
      >
        <span className="relative flex items-center justify-center">
          <span className="absolute h-6 w-[3px] bg-white rounded"></span>
          <span className="absolute w-6 h-[3px] bg-white rounded"></span>
        </span>
      </button>

      {/* 4) Glow Floating Circle Plus - Top Right */}
      <button
        aria-label="Add"
        className="absolute top-6 right-6 flex items-center justify-center h-14 w-14 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/40 ring-1 ring-yellow-600/30 transition hover:scale-110 hover:shadow-yellow-500/60 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        <span className="relative flex items-center justify-center">
          <span className="absolute h-6 w-[3px] bg-white rounded"></span>
          <span className="absolute w-6 h-[3px] bg-white rounded"></span>
        </span>
      </button>
    </div>
  )
}

export default PlusButton