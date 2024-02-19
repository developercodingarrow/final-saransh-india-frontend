// GENERIC HANDLER FOR SEND ONLY DATA
export const genericDataHandler = (sendDataFunction) => {
  return async (data) => {
    try {
      const result = await sendDataFunction(data);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// GENERIC HANDLER FOR SEND ONLY DATA
export const newgenericDataHandler = (
  sendDataFunction,
  settoggleState,
  toggleState
) => {
  return async (data) => {
    try {
      const result = await sendDataFunction(data);
      settoggleState(!toggleState);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// GENERIC HANDLER FOR SEND DATA AND OPTIONAL UrlToken
export const genericDataAndSlugHandler = (sendDataFunction) => {
  return async (data, slug) => {
    try {
      console.log(data);
      const result = await sendDataFunction(data, slug);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

// GENERIC HANDLER FOR SEND DATA AND OPTIONAL UrlToken
export const genericGetByIDHandler = (sendDataFunction) => {
  return async (id) => {
    try {
      const result = await sendDataFunction(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  };
};

export const genericPagePushHandler = (router, baseRoute, passValue) => {
  router.push(`${baseRoute}/${passValue}`);
};
