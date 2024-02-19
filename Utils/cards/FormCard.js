import React from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/formCard.module.css";
import { useCustomForm } from "../../custome-hooks/useCustomForm";
import SubmitBtn from "../Elements/buttonsElements/SubmitBtn";
import CustomeLink from "../Elements/Custome-Link/CustomeLink";

export default function FormCard(props) {
  const {
    title,
    customeInputs = [],
    apiData,
    actionType,
    handelfomSubmit,
    dataFor,
    dynamicData,
  } = props;

  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
    renderInput,
  } = useCustomForm(apiData);

  const handelsubmitForm = async (data) => {
    try {
      console.log(data);
      const res = await handelfomSubmit(data, dataFor);
      console.log(res);
      if (res.data.status === "success") {
        toast.success("sucess");
      } else if (res.data.status === "Error") {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster />
      <div className={styles.card_wrapper}>
        <div className={styles.card_titleBox}>
          <p>{title}</p>
        </div>
        {customeInputs ? (
          <div className={styles.card}>
            <div className={styles.card_body}>
              <form onSubmit={handleSubmit(handelsubmitForm)}>
                <div className={styles.card_input_wrapper}>
                  {customeInputs.map((input) =>
                    renderInput(input, dynamicData)
                  )}
                </div>

                <div className={styles.card_btnBox}>
                  {actionType === "submit" ? (
                    <div>
                      <SubmitBtn
                        text="submit"
                        buttonstyle="fullWidthBtn"
                        btnColor="primaryBtnColor"
                        btnSze="fullWidthBtnSize"
                        disabled={!isValid}
                      />
                    </div>
                  ) : (
                    <div>
                      <CustomeLink
                        reDirectPath="/Edit"
                        text="Edit"
                        linkStyle="linkStyle"
                        linkColor="linkColor"
                        linkSze="linkSize"
                      />{" "}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        ) : (
          <p> test compoentLoading...</p>
        )}
      </div>
    </>
  );
}
