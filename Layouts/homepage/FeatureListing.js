import React from "react";
import styles from "./css/featureListing.module.css";
import Image from "next/image";
import heroBanner from "../../public/web-static-images/desktop-banner.webp";
import sampleImage from "../../public/web-static-images/project-dummy-image.jpg";
import {
  LuIndianRupee,
  BsBuildingCheck,
  TbSofa,
} from "../../Utils/ApplicationIcon";
import ClickBtn from "../../Utils/Elements/buttonsElements/ClickBtn";
import usePriceFormatter from "../../custome-hooks/usePriceFormatter";

export default function FeatureListing(props) {
  const { sectionTitle, sortDescreption, selectedProjects, tag } = props;
  const { formatPrice } = usePriceFormatter();

  const cardImage = selectedProjects.ProjectThumblin;
  return (
    <div className={styles.main_container}>
      <div className={styles.sectionHeader_box}>
        <h3 className="global_PageTitle">{sectionTitle}</h3>
        <p className="global_contentStyle">{sortDescreption}</p>
      </div>
      <div className={styles.card_wrraper}>
        {selectedProjects.map((el, i) => {
          return (
            <div className={styles.card_container}>
              <div className={styles.card_ImageWrapper}>
                {cardImage ? (
                  <>
                    {cardImage && (
                      <Image
                        src={`/project-thumblin/${data.ProjectThumblin.url}`}
                        width={250}
                        height={250}
                        alt={data.ProjectThumblin.altText}
                        className={styles.cardImageStyle}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <Image
                      src={sampleImage}
                      width={250}
                      height={250}
                      alt={"sample image"}
                      className={styles.cardImageStyle}
                    />
                  </>
                )}
                <div className={styles.card_imageTag}> {tag} </div>
              </div>
              <div className={styles.card_body}>
                <div className={styles.card_titleBox}>
                  {" "}
                  <h5 className="global_subHeading2">{el.projectTitle}</h5>{" "}
                </div>
                <div className={styles.twoColumBox}>
                  <div className={styles.unitType_box}>
                    {" "}
                    <span className={styles.unitIconBox}>
                      {" "}
                      <TbSofa />
                    </span>
                    <span className={styles.text_style}>
                      {el.typesofUnits.map((el, index) => (
                        <span key={index}>{el} </span>
                      ))}
                    </span>{" "}
                  </div>

                  <div className={styles.unitType_box}>
                    {" "}
                    <span className={styles.unitIconBox}>
                      {" "}
                      <BsBuildingCheck />
                    </span>
                    <span className={styles.text_style}>
                      {el?.builder}
                    </span>{" "}
                  </div>
                </div>

                <div className={styles.twoColum_spacingBox}>
                  <div className={styles.card_priceBox}>
                    {el.price && (
                      <>
                        <span className={styles.unitIconBox}>
                          <LuIndianRupee />{" "}
                        </span>
                        <span className={styles.priceText}>
                          {" "}
                          {formatPrice(el.price)}{" "}
                          <span className={styles.unitIconBox}>
                            {el.pricePrefix}
                          </span>
                        </span>
                      </>
                    )}
                  </div>

                  <div className={styles.btnBox}>
                    <ClickBtn btnText="Details" btnDesign="detailBtn" />
                  </div>
                </div>
              </div>
              <div className={styles.card_footer}>
                <div className={styles.rera_wrapper}>
                  {" "}
                  <span className={styles.text_style}> RERA NO </span>
                  {el.reraNo && (
                    <span className={"global_subHeading2"}> {el.reraNo}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
