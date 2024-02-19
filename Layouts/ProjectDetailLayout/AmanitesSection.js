import React from "react";
import styles from "./css/amnitesSection.module.css";
import {
  IoGameControllerOutline,
  BiCctv,
  MdOutlineSportsTennis,
  ImPower,
  CgGym,
  IoBicycleSharp,
  CgGames,
  LuPartyPopper,
} from "../../Utils/ApplicationIcon";
export default function AmanitesSection() {
  return (
    <div className={styles.project_detailsContainer}>
      <div className={styles.section_Heading}>
        <h3 className={"global_subHeading"}>Amenites</h3>
      </div>
      <div className={styles.amnites_Container}>
        <div className={styles.aminitesBox}>
          <div className={styles.aminites_IconBox}>
            {" "}
            <IoGameControllerOutline />{" "}
          </div>
          <div>24 x 7</div>
        </div>

        <div className={styles.aminitesBox}>
          <div className={styles.aminites_IconBox}>
            {" "}
            <BiCctv />{" "}
          </div>
          <div>CCTV Security</div>
        </div>

        <div className={styles.aminitesBox}>
          <div className={styles.aminites_IconBox}>
            {" "}
            <MdOutlineSportsTennis />{" "}
          </div>
          <div>Badminton Court(s)</div>
        </div>

        <div className={styles.aminitesBox}>
          <div className={styles.aminites_IconBox}>
            {" "}
            <ImPower />{" "}
          </div>
          <div>Power Backup</div>
        </div>

        <div className={styles.aminitesBox}>
          <div className={styles.aminites_IconBox}>
            {" "}
            <CgGym />{" "}
          </div>
          <div>Gymnasium</div>
        </div>

        <div className={styles.aminitesBox}>
          <div className={styles.aminites_IconBox}>
            {" "}
            <IoBicycleSharp />{" "}
          </div>
          <div>Jogging / Cycle Track</div>
        </div>

        <div className={styles.aminitesBox}>
          <div className={styles.aminites_IconBox}>
            {" "}
            <CgGames />{" "}
          </div>
          <div>Indoor Games</div>
        </div>

        <div className={styles.aminitesBox}>
          <div className={styles.aminites_IconBox}>
            {" "}
            <LuPartyPopper />{" "}
          </div>
          <div>Party Hall</div>
        </div>
      </div>
    </div>
  );
}
