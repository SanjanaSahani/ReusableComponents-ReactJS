import React from "react";

function AppBarWithMenu() {
  return (
    <div className="w-full shadow-md">
      <div className="flex items-center justify-between h-14 bg-blue-600 px-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Menu icon */}
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Title */}
          <span className="text-white text-lg font-medium">
            News
          </span>
        </div>

        {/* Right side */}
        <button className="text-white font-medium tracking-wide">
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default AppBarWithMenu;
