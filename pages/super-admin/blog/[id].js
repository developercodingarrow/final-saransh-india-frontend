import React from "react";
import UpdateBlog from "../../../Layouts/blog/UpdateBlog";

import dynamic from "next/dynamic";

const DynamicDashboardLayout = dynamic(
  () => import("../../../Layouts/DashBoardLayout/DashboardLayout"),
  { ssr: false }
);

export default function UpdateBlogPage() {
  return (
    <DynamicDashboardLayout>
      <UpdateBlog pageTitle="UPDATE BLOG" />
    </DynamicDashboardLayout>
  );
}
