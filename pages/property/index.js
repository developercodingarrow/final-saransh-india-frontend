import React, { useContext, useEffect } from "react";
import ProjectListingLayout from "../../Layouts/ProjectListingLayout/ProjectListingLayout";
import { ListingContext } from "../../ContextApi/userinterface/ListingContextApi";
import { fillterdProjetcs } from "../../Actions/projectActions";
import Head from "next/head";
export default function PropertyListingPage({ initialProject }) {
  const { allListing, setallListing } = useContext(ListingContext);

  setallListing(initialProject);

  return (
    <>
      <Head>
        <title>Property</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Description of your website" />
        <meta name="keywords" content="saransh Realtors, Projets, Real Estae" />
      </Head>
      <ProjectListingLayout />
    </>
  );
}

// GET STATIC PROPS TO GET ALL PROJECTS
export async function getServerSideProps(context) {
  try {
    const queryObj = context.query;
    const result = await fillterdProjetcs(queryObj);

    if (result.data.status === "success") {
      return {
        props: {
          initialProject: result.data.result || [],
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
