import React, { useContext } from "react";
import styles from "./css/enquireyModel.module.css";
import EnquireForm from "../cards/EnquireForm";
import { AppContext } from "../../ContextApi/AppContextApi";
export default function EnquireModel() {
  const {
    handelOpenEnqueryModel,
    handelCloseEnqueryModel,
    IsenqureyModel,
    setIsenqureyModel,
  } = useContext(AppContext);
  return (
    <>
      {IsenqureyModel && (
        <div className={styles.enquery_container}>
          <div className={styles.form_Wrapper}>
            <EnquireForm />
            <span
              className={styles.close_Box}
              onClick={handelCloseEnqueryModel}
            >
              x
            </span>
          </div>
        </div>
      )}
    </>
  );
}
