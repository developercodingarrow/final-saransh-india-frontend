import React, { useContext } from "react";
import styles from "./css/asideoptioons.module.css";
import { asidebarOptions, asidefooterLink } from "../../JsonData/PageLinks";
import Link from "next/link";
import { AppContext } from "../../ContextApi/AppContextApi";

export default function AsideOptions() {
  const { userRole } = useContext(AppContext);

  console.log(userRole); // super-admin
  const roleUser = "admin";

  const roleOptions = {
    admin: ["Dashboard", "PROJECT", "BLOG", "CITY PAGE", "DEVELOPER"],
    superAdmin: [
      "Dashboard",
      "PROJECT",
      "BLOG",
      "CITY PAGE",
      "DEVELOPER",
      "Enquries",
      "Create Admin",
    ],
    // Add more roles and their associated options as needed
  };

  // Filter options based on userRole
  const filteredOptions = asidebarOptions.filter((option) =>
    roleOptions[roleUser]?.includes(option.name)
  );

  return (
    <div className={styles.AsideOptions_mainContainer}>
      <div className={styles.options_tabContainer}>
        {filteredOptions.map((el, i) => {
          return (
            <Link href={el.link} className={styles.options_Tab} key={i}>
              <div className={styles.option_Tab_iconBox}>
                {" "}
                {React.createElement(el.iconComponent)}
              </div>
              <div className={styles.option_Tab_Text}>{el.name}</div>
            </Link>
          );
        })}
      </div>

      <div className={styles.aside_footerLinkBox}>
        {asidefooterLink.map((el, i) => {
          return (
            <Link href={el.hrfLink} className={styles.options_Tab} key={i}>
              <div className={styles.footeroption_Tab_Text}>{el.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
