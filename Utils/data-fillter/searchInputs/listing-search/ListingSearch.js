import React, { useState } from "react";
import styles from "./css/listingSearch.module.css";
import { CiSearch } from "../../../ApplicationIcon";
import { useRouter } from "next/router";

export default function ListingSearch() {
  const router = useRouter();
  const [searchValue, setsearchValue] = useState("");

  const handelChange = (e) => {
    setsearchValue(e.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      router.push(`/property?searchTerm=${searchValue}`);
    }
  };

  const handelIconSerach = () => {
    router.push(`/property?searchTerm=${searchValue}`);
  };

  return (
    <div className={styles.search_container}>
      <input
        type="text"
        placeholder="Search your poperty"
        className={styles.searchInput}
        onChange={(e) => handelChange(e)}
        onKeyDown={handleKeyDown}
      />
      <div className={styles.search_iconBox} onClick={handelIconSerach}>
        <CiSearch />
      </div>
    </div>
  );
}
