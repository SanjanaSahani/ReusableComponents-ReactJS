import React, { useState } from "react";

function ExpandableButton() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-[300px] bg-gray-100 relative overflow-hidden">
      {/* Expandable Plus Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`absolute bottom-6 right-6 flex items-center gap-3 rounded-full bg-indigo-600 shadow-lg shadow-indigo-600/30 ring-1 ring-indigo-700/30 overflow-hidden
          h-14 transition-all duration-500 ease-in-out
          ${expanded ? "px-5 w-44" : "px-0 w-14"}
          hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-300`}
      >
        {/* Plus Icon with smooth rotation */}
        <span
          className={`relative flex items-center justify-center transition-transform duration-500 ease-in-out p-6
            ${expanded ? "rotate-45" : "rotate-0"}`}
        >
          <span className="absolute h-6 w-[3px] bg-white rounded"></span>
          <span className="absolute w-6 h-[3px] bg-white rounded"></span>
        </span>

        {/* Animated Text Label */}
        <span
          className={`text-white font-medium whitespace-nowrap transform transition-all duration-500 ease-in-out
            ${expanded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
        >
          Create New
        </span>
      </button>
    </div>
  );
}

export default ExpandableButton;
