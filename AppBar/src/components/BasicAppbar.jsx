import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function BasicAppbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-4">
      <div className="bg-[#1976D2] shadow-lg rounded-md px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen(!open)}>
              <HiMenu className="text-white text-2xl" />
            </button>
            <h1 className="text-white text-lg font-semibold">News</h1>
          </div>

          <button className="text-white font-semibold tracking-wide">
            LOGIN
          </button>
        </div>

        {/* Dropdown Menu */}
        {open && (
          <div className="mt-4 bg-blue-500 text-white rounded-md p-3">
            <div className="flex items-center justify-between mb-2">
              <button className="hover:underline">Home</button>
              <button onClick={() => setOpen(false)}>
                <IoClose className="text-2xl text-white hover:text-gray-200" />
              </button>
            </div>
            <button className="block w-full text-left hover:underline">About</button>
            <button className="block w-full text-left hover:underline">Login</button>
          </div>
        )}

      </div>
    </div>
  );
}

export default BasicAppbar;

