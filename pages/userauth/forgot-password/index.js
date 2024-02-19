import React, { useContext } from "react";
import AuthLayout from "../../../Layouts/AuthLayOut/AuthLayout";
import AuthFormUi from "../../../components/AuthComponents/AuthFormUi";
import { forgotePasswordInputs } from "../../../JsonData/authFormFiled";
import { AuthContext } from "../../../ContextApi/AuthContextApi";

export default function ForgotpasswordPage() {
  const { handelforgotePasswordURL } = useContext(AuthContext);
  return (
    <>
      <AuthLayout>
        <AuthFormUi
          formTitle={"Forgote Password"}
          btntext="Send Email"
          formType="Forgotpassword"
          formdescreption="Enter you E-mail for Re-sent Your Password"
          customInputs={forgotePasswordInputs}
          handleFormSubmit={handelforgotePasswordURL}
        />
      </AuthLayout>
    </>
  );
}
