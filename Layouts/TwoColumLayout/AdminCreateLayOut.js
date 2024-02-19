import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FillterContext } from "../../ContextApi/FillterContext";
import { useRouter } from "next/router";
import styles from "./css/adminCreateLayout.module.css";
import PageHeader from "../DashBoardLayout/PageHeader";
import TableTitle from "../DashBoardLayout/TableTitle";
import FillterBar from "../DashBoardLayout/FillterBar";
import TableWrapper from "../DashBoardLayout/TableWrapper";
import AdminCreateFormCard from "../../Utils/cards/AdminCreateFormCard";
import { SignUpInputs, otpVerifation } from "../../JsonData/authFormFiled";
import { AdminContext } from "../../ContextApi/adminContextApi";
import SucessFullMessageCard from "../../Utils/cards/SucessFullMessageCard";
import { newAdminTableColumn } from "../../JsonData/TableData";
import DynamicTable from "../../Utils/Table/DynimicTable";

export default function AdminCreateLayOut(props) {
  const router = useRouter();
  const { verifyToken } = router.query;
  const { pageForm } = props;

  const [formType, setformType] = useState(pageForm);
  const [loading, setloading] = useState(false);

  const { handelCreateNewUser, handelverifyOtp, admins, handelAllAdmins } =
    useContext(AdminContext);

  const { visibalRows, setvisibalRows } = useContext(FillterContext);

  // handlesubmitForm
  const createNewAdmin = async (data) => {
    try {
      console.log(data);
      const res = await handelCreateNewUser(data);
      console.log(res);
      if (res.data.apiFor === "create-admin") {
        toast.success("create admin sucessfully");
        router.push(
          `/super-admin/admins/admin-otp-verification/${res.data.UrlToken}`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handlesubmitForm
  const handelOTPVerification = async (data) => {
    try {
      const res = await handelverifyOtp(data, verifyToken);
      if (res.data.apiFor === "opt-verification") {
        setformType("complete");
        toast.success("OTP VERIFY SUCESFULLY");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelsuccesBtn = () => {
    setformType("register");
  };

  const renderForm = () => {
    switch (formType) {
      case "register":
        return (
          <AdminCreateFormCard
            formTitle="Register"
            customeInputs={SignUpInputs}
            formType="SINGUP"
            btntext="REGISTER"
            loading={loading}
            handelformSubmit={createNewAdmin}
          />
        );
      case "otp":
        return (
          <AdminCreateFormCard
            formTitle="OPT VERIFICATION"
            customeInputs={otpVerifation}
            formType="OTPVERIFIY"
            btntext="Verify OTP"
            loading={loading}
            handelformSubmit={handelOTPVerification}
          />
        );
      case "complete":
        return (
          <SucessFullMessageCard
            message="Register Succes fully Done"
            handelBox={handelsuccesBtn}
          />
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    handelAllAdmins();
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Toaster />
      <PageHeader pageTitle="Admins" />
      <div className={styles.componentWrapper}>
        <div className={styles.tablePart}>
          <div className={styles.card_wrapper}>
            <TableTitle tableTitle={"admins"} />
            <FillterBar data={admins} />
            <TableWrapper>
              <DynamicTable
                visibalRows={visibalRows}
                tableData={admins}
                tableColumns={newAdminTableColumn}
              />
            </TableWrapper>
          </div>
        </div>
        <div className={styles.formPart}>{renderForm()}</div>
      </div>
    </div>
  );
}
