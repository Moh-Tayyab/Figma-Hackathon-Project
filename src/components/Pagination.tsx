import React from "react";

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="text-center flex space-x-4 py-10 justify-center items-center">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`py-2 px-4 rounded-lg text-xl ${
          currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#FAF3EA] hover:bg-primary hover:text-white"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNum = index + 1;
        return (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`py-2 px-4 rounded-lg text-xl ${
              currentPage === pageNum ? "bg-primary text-white" : "bg-[#FAF3EA] hover:bg-primary hover:text-white"
            }`}
          >
            {pageNum}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`py-2 px-4 rounded-lg text-xl ${
          currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#FAF3EA] hover:bg-primary hover:text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
