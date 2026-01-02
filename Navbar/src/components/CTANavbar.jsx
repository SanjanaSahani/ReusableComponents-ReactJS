import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function CTANavbar({ logo = "Startup", menuItems = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold">{logo}</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a href={item.link} className="hover:text-blue-400">
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition">
              Get Started
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-lg shadow-lg p-4">
          <ul className="space-y-4 text-center">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="block hover:text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button
                className="w-full bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => setOpen(false)}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default CTANavbar;
