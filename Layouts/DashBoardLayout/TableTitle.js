import React from "react";
import styles from "./css/tableTitle.module.css";

export default function TableTitle(props) {
  const { tableTitle } = props;
  return (
    <>
      <div className={styles.table_titleBox}>
        <p>{tableTitle}</p>
      </div>
    </>
  );
}
