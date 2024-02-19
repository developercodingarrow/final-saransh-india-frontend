import React from "react";
import useCustomeAuthFormLogic from "../../custome-hooks/useCustomeAuthFormLogic";
import styles from "./css/admincreateform.module.css";
import SubmitBtn from "../Elements/buttonsElements/SubmitBtn";

export default function AdminCreateFormCard(props) {
  const {
    formTitle,
    customeInputs,
    formType,
    btntext,
    loading,
    handelformSubmit,
  } = props;

  const {
    handleSubmit,
    formState,
    control,
    watch,
    renderInput,
    updatedInputs,
    isValid,
    errors,
  } = useCustomeAuthFormLogic(customeInputs, formType);

  const handleForm = (data) => {
    handelformSubmit(data);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h4 className={styles.form_heading}>{formTitle}</h4>
      </div>
      <div className={styles.form_Wrapper}>
        <form onSubmit={handleSubmit(handleForm)}>
          {updatedInputs.map((input) => (
            <div key={input.id}>
              {renderInput(input)}
              {errors[input.name] && (
                <p className={"error_Msg"}>{errors[input.name].message}</p>
              )}
            </div>
          ))}

          <SubmitBtn
            text={btntext}
            buttonstyle="fullWidthBtn"
            btnColor="primaryBtnColor"
            btnSze="fullWidthBtnSize"
            disabled={!isValid}
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
}
