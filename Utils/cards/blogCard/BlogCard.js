import React from "react";
import { useRouter } from "next/router";
import styles from "./css/blogCard.module.css";
import sampleImage from "../../../public/web-static-images/sampleImage.png";
import Image from "next/image";
import Link from "next/link";
import ActionBtn from "../../Elements/buttonsElements/ActionBtn";
import useContentLength from "../../../custome-hooks/useCotentLength";

export default function BlogCard(props) {
  const router = useRouter();
  const { data } = props;

  const truncateContent = useContentLength();

  const title = data.blogTitle && truncateContent(data.blogTitle, 50);
  const metaDescreption =
    data.metaDescription && truncateContent(data.metaDescription, 120);

  console.log(data);

  const handelBlogDetail = (slug) => {
    router.push(`/blog/${slug}`);
  };
  return (
    <>
      {data && data.blogTitle && data.BlogThumblin && (
        <div className={styles.blogCard_container}>
          <div className={styles.card_imageBox}>
            {data && data.BlogThumblin && data.BlogThumblin.url && (
              <Image
                src={`/blog-images/${data.BlogThumblin.url}`}
                width={500}
                height={500}
                className={styles.image_style}
                alt={`${data.BlogThumblin.altText}`}
              />
            )}
          </div>
          <div className={styles.card_body}>
            <div className={styles.blog_titleBox}>
              <Link href={"/"} className={styles.title_linkStyle}>
                {title}
              </Link>
            </div>
            <div className={styles.blog_sortDescreption}>
              <p className="global_contentStyle">{metaDescreption}</p>
            </div>
          </div>
          <div className={styles.card_footer}>
            <ActionBtn
              label="Read More"
              onClick={handelBlogDetail}
              btnDesign="cardEnqueryBtn"
              buttonPadding="buttonPadding"
              itemId={data.slug}
            />
          </div>
        </div>
      )}
    </>
  );
}
