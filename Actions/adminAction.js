import { performAPIAction, performGetAPIAction } from "./performAPIAction";
import { getLoginCookies } from "./authAction";
import { API } from "../config";

const loginToken = getLoginCookies();

export const createAdmin = async (requestData) => {
  const url = `${API}/user/create-admin`;
  const method = "post";
  return performAPIAction(method, url, requestData, loginToken);
};

export const verifyOtp = async (requestData, verifyToken) => {
  const url = `${API}/user/verify-otp/${verifyToken}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

export const allAdmins = async () => {
  const url = `${API}/admins/all-admins`;
  return performGetAPIAction(url, loginToken);
};
