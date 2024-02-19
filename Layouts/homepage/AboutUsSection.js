import React from "react";
import styles from "./css/aboutSection.module.css";
import ClickBtn from "../../Utils/Elements/buttonsElements/ClickBtn";

export default function AboutUsSection() {
  return (
    <div className={styles.main_container}>
      <div className={styles.sectionHeader_box}>
        <h3 className="global_PageTitle">About Us</h3>
        <p className="global_contentStyle">
          Saransh Realtors has established itself as a consultant-Real Estate in
          Gurgaon for the past 16 years. We provide tailor made solutions for
          your various purposes to invest into real estate. We can be looked for
          Investments real estate portfolio management. We have loan facility
          for our all projects available. We believe in delivering value for
          your money and committed to our work. We Expert in Affordable Housing
          Projects.
        </p>
      </div>
      <div className={styles.section_footerBox}>
        <div>
          <ClickBtn btnText="READ MORE .." btnDesign="largeBtn" />
        </div>
      </div>
    </div>
  );
}
