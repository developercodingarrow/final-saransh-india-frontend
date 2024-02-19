import React from "react";
import styles from "./css/CarosoleStyle.module.css";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

export default function CarosoleComponent(props) {
  const { images, CarouselStyle } = props;
  return (
    <div>
      <Carousel
        images={images}
        hasMediaButton={false}
        hasIndexBoard={false}
        className={styles[CarouselStyle]}
        maxIcon={
          <span
            className="icon-text"
            role="img"
            aria-label="max"
            style={{
              fontSize: "min(20px, 5vw)",
            }}
          >
            ↗️
          </span>
        }
        minIcon={
          <span
            className="icon-text"
            role="img"
            aria-label="min"
            style={{
              fontSize: "min(20px, 5vw)",
            }}
          >
            ↙️
          </span>
        }
        leftIcon={
          <span
            className="icon-text"
            role="img"
            aria-label="left"
            style={{
              fontSize: "min(20px, 5vw)",
            }}
          >
            ◀️
          </span>
        }
        rightIcon={
          <span
            className="icon-text"
            role="img"
            aria-label="right"
            style={{
              fontSize: "min(20px, 5vw)",
            }}
          >
            ▶️
          </span>
        }
      />
    </div>
  );
}
