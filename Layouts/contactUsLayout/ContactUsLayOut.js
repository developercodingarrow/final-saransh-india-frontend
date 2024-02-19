import React, { useContext, useState } from "react";
import styles from "./css/contactUsLayout.module.css";
import AppDrawer from "../appLayout/AppDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";

export default function ContactUsLayOut({ children }) {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);

  return (
    <div className={styles.main_container}>
      <AppDrawer />
      <ListingNavBar
        toggleAppDrawer={toggleAppDrawer}
        toggleSideBar={toggleSideBar}
      />
      <div>{children}</div>

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
