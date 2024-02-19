import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { BlogContext } from "../../ContextApi/BlogContextApi";
import styles from "./css/updateBlog.module.css";
import {
  blogtitleFiled,
  BlogDetailsApi,
  metaescription,
} from "../../JsonData/formFileds";
import FormCard from "../../Utils/cards/FormCard";
import TextEditorReactQuill from "../../Utils/textEditor/TextEditorReactQuill";
import SingleImageUplaod from "../../Utils/ImagesElements/Single-image-upload/SingleImageUplaod";
import {
  handelDeleteBlogThumblinImage,
  handelUploadBlogThumblin,
  handelUploadBlogCover,
  handelDeleteBlogCoverImage,
} from "../../Utils/ImagesElements/imageHandlers";
import ChipInput from "../../Utils/Elements/inputs-elements/ChipInput";

export default function UpdateBlog(props) {
  const router = useRouter();
  const { id } = router.query;
  const {
    loading,
    setloading,
    handelnewBlog,
    handelUpadteBlog,
    handelGetBlog,
    blogThumblin,
    blogCoverImage,
    actionLoading,
    setactionLoading,
    blogDetails,
    setblogDetails,
    toggleAction,
    settoggleAction,
  } = useContext(BlogContext);
  const {
    pageTitle,
    ProjectDetailsApi,
    projectDetailsFormFiled,
    ProjectStatusFiled,
    ProjectUnitsTypeFiled,
    ProjectPricesFiled,
    ProjectLocationFiled,
    projectfeatureFiled,
  } = props;

  useEffect(() => {
    handelGetBlog(id);
  }, [id, toggleAction]);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.pageTitle}>{pageTitle}</div>
        <div className={styles.componentWarper}>
          <div className={styles.left_Side}>
            <FormCard
              title="Blog Details"
              customeInputs={blogtitleFiled}
              apiData={blogDetails}
              actionType="submit"
              handelfomSubmit={handelUpadteBlog}
              dataFor={id}
            />

            <div>
              <TextEditorReactQuill
                handeSubmit={handelUpadteBlog}
                dataFor={id}
                updateFiled="blogDescreption"
                apiData={blogDetails.blogDescreption}
              />
            </div>

            <div>
              <ChipInput
                title="Keywords"
                handeSubmit={handelUpadteBlog}
                dataFor={id}
                updateFiled="keywords"
                apiData={blogDetails.keywords}
              />
            </div>

            <div>
              <FormCard
                title="Meta Decreption"
                customeInputs={metaescription}
                apiData={blogDetails}
                actionType="submit"
                handelfomSubmit={handelUpadteBlog}
                dataFor={id}
              />
            </div>
          </div>

          <div className={styles.right_Side}>
            <div>
              <SingleImageUplaod
                title="Upload Thumblin"
                handelfomSubmit={handelUploadBlogThumblin}
                dataFor={id}
                singleImage={blogThumblin}
                folderPath="blog-images"
                deleteAction={handelDeleteBlogThumblinImage}
                loading={actionLoading}
                setloading={setactionLoading}
                refreshstate={toggleAction}
                setRefresh={settoggleAction}
                updateFiled="BlogThumblin"
              />
            </div>
            <div>
              <SingleImageUplaod
                title="Update Cover Image"
                handelfomSubmit={handelUploadBlogCover}
                dataFor={id}
                singleImage={blogCoverImage}
                folderPath="blog-images"
                deleteAction={handelDeleteBlogCoverImage}
                loading={actionLoading}
                setloading={setactionLoading}
                updateFiled="BlogCoverImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
