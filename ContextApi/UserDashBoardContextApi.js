import React, { createContext, useState } from "react";
export const UserDashBoardContext = createContext();

export default function UserDashBoardContextApi({ children }) {
  const [uDSideBarToggle, setuDSideBarToggle] = useState(false);

  const handelUserSideBarToggle = () => {
    setuDSideBarToggle(!uDSideBarToggle);
    console.log(uDSideBarToggle);
  };

  const handelOpenSideBarDrawer = () => {
    setuDSideBarToggle(true);
  };

  return (
    <UserDashBoardContext.Provider
      value={{
        uDSideBarToggle,
        handelUserSideBarToggle,
        handelOpenSideBarDrawer,
      }}
    >
      {children}
    </UserDashBoardContext.Provider>
  );
}
