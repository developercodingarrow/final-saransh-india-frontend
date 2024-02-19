import React from "react";
import styles from "./css/testimonials.module.css";
import { RiDoubleQuotesL } from "../../Utils/ApplicationIcon";
export default function TestimonialsSection() {
  return (
    <div className={styles.main_container}>
      <div className={styles.section_heading}>
        <h3 className={"global_PageTitle"}> Testimonials </h3>
      </div>
      <div className={styles.section_descreption}>
        <p className={"global_contentStyle"}>
          Listen to the voices of our satisfied customers - testimonials that
          paint a vivid picture of our dedication and reliability, one happy
          story at a time.
        </p>
      </div>

      <div className={styles.testimonials_container}>
        {[1, 2, 3].map((el, i) => {
          return (
            <div className={styles.testimonials_Box} key={i}>
              <div>
                {" "}
                <RiDoubleQuotesL />{" "}
              </div>
              <div>
                <p className={"global_contentStyle"}>
                  We just want to thank Saransh Realtors and their team for such
                  careful attention to our beautiful home. Very happy with the
                  services you delivered. Shall refer our friends and co-workers
                  to you. Many thanks{" "}
                </p>
              </div>
              <div>
                <span>by</span>{" "}
                <span className={styles.quoterName}> PREETI KAUSHIK</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
