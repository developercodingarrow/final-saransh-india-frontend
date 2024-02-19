import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
  } from "react";
  export const FillterContext = createContext();
  
  export default function FillterContextAppiProvide({ children }) {
    const [visibalRows, setvisibalRows] = useState([]);
  
    return (
      <FillterContext.Provider value={{ visibalRows, setvisibalRows }}>
        {children}
      </FillterContext.Provider>
    );
  }
  