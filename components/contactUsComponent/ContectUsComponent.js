import React, { useContext, useState } from "react";
import styles from "../../Layouts/contactUsLayout/css/contactUsLayout.module.css";
import { contactFormFiled, dummyapi } from "../../JsonData/formFileds";
import { useCustomForm } from "../../custome-hooks/useCustomForm";
import SubmitBtn from "../../Utils/Elements/buttonsElements/SubmitBtn";

export default function ContectUsComponent() {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
    renderInput,
  } = useCustomForm(dummyapi);
  return (
    <div>
      <div className={styles.contactUs_hero}>
        <div className={styles.inner_container}>Contact us</div>
      </div>

      <div className={styles.column_container}>
        <div className={styles.form_Part}>
          <div className={styles.form_descreptionBox}>
            Thank you for your interest in Saranshrealtors Services. Please mail
            us your requirements and your business needs to help us serve you
            better. This information will enable us to route your request to the
            appropriate person. You should receive a response within 48 working
            hours.
          </div>
          <div className={styles.form_container}>
            {[1, 2, 3].map((el, i) => {
              return (
                <div className={styles.contact_infoBox}>
                  <div className={styles.imfo_headingBox}>
                    Our Branch Address Head Office
                  </div>
                  <div className={styles.info_detailBox}>
                    416, Tower 4, DLF Corporate Greens, Sector 74A, Gurgaon –
                    122004
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.sideBar_part}>
          <form>
            <div className={styles.form_inputWrapper}>
              {contactFormFiled.map((input) => renderInput(input))}
            </div>

            <div>
              <SubmitBtn
                text="submit"
                buttonstyle="fullWidthBtn"
                btnColor="primaryBtnColor"
                btnSze="fullWidthBtnSize"
                disabled={!isValid}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
