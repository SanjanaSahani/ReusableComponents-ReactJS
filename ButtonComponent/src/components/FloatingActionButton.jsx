import React from 'react'

function FloatingActionButton() {
  return (
    <div className="min-h-[300px] bg-gray-100 relative overflow-hidden">
      {/* 1) Classic Circular FAB - Bottom Right */}
      <button
        aria-label="Add"
        className="absolute bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/30 ring-1 ring-indigo-700/30 transition hover:scale-105 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 5v14M5 12h14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 2) Extended FAB - Bottom Center */}
      <button
        aria-label="Create new"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-5 py-3.5 shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-700/30 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <span className="text-white font-medium">Create</span>
      </button>

      {/* 3) Square FAB - Bottom Left */}
      <button
        aria-label="Edit"
        className="absolute bottom-6 left-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-pink-600 shadow-lg shadow-pink-600/30 ring-1 ring-pink-700/30 transition hover:rotate-6 hover:bg-pink-500 focus:outline-none focus:ring-4 focus:ring-pink-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2L9 19H5v-4l10-10z" />
        </svg>
      </button>

      {/* 4) Glow FAB - Top Right */}
      <button
        aria-label="Settings"
        className="absolute top-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/40 ring-1 ring-yellow-600/30 transition hover:scale-110 hover:shadow-yellow-500/60 focus:outline-none focus:ring-4 focus:ring-yellow-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
    </div>
  )
}

export default FloatingActionButton
