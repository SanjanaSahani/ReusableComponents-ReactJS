import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function CenterLogoNavbar({ logo = "Brand", menuItems = [] }) {
  const [open, setOpen] = useState(false);

  const mid = Math.ceil(menuItems.length / 2);
  const left = menuItems.slice(0, mid);
  const right = menuItems.slice(mid);

  return (
    <nav className="bg-white shadow px-6 py-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Left Menu (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {left.map((item, i) => (
            <li key={i}>
              <a href={item.link} className="hover:text-blue-600">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Logo */}
        <div className="text-xl font-bold">{logo}</div>

        {/* Right Menu (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {right.map((item, i) => (
            <li key={i}>
              <a href={item.link} className="hover:text-blue-600">
                {item.name}
              </a>
            </li>
          ))}
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
        <div className="md:hidden mt-4 bg-white  rounded-lg p-4">
          <ul className="space-y-4 text-center">
            {menuItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="block hover:text-blue-600"
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

export default CenterLogoNavbar;
