import React from "react";
import Image from "next/image";
import styles from "./css/listedNavBar.module.css";
import { FaBars, IoMdFunnel } from "../../Utils/ApplicationIcon";
import logo from "../../public/web-static-images/saransh-realtors-white-logo.png";
import DekstopNavbar from "../appLayout/DekstopNavbar";
export default function ListingNavBar(props) {
  const { toggleAppDrawer, toggleSideBar, isFullel } = props;
  return (
    <div className={styles.navBar_container}>
      <div className={styles.desktop_navBarContainer}>
        <DekstopNavbar />
      </div>
      <div className={styles.mobile_navbarContainer}>
        <div onClick={toggleAppDrawer}>
          {" "}
          <FaBars />{" "}
        </div>
        <div>
          {" "}
          <Image
            src={logo}
            width={100}
            height={38}
            alt="saransh realtors logo"
          />{" "}
        </div>
        <div className={styles.fillter_iconBox}>
          {" "}
          {isFullel && <IoMdFunnel onClick={toggleSideBar} />}
        </div>
      </div>
    </div>
  );
}
