import React from "react";
import { useRouter } from "next/router";
import styles from "./css/sucessMessageCard.module.css";
import { IoCheckmarkCircleSharp } from "../ApplicationIcon";
import ActionBtn from "../Elements/buttonsElements/ActionBtn";

export default function SucessFullMessageCard(props) {
  const { message, handelBox } = props;

  return (
    <div className={`${styles.formContainer} ${styles.successBox}`}>
      <div className={styles.suces_iconBox}>
        <IoCheckmarkCircleSharp />
      </div>
      <div className="global_contentStyle">{message}</div>
      <div>
        <ActionBtn
          label="Done"
          btnDesign="cardEnqueryBtn"
          buttonPadding="doneBtnPadding"
          onClick={handelBox}
        />
      </div>
    </div>
  );
}
