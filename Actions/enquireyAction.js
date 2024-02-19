import { performAPIAction, performGetAPIAction } from "./performAPIAction";
import { getLoginCookies } from "./authAction";
import { API } from "../config";
const loginToken = getLoginCookies();

// API for CREATE NEW USER
export const createNewEnquirey = async (requestData) => {
  const url = `${API}/enquiry/create-enquire`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const allEnquire = async () => {
  const url = `${API}/enquiry/all-enquirey`;
  return performGetAPIAction(url, loginToken);
};

export const deleteEnquire = async (requestData) => {
  const data = {
    id: requestData,
  };
  const url = `${API}/enquiry/delete-enquery`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};
