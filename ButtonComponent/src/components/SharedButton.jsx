import React, { useState } from "react";

function SharedButtons() {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  return (
    <div className="min-h-[350px] bg-gray-100 relative overflow-hidden">
      {/* 1) Expandable Share Button - Bottom Right */}
      <button
        onClick={() => setExpanded1(!expanded1)}
        className={`absolute bottom-6 right-6 flex items-center gap-3 rounded-full bg-blue-600 shadow-lg shadow-blue-600/30 ring-1 ring-blue-700/30 overflow-hidden
          h-14 transition-all duration-500 ease-in-out
          ${expanded1 ? "px-5 w-44" : "px-0 w-14"}
          hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300`}
      >
        {/* Share Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 text-white transition-transform duration-500 ${
            expanded1 ? "rotate-12" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 12v0m16 0v0m-8-8v0m0 8v0m0 8v0"
          />
        </svg>

        {/* Text */}
        <span
          className={`text-white font-medium whitespace-nowrap transition-all duration-500 ease-in-out
            ${expanded1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          Share Now
        </span>
      </button>

      {/* 2) Circle Share with Slide-Out Icons - Bottom Left */}
      <div className="absolute bottom-6 left-6 flex flex-col items-center gap-3">
        <button
          onClick={() => setExpanded2(!expanded2)}
          className="flex items-center justify-center h-14 w-14 rounded-full bg-green-600 shadow-lg shadow-green-600/30 ring-1 ring-green-700/30 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 text-white transition-transform duration-500 ${
              expanded2 ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 12v0m16 0v0m-8-8v0m0 8v0m0 8v0"
            />
          </svg>
        </button>

        {/* Slide-out Social Icons */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-500 ${
            expanded2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#"
            className="h-10 w-10 flex items-center justify-center bg-blue-500 rounded-full text-white shadow"
          >
            F
          </a>
          <a
            href="#"
            className="h-10 w-10 flex items-center justify-center bg-sky-400 rounded-full text-white shadow"
          >
            T
          </a>
          <a
            href="#"
            className="h-10 w-10 flex items-center justify-center bg-pink-500 rounded-full text-white shadow"
          >
            I
          </a>
        </div>
      </div>

      {/* 3) Glow Effect Share Button - Top Right */}
      <button
        onClick={() => setExpanded3(!expanded3)}
        className={`absolute top-6 right-6 flex items-center gap-3 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/40 ring-1 ring-yellow-600/30 overflow-hidden
          h-14 transition-all duration-500 ease-in-out hover:scale-110
          ${expanded3 ? "px-5 w-44 shadow-yellow-500/60" : "px-0 w-14"}
          focus:outline-none focus:ring-4 focus:ring-yellow-300`}
      >
        {/* Share Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-7 w-7 text-white transition-transform duration-500 ${
            expanded3 ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 8a3 3 0 100-6 3 3 0 000 6zm0 0l-6 4m0 0a3 3 0 100 6 3 3 0 000-6zm6 0a3 3 0 100 6 3 3 0 000-6z"
          />
        </svg>

        {/* Text */}
        <span
          className={`text-white font-medium whitespace-nowrap transition-all duration-500 ease-in-out
            ${expanded3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          Share Link
        </span>
      </button>
    </div>
  );
}

export default SharedButtons;
