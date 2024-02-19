import { performAPIAction, performGetAPIAction } from "./performAPIAction";
import { getLoginCookies } from "./authAction";
import { API } from "../config";
const loginToken = getLoginCookies();
// API for CREATE NEW USER
export const createNewBuilder = async (requestData) => {
  const url = `${API}/builder/create-builder`;
  const method = "post";
  return performAPIAction(method, url, requestData, loginToken);
};

export const deleteBuilder = async (requestData) => {
  const data = {
    id: requestData,
  };
  const url = `${API}/builder/delete-builder`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const allBuilder = async () => {
  const url = `${API}/builder/all-builders`;
  return performGetAPIAction(url);
};
