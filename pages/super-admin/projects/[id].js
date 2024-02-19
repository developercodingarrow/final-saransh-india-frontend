import React, { useContext } from "react";
import {
  projectDetails,
  ProjectDetailsApi,
  ProjectStatus,
  ProjectUnitsType,
  ProjectPrices,
  ProjectLocation,
  projectArea,
} from "../../../JsonData/formFileds";
import UpdateProject from "../../../Layouts/createProjectLayout/UpdateProject";
import { ProjectContext } from "../../../ContextApi/ProjectContextApi";

import dynamic from "next/dynamic";

const DynamicDashboardLayout = dynamic(
  () => import("../../../Layouts/DashBoardLayout/DashboardLayout"),
  { ssr: false }
);
export default function UpadteProjectPage() {
  const { handelUpadteProject } = useContext(ProjectContext);
  return (
    <DynamicDashboardLayout>
      <UpdateProject
        pageTitle="UPDATE PROJECT"
        projectDetailsFormFiled={projectDetails}
        ProjectDetailsApi={ProjectDetailsApi}
        ProjectStatusFiled={ProjectStatus}
        ProjectUnitsTypeFiled={ProjectUnitsType}
        ProjectPricesFiled={ProjectPrices}
        ProjectLocationFiled={ProjectLocation}
        projectprojectAreaFiled={projectArea}
        handelProjectSubmit={handelUpadteProject}
      />
    </DynamicDashboardLayout>
  );
}
