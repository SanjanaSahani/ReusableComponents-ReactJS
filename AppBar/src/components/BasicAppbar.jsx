import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function BasicAppbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full ">
      <div className="bg-[#1976D2] shadow-lg rounded-md px-6 py-4 relative">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <IoClose className="text-white text-2xl" />
              ) : (
                <HiMenu className="text-white text-2xl" />
              )}
            </button>

            <h1 className="text-white text-lg font-semibold">News</h1>
          </div>

          <button className="text-white font-semibold tracking-wide">
            LOGIN
          </button>
        </div>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute left-0 top-full mt-3 w-full bg-white rounded-md shadow-md p-4 z-50">
            <button
              className="block w-full text-left py-2 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Home
            </button>

            <button
              className="block w-full text-left py-2 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              About
            </button>

            <button
              className="block w-full text-left py-2 hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasicAppbar;
