import React, { useContext, useState } from "react";
import styles from "./css/model.module.css";
import { AppContext } from "../../ContextApi/AppContextApi";
export default function Model({
  title,
  description,
  onYesClick,
  isOpen,
  onClose,
}) {
  const { modelPassData, setmodelPassData, isModalOpen, setIsModalOpen } =
    useContext(AppContext);

  const handelYes = async () => {
    try {
      const res = await onYesClick(modelPassData);
      console.log(res);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handelNo = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.modalContainer} onClick={onClose}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.contentContainer}>
              <h2>{title}</h2>
              <p>{description}</p>
              <p>{modelPassData}</p>
            </div>

            <div className={styles.buttonContainer}>
              <button className={styles.yesButton} onClick={handelYes}>
                Yes
              </button>
              <button className={styles.noButton} onClick={handelNo}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
