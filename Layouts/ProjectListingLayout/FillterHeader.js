import React, { useContext, useState } from "react";
import styles from "./css/fillterDrawerHeader.module.css";
import { IoIosCloseCircle } from "../../Utils/ApplicationIcon";
import { AppContext } from "../../ContextApi/AppContextApi";
export default function FillterHeader(props) {
  const { headercloseIconBox, headertitleBox, headerRightSide, resethandle } =
    props;
  const { toggleSideBar } = useContext(AppContext);
  return (
    <div className={styles.fillterDrawer_header}>
      <div className={styles.headerLeft_side}>
        {headercloseIconBox && (
          <span className={styles[headercloseIconBox]}>
            <IoIosCloseCircle
              onClick={toggleSideBar}
              className="global_contentStyle"
            />
          </span>
        )}
        <span className={styles[headertitleBox]}>
          <h3 className="global_minTitle">Fillter </h3>
        </span>{" "}
      </div>
      <div className={styles[headerRightSide]}>
        <span onClick={resethandle} className="global_minTitle">
          Reset All
        </span>
      </div>
    </div>
  );
}
