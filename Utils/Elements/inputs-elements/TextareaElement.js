import React from "react";
import styles from "./css/textarea.module.css";

export default function TextareaElement(props) {
  const {
    inputDesign,
    inputPadding,
    inputplaceholder,
    inputContainer,
    inputLabel,
    lableStyle,
    readOnlyMode = false,
    ...inputProps
  } = props;

  const inputClasses = `${styles[inputDesign]} ${styles[inputPadding]} ${
    readOnlyMode ? styles.readOnlyInput : styles.editableInput
  }`;
  return (
    <>
      <div className={styles[inputContainer]}>
        {inputLabel && (
          <div className={styles.lable_Box}>
            <label className={styles[lableStyle]}>{inputLabel}</label>
          </div>
        )}
        <div className={styles.inputBox}>
          <textarea
            className={inputClasses}
            {...inputProps}
            readOnly={readOnlyMode}
          />
        </div>
      </div>
    </>
  );
}
