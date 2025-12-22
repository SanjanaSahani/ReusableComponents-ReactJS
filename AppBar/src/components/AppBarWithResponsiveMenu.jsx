import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FaAndroid } from "react-icons/fa";

function AppBarWithResponsiveMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="w-full bg-blue-600 shadow-md relative">
      {/* App Bar */}
      <div className=" mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-lg">
            <FaAndroid className="text-2xl" />
            LOGO
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-white font-medium">
            <button className="hover:text-blue-200">PRODUCTS</button>
            <button className="hover:text-blue-200">PRICING</button>
            <button className="hover:text-blue-200">BLOG</button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
          </button>

          {/* Profile */}
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="w-9 h-9 rounded-full overflow-hidden border-2 border-white"
          >
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {["Products", "Pricing", "Blog"].map((item) => (
            <button
              key={item}
              className="block w-full text-left px-6 py-3 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Profile Dropdown */}
      {profileOpen && (
        <div className="absolute right-6 top-20 bg-white shadow-lg rounded-md w-48 z-50">
          {["Profile", "Account", "Dashboard", "Logout"].map((item) => (
            <button
              key={item}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              onClick={() => setProfileOpen(false)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default AppBarWithResponsiveMenu;
