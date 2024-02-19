import React, { useContext } from "react";
import ProjectDetailsLayout from "../../Layouts/ProjectDetailLayout/ProjectDetailsLayout";
import { ListingContext } from "../../ContextApi/userinterface/ListingContextApi";
import { uiProjectByID } from "../../Actions/projectActions";

export default function PropertyDetailPage({ initialProject }) {
  const { project, setproject } = useContext(ListingContext);

  setproject(initialProject);

  return (
    <>
      <ProjectDetailsLayout />
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { slug } = context.params;
    const res = await uiProjectByID(slug);

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
