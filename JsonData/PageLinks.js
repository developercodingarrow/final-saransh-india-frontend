import {
  AiOutlineDashboard,
  MdOutlineHomeWork,
  FaMagnifyingGlassLocation,
  FaPersonShelter,
  IoNewspaperOutline,
  AiOutlineNotification,
} from "../Utils/ApplicationIcon";

export const asidebarOptions = [
  {
    name: "Dashboard",
    iconComponent: AiOutlineDashboard, // Use the imported component
    link: "/super-admin",
  },
  {
    name: "PROJECT",
    iconComponent: MdOutlineHomeWork, // Use the imported component
    link: "/super-admin/projects",
  },
  {
    name: "BLOG",
    iconComponent: IoNewspaperOutline, // Use the imported component
    link: "/super-admin/blog",
  },
  {
    name: "CITY PAGE",
    iconComponent: FaMagnifyingGlassLocation, // Use the imported component
    link: "/super-admin/cities",
  },
  {
    name: "DEVELOPER",
    iconComponent: FaPersonShelter, // Use the imported component
    link: "/super-admin/developer",
  },

  {
    name: "Enquries",
    iconComponent: AiOutlineNotification, // Use the imported component
    link: "/super-admin/enquries",
  },

  {
    name: "Create Admin",
    iconComponent: AiOutlineNotification, // Use the imported component
    link: "/super-admin/admins/admin-registration",
  },
];

// projects

export const asidefooterLink = [
  {
    name: "HOME",
    hrfLink: "/",
  },
  {
    name: "About Us",
    hrfLink: "/about-us",
  },
  {
    name: "Contact Us",
    hrfLink: "/contact-us",
  },
  {
    name: "Privacy Policy",
    hrfLink: "/",
  },
];

export const dekstopNavBarTab = [
  {
    name: "Home",
    hrfLink: "/",
  },
  {
    name: "About us",
    hrfLink: "/about-us",
  },

  {
    name: "Project",
    hrfLink: "/property",
  },

  {
    name: "Blog",
    hrfLink: "/blog",
  },

  {
    name: "Contat us",
    hrfLink: "/contact-us",
  },
];
