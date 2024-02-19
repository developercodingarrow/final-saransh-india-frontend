import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./css/projectDetail.module.css";
import Image from "next/image";
import AppDrawer from "../appLayout/AppDrawer";
import { AppContext } from "../../ContextApi/AppContextApi";
import ListingNavBar from "../ProjectListingLayout/ListingNavBar";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { IoGameControllerOutline } from "../../Utils/ApplicationIcon";
import EnquireForm from "../../Utils/cards/EnquireForm";
import {
  IoIosCall,
  IoIosArrowBack,
  IoCallOutline,
  MdOutlineMessage,
  FaWhatsapp,
} from "../../Utils/ApplicationIcon";
import sampleImage from "../../public/web-static-images/sampleImage.png";
import DekstopFooter from "../appLayout/DekstopFooter";
import { ListingContext } from "../../ContextApi/userinterface/ListingContextApi";
import PropertyInformationSection from "./PropertyInformationSection";
import CarosoleComponent from "./CarosoleComponent";
import whatsapp from "../../public/web-static-images/whatsapp-image.png";
import AmanitesSection from "./AmanitesSection";
import usePriceFormatter from "../../custome-hooks/usePriceFormatter";
import SideBar from "../../Utils/cards/sideBarCard/SideBar";
import dummyCover from "../../public/web-static-images/static-cover.jpg";
import Link from "next/link";
import EnquireModel from "../../Utils/model/EnquireModel";
import { ProjectContext } from "../../ContextApi/ProjectContextApi";
import Head from "next/head";
export default function ProjectDetailsLayout() {
  const router = useRouter();
  const {
    showSideBar,
    showAppDrawer,
    toggleSideBar,
    toggleAppDrawer,
    handelOpenEnqueryModel,
  } = useContext(AppContext);
  const { project, setproject } = useContext(ListingContext);
  const { featureListing, upcomingListing } = useContext(ProjectContext);
  const { formatPrice } = usePriceFormatter();

  const [coverImages, setCoverImages] = useState([]);
  const [floorPlan, setfloorPlan] = useState([]);
  const phoneNumber = "+91-9717930806";
  useEffect(() => {
    if (
      project &&
      project.ProjectCoverImage &&
      project.ProjectCoverImage.length > 0
    ) {
      const imageUrls = project.ProjectCoverImage.map((image) => ({
        src: `/project-images/${image.url}`,
        altText: image.altText,
      }));
      setCoverImages(imageUrls);
    } else {
      setCoverImages([]);
    }

    if (
      project &&
      project.floorPlanImages &&
      project.floorPlanImages.length > 0
    ) {
      const imageUrls = project.floorPlanImages.map((image) => ({
        src: `/project-images/${image.url}`,
        altText: image.altText,
      }));
      setfloorPlan(imageUrls);
    } else {
      setfloorPlan([]);
    }
  }, [project]);

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Blogs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Description of your website" />
        <meta name="keywords" content="saransh Realtors, Blog, Real Estae" />
      </Head>
      <div className={styles.main_container}>
        <EnquireModel />
        <AppDrawer />
        <ListingNavBar
          toggleAppDrawer={toggleAppDrawer}
          toggleSideBar={toggleSideBar}
        />
        <div className={styles.detail_topContainer}>
          <div className={styles.project_titleBar}>
            <div className={styles.titleBox}>
              <p>{project.projectTitle}</p>
            </div>
            <div className={styles.priceBox}>
              <span>
                {project && project.price && formatPrice(project.price)}
              </span>
              {project && project.pricePrefix && (
                <span>{project.pricePrefix}</span>
              )}
            </div>
          </div>
          <div className={styles.formImage_Container}>
            <div className={styles.carousel_container}>
              {coverImages.length > 0 ? (
                <CarosoleComponent
                  images={coverImages}
                  CarouselStyle="CoverCarosole"
                />
              ) : (
                <Image
                  src={dummyCover}
                  alt="cover-image"
                  width={500}
                  height={500}
                  className={styles.dummy_coverImage}
                />
              )}
            </div>
            <div className={styles.form_Container}>
              <div className={styles.enqureyForm_wrapper}>
                <EnquireForm />
              </div>
              <div className={styles.static_messageBox}>
                <div className={styles.or_sepratorBox}>
                  <p>
                    ---------------------------OR----------------------------
                  </p>
                </div>
                <div className={styles.stactic_contactBox}>
                  <span>
                    {" "}
                    <IoIosCall />{" "}
                  </span>
                  <span>
                    <a
                      href={`tel:${phoneNumber}`}
                      className="anchor_linkStyle"
                      style={{ color: "black" }}
                    >
                      {phoneNumber}
                    </a>
                  </span>
                </div>
                <div className={styles.stactic_contactBox}>
                  <Link href={"https://wa.link/4iqhj9"}>
                    {" "}
                    <Image src={whatsapp} width={20} height={20} />
                  </Link>
                  <span>WhatsApp Message</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content_Container}>
          <div className={styles.information_container}>
            <div>
              <PropertyInformationSection data={project} />
            </div>
            <div className={styles.project_detailsContainer}>
              <div className={styles.section_Heading}>
                <h3 className={"global_subHeading"}>Property Descreption</h3>
              </div>
              <div className={styles.project_descreptionWrapper}>
                <p
                  className="global_contentStyle"
                  dangerouslySetInnerHTML={{
                    __html: project.projectDescription || "",
                  }}
                ></p>
              </div>
            </div>

            <div>
              <AmanitesSection />
            </div>

            <div className={styles.floorPlan_wrapper}>
              {floorPlan.length > 0 && (
                <div className={styles.wrapperBox}>
                  <div className={styles.section_Heading}>
                    <h3 className={"global_subHeading"}>
                      Layout And Flor Plan
                    </h3>
                  </div>
                  <div className={styles.clousol_wrapper}>
                    {coverImages && (
                      <CarosoleComponent
                        images={floorPlan}
                        CarouselStyle="floorPlanCarosole"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.side_bar_container}>
            <SideBar title="Feature PRojects" data={featureListing} />
            <SideBar title="UPCOMING PROJECT" data={upcomingListing} />
          </div>
        </div>

        <div className={styles.projectDetail_footerContainer}>
          <div className={styles.dekstop_projectDetailFooter_Wrapper}>
            <DekstopFooter />
          </div>
          <div className={styles.mobile_projectDetailFooter_Wrapper}>
            <div className={styles.footer_iconBox}>
              <div className={styles.iconBox} onClick={goBack}>
                <IoIosArrowBack />
              </div>
              <p className={styles.footer_text}>Back</p>
            </div>
            <div className={styles.footer_iconBox}>
              <div className={styles.iconBox}>
                <a
                  href="https://wa.link/vj4hzq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anchor_linkStyle"
                  style={{ color: "#fff" }}
                >
                  <FaWhatsapp />
                </a>
              </div>
              <p className={styles.footer_text}>Whatsapp</p>
            </div>
            <div
              className={styles.footer_iconBox}
              onClick={handelOpenEnqueryModel}
            >
              <div className={styles.iconBox}>
                <MdOutlineMessage />
              </div>
              <p className={styles.footer_text}>Enquey</p>
            </div>
            <div className={styles.footer_iconBox}>
              <div className={styles.iconBox}>
                <a
                  href={`tel:${phoneNumber}`}
                  className="anchor_linkStyle"
                  style={{ color: "#fff" }}
                >
                  <IoCallOutline />
                </a>
              </div>
              <p className={styles.footer_text}>Call</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
