import React from "react";
import style from "./css/tableImage.module.css";
import Image from "next/image";
import sampleImage from "../../../public/web-static-images/Book your dream home on Naurangpur Road-Godrej 101 Luxury Flats in Gurgaon.png";

export default function TableImage(props) {
  const { imageData, folderPath } = props;

  return (
    <div className={style.image_wrapper}>
      <Image
        src={`/${folderPath}/${imageData?.url}`}
        width={500}
        height={500}
        className={style.imageStyle}
      />
    </div>
  );
}
