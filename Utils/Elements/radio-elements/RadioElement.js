import React from "react";
import styles from "./css/radioElement.module.css";

export default function RadioElement(props) {
  const {
    radioOptions,
    onChange,
    selectedOption,
    radiostyle,
    radioTitleGap,
    radio_textgap,
    radioOptionBox,
    inputLabel,
  } = props;

  const handleRadioChange = (option) => {
    onChange(option);
  };

  const radioContainer = `${styles[radiostyle]} ${styles[radioTitleGap]}`;
  return (
    <div className={radioContainer}>
      <div className={styles.radio_title}>{inputLabel}</div>
      <div className={styles[radioOptionBox]}>
        {radioOptions.map((option, index) => (
          <div
            className={`${styles.radioOption} ${
              selectedOption === option ? styles.selected : ""
            }`}
            key={index}
            onClick={() => handleRadioChange(option)}
          >
            <div className={`${styles.outerCircle} ${styles.selected}`}>
              {selectedOption === option && (
                <div className={`${styles.innerDot} ${styles.selected}`}></div>
              )}
            </div>
            <div className={styles[radio_textgap]}>
              {" "}
              <label>{option}</label>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
