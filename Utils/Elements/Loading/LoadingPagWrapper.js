import React from "react";
import styles from "./css/loadingPageWrapper.module.css";
export default function LoadingPagWrapper() {
  return (
    <div className={styles.main_container}>
      {" "}
      <div className={styles.loader}></div>;
    </div>
  );
}
