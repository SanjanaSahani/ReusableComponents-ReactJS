import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function AuthNavbar({ logo = "App", menuItems = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold">{logo}</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a href={item.link} className="hover:text-blue-600">
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Login
            </button>
          </li>
          <li>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Sign Up
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
        <div className="md:hidden mt-4 bg-white rounded-lg p-4">
          <ul className="space-y-4 text-center">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="block hover:text-blue-600 transition"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <button
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setOpen(false)}
              >
                Login
              </button>
            </li>
            <li>
              <button
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setOpen(false)}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default AuthNavbar;
