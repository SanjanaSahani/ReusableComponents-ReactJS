import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function BasicNavbar({ logo = "MyApp", menuItems = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          {logo}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-blue-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 px-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="block hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default BasicNavbar;
