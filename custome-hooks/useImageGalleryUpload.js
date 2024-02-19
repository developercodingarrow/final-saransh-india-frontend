import { useState } from "react";

export function useImageGalleryUpload() {
  const [imagePreview, setImagePreview] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageSelect = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => file);

      setImagePreview((prevImages) => [
        ...prevImages,
        ...newImages.map((file) => ({
          name: file.name,
          size: file.size,
          dataUrl: URL.createObjectURL(file),
        })),
      ]);

      setSelectedImages((prevSelectedImages) => [
        ...prevSelectedImages,
        ...newImages,
      ]);
    }
  };

  const removeImage = (index) => {
    setImagePreview((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  return {
    imagePreview,
    removeImage,
    handleImageSelect,
    selectedImages,
  };
}
