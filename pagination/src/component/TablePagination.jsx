import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const PaginationFooter = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(3); // page 3 = items 31–40

  const totalRows = 100;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const start = page * rowsPerPage;
  const end = Math.min(start + rowsPerPage, totalRows);

  const handlePrevious = () => {
    if (page > 0) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handleRowsChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(0); // reset to page 0
  };

  return (
    <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-8 cursor-pointer">
    {/* Left: Rows per page */}
      <div className="flex items-center gap-4">
        <span>Rows per page:</span>
        <select
          value={rowsPerPage}
          onChange={handleRowsChange}
          className="bg-transparent focus:outline-none"
        >
          {[5, 10, 25, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      {/* Center: Pagination info */}
      <div>
        {start + 1}–{end} of {totalRows}
      </div>

      {/* Right: Arrow navigation */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={page === 0}
          className="disabled:text-gray-400"
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          disabled={page >= totalPages - 1}
          className="disabled:text-gray-400"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PaginationFooter;
