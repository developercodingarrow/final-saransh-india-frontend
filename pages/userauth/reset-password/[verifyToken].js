import React, { useContext } from "react";
import AuthLayout from "../../../Layouts/AuthLayOut/AuthLayout";
import AuthFormUi from "../../../components/AuthComponents/AuthFormUi";
import { resetpasswordInputs } from "../../../JsonData/authFormFiled";
import { AuthContext } from "../../../ContextApi/AuthContextApi";

export default function ResetPasswordPage() {
  const { handelResetPasword } = useContext(AuthContext);

  return (
    <>
      <AuthLayout>
        <AuthFormUi
          formTitle={"RESET Password"}
          btntext="RESET PASSWORD"
          formType="RESETPASSWORD"
          formdescreption="Enter you NEW PASSWORD"
          customInputs={resetpasswordInputs}
          handleFormSubmit={handelResetPasword}
        />
      </AuthLayout>
    </>
  );
}
