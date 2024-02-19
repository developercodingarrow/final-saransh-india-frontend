import React, { useState } from "react";
import styles from "./css/fillterinput.module.css";
import { CiSearch } from "../../../Utils/ApplicationIcon";
export default function FillterInput(props) {
  const { setsearchTerm } = props;
  const [searchValue, setsearchValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setsearchTerm(searchValue);
    }
  };

  const handelOnChnage = (e) => {
    console.log(e.target.value);
    setsearchValue(e.target.value);
  };

  const handelIconSerach = () => {
    setsearchTerm(searchValue);
  };
  return (
    <div className={styles.search_container}>
      <input
        type="text"
        placeholder="search project"
        value={searchValue}
        onChange={(e) => handelOnChnage(e)}
        onKeyDown={handleKeyDown}
        className={styles.searchInput}
      />
      <div className={styles.search_iconBox} onClick={handelIconSerach}>
        <CiSearch />
      </div>
    </div>
  );
}
