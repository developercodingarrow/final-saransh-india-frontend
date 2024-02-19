import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

import {
  createNewBuilder,
  allBuilder,
  deleteBuilder,
} from "../Actions/builderAction";

import {
  genericDataHandler,
  newgenericDataHandler,
  genericDataAndSlugHandler,
  genericGetByIDHandler,
  genericPagePushHandler,
} from "../Utils/generichandler/generichandler";
export const BuilderContext = createContext();

export default function BuilderContextAppiProvide({ children }) {
  const [allBuilders, setallBuilders] = useState([]);
  const [toggleAction, settoggleAction] = useState(false);

  const handelAllBuilder = async () => {
    try {
      const res = await allBuilder();
      setallBuilders(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelnewBuilder = newgenericDataHandler(
    createNewBuilder,
    settoggleAction,
    toggleAction
  );

  const handelDeleteBuilder = newgenericDataHandler(
    deleteBuilder,
    settoggleAction,
    toggleAction
  );

  return (
    <BuilderContext.Provider
      value={{
        allBuilders,
        handelAllBuilder,
        setallBuilders,
        handelDeleteBuilder,
        toggleAction,
        settoggleAction,
        handelnewBuilder,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}
