export const tabOptions = [
  {
    id: 1,
    name: "search Term",
    type: "text",
    render: "searchTerm",
    label: "Search",
  },
  {
    id: 2,
    name: "min Price",
    type: "range",
    render: "minPriceRange",
    label: "unit price",
  },
  {
    id: 3,
    name: "unit Types",
    type: "checkbox",
    render: "circleCheckBox",
    label: ["2", "3", "4", "5", "6", "7", "8"],
    options: ["2 bhk", "3 bhk", "4 bhk", "5 bhk", "6 bhk", "7 bhk", "8 bhk"],
  },

  {
    id: 4,
    name: "city",
    type: "checkbox",
    render: "cityCheckBox",
    label: ["Gurgaon", "Nodia", "Delhi"],
    options: ["gurgaon", "nodia", "delhi"],
  },

  {
    id: 5,
    name: "builder",
    type: "checkbox",
    render: "builderCheckBox",
    label: ["DLF", "GLS", "GODREJ"],
    options: ["dlf", "gls", "godrej"],
  },

  {
    id: 5,
    name: "project Status",
    type: "checkbox",
    render: "projectStatusCheckBox",
    label: ["Upcoming Project", "Ready to move", "under construction"],
    options: ["upcoming Project", "ready to move", "under construction"],
  },
];

export const dekstopFillterOptions = [
  {
    id: 2,
    name: "min Price",
    type: "range",
    render: "minPriceRange",
    label: "unit price",
    placeholder: "Price",
  },
  {
    id: 3,
    name: "unit Types",
    type: "checkbox",
    render: "circleCheckBox",
    label: ["2", "3", "4", "5", "6", "7", "8"],
    options: ["2 bhk", "3 bhk", "4 bhk", "5 bhk", "6 bhk", "7 bhk", "8 bhk"],
    placeholder: "Unit Type",
  },

  {
    id: 4,
    name: "city",
    type: "checkbox",
    render: "cityCheckBox",
    label: ["Gurgaon", "Nodia", "Delhi"],
    options: ["gurgaon", "nodia", "delhi"],
    placeholder: "City",
  },

  {
    id: 5,
    name: "builder",
    type: "checkbox",
    render: "builderCheckBox",
    label: ["DLF", "GLS", "GODREJ"],
    options: ["dlf", "gls", "godrej"],
    placeholder: "Bulders",
  },

  {
    id: 6,
    name: "projectStatus",
    type: "checkbox",
    render: "projectStatusCheckBox",
    label: ["upcoming Project", "ready to move", "under constructor"],
    options: ["upcoming Project", "ready to move", "under constructor"],
    placeholder: "Project Status",
  },

  {
    id: 7,
    name: "projectType",
    type: "checkbox",
    render: "projectTypeCheckBox",
    label: ["Affordable", "Luxury", "Ultra Luxury"],
    options: ["affordable", "luxury", "ultra luxury"],
    placeholder: "Bulders",
  },
];
