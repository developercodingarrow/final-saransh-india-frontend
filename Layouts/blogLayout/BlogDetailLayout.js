import React, { useContext, useEffect, useState } from "react";
import styles from "./css/blogDetailLayout.module.css";
import AppDrawer from "../appLayout/AppDrawer";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import { AppContext } from "../../ContextApi/AppContextApi";
import sampleImage from "../../public/web-static-images/sampleImage.png";
import Image from "next/image";
import Link from "next/link";
import EnquireForm from "../../Utils/cards/EnquireForm";
import SideBar from "../../Utils/cards/sideBarCard/SideBar";
import { UIBlogContext } from "../../ContextApi/userinterface/UiBlogContectApi";
import DekstopFooter from "../appLayout/DekstopFooter";
import MobileFooter from "../appLayout/MobileFooter";
import BlogSideCard from "../../Utils/cards/sideBarCard/BlogSideCard";
import { BlogContext } from "../../ContextApi/BlogContextApi";
import Head from "next/head";
export default function BlogDetailLayout({ children }) {
  const { showSideBar, showAppDrawer, toggleSideBar, toggleAppDrawer } =
    useContext(AppContext);
  const { blog, setblog } = useContext(UIBlogContext);
  const { clientBlogs } = useContext(BlogContext);
  return (
    <>
      <Head>
        <title>{blog?.blogTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={blog?.metaDescription} />
        <meta name="keywords" content={blog?.keywords} />
      </Head>

      <div className={styles.main_container}>
        <AppDrawer />
        <ListingNavBar
          toggleAppDrawer={toggleAppDrawer}
          toggleSideBar={toggleSideBar}
        />

        <div className={styles.content_wrapper}>
          <div className={styles.blogTop_Container}>
            <div className={styles.coverImageBox}>
              {blog && blog.BlogCoverImage && blog.BlogCoverImage.url && (
                <Image
                  src={`/blog-images/${blog.BlogCoverImage.url}`}
                  width={500}
                  height={500}
                  className={styles.coverImage_style}
                />
              )}
            </div>
            <div className={styles.enqureyForm_Box}>
              <EnquireForm />
            </div>
          </div>
          <div className={styles.body_container}>
            <div className={styles.blog_contentSide}>
              <div className={styles.blog_conterBox}>
                <h3 className="global_PageTitle">{blog?.blogTitle}</h3>
              </div>
              <div className={styles.blog_conterBox}>
                <p
                  className="global_contentStyle"
                  dangerouslySetInnerHTML={{
                    __html: blog.blogDescreption || "",
                  }}
                ></p>
              </div>
            </div>
            <div className={styles.Blog_sidebar}>
              {/* <SideBar title="Recent Blog" /> */}
              <BlogSideCard title="Recent Blog" data={clientBlogs} />
            </div>
          </div>
        </div>

        <div className={styles.footer_container}>
          <div className={styles.dekstop_footerWrapper}>
            <DekstopFooter />
          </div>
          <div className={styles.mobile_footerWrapper}>
            <MobileFooter />
          </div>
        </div>
      </div>
    </>
  );
}
