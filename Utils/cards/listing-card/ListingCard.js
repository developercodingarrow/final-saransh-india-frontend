import React, { useContext } from "react";
import styles from "./css/listingcard.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import sampleImage from "../../../public/web-static-images/project-dummy-image.jpg";

import {
  LuIndianRupee,
  BsBuildingCheck,
  CiLocationOn,
  TbSofa,
  BsTextarea,
  MdVerifiedUser,
  PiWhatsappLogoThin,
  FcCallback,
  VscMail,
  IoArrowRedoOutline,
} from "../../ApplicationIcon";
import ActionBtn from "../../Elements/buttonsElements/ActionBtn";
import usePriceFormatter from "../../../custome-hooks/usePriceFormatter";
import { AppContext } from "../../../ContextApi/AppContextApi";
import Link from "next/link";

export default function ListingCard(props) {
  const router = useRouter();
  const phoneNumber = "+91-9717930806";
  const { handelOpenEnqueryModel } = useContext(AppContext);
  const { data } = props;
  const { formatPrice } = usePriceFormatter();

  const cardImage = data.ProjectThumblin;

  const handelProjectDetail = (slug) => {
    router.push(`/property/${slug}`);
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.card_detailsWrapper}>
        <div className={styles.cardImage_container}>
          {cardImage ? (
            <>
              {cardImage && (
                <Image
                  src={`/project-thumblin/${data.ProjectThumblin.url}`}
                  width={250}
                  height={250}
                  alt={data.ProjectThumblin.altText}
                  className={styles.image_Style}
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
                className={styles.image_Style}
              />
            </>
          )}
        </div>
        <div className={styles.details_Container}>
          <div className={styles.titleBox}>
            <span className={styles.title_detail}>
              <p className={"global_subHeading"}>{data.projectTitle}</p>
            </span>

            {data.price && (
              <span className={styles.price_details}>
                <span className={styles.price_iconBox}>
                  {" "}
                  <LuIndianRupee />
                </span>
                {formatPrice(data.price)} <span>{data.pricePrefix}</span>
              </span>
            )}
          </div>
          <div className={styles.project_main_Detail}>
            {data.builder && (
              <div className={styles.mainDetail_Box}>
                <span className={styles.mainDetail_iconBox}>
                  {" "}
                  <BsBuildingCheck />
                </span>
                <span className={"mainDetail_text"}>{data.builder} </span>
              </div>
            )}

            {data.city && (
              <div className={styles.mainDetail_Box}>
                <span className={styles.mainDetail_iconBox}>
                  {" "}
                  <CiLocationOn />
                </span>
                <span className={"mainDetail_text"}>{data.city} </span>
              </div>
            )}
          </div>
          {data.typesofUnits.length > 0 && (
            <div className={styles.unitType_box}>
              <div className={styles.unitIconBox}>
                {" "}
                <TbSofa />
              </div>
              <div className={styles.unitValueBox}>
                {data.typesofUnits.map((el, index) => (
                  <span key={index}>{el} </span>
                ))}
              </div>
            </div>
          )}

          <div className={styles.baise_deatils}>
            <div className={styles.baise_areWarpper}>
              {data.superarea && (
                <div className={styles.baiseAreaBox}>
                  <div className={styles.areaBox_icon}>
                    {" "}
                    <BsTextarea />
                  </div>
                  <div className={styles.baiseBox_details}>
                    <div className={styles.baiseBox_title}>Super area</div>
                    <div className={styles.baiseBox_value}>1171sqft</div>
                  </div>
                </div>
              )}

              {data.reraNo && (
                <div className={styles.baiseAreaBox}>
                  <div className={styles.areaBox_icon}>
                    {" "}
                    <MdVerifiedUser />
                  </div>
                  <div className={styles.baiseBox_details}>
                    <div className={styles.baiseBox_title}>RERA No</div>
                    <div className={styles.baiseBox_value}>{data.reraNo}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card_actionContainer}>
        <div className={styles.dekstop_actionBox}>
          {data.price && (
            <div className={styles.card_priceBox}>
              <div>
                {formatPrice(data.price)} <span>{data.pricePrefix}</span>
              </div>
              <div>₹ {data.basicPrice}</div>
            </div>
          )}

          <div className={styles.dekstop_actionWrapper}>
            <ActionBtn
              label="Enqurey"
              btnDesign="cardEnqueryBtn"
              buttonPadding="buttonPadding"
              onClick={handelOpenEnqueryModel}
              itemId={1234}
            />
            <ActionBtn
              label="Details"
              btnDesign="cardDetailBtn"
              buttonPadding="buttonPadding"
              onClick={handelProjectDetail}
              itemId={data.slug}
            />
          </div>
        </div>
        <div className={styles.mobile_actionBox}>
          <div className={styles.mobile_actionIconBox}>
            <a
              href="https://wa.link/153mwk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PiWhatsappLogoThin className={styles.whatsaapIcon} />
            </a>
          </div>
          <div className={styles.mobile_actionIconBox}>
            <a href={`tel:${phoneNumber}`}>
              <FcCallback />{" "}
            </a>
          </div>
          <div
            className={styles.mobile_actionIconBox}
            onClick={handelOpenEnqueryModel}
          >
            <VscMail />
          </div>
          <div className={styles.mobile_actionIconBox}>
            <Link href={`/property/${data.slug}`} style={{ color: "#7c7c7c" }}>
              <IoArrowRedoOutline />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
