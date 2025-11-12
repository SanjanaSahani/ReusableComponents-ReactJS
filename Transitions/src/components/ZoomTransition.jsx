import React, { useState, useEffect } from "react";

function ZoomTransition() {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(show);
  const duration = 400; // transition duration in ms
  const delay = 1000; // 1 second delay for the second box

  useEffect(() => {
    if (show) {
      setIsVisible(true);
    } else {
      // wait for all transitions to finish before unmounting
      const timeout = setTimeout(() => setIsVisible(false), duration + delay);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-gray-50 p-6">
      {/* Toggle Switch */}
      <label className="flex items-center gap-2 mb-6 cursor-pointer">
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={show}
            onChange={() => setShow((prev) => !prev)}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
        </div>
        <span className="text-gray-700 font-medium">Show</span>
      </label>

      {/* Zoom Transition Boxes */}
      <div className="flex gap-6 justify-center items-center">
        {isVisible && (
          <>
            {/* Box 1 (appears immediately) */}
            <div
              className={`transition-all ease-in-out transform origin-center ${
                show ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } bg-white shadow-md rounded-md w-28 h-28 flex items-center justify-center`}
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: show ? "0ms" : "0ms",
              }}
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

            {/* Box 2 (appears after 1 second) */}
            <div
              className={`transition-all ease-in-out transform origin-center ${
                show ? "scale-100 opacity-100" : "scale-0 opacity-0"
              } bg-white shadow-md rounded-md w-28 h-28 flex items-center justify-center`}
              style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: show ? `${delay}ms` : "0ms",
              }}
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

export default ZoomTransition;
