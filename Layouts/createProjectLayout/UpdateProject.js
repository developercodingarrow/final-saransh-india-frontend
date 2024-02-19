import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./css/createPtojectLayout.module.css";
import FormCard from "../../Utils/cards/FormCard";
import { ProjectContext } from "../../ContextApi/ProjectContextApi";
import { CityContext } from "../../ContextApi/CityContextApi";
import { BuilderContext } from "../../ContextApi/BuilderContextApi";
import SingleImageUplaod from "../../Utils/ImagesElements/Single-image-upload/SingleImageUplaod";
import {
  handelUploadThumblin,
  handelUploadProjectCoverImages,
  handelDeleteCoverImage,
  handelUploadFloorPlanImages,
  handelDeleteFloorImage,
  handelDeleteThumblinImage,
} from "../../Utils/ImagesElements/imageHandlers";
import ImageGallery from "../../Utils/ImagesElements/image-gallery/ImageGallery";
import TextEditorReactQuill from "../../Utils/textEditor/TextEditorReactQuill";
import SwitchBtn from "../../Utils/Elements/buttonsElements/SwitchBtn";
import {
  updateFeatureProject,
  isActiveProject,
  updateUpcomingProject,
} from "../../Actions/projectActions";
import {
  blogtitleFiled,
  BlogDetailsApi,
  metaescription,
} from "../../JsonData/formFileds";
import ChipInput from "../../Utils/Elements/inputs-elements/ChipInput";

export default function UpdateProject(props) {
  const router = useRouter();
  const { id } = router.query;
  const { allCites, handelAllCites } = useContext(CityContext);
  const { allBuilders, handelAllBuilder } = useContext(BuilderContext);
  const {
    loading,
    setloading,
    handelGetProject,
    projectData,
    projectCoverImages,
    peojectFloorPlanImages,
    ProjectThumblin,
    actionLoading,
    setactionLoading,
    handelUpadteProject,
    toggleAction,
    settoggleAction,
  } = useContext(ProjectContext);
  const {
    pageTitle,
    ProjectDetailsApi,
    projectDetailsFormFiled,
    ProjectStatusFiled,
    ProjectUnitsTypeFiled,
    ProjectPricesFiled,
    ProjectLocationFiled,
    projectprojectAreaFiled,
    handelProjectSubmit,
  } = props;

  useEffect(() => {
    handelGetProject(id);
    handelAllCites();
    handelAllBuilder();
  }, [id, toggleAction]);

  console.log(projectData);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageTopBar}>
          <div className={styles.pageTitle}>{pageTitle}</div>
          <div className={styles.swicth_btnContainer}>
            <div className={styles.switchBtn_warpper}>
              <span>Feature</span>
              <span>
                {projectData && (
                  <SwitchBtn
                    btnSatus={projectData.featured}
                    dataId={id}
                    handelToggel={updateFeatureProject}
                  />
                )}
              </span>
            </div>
            <div className={styles.switchBtn_warpper}>
              <span>status</span>
              <span>
                {projectData && (
                  <SwitchBtn
                    btnSatus={projectData.isActive}
                    dataId={id}
                    handelToggel={isActiveProject}
                  />
                )}
              </span>
            </div>

            <div className={styles.switchBtn_warpper}>
              <span>Upcoming</span>
              <span>
                {projectData && (
                  <SwitchBtn
                    btnSatus={projectData.upcoming}
                    dataId={id}
                    handelToggel={updateUpcomingProject}
                  />
                )}
              </span>
            </div>
          </div>
        </div>

        {Object.keys(projectData).length > 0 && (
          <div className={styles.componentWarper}>
            <div className={styles.left_Side}>
              <div>
                <FormCard
                  title="Project Details"
                  customeInputs={projectDetailsFormFiled}
                  apiData={projectData}
                  actionType="submit"
                  handelfomSubmit={handelProjectSubmit}
                  dataFor={id}
                  dynamicData={allBuilders}
                />
              </div>

              <div>
                <FormCard
                  title="Project AREA Details"
                  customeInputs={projectprojectAreaFiled}
                  apiData={projectData}
                  actionType="submit"
                  handelfomSubmit={handelProjectSubmit}
                  dataFor={id}
                />
              </div>

              <div>
                <FormCard
                  title="Project Price Details"
                  customeInputs={ProjectPricesFiled}
                  apiData={projectData}
                  actionType="submit"
                  handelfomSubmit={handelProjectSubmit}
                  dataFor={id}
                />
              </div>

              <div>
                {allCites.length > 0 && (
                  <FormCard
                    title="Select City"
                    customeInputs={ProjectLocationFiled}
                    apiData={projectData}
                    actionType="submit"
                    handelfomSubmit={handelProjectSubmit}
                    dataFor={id}
                    dynamicData={allCites}
                  />
                )}
              </div>

              <div>
                <TextEditorReactQuill
                  handeSubmit={handelUpadteProject}
                  dataFor={id}
                  updateFiled="projectDescription"
                  defultvalue={projectData.projectDescription}
                />
              </div>

              <div>
                <FormCard
                  title="Meta Decreption"
                  customeInputs={metaescription}
                  apiData={projectData}
                  actionType="submit"
                  handelfomSubmit={handelProjectSubmit}
                  dataFor={id}
                />
              </div>

              <div>
                <ChipInput
                  title="Keywords"
                  handeSubmit={handelProjectSubmit}
                  dataFor={id}
                  updateFiled="keywords"
                  apiData={projectData.keywords}
                />
              </div>
            </div>

            <div className={styles.right_Side}>
              <div>
                <SingleImageUplaod
                  title="Upload Thumblin"
                  handelfomSubmit={handelUploadThumblin}
                  dataFor={id}
                  singleImage={ProjectThumblin}
                  folderPath="project-thumblin"
                  deleteAction={handelDeleteThumblinImage}
                  loading={actionLoading}
                  setloading={setactionLoading}
                  refreshstate={toggleAction}
                  setRefresh={settoggleAction}
                  updateFiled="ProjectThumblin"
                />
              </div>
              <div>
                <ImageGallery
                  title="Upload Cover Images"
                  handelfomSubmit={handelUploadProjectCoverImages}
                  dataFor={id}
                  apiImages={projectCoverImages}
                  deletAction={handelDeleteCoverImage}
                  loading={actionLoading}
                  setloading={setactionLoading}
                  imageFor="ProjectCoverImage"
                  refreshstate={toggleAction}
                  setRefresh={settoggleAction}
                />
              </div>

              <div>
                <ImageGallery
                  title="Upload Floor Plan"
                  handelfomSubmit={handelUploadFloorPlanImages}
                  dataFor={id}
                  apiImages={peojectFloorPlanImages}
                  deletAction={handelDeleteFloorImage}
                  loadingAction={loading}
                  setloading={setloading}
                  imageFor="floorPlanImages"
                  refreshstate={toggleAction}
                  setRefresh={settoggleAction}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
