import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PaginationSize = () => {
  const totalPages = 10;

  const Pagination = ({ size }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageClick = (page) => {
      if (page === '...') return;
      setCurrentPage(page);
    };

    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const generatePages = () => {
      if (totalPages <= 6) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
      }

      const pages = [1];

      if (currentPage <= 4) {
        pages.push(2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push('...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }

      return pages;
    };

    const pages = generatePages();

    // Tailwind classes for sizes
    const sizeClasses = {
      small: 'text-xs px-2 py-1',
      medium: 'text-sm px-3 py-1.5',
      large: 'text-base px-4 py-2',
    };

    return (
      <div className="flex space-x-1 items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`p-2 rounded ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:bg-gray-200'}`}
        >
          <FiChevronLeft size={16} />
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            className={`rounded-full transition
              ${sizeClasses[size]} 
              ${
                page === currentPage
                  ? 'bg-gray-300 text-black cursor-default'
                  : page === '...'
                  ? 'text-gray-500 cursor-default'
                  : 'text-black hover:bg-gray-200'
              }`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-2 rounded ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:bg-gray-200'}`}
        >
          <FiChevronRight size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-col gap-6 items-center justify-center p-8">
      <Pagination size="small" />
      <Pagination size="medium" />
      <Pagination size="large" />
    </div>
  );
};

export default PaginationSize;
