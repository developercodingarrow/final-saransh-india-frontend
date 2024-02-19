import React from "react";
import styles from "./css/heroSection.module.css";
import heroBanner from "../../public/web-static-images/desktop-banner.webp";
import Image from "next/image";
import ListingSearch from "../../Utils/data-fillter/searchInputs/listing-search/ListingSearch";
export default function HeroSection() {
  return (
    <div className={styles.main_container}>
      <div className={styles.hero_imageWrapper}>
        <Image
          src={heroBanner}
          width={700}
          height={700}
          className={styles.heroBannerStyle}
        />
      </div>
      <div className={styles.inner_container}>
        <div className={styles.welcom_contentBox}>
          <h2 className="global_PageTitle">
            Welcome To Saransh Realtors India
          </h2>
          <p className="global_subHeading">
            Saransh Realtors has established itself as a consultant-Real Estate
            in Gurgaon for the past 16 years.
          </p>
        </div>
        <div className={styles.dekstop_heroSearchBox}>
          <ListingSearch />
        </div>
      </div>
    </div>
  );
}
