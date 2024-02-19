import React from "react";
import styles from "./css/sidBar.module.css";
import Image from "next/image";
import sampleImage from "../../../public/web-static-images/sampleImage.png";
export default function BlogSideCard(props) {
  const { title, data } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.quickLink_bar}>
        <div className={styles.QuickLink_titleBox}>{title}</div>
        {data &&
          data.map(
            (el, i) =>
              el.blogTitle &&
              el.BlogThumblin && ( // Ensure both properties exist
                <div className={styles.feature_cardContainer} key={i}>
                  <div className={styles.featureImage_wrapper}>
                    <Image
                      src={`/blog-images/${el.BlogThumblin.url}`}
                      width={100}
                      height={100}
                      className={styles.featureImage_style}
                      alt={el.BlogThumblin.alt}
                    />
                  </div>
                  <div className={styles.project_title}>
                    <p>{el.blogTitle}</p>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}
