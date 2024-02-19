import React, { useContext } from "react";
import BlogDetailLayout from "../../Layouts/blogLayout/BlogDetailLayout";
import { blogDetail } from "../../Actions/blogActions";
import { UIBlogContext } from "../../ContextApi/userinterface/UiBlogContectApi";

export default function BlogDetailPage({ initialProject }) {
  const { blog, setblog } = useContext(UIBlogContext);

  setblog(initialProject);

  return <BlogDetailLayout />;
}

export async function getServerSideProps(context) {
  try {
    const { slug } = context.params;
    const res = await blogDetail(slug);

    return {
      props: {
        initialProject: res.data.result,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      props: {
        initialProject: {},
      },
    };
  }
}
