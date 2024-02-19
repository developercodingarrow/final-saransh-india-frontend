import React from "react";
import styles from "./css/clickBtn.module.css";
import { BsFillCloudUploadFill } from "../../ApplicationIcon";

export default function ClickBtn(props) {
  const { handelClick, btnText, icon, btnDesign, buttonPadding } = props;

  let IconComponent = null;

  if (icon === "delete") {
    IconComponent = <MdDelete />;
  } else if (icon === "edit") {
    IconComponent = <MdEdit />;
  } else if (icon === "upload") {
    IconComponent = <BsFillCloudUploadFill />;
  }

  const buttonClasses = `${styles[btnDesign]} ${styles[buttonPadding]}`;

  return (
    <button onClick={handelClick} className={buttonClasses}>
      {IconComponent && <span>{IconComponent}</span>}
      {btnText && <span>{btnText}</span>}
    </button>
  );
}
