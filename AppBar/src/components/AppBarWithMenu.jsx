import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function AppBarWithMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-md relative">
      {/* AppBar */}
      <div className="flex items-center justify-between bg-blue-600 px-6 py-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Menu toggle */}
          <button
            className="text-white focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Title */}
          <span className="text-white text-lg font-medium">
            News
          </span>
        </div>

        {/* Right side */}
        <button className="text-white text-2xl cursor-pointer hover:text-blue-100">
          <FaUserCircle />
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 top-full w-full bg-white shadow-md z-50">
          <button
            className="block w-full text-left px-6 py-3 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Home
          </button>

          <button
            className="block w-full text-left px-6 py-3 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            About
          </button>

          <button
            className="block w-full text-left px-6 py-3 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default AppBarWithMenu;
