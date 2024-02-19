import React, { useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
const DynamicTwoCloumTableForm = dynamic(
  () => import("../../Layouts/TwoColumLayout/TwoCloumTableForm"),
  { ssr: false }
);
import { CreatecitysFileds, CityDetailsApi } from "../../JsonData/formFileds";
import {
  cityDataColoum,
  CitysampleData,
  SuperAdminColum,
} from "../../JsonData/TableData";
import { CityContext } from "../../ContextApi/CityContextApi";
import { AppContext } from "../../ContextApi/AppContextApi";

export default function CitiesPage() {
  const {
    allCites,
    handelDeleteCity,
    handelAllCites,
    handelnewCity,
    toggleAction,
  } = useContext(CityContext);
  const { modelPassData, setmodelPassData, isModalOpen, setIsModalOpen } =
    useContext(AppContext);

  useEffect(() => {
    handelAllCites();
  }, [toggleAction]);

  return (
    <DashboardLayout>
      <DynamicTwoCloumTableForm
        pageTitle="City Page"
        tableTitle="City List"
        formTitle="CREATE CITY"
        formFields={CreatecitysFileds}
        apiData={CityDetailsApi}
        forAction="submit"
        tableColumn={cityDataColoum}
        tableData={allCites}
        SuperAdminColum={SuperAdminColum}
        sideForm={true}
        modelYesAct={handelDeleteCity}
        handelcreateNew={handelnewCity}
      />
    </DashboardLayout>
  );
}
