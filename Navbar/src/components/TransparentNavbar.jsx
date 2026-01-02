import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function TransparentNavbar({ logo = "Landing", menuItems = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold">{logo}</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.link}
                className="hover:text-blue-300 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <ul className="space-y-4 py-6 text-center">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="block hover:text-blue-300"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default TransparentNavbar;
