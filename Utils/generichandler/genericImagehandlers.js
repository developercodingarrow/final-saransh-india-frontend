// This GENERIC HANDLER FOR UPLOAD SINGLE IMAGE
export const genericSingleImageHandler = (uploadFunction) => {
  return async (seletedImage, imageFor, id) => {
    try {
      const formData = new FormData();
      formData.append(`${imageFor}`, seletedImage);
      const result = await uploadFunction(formData, id);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// This Function for Uplaod image gallery
export const genericUploadGalleryHandler = (uploadFunction) => {
  return async (imageDataArray, imageFor, id) => {
    try {
      console.log(imageDataArray);
      const formData = new FormData();

      imageDataArray.forEach((imageData, index) => {
        formData.append(`${imageFor}`, imageData);
      });

      const result = await uploadFunction(formData, id);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

export const genericDataHandler = (sendDataFunction) => {
  return async (id, projectId) => {
    try {
      const result = await sendDataFunction(id, projectId);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};
