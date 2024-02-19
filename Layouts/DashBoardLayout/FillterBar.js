import React from "react";
import styles from "./css/fillterBar.module.css";
import TableSearch from "../../Utils/Table/fillterComponent/tableSearch/TableSearch";
import useTableFillters from "../../custome-hooks/useTableFillters";
import SortData from "../../Utils/Table/fillterComponent/tableSort/SortData";
import DateRange from "../../Utils/Table/fillterComponent/dateRange/DateRange";
export default function FillterBar(props) {
  const { data } = props;
  const {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    filterByDate,
    filterDataByUsername,
    updateVisibleRows,
    currentPage,
    rowsPerPage,
    sortDataByDate,
  } = useTableFillters(data);

  const handleApplyDateRange = () => {
    // Call the filter function with the selected date range
    filterByDate(startDate, endDate);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.filler_leftSide}>
        <div>
          <TableSearch
            handelsearchBy={filterDataByUsername}
            searchFiled={"blogTitle"}
            placholder="Search product"
          />
        </div>
        <div>
          <SortData handelSelectSort={sortDataByDate} />
        </div>
      </div>
      <div className={styles.filler_rightSide}>
        <DateRange
          startDateValue={startDate}
          endDateValue={endDate}
          handelStartDate={handleStartDateChange}
          handelEndDate={handleEndDateChange}
          handelBtn={handleApplyDateRange}
        />
      </div>
    </div>
  );
}
