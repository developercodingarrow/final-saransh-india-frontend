import React from "react";
import styles from "./css/sortdata.module.css";

export default function SortData(props) {
  const { handelSelectSort } = props;
  return (
    <div className={styles.main_Wrapper}>
      <select
        onChange={(e) => handelSelectSort(e.target.value)}
        className={styles.selectButton}
      >
        <option value="old" className={styles.options_style}>
          old
        </option>
        <option value="new" className={styles.options_style}>
          new
        </option>
      </select>
    </div>
  );
}
