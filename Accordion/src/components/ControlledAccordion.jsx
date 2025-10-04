// components/ControlledAccordion.jsx
import React from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const AccordionItem = ({ title, content, actions, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-md shadow-md mb-4 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 text-left"
      >
        <span className="font-medium text-gray-800">{title}</span>
        {isOpen ? (
          <FiChevronUp className="text-gray-600" />
        ) : (
          <FiChevronDown className="text-gray-600" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-4 text-gray-700 text-sm">
          <p className="mb-4">{content}</p>

          {actions && (
            <div className="flex justify-end space-x-6">
              <button className="text-sm font-medium text-blue-600 hover:underline">
                CANCEL
              </button>
              <button className="text-sm font-medium text-blue-600 hover:underline">
                AGREE
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const ControlledAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          actions={item.actions}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default ControlledAccordion;
