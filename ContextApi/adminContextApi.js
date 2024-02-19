import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const AdminContext = createContext();
import { createAdmin, verifyOtp, allAdmins } from "../Actions/adminAction";

import {
  genericDataHandler,
  genericDataAndSlugHandler,
} from "../Utils/generichandler/generichandler";

export default function AdminContextApiProvider({ children }) {
  const [admins, setadmins] = useState([]);
  const handelCreateNewUser = genericDataHandler(createAdmin);
  // VERIFY OTP
  const handelverifyOtp = genericDataAndSlugHandler(verifyOtp);

  const handelAllAdmins = async () => {
    try {
      const res = await allAdmins();
      setadmins(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminContext.Provider
      value={{ handelCreateNewUser, handelverifyOtp, handelAllAdmins, admins }}
    >
      {children}
    </AdminContext.Provider>
  );
}
