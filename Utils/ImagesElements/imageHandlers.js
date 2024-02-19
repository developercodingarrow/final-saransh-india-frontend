import {
  genericSingleImageHandler,
  genericUploadGalleryHandler,
  genericDataHandler,
} from "../generichandler/genericImagehandlers";
import {
  ProjectUploadThumblin,
  ProjectUploadCoverImages,
  deleteProjectCoverImages,
  ProjectFloorPlanImages,
  deleteProjectFloorPlanImages,
  deleteProjectThumblinImages,
} from "../../Actions/projectActions";

import {
  blogUploadThumblin,
  deleteBlogThumblinImages,
  deleteBlogCoverImages,
  blogUploadCover,
} from "../../Actions/blogActions";

export const handelUploadThumblin = genericSingleImageHandler(
  ProjectUploadThumblin
);

export const handelUploadProjectCoverImages = genericUploadGalleryHandler(
  ProjectUploadCoverImages
);

export const handelUploadFloorPlanImages = genericUploadGalleryHandler(
  ProjectFloorPlanImages
);

export const handelDeleteCoverImage = genericDataHandler(
  deleteProjectCoverImages
);

export const handelDeleteFloorImage = genericDataHandler(
  deleteProjectFloorPlanImages
);

export const handelDeleteThumblinImage = genericDataHandler(
  deleteProjectThumblinImages
);

// Blog
export const handelDeleteBlogThumblinImage = genericDataHandler(
  deleteBlogThumblinImages
);

export const handelDeleteBlogCoverImage = genericDataHandler(
  deleteBlogCoverImages
);

export const handelUploadBlogThumblin =
  genericSingleImageHandler(blogUploadThumblin);

export const handelUploadBlogCover = genericSingleImageHandler(blogUploadCover);
