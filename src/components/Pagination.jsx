const Pagination = ({ currentPage, totalResults, onPageChange }) => {
    const totalPages = Math.ceil(totalResults / 10);
  
    if (totalPages <= 1) return null;
  
    return (
      <div className="flex justify-start gap-2 mt-4 overflow-x-scroll relative py-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3  py-1 rounded  ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded "
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  