export const CreatecitysFileds = [
  {
    id: 1,
    name: "city",
    type: "text",
    placeholder: "City Name",
    label: "City Name", // Changed 'lable' to 'label'
    validation: {
      required: "City NAME is required.",
    },
  },
];

export const CityDetailsApi = {};

export const CreateDeveloeprFileds = [
  {
    id: 3,
    name: "builderName",
    type: "text",
    placeholder: "Develeper Name",
    label: "Developer Name", // Changed 'lable' to 'label'
    validation: {
      required: "Developer NAME is required.",
    },
  },
];

export const DeveloperDetailsApi = {};

export const ProjectDetailsApi = {};

export const ProjectStatus = [
  {
    id: 9,
    name: "projectStatus",
    type: "radio",
    label: "Project Status",
    options: ["Ready To Move", "under Constructor", "upcoming"],
    validation: {
      required: "Please select a business type.",
    },
  },
];

export const ProjectUnitsType = [
  {
    id: 10,
    name: "projectUnits",
    type: "checkbox",
    label: "project Units",
    options: ["2 BHK", "3 BHk", "4 BHK"],
    validation: {
      required: "Please select at least one Project Unit type.",
    },
  },
];

export const ProjectPrices = [
  {
    id: 11,
    name: "price",
    type: "text",
    label: "unit price",
    placeholder: "Price",
    // validation: {
    //   required: "Please select at least one Project Unit type.",
    // },
  },

  {
    id: 2,
    name: "pricePrefix",
    type: "text",
    label: "price Prefix",
    placeholder: "price Prefix",
    // validation: {
    //   required: "Please select at least one Project Unit type.",
    // },
  },

  {
    id: 3,
    name: "basicPrice",
    type: "text",
    label: "Baise price",
    placeholder: "Basis Price",
    // validation: {
    //   required: "Please select at least one Project Unit type.",
    // },
  },
];

export const ProjectLocation = [
  {
    id: 12,
    name: "city",
    type: "apiSelectList",
    label: "City",
    validation: {
      required: "Please select at least one Project Unit type.",
    },
  },
];

export const projectArea = [
  {
    id: 13,
    name: "ProjectArea",
    type: "text",
    placeholder: "Project Area",
    label: "Project Area",
    // validation: {
    //   required: "Project Area is required.",
    // },
  },

  {
    id: 2,
    name: "NoofFloors",
    type: "text",
    placeholder: "No of Floors",
    label: "No of Floors ",
    // validation: {
    //   required: "No of Floors is required.",
    // },
  },
  {
    id: 3,
    name: "NoofUnits",
    type: "text",
    placeholder: "No of Units",
    label: "No of Units ",
    // validation: {
    //   required: "No of Units is required.",
    // },
  },
];

export const blogtitleFiled = [
  {
    id: 14,
    name: "blogTitle",
    type: "text",
    placeholder: "write Blog Title",
    label: "Blog Title",
    validation: {
      required: "Blog Title is required.",
    },
  },
];

export const metaescription = [
  {
    id: 15,
    name: "metaDescription",
    type: "textarea",
    placeholder: "Meta Description",
    label: "Meta Description", // Changed 'lable' to 'label'
    validation: {
      required: "Meta Description is required.",
    },
  },
];

export const BlogDetailsApi = {
  id: 16,
  //   cityNameName: "Gurgaon",
};

export const dummyapi = {};

export const enquireyFormFiled = [
  {
    id: 18,
    name: "userName",
    type: "text",
    placeholder: "Enter Your Name",
    lable: "Name",
    validation: {
      required: "Name is required.",
    },
  },
  {
    id: 19,
    name: "userEmail",
    type: "text",
    placeholder: "Enter Your E-mail",
    lable: "E-mail",
    validation: {
      required: "E-mail is required.",
    },
  },

  {
    id: 20,
    name: "userNumber",
    type: "text",
    placeholder: "Enter Your Mobile Number",
    lable: "Mobile Number",
    validation: {
      required: "Mobile Number is required.",
    },
  },

  {
    id: 21,
    name: "userMessage",
    type: "textarea",
    placeholder: "Message",
    lable: "Message",
  },
];

export const contactFormFiled = [
  {
    id: 22,
    name: "name",
    type: "text",
    placeholder: "Enter Your Name",
    lable: "Name",
    validation: {
      required: "Name is required.",
    },
  },
  {
    id: 23,
    name: "email",
    type: "text",
    placeholder: "Enter Your E-mail",
    lable: "E-mail",
    validation: {
      required: "E-mail is required.",
    },
  },

  {
    id: 24,
    name: "number",
    type: "text",
    placeholder: "Enter Your Mobile Number",
    lable: "Mobile Number",
    validation: {
      required: "Mobile Number is required.",
    },
  },

  {
    id: 25,
    name: "message",
    type: "textarea",
    placeholder: "Message",
    lable: "Message",
  },
];

/****************************************
 * ***********Review Data************
 ***************************************/
export const projectDetails = [
  {
    id: 5,
    name: "projectTitle",
    type: "text",
    placeholder: "Project Name",
    label: "Project Name",
    validation: {
      required: "Project NAME is required.",
    },
  },

  {
    id: 6,
    name: "propertytype",
    type: "radio",
    label: "Property Type",
    options: ["affordable", "luxury"],
    validation: {
      required: "Please select a Project Status.",
    },
  },

  {
    id: 7,
    name: "projectStatus",
    type: "radio",
    label: "Project Status",
    options: ["upcoming Project", "ready to move", "under constructor"],
  },

  {
    id: 8,
    name: "typesofUnits",
    type: "checkbox",
    label: "project Units",
    options: ["2 BHK", "3 BHK", "4 BHK"],
  },

  {
    id: 9,
    name: "builderName",
    type: "apiSelectList",
    placeholder: "Builder ",
    label: "Builder/Developer", // Changed 'lable' to 'label'
  },
  {
    id: 10,
    name: "reraNo",
    type: "text",
    placeholder: "RERA NO",
    label: "RERA NO ",
  },
];
