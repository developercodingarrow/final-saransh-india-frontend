import React, { useContext } from "react";
import styles from "./css/blogList.module.css";
import { useRouter } from "next/router";
import { BlogContext } from "../../ContextApi/BlogContextApi";
import DynamicTable from "../../Utils/Table/DynimicTable";
import { FillterContext } from "../../ContextApi/FillterContext";
import PageHeader from "../DashBoardLayout/PageHeader";
import TableTitle from "../DashBoardLayout/TableTitle";
import FillterBar from "../DashBoardLayout/FillterBar";
import TableWrapper from "../DashBoardLayout/TableWrapper";

export default function BlogList(props) {
  const { visibalRows, setvisibalRows } = useContext(FillterContext);
  const {
    pageTitle,
    tableTitle,
    formTitle,
    formFields,
    apiData,
    forAction,
    tableColumn,
    tableData,
    SuperAdminColum,
  } = props;

  const router = useRouter();
  const { handelnewBlog } = useContext(BlogContext);

  const handelNewBlogCreate = async () => {
    try {
      const res = await handelnewBlog({});
      if (res.data.status === "success") {
        router.push(`/super-admin/blog/${res.data.result._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelView = () => {};

  return (
    <>
      <div className={styles.mainContainer}>
        <PageHeader
          pageTitle="Blog"
          handelCreate={handelNewBlogCreate}
          btnText="Create Blog"
        />
        <div className={styles.componentWrapper}>
          <div className={styles.tablePart}>
            <div className={styles.card_wrapper}>
              <TableTitle tableTitle="BLOG LIST" />
              <FillterBar />
              <TableWrapper>
                {tableData && (
                  <DynamicTable
                    visibalRows={visibalRows}
                    tableData={tableData}
                    tableColumns={tableColumn}
                    handelViewAction={handelView}
                    handelbtnAction={handelView}
                    folderPath="blog-images"
                  />
                )}
              </TableWrapper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
