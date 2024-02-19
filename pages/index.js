import React, { useContext, useState } from "react";
import { isAuth } from "../Actions/authAction";
import ListingNavBar from "../Layouts/ProjectListingLayout/ListingNavBar";
import { AppContext } from "../ContextApi/AppContextApi";
import ListingSearch from "../Utils/data-fillter/searchInputs/listing-search/ListingSearch";
import HomePageLayOut from "../Layouts/homepage/HomePageLayOut";
import { getHomePageProjetcs } from "../Actions/projectActions";
import { HomePageProjectContext } from "../ContextApi/userinterface/HomeProjectContextApi";

export default function HomePage({ initialProject }) {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const { projects, setprojects } = useContext(HomePageProjectContext);
  setprojects(initialProject);
  return (
    <>
      <div>
        <HomePageLayOut />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const result = await getHomePageProjetcs();

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
