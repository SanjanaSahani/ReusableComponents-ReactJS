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
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition "
      >
        Toggle
      </button>

      {/* Transition element */}
      <div
        className={`transition-opacity duration-${duration} ease-in-out ${
          show ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDuration: `${duration}ms` }}
      >
        {isVisible && (
          <div className="p-4 bg-green-500 text-white rounded shadow w-52 h-52"></div>
        )}
      </div>
    </div>
  );
}

export default BasicTransition;
