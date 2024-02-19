import React, { useContext } from "react";
import AuthLayout from "../../../Layouts/AuthLayOut/AuthLayout";
import AuthFormUi from "../../../components/AuthComponents/AuthFormUi";
import { otpVerifation } from "../../../JsonData/authFormFiled";
import { AuthContext } from "../../../ContextApi/AuthContextApi";

export default function OtpVerificationPage() {
  const { handelverifyOtp } = useContext(AuthContext);

  return (
    <>
      <AuthLayout>
        <AuthFormUi
          formTitle={"VERIFY OTP"}
          btntext="Verify OTP"
          formType="OTPVERIFIY"
          formdescreption="Enter you OTP which sent to your E-mail!"
          customInputs={otpVerifation}
          handleFormSubmit={handelverifyOtp}
        />
      </AuthLayout>
    </>
  );
}
