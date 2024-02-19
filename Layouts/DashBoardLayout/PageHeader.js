import React from "react";
import styles from "./css/pageHeader.module.css";

export default function PageHeader(props) {
  const { pageTitle, handelCreate, btnText } = props;
  return (
    <div className={styles.main_Container}>
      <div className={styles.title_wrapper}>
        <h3 className={styles.pageTitle}>{pageTitle}</h3>
      </div>

      {btnText && (
        <div className={styles.btn_wrapper}>
          <button className={styles.btnStyle} onClick={handelCreate}>
            {btnText}
          </button>
        </div>
      )}
    </div>
  );
}
