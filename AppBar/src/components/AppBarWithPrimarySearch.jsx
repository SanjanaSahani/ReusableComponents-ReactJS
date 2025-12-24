import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdMail, MdNotifications } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

function AppBarWithPrimarySearch() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div className="w-full shadow-md relative">
      {/* App Bar */}
      <div className="bg-blue-600 px-4 md:px-6 py-3 flex items-center justify-between">

        {/* LEFT: Menu + Logo + Search */}
        <div className="flex items-center gap-4 text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
          </button>

          <span className="font-semibold text-lg tracking-wide">MUI</span>

          {/* Search Bar (next to MUI) */}
          <div
            className={`
              flex items-center gap-2 bg-blue-500 rounded-md px-3 py-2
              transition-all duration-300
              ${focused ? "w-64 md:w-80" : "w-40 md:w-56"}
            `}
          >
            <FiSearch size={18} />
            <input
              type="text"
              placeholder="Search…"
              className="bg-transparent outline-none placeholder-blue-200 w-full text-white"
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </div>
        </div>

        {/* RIGHT: Icons */}
        <div className="flex items-center gap-5 text-white relative">
          {/* Mail */}
          <div className="relative cursor-pointer">
            <MdMail size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5">
              4
            </span>
          </div>

          {/* Notifications */}
          <div className="relative cursor-pointer">
            <MdNotifications size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5">
              17
            </span>
          </div>

          {/* Profile */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <FaUserCircle size={28} />
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white text-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                <button
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                  Profile
                </button>
                <button
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                  onClick={() => setProfileOpen(false)}
                >
                  My account
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* LEFT MENU DROPDOWN */}
      {menuOpen && (
        <div className="bg-white border-t shadow-sm">
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

export default AppBarWithPrimarySearch;
