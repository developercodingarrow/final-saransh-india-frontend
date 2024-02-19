import React, { useContext } from "react";
import styles from "./css/blogcardwrapper.module.css";
import sampleImage from "../../public/web-static-images/sampleImage.png";
import Image from "next/image";
import Link from "next/link";
import ActionBtn from "../../Utils/Elements/buttonsElements/ActionBtn";
import { GiCarKey } from "../../Utils/ApplicationIcon";
import { UIBlogContext } from "../../ContextApi/userinterface/UiBlogContectApi";
import BlogCard from "../../Utils/cards/blogCard/BlogCard";

export default function BlogCardWrapper() {
  const { blogLists, setblogLists } = useContext(UIBlogContext);
  return (
    <div className={styles.main_container}>
      <div className={styles.page_header}>
        <div className={styles.iconBox}>
          {" "}
          <GiCarKey />
        </div>
        <span>The Real Estate Time </span>
      </div>
      <div className={styles.blog_cardWraper}>
        {blogLists?.map((el, i) => {
          return <BlogCard data={el} key={el._id} />;
        })}
      </div>
    </div>
  );
}
