import React from "react";
import styles from "./css/teamSetion.module.css";
import Image from "next/image";
import anjaliMam from "../../public/team-member/Anjali-Chutani.jpg";

export default function TeamSetion() {
  return (
    <div className={styles.main_container}>
      <div className={styles.section_headingBox}>
        <h3 className={"global_PageTitle"}> MANAGEMENT TEAM </h3>
      </div>
      <div className={styles.section_descreptionBox}>
        <p className={"global_contentStyle"}>
          Saransh Realtors is a team of expert craftsmen and skilled
          professionals who are dedicated to building and renovating your home
          in a way that flows seamlessly. Saransh Realtors prides itself for
          emplacing the best team in the industry.
        </p>
      </div>

      <div className={styles.team_memberWrapper}>
        {[1, 2, 3, 4].map(() => {
          return (
            <div className={styles.team_box}>
              <Image
                src={anjaliMam}
                width={500}
                height={500}
                className={styles.team_memberImage}
              />
              <div className={styles.team_profileBox}>
                <div>
                  <h5 className={styles.subHeading}>Anjali Chutani</h5>
                </div>
                <p className={styles.subHeading}>CEO</p>
                <div>
                  <p className={"global_contentStyle"}>
                    Ravi Gupta, Saransh Realtors' CFO, leads with fiscal acumen,
                    driving sound financial management for stability and growth.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
