import { performAPIAction, performGetAPIAction } from "./performAPIAction";
import { getLoginCookies } from "./authAction";
import { API } from "../config";

const loginToken = getLoginCookies();

// API for CREATE NEW USER
export const createNewCity = async (requestData) => {
  const url = `${API}/city/create-city`;
  const method = "post";
  return performAPIAction(method, url, requestData, loginToken);
};

export const deleteCity = async (requestData) => {
  const data = {
    id: requestData,
  };
  const url = `${API}/city/delete-city`;
  const method = "DELETE";
  return performAPIAction(method, url, data, loginToken);
};

export const allCity = async () => {
  const url = `${API}/city/all-cites`;
  return performGetAPIAction(url);
};
