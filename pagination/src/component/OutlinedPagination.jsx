import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const OutlinedPagination = () => {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Function to handle page change
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

  // Generate visible pages (1 2 3 4 5 ... 10)
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

  return (
    <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
      <div className="flex space-x-1 items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className={`p-1 mr-4 rounded-full outline-1 outline-gray-400 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:bg-gray-200'}`}
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Page Numbers */}
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            className={`px-3 py-1 rounded-full text-sm transition
              ${
                page === currentPage
                  ? 'bg-blue-100 text-black cursor-default outline-1 outline-blue-400 hover:bg-blue-500'
                  : page === '...'
                  ? 'text-gray-500 cursor-default'
                  : 'text-black hover:bg-gray-200 outline-1 outline-gray-400'
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
          className={`p-1 ml-4 rounded-full outline-1 outline-gray-400 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-black hover:bg-gray-200'}`}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OutlinedPagination;