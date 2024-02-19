import React from "react";
import styles from "./css/tableSearch.module.css";
import { HiMagnifyingGlass } from "./../../../ApplicationIcon";

export default function TableSearch(props) {
  const { handelsearchBy, searchFiled, placholder } = props;

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder={placholder}
        className={styles.search_input}
        onChange={(e) => handelsearchBy(e.target.value, searchFiled)}
      />
      <div className={styles.iconBox}>
        <HiMagnifyingGlass />
      </div>
    </div>
  );
}
