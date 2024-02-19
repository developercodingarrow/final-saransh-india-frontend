import React from "react";
import styles from "./css/selectElement.module.css";

export default function SelectElement(props) {
  const {
    selectOptions,
    inputLabel,
    lableStyle,
    inputContainer,
    ...inputProps
  } = props;
  return (
    <div className={styles[inputContainer]}>
      {inputLabel && (
        <div className={styles.lable_Box}>
          <label className={styles[lableStyle]}>{inputLabel}</label>
        </div>
      )}
      <select className={styles.selectDesign} {...inputProps}>
        {selectOptions.map((option, index) => (
          <option key={index} className={styles.optionDesign} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
