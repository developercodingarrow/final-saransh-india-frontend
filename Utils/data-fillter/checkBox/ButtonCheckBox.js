import React, { useState } from "react";
import styles from "./css/ButtonCheckBox.module.css";

export default function ButtonCheckBox(props) {
  const { label, options, checkedItems, onCheckboxChange } = props;
  return (
    <div className={styles.wrapper_container}>
      {label.map((el, i) => {
        const option = options[i];
        const isChecked = checkedItems.includes(option);

        return (
          <label key={i} className={styles.label}>
            <input
              type="checkbox"
              value={option}
              checked={isChecked}
              onChange={(e) => onCheckboxChange(option, e.target.checked)}
              className={styles.input_checkbox}
            />
            <span
              className={`${styles.custom_checkbox} ${
                isChecked ? styles.checked : ""
              }`}
            />
            {el}
          </label>
        );
      })}
    </div>
  );
}
