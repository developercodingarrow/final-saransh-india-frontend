import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import styles from "./css/authFormui.module.css";
import useCustomeAuthFormLogic from "../../custome-hooks/useCustomeAuthFormLogic";
import SubmitBtn from "../../Utils/Elements/buttonsElements/SubmitBtn";
import CustomeLink from "../../Utils/Elements/Custome-Link/CustomeLink";
import { AuthContext } from "../../ContextApi/AuthContextApi";
import { authenticate } from "../../Actions/authAction";

export default function AuthFormUi(props) {
  const router = useRouter();
  const { verifyToken } = router.query;
  const { loading, setloading } = useContext(AuthContext);
  // Props
  const {
    formTitle,
    customInputs,
    btntext,
    formType,
    formdescreption,
    handleFormSubmit,
  } = props;

  // Form useForm Logic
  const {
    handleSubmit,
    formState,
    control,
    watch,
    renderInput,
    updatedInputs,
    isValid,
    errors,
  } = useCustomeAuthFormLogic(customInputs, formType);

  // handlesubmitForm
  const handleForm = async (data) => {
    try {
      setloading(true);
      const result = verifyToken
        ? await handleFormSubmit(data, verifyToken)
        : await handleFormSubmit(data);
      setloading(false);
      if (result.data.apiFor === "register") {
        router.push(`/userauth/verify-otp/${result.data.UrlToken}`);
        setloading(false);
      }

      if (result.data.apiFor === "opt-verification") {
        setloading(false);
        router.push("/");
      }

      if (result.data.apiFor === "Login") {
        authenticate(result.data.user, result.data.token, () => {
          router.push("/super-admin");
          setloading(false);
        });
      }

      if (result.data.apiFor === "forgatePassword") {
        setloading(false);
      }

      if (result.data.status === "Error" || result.data.status === "Fails") {
        toast.error(result.data.message);
      }
    } catch (error) {
      setloading(false);
      console.log(error);
      toast.error("This didn't work.");
    }
  };

  console.log(verifyToken);

  return (
    <>
      <Toaster />
      <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <h4 className={styles.form_heading}>{formTitle}</h4>
            <p className={styles.form_descreption}>{formdescreption}</p>
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

              {formType === "LOGIN" && (
                <div className={styles.forgote_Password}>
                  <CustomeLink
                    reDirectPath="/userauth/forgot-password"
                    text="forgate password"
                    linkStyle="linkStyle"
                    linkColor="linkColor"
                    linkSze="linkSize"
                  />
                </div>
              )}
              <div className={styles.SubmitbtnBox}>
                <SubmitBtn
                  text={btntext}
                  buttonstyle="fullWidthBtn"
                  btnColor="primaryBtnColor"
                  btnSze="fullWidthBtnSize"
                  disabled={!isValid}
                  loading={loading}
                />
              </div>
            </form>
          </div>
          <div>
            {formType === "SINGUP" && (
              <div className={styles.singup_linkBox}>
                <span>Don't have an account ? </span>{" "}
                <span>
                  <CustomeLink
                    reDirectPath="/userauth/login"
                    text="Login"
                    linkStyle="linkStyle"
                    linkColor="linkColor"
                    linkSze="linkSize"
                  />{" "}
                </span>
              </div>
            )}

            {formType === "LOGIN" && (
              <div className={styles.singup_linkBox}>
                <span>Don't have an account ? </span>{" "}
                <span>
                  <CustomeLink
                    reDirectPath="/userauth/user-registration"
                    text="SING UP"
                    linkStyle="linkStyle"
                    linkColor="linkColor"
                    linkSze="linkSize"
                  />{" "}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
