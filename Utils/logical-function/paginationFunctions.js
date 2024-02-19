// Direct Go TO PAGE NUMBER
export const goToPage = (pageNumber, setCurrentPage) => {
  setCurrentPage(pageNumber);
};

// NEXT PAGE LOGIC
export const goToNextPage = (
  currentPage,
  totalRows,
  rowsPerPage,
  setCurrentPage
) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

// PREVIOUS PAGE LOGIC
export const goToPreviousPage = (currentPage, setCurrentPage) => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

// ROW PER PAGE LOGIC
export const handleRowsPerPageChange = (e, setRowsPerPage, setCurrentPage) => {
  const selectedRowsPerPage = Number(e.target.value);
  console.log(selectedRowsPerPage);
  setRowsPerPage(selectedRowsPerPage);
  setCurrentPage(1); // Reset to first page when changing rows per page
};

export const paginate = (rows, currentPage, rowsPerPage) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  return rows.slice(startIndex, startIndex + rowsPerPage);
};

export const getTotalPages = (totalRows, rowsPerPage) => {
  return Math.ceil(totalRows / rowsPerPage);
};
// Other pagination functions...
