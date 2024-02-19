import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

export const AuthContext = createContext();
import {
  createNewUser,
  verifyOtp,
  loginAccount,
  forgotePasswordURL,
  resetPassword,
} from "../Actions/authAction";

import {
  genericDataHandler,
  genericDataAndSlugHandler,
} from "../Utils/generichandler/generichandler";

export default function AuthContextApiProvider({ children }) {
  const [loading, setloading] = useState(false);

  // LOGIN
  const handelLogin = genericDataHandler(loginAccount);
  // SING UP
  const handelCreateNewUser = genericDataHandler(createNewUser);
  // FORGOTE PASSWORD
  const handelforgotePasswordURL = genericDataHandler(forgotePasswordURL);
  // VERIFY OTP
  const handelverifyOtp = genericDataAndSlugHandler(verifyOtp);
  // RESET PASSWORD
  const handelResetPasword = genericDataAndSlugHandler(resetPassword);

  return (
    <AuthContext.Provider
      value={{
        handelCreateNewUser,
        handelverifyOtp,
        handelLogin,
        handelforgotePasswordURL,
        handelResetPasword,
        loading,
        setloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
