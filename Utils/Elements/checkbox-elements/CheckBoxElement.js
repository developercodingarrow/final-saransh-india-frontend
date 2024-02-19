import React, { useEffect, useState } from "react";
import styles from "./css/checkBoxElement.module.css";

export default function CheckBoxElement(props) {
  const {
    inputLabel,
    onChange,
    checkBoxOptions,
    defaultValue,
    checkBoxStyle,
    checkBoxContainerStyle,
    ...inputProps
  } = props;
  const [checkedOptions, setCheckedOptions] = useState([]);

  useEffect(() => {
    if (defaultValue && defaultValue.length > 0) {
      setCheckedOptions(defaultValue);
      onChange(defaultValue);
    }
  }, [defaultValue]);

  const handleCheckboxChange = (option, isChecked) => {
    const updatedOptions = isChecked
      ? [...checkedOptions, option]
      : checkedOptions.filter((item) => item !== option);

    setCheckedOptions(updatedOptions);
    onChange(updatedOptions);
  };
  return (
    <div className={styles.main_Container}>
      <div className={styles[checkBoxStyle]}>
        <div className={styles.title_box}>
          <p>{inputLabel}</p>
        </div>

        <div className={styles[checkBoxContainerStyle]}>
          {checkBoxOptions.map((option, index) => {
            const isChecked = checkedOptions.includes(option);

            return (
              <label className={styles.label_Box} key={index}>
                <input
                  type="checkbox"
                  value={option}
                  {...inputProps}
                  onChange={(e) =>
                    handleCheckboxChange(option, e.target.checked)
                  }
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
