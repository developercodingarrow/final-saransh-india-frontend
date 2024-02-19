// Function to get class names based on uDSideBarToggle value
export const getClassName = (uDSideBarToggle, styles) => {
  const closeSideBar = uDSideBarToggle
    ? styles.aside_Drawer
    : styles.close_aside_Drawer;

  const closeNavBar = uDSideBarToggle
    ? styles.navBar_Container
    : styles.close_navBar_Container;

  const closeContainer = uDSideBarToggle
    ? styles.content_side
    : styles.close_content_side;

  const closeDynimic = uDSideBarToggle
    ? styles.dynimic_content_wrapper
    : styles.close_dynimic_content_wrapper;

  const asideToggleBox = uDSideBarToggle
    ? styles.aside_Drawer_toogleBox
    : styles.close_aside_Drawer_toogleBox;

  return {
    closeSideBar,
    closeNavBar,
    closeContainer,
    closeDynimic,
    asideToggleBox,
  };
};
