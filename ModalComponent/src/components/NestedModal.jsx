import React, { useState } from "react";

const NestedModal = ({ outertext,outertitle,NestedButton, innertitle, innerText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInnerOpen, setIsInnerOpen] = useState(false);

  return (
    <>
      {/* Trigger for Outer Modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Open Modal
      </button>

      {/* Outer Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">{outertitle}</h2>
            <p className="mb-4">{outertext}</p>

            {/* Button to open nested modal */}
            <button
              onClick={() => setIsInnerOpen(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 cursor-pointer"
            >
              {NestedButton}
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="ml-3 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 cursor-pointer"
            >
              Close
            </button>

            {/* Inner Modal (nested) */}
            {isInnerOpen && (
              <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-60">
                <div className="bg-white p-5 rounded-lg shadow-lg relative max-w-sm w-full">
                  <button
                    onClick={() => setIsInnerOpen(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
                  >
                    &times;
                  </button>

                  <h3 className="text-lg font-semibold mb-3">{innertitle}</h3>
                  <p className="mb-4">{innerText}</p>

                  <button
                    onClick={() => setIsInnerOpen(false)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer"
                  >
                    Close Inner Modal
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NestedModal;
