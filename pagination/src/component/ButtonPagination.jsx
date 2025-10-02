import React, { useState } from 'react';
import {
  BsChevronBarLeft,
  BsChevronBarRight,
} from 'react-icons/bs';
import {
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi';

const ButtonPagination = () => {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 4) pages.push('left-dots');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) pages.push('right-dots');

      pages.push(totalPages);
    }

   return pages.map((page, index) => {
  if (page === 'left-dots' || page === 'right-dots') {
    return (
      <span key={`dots-${index}`} className="mx-1 text-gray-500 select-none">
        ...
      </span>
    );
  }

  return (
    <button
      key={`page-${page}-${index}`}
      onClick={() => goToPage(page)}
      className={`w-8 h-8 mx-1 rounded-full text-sm font-medium ${
        currentPage === page
          ? 'bg-gray-200 text-black'
          : 'hover:bg-gray-100 text-black'
      }`}
    >
      {page}
    </button>
  );
});

  };

  return (
     <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
      <div className="flex justify-center items-center space-x-1">
        {/* First Page */}
        <button
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded ${
            currentPage === 1 ? 'text-gray-300' : 'hover:bg-gray-100'
          }`}
        >
          <BsChevronBarLeft className="w-4 h-4" />
        </button>

        {/* Previous */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex items-center justify-center rounded ${
            currentPage === 1 ? 'text-gray-300' : 'hover:bg-gray-100'
          }`}
        >
          <HiChevronLeft className="w-4 h-4" />
        </button>

        {/* Page Numbers */}
        {renderPageNumbers()}

        {/* Next */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded ${
            currentPage === totalPages ? 'text-gray-300' : 'hover:bg-gray-100'
          }`}
        >
          <HiChevronRight className="w-4 h-4" />
        </button>

        {/* Last Page */}
        <button
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex items-center justify-center rounded ${
            currentPage === totalPages ? 'text-gray-300' : 'hover:bg-gray-100'
          }`}
        >
          <BsChevronBarRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ButtonPagination;
