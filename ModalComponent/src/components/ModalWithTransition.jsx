import React, { useState, useEffect } from "react";

const ModalWithTransition = ({ title = "Modal Title", text = "This is modal content." }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false); // For mounting control
  const [visible, setVisible] = useState(false); // For transition state

  // --- Open Modal with Transition
  const handleOpen = () => {
    setShow(true);
    requestAnimationFrame(() => {
      setVisible(true);
      console.log("Transition started (onEnter)");
    });
  };

  // --- Close Modal with Transition
  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      setShow(false);
      console.log("Transition ended (onExited)");
    }, 300); // duration matches CSS transition
  };

  useEffect(() => {
    if (open) handleOpen();
    else if (!open && show) handleClose();
  }, [open]);

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
      >
        Open Modal (with Transition)
      </button>

      {/* Modal */}
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)} // click outside closes
          ></div>

          {/* Modal Content (TransitionComponent behavior) */}
          <div
            className={`bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative transform transition-all duration-300 ${
              visible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
            style={{ zIndex: 60 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
            >
              &times;
            </button>

            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="mb-4">{text}</p>

            <button
              onClick={() => setOpen(false)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalWithTransition;
