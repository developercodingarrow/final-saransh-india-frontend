import React, { useContext, useState } from "react";
import styles from "./css/homepage.module.css";
import AppDrawer from "../appLayout/AppDrawer";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import { AppContext } from "../../ContextApi/AppContextApi";
import HeroSection from "./HeroSection";
import FeatureListing from "./FeatureListing";
import ListingSearch from "../../Utils/data-fillter/searchInputs/listing-search/ListingSearch";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";
import AboutUsSection from "./AboutUsSection";
import TestimonialsSection from "../../components/staticComponent/TestimonialsSection";
import TeamSetion from "../../components/staticComponent/TeamSetion";
import { HomePageProjectContext } from "../../ContextApi/userinterface/HomeProjectContextApi";
export default function HomePageLayOut() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const { featuredProjects, upcomingProjects } = useContext(
    HomePageProjectContext
  );

  return (
    <div className={styles.main_container}>
      <div>
        <AppDrawer />
        <ListingNavBar
          toggleAppDrawer={toggleAppDrawer}
          toggleSideBar={toggleSideBar}
        />
      </div>
      <div className={styles.home_listingSearchBox}>
        <ListingSearch />
      </div>
      <div className={styles.hero_section}>
        <HeroSection />
      </div>

      <div className={styles.featureListing_section}>
        <FeatureListing
          sectionTitle="DISCOVER OUR FEATURED LISTINGS"
          sortDescreption="Experience excellence in real estate - explore our handpicked selection of standout listings, tailored for your distinct desires."
          selectedProjects={featuredProjects}
          tag="Feature"
        />
      </div>

      <div className={styles.aboutUs_section}>
        <AboutUsSection />
      </div>

      <div className={styles.featureListing_section}>
        <FeatureListing
          sectionTitle="DISCOVER OUR FEATURED LISTINGS"
          sortDescreption="Experience excellence in real estate - explore our handpicked selection of standout listings, tailored for your distinct desires."
          selectedProjects={upcomingProjects}
          tag="Upcoming"
        />
      </div>

      <div className={styles.testimonials_section}>
        <TestimonialsSection />
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
