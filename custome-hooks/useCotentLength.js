import React from "react";

export default function useContentLength() {
  const truncateContent = (content, maxLength) => {
    return content.length > maxLength
      ? content.substring(0, maxLength) + "..."
      : content;
  };

  return truncateContent; // Exporting the function directly
}
