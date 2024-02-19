import React from "react";
import styles from "./css/dateRange.module.css";
import ClickBtn from "../../../Elements/buttonsElements/ClickBtn";

export default function DateRange(props) {
  const {
    handelStartDate,
    handelEndDate,
    handelBtn,
    startDateValue,
    endDateValue,
  } = props;
  return (
    <div className={styles.dateInput_container}>
      <input
        type="date"
        placeholder="Start Date"
        value={startDateValue}
        onChange={handelStartDate}
        className={styles.dateinput}
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDateValue}
        onChange={handelEndDate}
        className={styles.dateinput}
      />

      <button onClick={handelBtn} className={styles.btnStyle}>
        {" "}
        apply
      </button>
    </div>
  );
}
