import React from 'react'

function HamburgerButton() {
  return (
    <div className="min-h-[300px] bg-gray-100 relative overflow-hidden">
      {/* 1) Simple 3-line Hamburger - Top Left */}
      <button
        aria-label="Menu"
        className="absolute top-6 left-6 flex flex-col justify-between w-8 h-6 group"
      >
        <span className="block h-[3px] w-full bg-gray-800 rounded transition group-hover:bg-indigo-600"></span>
        <span className="block h-[3px] w-full bg-gray-800 rounded transition group-hover:bg-indigo-600"></span>
        <span className="block h-[3px] w-full bg-gray-800 rounded transition group-hover:bg-indigo-600"></span>
      </button>

      {/* 2) Rounded Button with Hamburger - Top Center */}
      <button
        aria-label="Menu"
        className="absolute top-6 left-1/2 -translate-x-1/2 p-3 rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-700/30 hover:bg-emerald-500 transition"
      >
        <div className="flex flex-col justify-between w-6 h-4">
          <span className="block h-[2px] w-full bg-white rounded"></span>
          <span className="block h-[2px] w-full bg-white rounded"></span>
          <span className="block h-[2px] w-full bg-white rounded"></span>
        </div>
      </button>

      {/* 3) Minimal Hamburger with gap - Top Right */}
      <button
        aria-label="Menu"
        className="absolute top-6 right-6 flex flex-col justify-between w-8 h-6 hover:rotate-90 transition-transform"
      >
        <span className="block h-[3px] w-full bg-pink-600 rounded"></span>
        <span className="block h-[3px] w-full bg-pink-600 rounded"></span>
        <span className="block h-[3px] w-full bg-pink-600 rounded"></span>
      </button>

      {/* 4) Floating Circle Hamburger with Glow - Bottom Center */}
      <button
        aria-label="Menu"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-4 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/40 ring-1 ring-yellow-600/30 hover:scale-110 hover:shadow-yellow-500/60 transition"
      >
        <div className="flex flex-col justify-between w-6 h-4">
          <span className="block h-[2px] w-full bg-white rounded"></span>
          <span className="block h-[2px] w-full bg-white rounded"></span>
          <span className="block h-[2px] w-full bg-white rounded"></span>
        </div>
      </button>
    </div>
  )
}

export default HamburgerButton