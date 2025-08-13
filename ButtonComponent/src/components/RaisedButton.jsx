import React from "react";

function RaisedButtons() {
  return (
    <div className="min-h-[300px] bg-gray-100 flex flex-wrap gap-6 items-center justify-center p-8">
      
      {/* 1) Classic Raised Button */}
      <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg active:shadow-sm hover:bg-blue-500 active:bg-blue-700 transition">
        Primary Action
      </button>

      {/* 2) Raised with Gradient */}
      <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl active:shadow-md transform hover:-translate-y-1 active:translate-y-0 transition">
        Gradient Action
      </button>

      {/* 3) Soft Raised with Outline */}
      <button className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg shadow hover:shadow-lg active:shadow-sm border border-gray-200 hover:border-indigo-400 active:border-indigo-600 transition">
        Outline Action
      </button>

      {/* 4) Raised with Icon */}
      <button className="flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl active:shadow-md transform hover:-translate-y-1 active:translate-y-0 transition">
        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Confirm
      </button>

    </div>
  );
}

export default RaisedButtons;
