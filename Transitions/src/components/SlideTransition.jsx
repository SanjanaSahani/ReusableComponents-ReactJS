import React, { useState, useEffect } from "react";

export default function SlideTransition() {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(show);
  const duration = 300; // ms

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), duration);
      return () => clearTimeout(timeout);
    }
  }, [show, duration]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] gap-4 bg-gray-100">
      {/* Toggle button */}
      <label className="flex items-center gap-2 mb-6 cursor-pointer">
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={show}
            onChange={() => setShow((prev) => !prev)}
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
        </div>
        <span className="text-gray-700 font-medium">Show</span>
      </label>

      {/* Slide transition wrapper */}
      <div
        className={`transition-all ease-in-out`}
        style={{
          transitionDuration: `${duration}ms`,
          transform: show ? "translateY(0)" : "translateY(80px)",
          opacity: show ? 1 : 0,
        }}
      >
        {isVisible && (
          <div
            className="bg-white shadow-md rounded-md w-28 h-28 flex items-center justify-center border border-gray-300"
            style={{ transitionDuration: `${duration}ms` }}
          >
            <svg width="100" height="100">
              <polygon
                points="0,100 50,0 100,100"
                fill="white"
                stroke="#d1d5db"
                strokeWidth="1"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
