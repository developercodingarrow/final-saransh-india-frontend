import React, { useContext } from "react";
import AuthLayout from "../../../Layouts/AuthLayOut/AuthLayout";
import AuthFormUi from "../../../components/AuthComponents/AuthFormUi";
import { SignUpInputs } from "../../../JsonData/authFormFiled";
import { AuthContext } from "../../../ContextApi/AuthContextApi";

export default function UserRegistrationPage() {
  const { handelCreateNewUser } = useContext(AuthContext);

  return (
    <>
      <AuthLayout>
        <AuthFormUi
          formTitle={"SING UP"}
          btntext="REGISTER"
          formType="SINGUP"
          formdescreption="Create an Account for Exclusive  Access!"
          customInputs={SignUpInputs}
          handleFormSubmit={handelCreateNewUser}
        />
      </AuthLayout>
    </>
  );
}
