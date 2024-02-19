import React, { useContext, useState } from "react";
import styles from "./css/appDeawer.module.css";
import Image from "next/image";
import logo from "../../public/web-static-images/saransh logo.png";
import { AppContext } from "../../ContextApi/AppContextApi";
import Link from "next/link";
import { dekstopNavBarTab } from "../../JsonData/PageLinks";
import { IoPower } from "../../Utils/ApplicationIcon";
import { isAuth, logOut } from "../../Actions/authAction";

const botomLink = [
  {
    name: "privay Policy",
  },
];

export default function AppDrawer() {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const [loggedIn, setloggedIn] = useState(false);
  return (
    <div
      className={`${styles.app_drawer} ${
        showAppDrawer ? styles.Hide_app_drawer : ""
      }`}
      onClick={toggleAppDrawer}
    >
      <div className={styles.appDrawer_innerContainer}>
        <div className={styles.appDrawer_header}>
          <Image
            src={logo}
            width={900}
            height={900}
            className={styles.logoStyle}
          />
        </div>

        <div className={styles.optionTab_wrapper}>
          <div className={styles.top_options}>
            {dekstopNavBarTab.map((el, i) => {
              return (
                <div className={styles.tabs} key={i}>
                  <Link href={`${el.hrfLink}`} className={styles.tabLinkStyle}>
                    {" "}
                    {el.name}{" "}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className={styles.bottom_options}>
            {botomLink.map((el, i) => {
              return (
                <div className={styles.tabs} key={i}>
                  <Link href={"/"} className={styles.tabLinkStyle}>
                    {" "}
                    {el.name}{" "}
                  </Link>
                </div>
              );
            })}
            <div className={styles.power_btnBox}>
              {!isAuth() && (
                <div className={styles.outer_box}>
                  <Link
                    href={"/userauth/login"}
                    className={`${styles.inner_circle} ${styles.loggedIn}`}
                  >
                    <div
                      className={`${styles.lightBtn} ${styles.loggedInLight}`}
                    ></div>
                  </Link>
                </div>
              )}

              {isAuth() && (
                <div className={styles.outer_box}>
                  <div
                    className={`${styles.inner_circle} ${styles.loggedOut}`}
                    onClick={logOut}
                  >
                    <div
                      className={`${styles.lightBtn} ${styles.loggedOutLight}`}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
