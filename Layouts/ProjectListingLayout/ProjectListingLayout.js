import React, { useContext, useState } from "react";
import styles from "./css/projectListingLayout.module.css";
import MobileFillterDrawer from "./MobileFillterDrawer";
import DekstopFillterDrawer from "./DekstopFillterDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingCard from "../../Utils/cards/listing-card/ListingCard";
import ListingSearch from "../../Utils/data-fillter/searchInputs/listing-search/ListingSearch";
import { ListingContext } from "../../ContextApi/userinterface/ListingContextApi";
import ListingNavBar from "./ListingNavBar";
import AppDrawer from "../appLayout/AppDrawer";
import EnquireForm from "../../Utils/cards/EnquireForm";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";
import EnquireModel from "../../Utils/model/EnquireModel";

export default function ProjectListingLayout({ children }) {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const { allListing } = useContext(ListingContext);

  console.log(allListing);
  return (
    <div className={styles.main_container}>
      <EnquireModel />
      <AppDrawer />
      <ListingNavBar
        toggleAppDrawer={toggleAppDrawer}
        toggleSideBar={toggleSideBar}
        isFullel={true}
      />
      <div className={styles.fillter_TopBar}>
        <ListingSearch />
      </div>
      <div className={styles.listing_container}>
        <div
          className={`${styles.sideBarFillter_Container} ${
            showSideBar ? styles.showSideBar : ""
          }`}
        >
          <div className={styles.dekstop_fillterBarUi}>
            <DekstopFillterDrawer />
          </div>
          <div className={styles.mobile_fillterBarUi}>
            <MobileFillterDrawer />
          </div>
        </div>

        <div className={styles.projectListing_Container}>
          {allListing &&
            allListing?.map((project, i) => {
              return <ListingCard data={project} key={project._id} />;
            })}
        </div>
        <div className={styles.listing_rightSide}>
          <EnquireForm />
        </div>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.dekstop_footer}>
          <DekstopFooter />
        </div>
        <div className={styles.mobile_footerWrapper}>
          <MobileFooter />
        </div>
      </div>
    </div>
  );
}
