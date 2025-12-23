import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

function AppBarWithSearch() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full shadow-md">
      {/* AppBar */}
      <div className="w-full bg-blue-600 relative z-50">
        <div className="w-full px-4 md:px-6 py-4 flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-4 text-white">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
            </button>
            <span className="font-semibold text-lg tracking-wide">MUI</span>
          </div>

          {/* Search Bar */}
          <div
            className={`
              flex items-center gap-2 bg-blue-500 text-white rounded-md px-3 py-2
              transition-all duration-300 ease-in-out
              ${focused ? "w-64 md:w-80" : "w-40 md:w-52"}
            `}
          >
            <FiSearch size={18} />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none placeholder-blue-200 w-full"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>
        </div>
      </div>

      {/* BELOW NAVBAR MENU */}
      {menuOpen && (
        <div className="w-full bg-white border-t shadow-sm">
          {["Home", "About", "Contact"].map((item) => (
            <button
              key={item}
              className="block w-full text-left px-6 py-4 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default AppBarWithSearch;

