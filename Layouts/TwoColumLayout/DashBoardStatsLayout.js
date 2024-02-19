import React from "react";
import styles from "./css/ashBoardStatsLayout.module.css";
import PageHeader from "../DashBoardLayout/PageHeader";
import { MdOutlineHomeWork } from "../../Utils/ApplicationIcon";
import MyBarChart from "../../Utils/Stats-graphs/bar-charts/MyBarChart";
import MyLineChart from "../../Utils/Stats-graphs/line-chart/MyLineChart";
export default function DashBoardStatsLayout() {
  const data = [52, 19, 30, 5, 50, 3];
  const linedata = [52, 19, 30, 5, 50, 3, 25, 45, 10, 60, 15, 40];

  return (
    <div className={styles.mainContainer}>
      <PageHeader pageTitle="Dash Board" />

      <div className={styles.topBar_fullChart}>
        <MyLineChart data={linedata} />
      </div>

      <div className={styles.componentWrapper}>
        <div className={styles.statsTab_Container}>
          <div className={styles.statsTab_wrapper}>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return (
                <div className={styles.stats_tabBox}>
                  <div className={styles.stats_oprionBox}>
                    <div className={styles.tab_iconBox}>
                      <MdOutlineHomeWork />{" "}
                    </div>
                    <div className={styles.tab_titleBox}>
                      <p className="global_contentStyle">Projects </p>{" "}
                    </div>
                    <div className={styles.tab_numberBox}>
                      {" "}
                      <p className="global_subHeading2"> 34</p>{" "}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.sideGraph_container}>
          <MyBarChart data={data} />
        </div>
      </div>
    </div>
  );
}
