import React, { useContext } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/enquireyForm.module.css";
import { enquireyFormFiled, dummyapi } from "../../JsonData/formFileds";
import { useCustomForm } from "../../custome-hooks/useCustomForm";
import SubmitBtn from "../Elements/buttonsElements/SubmitBtn";
import { EnquireyContext } from "../../ContextApi/enquireyContectApi";

export default function EnquireForm() {
  const router = useRouter();

  const { handelnewEnquirey } = useContext(EnquireyContext);
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
    watch,
    setValue,
    renderInput,
  } = useCustomForm(dummyapi);

  const pathParts = router.asPath.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  const handelEnquirey = async (data) => {
    try {
      const formData = {
        ...data,
        enquryPath: lastPart, // Include lastPart in formData
      };
      const res = await handelnewEnquirey(formData);

      if (res.data.status === "success") {
        toast.success("Thank You for your Enquirey");
      } else if (res.data.status === "Error") {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Toaster />
      <div className={styles.main_container}>
        <div className={styles.form_heading}>
          <p className={"global_subHeading"}>Enquirey Now</p>
        </div>
        <form onSubmit={handleSubmit(handelEnquirey)}>
          <div>{enquireyFormFiled.map((input) => renderInput(input))}</div>

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
    </>
  );
}
