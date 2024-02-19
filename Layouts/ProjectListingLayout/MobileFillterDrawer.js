import React, { useContext, useState } from "react";
import styles from "./css/mobileFillterDrawer.module.css";
import {
  IoIosArrowForward,
  IoLocationOutline,
} from "../../Utils/ApplicationIcon";
import PriceSlider from "../../Utils/data-fillter/price/PriceSlider";
import ButtonCheckBox from "../../Utils/data-fillter/checkBox/ButtonCheckBox";
import { tabOptions } from "../../JsonData/fillterFileds";
import { useFillterUrlUpdater } from "../../custome-hooks/useFillterUrlUpdater";
import CheckBoxFillter from "../../Utils/data-fillter/checkBox/CheckBoxFillter";
import FillterInput from "../../Utils/data-fillter/searchInputs/FillterInput";
import FillterHeader from "./FillterHeader";
import { CityContext } from "../../ContextApi/CityContextApi";
import { BuilderContext } from "../../ContextApi/BuilderContextApi";
export default function MobileFillterDrawer() {
  const [activeTab, setActiveTab] = useState("searchTerm");
  const {
    checkedItems,
    handleCheckboxChange,
    handleCityChange,
    selectedCities,
    handleBuilderSelection,
    selectedBuilders,
    handleSliderChange,
    normalizedPrice,
    handelsearchTermChange,
    searchTerm,
    selectedunitTypes,
    handleUnitTypeChange,
    slectedprojectStatus,
    handleProjectStatusChange,
    setsearchTerm,
  } = useFillterUrlUpdater();
  const { allCites, handelAllCites } = useContext(CityContext);
  const { allBuilders, handelAllBuilder } = useContext(BuilderContext);

  const renderOptions = () => {
    const activeTabData = tabOptions.find(
      (option) => option.render === activeTab
    );

    if (!activeTabData) return null;

    const { label, options } = activeTabData;
    switch (activeTab) {
      case "minPriceRange":
        return (
          <PriceSlider
            handleSliderChange={handleSliderChange}
            normalizedPrice={normalizedPrice}
          />
        );
      case "projectStatusCheckBox":
        return (
          <div>
            <CheckBoxFillter
              options={options}
              checkedItems={slectedprojectStatus}
              onCheckboxChange={handleProjectStatusChange}
              titel="Project Status"
            />
          </div>
        );
      case "cityCheckBox":
        const cityOptions = allCites.map((cityData) => cityData.city);
        return (
          <CheckBoxFillter
            label={label}
            options={cityOptions}
            checkedItems={selectedCities}
            onCheckboxChange={handleCityChange}
            titel="Select Your City"
          />
        );

      case "builderCheckBox":
        const builderOptions = allBuilders.map(
          (builderData) => builderData.builderName
        );
        return (
          <CheckBoxFillter
            label={label}
            options={builderOptions}
            checkedItems={selectedBuilders}
            onCheckboxChange={handleBuilderSelection}
            titel="Select Your builder"
          />
        );
      case "searchTerm":
        return (
          <FillterInput
            handelsearch={handelsearchTermChange}
            setsearchTerm={setsearchTerm}
            searchTerm={searchTerm}
          />
        );
      case "circleCheckBox":
        return (
          <ButtonCheckBox
            label={options}
            options={options}
            checkedItems={selectedunitTypes}
            onCheckboxChange={handleUnitTypeChange}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className={styles.mainConatiner}>
      <FillterHeader
        headercloseIconBox="header_closeIconBox"
        headertitleBox="header_title"
        headerRightSide="headerRight_side"
      />
      <div className={styles.fillterTab_container}>
        <div className={styles.tab_wrapper}>
          {tabOptions.map((el) => {
            return (
              <div
                className={styles.tab_option}
                onClick={() => setActiveTab(el.render)}
              >
                <div>
                  <div className={styles.tab_iconBox}>
                    <IoLocationOutline />{" "}
                  </div>
                  <div className={styles.tabTextBox}>{el.name} </div>
                </div>
                <div className={styles.arrowBox}>
                  <IoIosArrowForward />
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.render_optionBox}>{renderOptions()}</div>
      </div>
    </div>
  );
}
