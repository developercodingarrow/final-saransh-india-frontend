import React, { useContext } from "react";
import styles from "./css/createPtojectLayout.module.css";
import FormCard from "../../Utils/cards/FormCard";
import { ProjectContext } from "../../ContextApi/ProjectContextApi";

export default function CreateProjectLayout(props) {
  const { handelnewProject } = useContext(ProjectContext);
  const {
    pageTitle,
    ProjectDetailsApi,
    projectDetailsFormFiled,
    handelProjectSubmit,
  } = props;

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>{pageTitle}</div>

        <div className={styles.componentWarper}>
          <div className={styles.left_Side}>
            <FormCard
              title="Project Details"
              customeInputs={projectDetailsFormFiled}
              apiData={ProjectDetailsApi}
              actionType="submit"
              handelfomSubmit={handelProjectSubmit}
            />
          </div>
          <div className={styles.right_Side}></div>
        </div>
      </div>
    </>
  );
}
