import React from "react";
import styles from "./css/actionBtn.module.css";
import { MdDelete, CiEdit } from "../../ApplicationIcon";

export default function ActionBtn({
  label,
  icon,
  onClick,
  btnDesign,
  buttonPadding,
  itemId,
}) {
  let IconComponent = null;

  if (icon === "delete") {
    IconComponent = <MdDelete />;
  } else if (icon === "edit") {
    IconComponent = <MdEdit />;
  }

  const buttonClasses = `${styles[btnDesign]} ${styles[buttonPadding]}`;
  return (
    <>
      <div className={styles.Btnwrapper}>
        <button onClick={() => onClick(itemId)} className={buttonClasses}>
          {IconComponent && <span>{IconComponent}</span>}
          {label && <span>{label}</span>}
        </button>
      </div>
    </>
  );
}
