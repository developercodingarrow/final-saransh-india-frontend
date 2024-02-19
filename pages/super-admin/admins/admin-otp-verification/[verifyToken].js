import React from "react";
import AdminCreateLayOut from "../../../../Layouts/TwoColumLayout/AdminCreateLayOut";
import dynamic from "next/dynamic";

const DynamicDashboardLayout = dynamic(
  () => import("../../../../Layouts/DashBoardLayout/DashboardLayout"),
  { ssr: false }
);

export default function AdminOTPVerification() {
  return (
    <DynamicDashboardLayout>
      <AdminCreateLayOut pageForm="otp" />
    </DynamicDashboardLayout>
  );
}
