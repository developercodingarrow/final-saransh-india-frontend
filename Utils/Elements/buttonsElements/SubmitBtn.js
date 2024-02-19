import React from "react";
import styles from "./css/submitBtn.module.css";
import LoadingSpinner from "../Loading/Loading";

export default function SubmitBtn(props) {
  const {
    text,
    buttonstyle,
    btnColor,
    btnSze,
    disabled = false,
    loading,
  } = props;

  const buttonClasses = `${styles[buttonstyle]} ${styles[btnColor]} ${styles[btnSze]}`;
  const disableBtn = `${styles.disableStyle}`;

  const btnStyle = disabled ? disableBtn : buttonClasses;

  return (
    <>
      <div>
        <button type="submit" className={btnStyle} disabled={disabled}>
          {loading ? <LoadingSpinner /> : `${text}`}
        </button>
      </div>
    </>
  );
}
