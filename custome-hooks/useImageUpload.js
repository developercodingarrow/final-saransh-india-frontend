// useImageUpload.js
import { useState } from "react";

const useImageUpload = (uploadHandler, initialImage = null, itemId = null) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const [sizePrefix, setSizePrefix] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [originalFile, setOriginalFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setImageName(file.name);
      setImageSize(file.size);
      determineSizePrefix(file.size);
    };

    if (file) {
      reader.readAsDataURL(file);
      setOriginalFile(file);
    }
  };

  const determineSizePrefix = (size) => {
    const kb = 1024;
    const mb = kb * 1024;
    const gb = mb * 1024;

    if (size < kb) {
      setSizePrefix("B");
    } else if (size < mb) {
      setSizePrefix("KB");
    } else if (size < gb) {
      setSizePrefix("MB");
    } else {
      setSizePrefix("GB");
    }
  };

  const UploadImage = () => {
    uploadHandler(image, itemId);
  };

  const removeImage = () => {
    // Logic for removing the image, e.g., set the image state to null
    setImage(null);
    setImageName(null);
    setImageSize(null);
    setFileInputKey((prevKey) => prevKey + 1);
  };

  return {
    image,
    handleImageChange,
    UploadImage,
    removeImage,
    fileInputKey,
    imageName,
    imageSize,
    sizePrefix,
    originalFile,
  };
};

export default useImageUpload;
