import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { useRouter } from "next/router";
export const BlogContext = createContext();
import {
  createNewBlog,
  updateBlog,
  getBlogByID,
  allBlog,
  deleteBlogThumblinImages,
  deleteBlog,
  getclientBlog,
} from "../Actions/blogActions";

import {
  genericDataHandler,
  newgenericDataHandler,
  genericDataAndSlugHandler,
  genericGetHandler,
  genericPagePushHandler,
} from "../Utils/generichandler/generichandler";

export default function BlogContextApiProvider({ children }) {
  const router = useRouter();
  const [loading, setloading] = useState(false);
  const [actionLoading, setactionLoading] = useState(false);
  const [allblogs, setallblogs] = useState([]);
  const [blogThumblin, setblogThumblin] = useState({});
  const [blogCoverImage, setblogCoverImage] = useState({});
  const [toggleAction, settoggleAction] = useState(false);
  const [blogDetails, setblogDetails] = useState({});
  const [clientBlogs, setclientBlogs] = useState([]);

  const handelnewBlog = genericDataHandler(createNewBlog);
  const handelUpadteBlog = genericDataAndSlugHandler(updateBlog);
  const handelDeleteBlog = newgenericDataHandler(
    deleteBlog,
    settoggleAction,
    toggleAction
  );

  const handelAllBlogs = async () => {
    try {
      const res = await allBlog();
      setallblogs(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelGetBlog = async (id) => {
    try {
      const res = await getBlogByID(id);
      console.log(res);
      setblogThumblin(res.data.result.BlogThumblin);
      setblogCoverImage(res.data.result.BlogCoverImage);
      setblogDetails(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handelView = (passValue) => {
    genericPagePushHandler(router, "/super-admin/blog", passValue);
  };

  const handelEdit = (passValue) => {
    genericPagePushHandler(router, "/super-admin/blog", passValue);
  };

  const handelClientBlog = async () => {
    try {
      const res = await getclientBlog();
      const sortedAndLimitedBlogs = res.data.result
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)) // Sort by updatedAt
        .slice(0, 10);
      setclientBlogs(sortedAndLimitedBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelClientBlog();
  }, []);

  console.log(clientBlogs);

  return (
    <BlogContext.Provider
      value={{
        loading,
        setloading,
        handelnewBlog,
        handelUpadteBlog,
        handelGetBlog,
        blogThumblin,
        blogCoverImage,
        actionLoading,
        setactionLoading,
        allblogs,
        handelAllBlogs,
        handelView,
        handelEdit,
        handelDeleteBlog,
        toggleAction,
        settoggleAction,
        blogDetails,
        setblogDetails,
        clientBlogs,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
