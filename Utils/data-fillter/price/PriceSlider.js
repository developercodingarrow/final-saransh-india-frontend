import React, { useState } from "react";
import styles from "./css/priceSlider.module.css";

export default function PriceSlider(props) {
  const { handleSliderChange, normalizedPrice, titel } = props;
  const [actualPrice, setActualPrice] = useState(0); // Change this to your actual price

  const getSliderLineStyle = () => {
    const normalizedPercentage = (normalizedPrice / 100) * actualPrice;
    return {
      background: `linear-gradient(to right, #ed6789 ${normalizedPercentage}%, var(--ts-muted) ${normalizedPercentage}%)`,
    };
  };

  return (
    <div className={styles.priceSliderContainer}>
      <div>
        <p className={styles.title}>{titel}</p>
      </div>
      <div className={styles.price_sliderWrapper}>
        <div>{normalizedPrice}</div>
        <div>
          <input
            type="range"
            min="1000000"
            max="1000000000"
            value={normalizedPrice}
            onChange={handleSliderChange}
            className={styles.slider}
            style={getSliderLineStyle()}
          />
        </div>
      </div>
    </div>
  );
}
