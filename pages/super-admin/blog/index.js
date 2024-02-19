import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import BlogList from "../../../Layouts/blog/BlogList";
import {
  blogData,
  blogDataColoum,
  SuperAdminColum,
} from "../../../JsonData/TableData";
import { BlogContext } from "../../../ContextApi/BlogContextApi";
import TwoCloumTableForm from "../../../Layouts/TwoColumLayout/TwoCloumTableForm";

import dynamic from "next/dynamic";

const DynamicDashboardLayout = dynamic(
  () => import("../../../Layouts/DashBoardLayout/DashboardLayout"),
  { ssr: false }
);

export default function BlogListPage() {
  const router = useRouter();
  const {
    handelnewBlog,
    handelAllBlogs,
    allblogs,
    handelView,
    handelEdit,
    handelDeleteBlog,
    toggleAction,
  } = useContext(BlogContext);

  useEffect(() => {
    handelAllBlogs();
  }, [toggleAction]);

  const handelCreateNew = async () => {
    try {
      const res = await handelnewBlog({});
      if (res.data.status === "success") {
        router.push(`/super-admin/blog/${res.data.result._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DynamicDashboardLayout>
      <TwoCloumTableForm
        pageTitle="Product"
        tableTitle="Product List"
        tableData={allblogs}
        tableColumn={blogDataColoum}
        SuperAdminColum={SuperAdminColum}
        sideForm={false}
        createNewBtn="Create New Blog"
        createNew={handelCreateNew}
        viewAction={handelView}
        editAction={handelEdit}
        modelYesAct={handelDeleteBlog}
        folderPath="blog-images"
      />
    </DynamicDashboardLayout>
  );
}
