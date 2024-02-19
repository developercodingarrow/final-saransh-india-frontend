import React from "react";
import styles from "./css/tableWrapper.module.css";

export default function TableWrapper({ children }) {
  return (
    <div className={styles.card}>
      <div className={styles.tableContainer}>{children}</div>
    </div>
  );
}
