import React, { useContext } from "react";
import styles from "../css/authLayout.module.css";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import { AppContext } from "../../ContextApi/AppContextApi";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";
import AppDrawer from "../appLayout/AppDrawer";
export default function AuthLayout({ children }) {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);

  return (
    <>
      <div className={styles.mainContainer}>
        <AppDrawer />
        <div className={styles.navbarContainer}>
          <ListingNavBar
            toggleAppDrawer={toggleAppDrawer}
            toggleSideBar={toggleSideBar}
          />
        </div>
        <div className={styles.childernContainer}>{children}</div>
        {/* <div className={styles.footerContainer}>Footer</div> */}
        <div className={styles.footer_container}>
          <div className={styles.dekstop_footer}>
            <DekstopFooter />
          </div>
          <div className={styles.mobile_footerWrapper}>
            <MobileFooter />
          </div>
        </div>
      </div>
    </>
  );
}
