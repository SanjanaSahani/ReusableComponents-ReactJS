import React, { useState, useEffect } from "react";

function BasicTransition() {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(show);
  const duration = 300; // transition duration in ms

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
      <button
        onClick={() => setShow((prev) => !prev)}
        style={{
          background: "linear-gradient(to right, #3b82f6, #6366f1)",
        }}
        className="px-6 py-2.5 font-semibold text-white rounded-lg shadow-md 
             hover:opacity-90 active:scale-95 transition-all duration-300 
             focus:ring-2 focus:ring-blue-300 focus:outline-none"
      >
        Toggle
      </button>



      {/* Transition element */}
      <div
        className={`transition-opacity duration-${duration} ease-in-out ${show ? "opacity-100" : "opacity-0"
          }`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {isVisible && (
          <div
            className={`transition-all transform ${show
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0"
              } duration-400ms ease-in-out origin-center bg-white shadow-md rounded-md w-28 h-28 flex items-center justify-center`}
            style={{ transitionDuration: `${duration}ms` }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 20L12 4l9 16H3z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default BasicTransition;
