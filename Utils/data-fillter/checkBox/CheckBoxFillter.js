import React, { useEffect, useState } from "react";
import styles from "./css/checkBoxFillter.module.css";

export default function CheckBoxFillter(props) {
  const { label, options, checkedItems, onCheckboxChange, titel } = props;

  return (
    <div className={styles.main_Container}>
      <div className={styles.block_customeChecBox_warper}>
        {titel && (
          <div className={styles.title_box}>
            <p>{titel}</p>
          </div>
        )}

        <div className={styles.block_checkBox_container}>
          {options.map((option, index) => {
            const isChecked = checkedItems.includes(option);

            return (
              <label className={styles.label_Box} key={index}>
                <input
                  type="checkbox"
                  value={option}
                  onChange={(e) => onCheckboxChange(option, e.target.checked)}
                  checked={isChecked}
                  style={{ display: "none" }} // Hide default checkbox
                />
                <span
                  className={`${styles.customCheckbox} ${
                    isChecked ? styles.checked : ""
                  }`}
                >
                  {isChecked ? (
                    <span className={styles.checkedMark}>✔</span>
                  ) : (
                    ""
                  )}
                </span>
                <span
                  className={
                    isChecked
                      ? `${styles.lableChecked}`
                      : `${styles.checkBoxLable}`
                  }
                >
                  {" "}
                  {option}{" "}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
