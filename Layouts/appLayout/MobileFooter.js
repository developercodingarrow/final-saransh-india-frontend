import React, { useContext } from "react";
import styles from "./css/mobilefooter.module.css";
import Link from "next/link";
import {
  FcHome,
  HiOutlineBuildingOffice2,
  IoCallOutline,
  MdOutlineMessage,
  IoNewspaperOutline,
} from "../../Utils/ApplicationIcon";
import { AppContext } from "../../ContextApi/AppContextApi";

export default function MobileFooter() {
  const { handelOpenEnqueryModel } = useContext(AppContext);
  const phoneNumber = "+91-9717930806";
  return (
    <div className={styles.mobile_footer}>
      <Link href="/" className={styles.footerTab_link}>
        <span className={styles.footerTab_icon}>
          <FcHome />
        </span>
        <span className={styles.footerTab_text}>Home </span>
      </Link>

      <Link href="/property" className={styles.footerTab_link}>
        <span className={styles.footerTab_icon}>
          <HiOutlineBuildingOffice2 />
        </span>
        <span className={styles.footerTab_text}>Projects </span>
      </Link>

      <div className={styles.footerTab_link} onClick={handelOpenEnqueryModel}>
        <span className={styles.footerTab_icon}>
          <MdOutlineMessage />
        </span>
        <span className={styles.footerTab_text}>Enquery </span>
      </div>

      <Link href="/blog" className={styles.footerTab_link}>
        <span className={styles.footerTab_icon}>
          <IoNewspaperOutline />
        </span>
        <span className={styles.footerTab_text}>Blogs</span>
      </Link>

      <div className={styles.footerTab_link}>
        <span className={styles.footerTab_icon}>
          <a
            href={`tel:${phoneNumber}`}
            className="anchor_linkStyle"
            style={{ color: "#fff" }}
          >
            <IoCallOutline />
          </a>
        </span>
        <span className={styles.footerTab_text}>Call </span>
      </div>
    </div>
  );
}
