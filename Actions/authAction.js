import { performAPIAction } from "./performAPIAction";
import Cookies from "js-cookie";
import CryptoJS from "crypto-js";
import { API } from "../config";

// Define the encryption key and data to be encrypted
const encryptionKey = "my-secret-key";

export const setLoginCookies = (key, value) => {
  const expirationInSeconds = 36000;
  Cookies.set(key, value);
};

export const getLoginCookies = (key) => {
  return Cookies.get("jwt");
};

// set token in LocalStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

export const authenticate = (data, token, cb) => {
  const userData = JSON.stringify(data);
  // Encrypt the data using AES encryption
  const encryptedData = CryptoJS.AES.encrypt(
    userData,
    encryptionKey
  ).toString();

  setLocalStorage("user", encryptedData);
  setLoginCookies("jwt", token);

  cb();
};

// DESTRUCTURE Encipted DATA
export const getEncryptedData = (encryptedUserData) => {
  try {
    if (encryptedUserData) {
      const bytes = CryptoJS.AES.decrypt(encryptedUserData, encryptionKey);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      // Check if decrypted data is empty
      if (!decryptedData) {
        return null;
      }

      const userData = JSON.parse(decryptedData);
      return userData;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

// Authentication
export const isAuth = () => {
  if (process.browser) {
    const cookichecked = getLoginCookies("jwt");
    if (cookichecked) {
      if (localStorage.getItem("user")) {
        return getEncryptedData(JSON.parse(localStorage.getItem("user")));
      } else {
        return false;
      }
    }
  }
};

export const logOut = () => {
  Cookies.remove("jwt");
  if (process.browser) {
    localStorage.removeItem("jwt");
  }
};

// API FOR LOGIN ACCOUNT
export const loginAccount = async (requestData, token) => {
  const url = `${API}/user/login`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// API for CREATE NEW USER
export const createNewUser = async (requestData) => {
  const url = `${API}/user/sing-up`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// API FOR OTP VERIFICATION
export const verifyOtp = async (requestData, verifyToken) => {
  const url = `${API}/user/verify-otp/${verifyToken}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// API FOR forgotePasswordURL TO SEND EMAIL
export const forgotePasswordURL = async (requestData) => {
  const url = `${API}/user/forgot-password`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};

// API FOR OTP RESETPASSWORD
export const resetPassword = async (requestData, verifyToken) => {
  const url = `${API}/user/reset-password/${verifyToken}`;
  const method = "post";
  return performAPIAction(method, url, requestData);
};
