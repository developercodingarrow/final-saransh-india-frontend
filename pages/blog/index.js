import React, { useContext } from "react";
import BlogListLayout from "../../Layouts/blogLayout/BlogListLayout";
import BlogCardWrapper from "../../components/blogComponent/BlogCardWrapper";
import { uiAllBlog } from "../../Actions/blogActions";
import { UIBlogContext } from "../../ContextApi/userinterface/UiBlogContectApi";
import Head from "next/head";

export default function BlogListPage({ initialProject }) {
  const { blogLists, setblogLists } = useContext(UIBlogContext);

  setblogLists(initialProject);

  console.log(blogLists);
  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Description of your website" />
        <meta name="keywords" content="saransh Realtors, Blog, Real Estae" />
      </Head>
      <BlogListLayout>
        <BlogCardWrapper />
      </BlogListLayout>
    </>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    const result = await uiAllBlog();

    if (result.data.status === "success") {
      return {
        props: {
          initialProject: result.data.result,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      initialProject: {},
    },
  };
}
