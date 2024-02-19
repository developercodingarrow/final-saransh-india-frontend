import React, { useContext, useState } from "react";
import styles from "./css/projectList.module.css";
import { useRouter } from "next/router";
import { ProjectContext } from "../../ContextApi/ProjectContextApi";
import DynamicTable from "../../Utils/Table/DynimicTable";
import { FillterContext } from "../../ContextApi/FillterContext";
import Model from "../../Utils/model/Model";
import { AppContext } from "../../ContextApi/AppContextApi";
import PageHeader from "../DashBoardLayout/PageHeader";
import TableTitle from "../DashBoardLayout/TableTitle";
import FillterBar from "../DashBoardLayout/FillterBar";

export default function ProjectList(props) {
  const router = useRouter();
  const { isModalOpen, setIsModalOpen, handleOpenModal, handleCloseModal } =
    useContext(AppContext);

  const { handelnewProject, handelView, handelDeleteProject } =
    useContext(ProjectContext);

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

  const handelNewProjectCreate = async () => {
    try {
      const res = await handelnewProject({});
      console.log(res);
      if (res.data.status === "success") {
        router.push(`/super-admin/projects/${res.data.result._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tableData);

  return (
    <>
      <Model
        title="Your Modal Title"
        description="Your modal description goes here."
        onYesClick={handelDeleteProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {tableData ? (
        <div className={styles.mainContainer}>
          <PageHeader
            pageTitle="Products"
            handelCreate={handelNewProjectCreate}
            btnText="Create Project"
          />
          <div className={styles.componentWrapper}>
            <div className={styles.tablePart}>
              <div className={styles.card_wrapper}>
                <TableTitle tableTitle="PROJECT LIST" />
                <FillterBar data={tableData} />
                <div className={styles.card}>
                  <div className={styles.tableContainer}>
                    <div>
                      {tableData && (
                        <DynamicTable
                          visibalRows={visibalRows}
                          tableData={tableData}
                          tableColumns={tableColumn}
                          handelViewAction={handelView}
                          handelbtnAction={handleOpenModal}
                          folderPath="project-thumblin"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
}
