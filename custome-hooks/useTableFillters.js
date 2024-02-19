import React, { useState, useEffect, useContext, useRef } from "react";
import {
  goToNextPage,
  goToPreviousPage,
  goToPage,
  handleRowsPerPageChange,
} from "../Utils/logical-function/paginationFunctions";
import { sortByDate } from "../Utils/logical-function/sortingFunctions";
import { filterByBlogTitle } from "../Utils/logical-function/filteringFunctions";
import { filterByDateRange } from "../Utils/logical-function/dateRangeFilter";
import { FillterContext } from "../ContextApi/FillterContext";

export default function useTableFillters(initialRows, initialRowsPerPage = 5) {
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  const totalRows = initialRows?.length ?? 0;
  const [rowsPerPage, setrowsPerPage] = useState(initialRowsPerPage);
  const [currentPage, setcurrentPage] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Initialize toggle using useRef to ensure it's not included in SSR
  const toggleRef = useRef(true);
  const toggle = toggleRef.current;
  const settoggle = (value) => {
    toggleRef.current = value;
  };

  useEffect(() => {
    // Ensure initial state consistency between server and client
    settoggle(true);
  }, []);

  // Direct To to page Number
  const setPage = (pageNumber) => {
    goToPage(pageNumber, setcurrentPage);
  };

  // For Next page
  const nextPage = () => {
    goToNextPage(currentPage, totalRows, rowsPerPage, setcurrentPage);
    updateVisibleRows();
  };

  // For Previous page
  const prevPage = () => {
    goToPreviousPage(currentPage, setcurrentPage);
    updateVisibleRows();
  };

  // For select row
  const handleRowsPerPageChangeWrapper = (e) => {
    handleRowsPerPageChange(e, setrowsPerPage, setcurrentPage);
  };

  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(startIndex + rowsPerPage - 1, totalRows);

  // Function to sort data by date
  const sortDataByDate = (order) => {
    const sortedData = sortByDate(initialRows, order);
    console.log(sortedData);
    updateVisibleRows(sortedData);
  };

  // Function to filter data by username
  const filterDataByUsername = (searchTerm, field) => {
    const filteredData = filterByBlogTitle(initialRows, searchTerm, field);
    updateVisibleRows(filteredData);
  };

  /*****************************************
   * **** These LOgic for date Range Fillter
   ***************************************/
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };
  // Fundtion to date rage fillter

  const filterByDate = (startDate, endDate) => {
    console.log(startDate);
    console.log(endDate);
    const filteredData = filterByDateRange(initialRows, startDate, endDate);
    console.log(filteredData);
    updateVisibleRows(filteredData);
    // Perform other logic with filteredData
  };

  const updateVisibleRows = (data) => {
    let rowsToDisplay = data || initialRows; // Use sorted data if available
    let startpageIndex = (currentPage - 1) * rowsPerPage;
    const endPageIndex = currentPage * rowsPerPage;
    const updatedVisibleRows = rowsToDisplay.slice(
      startpageIndex,
      endPageIndex
    );
    setvisibalRows(updatedVisibleRows);
  };

  return {
    visibalRows,
    nextPage,
    prevPage,
    rowsPerPage,
    handleRowsPerPageChangeWrapper,
    totalRows,
    startIndex,
    endIndex,
    sortDataByDate,
    updateVisibleRows,
    filterDataByUsername,
    filterByDate,
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    toggle,
    settoggle,
  };
}
