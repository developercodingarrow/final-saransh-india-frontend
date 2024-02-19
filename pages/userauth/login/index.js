import React, { useContext } from "react";
import AuthLayout from "../../../Layouts/AuthLayOut/AuthLayout";
import AuthFormUi from "../../../components/AuthComponents/AuthFormUi";
import { loginInputs } from "../../../JsonData/authFormFiled";
import { AuthContext } from "../../../ContextApi/AuthContextApi";
import { isAuth } from "../../../Actions/authAction";
import ResTricAuthPage from "../../../private/ResTricAuthPage";

export default function LoginPage() {
  const { handelLogin } = useContext(AuthContext);

  return (
    <>
      <ResTricAuthPage>
        <AuthLayout>
          <AuthFormUi
            formTitle={"Login"}
            btntext="LOGIN"
            formType="LOGIN"
            formdescreption="Log In for Exclusive Features!"
            customInputs={loginInputs}
            handleFormSubmit={handelLogin}
          />
        </AuthLayout>
      </ResTricAuthPage>
    </>
  );
}
