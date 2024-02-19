import React from "react";
import styles from "./css/sidBar.module.css";
import Image from "next/image";
import sampleImage from "../../../public/web-static-images/sampleImage.png";
export default function SideBar(props) {
  const { title, data } = props;

  console.log(data);
  const thumblin = data.ProjectThumblin;
  return (
    <div className={styles.main_container}>
      <div className={styles.quickLink_bar}>
        <div className={styles.QuickLink_titleBox}>{title}</div>
        {data &&
          data.map(
            (el, i) =>
              el.projectTitle &&
              el.ProjectThumblin && ( // Ensure both properties exist
                <div className={styles.feature_cardContainer} key={i}>
                  <div className={styles.featureImage_wrapper}>
                    <Image
                      src={`/project-thumblin/${el.ProjectThumblin.url}`}
                      width={100}
                      height={100}
                      className={styles.featureImage_style}
                      alt={el.ProjectThumblin.alt}
                    />
                  </div>
                  <div className={styles.project_title}>
                    <p>{el.projectTitle}</p>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}
