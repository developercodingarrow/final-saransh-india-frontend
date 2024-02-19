import React from "react";
import styles from "./css/customeLinks.module.css";
import Link from "next/link";

export default function CustomeLink(props) {
  const { reDirectPath, text, linkStyle, linkColor, linkSze } = props;
  const linkClasses = `${styles[linkStyle]} ${styles[linkColor]} ${styles[linkSze]}`;
  return (
    <>
      <Link href={reDirectPath} className={linkClasses}>
        {text}{" "}
      </Link>
    </>
  );
}
