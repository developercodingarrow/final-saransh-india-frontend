import React, { useContext } from "react";
import styles from "./css/dashboardLayout.module.css";
import { FaBars } from "../../Utils/ApplicationIcon";
import { getClassName } from "./DashBoardResposiveLogic";
import { UserDashBoardContext } from "../../ContextApi/UserDashBoardContextApi";
import AsideOptions from "./AsideOptions";
import MobileFooter from "../appLayout/MobileFooter";
import DekstopNavbar from "../appLayout/DekstopNavbar";

export default function DashboardLayout({ children }) {
  const { uDSideBarToggle, handelUserSideBarToggle, handelOpenSideBarDrawer } =
    useContext(UserDashBoardContext);
  const {
    closeSideBar,
    closeNavBar,
    closeContainer,
    closeDynimic,
    asideToggleBox,
  } = getClassName(uDSideBarToggle, styles);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.inner_container}>
          <div className={closeSideBar}>
            <div className={asideToggleBox}>
              <FaBars onClick={handelUserSideBarToggle} />
            </div>

            <div className={styles.option_wraper}>
              <AsideOptions />
            </div>
          </div>
          <div className={closeContainer}>
            <div className={closeNavBar}>
              <div className={styles.navToogle_Box}>
                <FaBars onClick={handelOpenSideBarDrawer} />
              </div>

              <div className={styles.dashBoard_navOptionsWrapper}>
                <DekstopNavbar />
              </div>
            </div>
            <div className={styles.dynimic_content_Container}>{children}</div>
            <div className={styles.footer_container}>
              <div className={styles.mobile_footerWrapper}>
                <MobileFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
