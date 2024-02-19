import React from "react";

const usePriceFormatter = () => {
  const formatPrice = (price) => {
    if (price < 1000) {
      return price.toString();
    } else if (price < 100000) {
      return (price / 1000).toFixed(1);
    } else if (price < 10000000) {
      return (price / 100000).toFixed(2);
    } else {
      return (price / 10000000).toFixed(2);
    }
  };

  return { formatPrice };
};

export default usePriceFormatter;
