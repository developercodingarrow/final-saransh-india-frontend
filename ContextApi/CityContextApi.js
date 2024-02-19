import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

import {
  genericDataHandler,
  newgenericDataHandler,
  genericDataAndSlugHandler,
  genericGetByIDHandler,
  genericPagePushHandler,
} from "../Utils/generichandler/generichandler";
import { getLoginCookies } from "../Actions/authAction";
import { createNewCity, allCity, deleteCity } from "../Actions/cityAction";
export const CityContext = createContext();

export default function CityContextAppiProvide({ children }) {
  const loginToken = getLoginCookies();
  const [allCites, setallCites] = useState([]);
  const [toggleAction, settoggleAction] = useState(false);

  const handelAllCites = async () => {
    try {
      const res = await allCity();
      setallCites(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelnewCity = newgenericDataHandler(
    createNewCity,
    settoggleAction,
    toggleAction
  );
  const handelDeleteCity = newgenericDataHandler(
    deleteCity,
    settoggleAction,
    toggleAction
  );

  return (
    <CityContext.Provider
      value={{
        allCites,
        setallCites,
        handelDeleteCity,
        handelAllCites,
        handelnewCity,
        toggleAction,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
