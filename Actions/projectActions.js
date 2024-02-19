import {
  performAPIAction,
  performGetAPIAction,
  ImageAPIAction,
} from "./performAPIAction";

import { getLoginCookies } from "./authAction";
import { API } from "../config";

const loginToken = getLoginCookies();

// API for CREATE NEW USER
export const createNewProject = async (requestData) => {
  const url = `${API}/project/create-project`;
  const method = "post";
  return performAPIAction(method, url, requestData, loginToken);
};

export const getProjectByID = async (id) => {
  const url = `${API}/project/get-single-project/${id}`;
  return performGetAPIAction(url, loginToken);
};

export const getHomePageProjetcs = async () => {
  const url = `${API}/project/get-home-page-projects`;
  return performGetAPIAction(url);
};

export const getClientSideProjetcs = async () => {
  const url = `${API}/project/get-client-side-projects`;
  return performGetAPIAction(url);
};

export const getAllProjetcs = async () => {
  const url = `${API}/project/get-all-projects`;
  return performGetAPIAction(url, loginToken);
};

export const fillterdProjetcs = async (queryObj) => {
  const query = new URLSearchParams(queryObj);
  const url = `${API}/project/fillter-projects?${query}`;
  return performGetAPIAction(url);
};

export const uiProjectByID = async (slug) => {
  const url = `${API}/project/get-project/${slug}`;
  return performGetAPIAction(url);
};

export const deleteProject = async (requestData) => {
  const data = {
    id: requestData,
  };
  const url = `${API}/project/delete-project`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const updateFeatureProject = async (projectId) => {
  const data = {};
  const url = `${API}/project/update-feature-project/${projectId}`;
  const method = "patch";
  return performAPIAction(method, url, data, loginToken);
};

export const updateUpcomingProject = async (projectId) => {
  const data = {};
  const url = `${API}/project/update-upcoming-project/${projectId}`;
  const method = "patch";
  return performAPIAction(method, url, data, loginToken);
};

export const isActiveProject = async (projectId) => {
  const data = {};
  const url = `${API}/project/update-is-active/${projectId}`;
  const method = "patch";
  return performAPIAction(method, url, data, loginToken);
};

export const ProjectUploadThumblin = async (formData, id) => {
  console.log(id);
  const url = `${API}/project/update-project-thumblin/${id}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, loginToken);
};

export const ProjectUploadCoverImages = async (formData, id) => {
  console.log(id);
  const url = `${API}/project/update-project-cover-images/${id}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, loginToken);
};

export const ProjectFloorPlanImages = async (formData, id) => {
  console.log(id);
  const url = `${API}/project/update-project-floor-plan-images/${id}`;
  const method = "patch";
  return ImageAPIAction(method, url, formData, loginToken);
};

export const deleteProjectCoverImages = async (id, projectId) => {
  console.log(id);
  const data = {
    imageId: id,
  };
  const url = `${API}/project/delete-cover-image/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const deleteProjectFloorPlanImages = async (id, projectId) => {
  console.log(id);
  const data = {
    imageId: id,
  };
  const url = `${API}/project/delete-floor-plan-image/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const deleteProjectThumblinImages = async (id, projectId) => {
  console.log(id);
  const data = {};
  const url = `${API}/project/delete-project-thumblin/${projectId}`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const UpdateProjectDeatils = async (requestData, projectId) => {
  console.log(requestData);
  const url = `${API}/project/update-project/${projectId}`;
  const method = "patch";
  return performAPIAction(method, url, requestData, loginToken);
};
