import React, { useState } from "react";

function DropdownButton() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex justify-center flex-wrap gap-32 items-start p-8 cursor-pointer relative">
      
      {/* 1️⃣ Blue Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen1((prev) => !prev)}
          className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none 
                     focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                     inline-flex items-center shadow-md hover:shadow-lg transition-all duration-200"
          type="button"
        >
          Dropdown button
          <svg
            className={`w-2.5 h-2.5 ms-3 transition-transform duration-200 ${isOpen1 ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {isOpen1 && (
          <div className="absolute top-14 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 animate-fadeIn">
            <ul className="py-2 text-sm text-gray-700">
              <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150">Dashboard</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150">Settings</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150">Earnings</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150">Sign out</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* 2️⃣ Green Rounded Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen2((prev) => !prev)}
          className="text-white flex bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none 
                     focus:ring-green-300 font-semibold rounded-full text-sm px-6 py-2 shadow-lg hover:shadow-xl transition-all"
        >
          Options
          <svg
            className={`w-3 h-3 ml-2 mt-1.5 transition-transform duration-200 ${isOpen2 ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {isOpen2 && (
          <div className="absolute top-12 z-10 bg-green-50 border border-green-200 rounded-xl shadow-md w-48 overflow-hidden">
            <ul className="text-sm text-green-900">
              <li><a href="#" className="block px-4 py-3 hover:bg-green-100">Profile</a></li>
              <li><a href="#" className="block px-4 py-3 hover:bg-green-100">Billing</a></li>
              <li><a href="#" className="block px-4 py-3 hover:bg-green-100">Help</a></li>
            </ul>
          </div>
        )}
      </div>

      {/* 3️⃣ Gradient Luxury Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen3((prev) => !prev)}
          className="bg-gradient-to-r flex from-purple-600 to-pink-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          Luxury Menu
          <svg
            className={`w-3 h-3 ml-2 mt-1.5 transition-transform duration-200 ${isOpen3 ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {isOpen3 && (
          <div className="absolute top-12 z-10 bg-white rounded-lg shadow-xl w-56 overflow-hidden border border-gray-200">
            <ul className="text-sm text-gray-800">
              <li><a href="#" className="block px-4 py-3 hover:bg-purple-50">My Orders</a></li>
              <li><a href="#" className="block px-4 py-3 hover:bg-purple-50">Wishlist</a></li>
              <li><a href="#" className="block px-4 py-3 hover:bg-purple-50">Account Settings</a></li>
              <li><a href="#" className="block px-4 py-3 hover:bg-purple-50">Logout</a></li>
            </ul>
          </div>
        )}
      </div>

    </div>
  );
}

export default DropdownButton;
