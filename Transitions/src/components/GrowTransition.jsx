import React, { useState, useEffect } from "react";

function GrowTransition() {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(show);
  const duration = 400; // transition duration in ms

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => setIsVisible(false), duration);
      return () => clearTimeout(timeout);
    }
  }, [show, duration]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] bg-gray-50 p-6">
      {/* Toggle switch */}
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

      {/* Grow transition area */}
      <div className="flex gap-4 justify-center items-center transition-all">
        {isVisible && (
          <>
            {/* Box 1 */}
            <div
              className={`transition-all transform ${
                show
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

            {/* Box 2 */}
            <div
              className={`transition-all transform ${
                show
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
          </>
        )}
      </div>
    </div>
  );
}

export default GrowTransition;
