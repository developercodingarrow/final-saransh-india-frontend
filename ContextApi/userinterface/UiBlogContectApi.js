import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
export const UIBlogContext = createContext();

export default function UIBlogContextApiProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [blogLists, setblogLists] = useState([]);
  const [blog, setblog] = useState("");
  return (
    <UIBlogContext.Provider
      value={{ loading, setloading, blogLists, setblogLists, blog, setblog }}
    >
      {children}
    </UIBlogContext.Provider>
  );
}
