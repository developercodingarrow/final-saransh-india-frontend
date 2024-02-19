import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

import { newgenericDataHandler } from "../Utils/generichandler/generichandler";
import {
  createNewEnquirey,
  allEnquire,
  deleteEnquire,
} from "../Actions/enquireyAction";

export const EnquireyContext = createContext();

export default function EnquireyContextAppiProvide({ children }) {
  const [toggleAction, settoggleAction] = useState(false);
  const [enquries, setenquries] = useState([]);

  const handelnewEnquirey = newgenericDataHandler(
    createNewEnquirey,
    settoggleAction,
    toggleAction
  );

  const handelDeleteEnqurie = newgenericDataHandler(
    deleteEnquire,
    settoggleAction,
    toggleAction
  );

  const handelAllEnquries = async () => {
    try {
      const res = await allEnquire();
      setenquries(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EnquireyContext.Provider
      value={{
        handelnewEnquirey,
        toggleAction,
        handelAllEnquries,
        enquries,
        handelDeleteEnqurie,
      }}
    >
      {children}
    </EnquireyContext.Provider>
  );
}
