import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { useRouter } from "next/router";

export const ProjectContext = createContext();
import {
  createNewProject,
  getProjectByID,
  UpdateProjectDeatils,
  getAllProjetcs,
  deleteProject,
  getClientSideProjetcs,
} from "../Actions/projectActions";

import {
  genericDataHandler,
  genericDataAndSlugHandler,
  genericGetByIDHandler,
  genericPagePushHandler,
} from "../Utils/generichandler/generichandler";

export default function ProjectContextApiProvider({ children }) {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [actionLoading, setactionLoading] = useState(false);
  const [allProject, setallProject] = useState([]);
  const [projectData, setProjectData] = useState({});
  const [ProjectThumblin, setProjectThumblin] = useState({});
  const [projectCoverImages, setProjectCoverImages] = useState([]);
  const [peojectFloorPlanImages, setpeojectFloorPlanImages] = useState([]);
  const [toggleAction, settoggleAction] = useState(false);
  const [clientProject, setclientProject] = useState([]);
  const [featureListing, setfeatureListing] = useState([]);
  const [upcomingListing, setupcomingListing] = useState([]);

  const handelnewProject = genericDataHandler(createNewProject);
  const handelUpadteProject = genericDataAndSlugHandler(UpdateProjectDeatils);
  const handelDeleteProject = genericDataHandler(deleteProject);
  const handelAllProjects = async () => {
    try {
      setloading(true); // Set loading state to true before fetching data
      const res = await getAllProjetcs();
      console.log(res);
      setallProject(res.data.result);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false); // Set loading state to false after fetching or encountering an error
    }
  };

  const handelGetProject = async (id) => {
    try {
      setloading(true);
      const res = await getProjectByID(id);
      const project = res.data.result;

      if (res.data.status === "success") {
        setloading(false);
        // Now you can set the project data state
        const unitsData = project.typesofUnits.map((unit) => unit);
        // Extract ProjectCoverImage data
        const projectCoverImagesData = project.ProjectCoverImage || [];
        const projectfloorPlanImagesData = project.floorPlanImages || [];

        setProjectData({
          projectTitle: project.projectTitle || "",
          possession: project.possession || "",
          basicPrice: project.basicPrice || "",
          builder: project.builder || "",
          city: project.city || "",
          unitsNo: project.unitsNo || 0,
          typesofUnits: unitsData,
          projectStatus: project.projectStatus || "",
          price: project.price || "",
          pricePrefix: project.pricePrefix || "",
          city: project.city || "",
          projectLocation: project.projectLocation || "",
          builder: project.builder || "",
          reraNo: project.reraNo || "",
          floors: project.floors || "",
          projectArea: project.projectArea || "",
          basicPrice: project.basicPrice || "",
          projectDescription: project.projectDescription,
          isActive: project.isActive,
          featured: project.featured,
        });

        // Set the ProjectCoverImage data state
        setProjectCoverImages(projectCoverImagesData);
        setpeojectFloorPlanImages(projectfloorPlanImagesData);
        setProjectThumblin(project.ProjectThumblin);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Example usage for view action
  const handelView = (passValue) => {
    genericPagePushHandler(router, "/super-admin/projects", passValue);
  };

  const handelEdit = (passValue) => {
    genericPagePushHandler(router, "/super-admin/projects", passValue);
  };

  const handelClientProjects = async () => {
    try {
      setloading(true); // Set loading state to true before fetching data
      const res = await getClientSideProjetcs();
      console.log(res);
      setclientProject(res.data.result);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false); // Set loading state to false after fetching or encountering an error
    }
  };

  useEffect(() => {
    handelClientProjects();
  }, []);

  const filterProjects = (filterCriteria, limit) => {
    let filteredProjects = [...clientProject];
    let filteredResult;

    if (filterCriteria === "featured") {
      filteredResult = filteredProjects.filter((project) => project.featured);
      setfeatureListing(filteredResult.slice(0, limit));
    } else if (filterCriteria === "upcoming") {
      filteredResult = filteredProjects.filter(
        (project) => project.projectStatus === "upcoming Project"
      );
      setupcomingListing(filteredResult.slice(0, limit));
    }

    return filteredResult.slice(0, limit); // Return filtered result
  };

  useEffect(() => {
    const featuredResult = filterProjects("featured", 3);
    const upcomingResult = filterProjects("upcoming", 3);
  }, [clientProject]);

  return (
    <ProjectContext.Provider
      value={{
        loading,
        setloading,
        handelnewProject,
        handelGetProject,
        projectData,
        projectCoverImages,
        peojectFloorPlanImages,
        ProjectThumblin,
        actionLoading,
        setactionLoading,
        handelUpadteProject,
        handelAllProjects,
        allProject,
        handelView,
        handelEdit,
        handelDeleteProject,
        toggleAction,
        settoggleAction,
        featureListing,
        upcomingListing,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
