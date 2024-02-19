import React, { useContext, useState } from "react";
import styles from "./css/blogListlayout.module.css";
import AppDrawer from "../appLayout/AppDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";
import EnquireForm from "../../Utils/cards/EnquireForm";
import BlogSideCard from "../../Utils/cards/sideBarCard/BlogSideCard";
import { BlogContext } from "../../ContextApi/BlogContextApi";

export default function BlogListLayout({ children }) {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const { clientBlogs } = useContext(BlogContext);
  return (
    <div className={styles.main_container}>
      <AppDrawer />
      <ListingNavBar
        toggleAppDrawer={toggleAppDrawer}
        toggleSideBar={toggleSideBar}
      />

      <div className={styles.pageBody_container}>
        <div className={styles.blog_cards_container}>{children}</div>
        <div className={styles.Blog_sideBar}>
          <div className={styles.sideBarElement_box}>
            <EnquireForm />
          </div>
          <div className={styles.sideBarElement_box}>
            <div className={styles.sideBarElement_Wrapper}>
              <BlogSideCard title="Recent Blog" data={clientBlogs} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_container}>
        <div className={styles.dekstop_footerWrapper}>
          <DekstopFooter />
        </div>
        <div className={styles.mobile_footerWrapper}>
          <MobileFooter />
        </div>
      </div>
    </div>
  );
}
