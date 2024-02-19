import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

import { isAuth } from "../Actions/authAction";
export const AppContext = createContext();

export default function AppContextAppiProvide({ children }) {
  const userRole = isAuth()?.role;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelPassData, setmodelPassData] = useState("");
  const [showSideBar, setShowSideBar] = useState(false);
  const [showAppDrawer, setshowAppDrawer] = useState(true);
  const [IsenqureyModel, setIsenqureyModel] = useState(false);

  const handleOpenModal = (data) => {
    setIsModalOpen(true);
    setmodelPassData(data);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  const toggleAppDrawer = () => {
    setshowAppDrawer(!showAppDrawer);
  };

  const handelOpenEnqueryModel = () => {
    setIsenqureyModel(true);
  };

  const handelCloseEnqueryModel = () => {
    setIsenqureyModel(false);
  };

  return (
    <AppContext.Provider
      value={{
        userRole,
        isModalOpen,
        setIsModalOpen,
        handleOpenModal,
        handleCloseModal,
        modelPassData,
        setmodelPassData,
        showSideBar,
        setShowSideBar,
        showAppDrawer,
        setshowAppDrawer,
        toggleSideBar,
        toggleAppDrawer,
        handelOpenEnqueryModel,
        handelCloseEnqueryModel,
        IsenqureyModel,
        setIsenqureyModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
