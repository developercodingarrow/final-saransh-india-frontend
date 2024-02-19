import React from "react";
import dynamic from "next/dynamic";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
import AdminAuth from "../../private/AdminAuth";
const DynamicDashBoardStatsLayout = dynamic(
  () => import("../../Layouts/TwoColumLayout/DashBoardStatsLayout"),
  { ssr: false }
);

export default function SuperAdminDashBoardPage() {
  return (
    <AdminAuth>
      <DashboardLayout>
        <DynamicDashBoardStatsLayout />
      </DashboardLayout>
    </AdminAuth>
  );
}
