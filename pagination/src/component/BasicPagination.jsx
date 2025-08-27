import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const BasicPagination = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5;

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;
    setActivePage(page);
  };

  return (
      <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
      {/* Previous Button */}
      <button
        onClick={() => changePage(activePage - 1)}
        disabled={activePage === 1}
        className={`flex items-center gap-2 px-3 py-1 rounded-md border text-sm ${
          activePage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'hover:bg-gray-200 text-gray-700'
        }`}
      >
        <FiChevronLeft className="h-4 w-4" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => changePage(page)}
              className={`w-9 h-9 text-sm rounded-md border ${
                activePage === page
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => changePage(activePage + 1)}
        disabled={activePage === totalPages}
        className={`flex items-center gap-2 px-3 py-1 rounded-md border text-sm ${
          activePage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'hover:bg-gray-200 text-gray-700'
        }`}
      >
        Next
        <FiChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default BasicPagination;


