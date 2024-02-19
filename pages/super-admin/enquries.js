import React, { useContext, useEffect } from "react";
import DashboardLayout from "../../Layouts/DashBoardLayout/DashboardLayout";
// import TwoCloumTableForm from "../../Layouts/TwoColumLayout/TwoCloumTableForm";
import { enquiesTableColumn } from "../../JsonData/TableData";
import { EnquireyContext } from "../../ContextApi/enquireyContectApi";
import dynamic from "next/dynamic";
import * as XLSX from "xlsx";

const DynamicTwoCloumTableForm = dynamic(
  () => import("../../Layouts/TwoColumLayout/TwoCloumTableForm"),
  { ssr: false }
);
export default function EnquriesPage() {
  const { enquries, handelAllEnquries, handelDeleteEnqurie, toggleAction } =
    useContext(EnquireyContext);

  useEffect(() => {
    handelAllEnquries();
  }, [toggleAction]);

  const handelDownoald = () => {
    const ws = XLSX.utils.json_to_sheet(enquries);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "UsersData");
    XLSX.writeFile(wb, "enquires_data.xlsx");
  };

  return (
    <DashboardLayout>
      <DynamicTwoCloumTableForm
        pageTitle="Enquires Page"
        tableTitle="EnquiresList"
        tableColumn={enquiesTableColumn}
        tableData={enquries}
        modelYesAct={handelDeleteEnqurie}
        createNewBtn="Downold Enquires"
        createNew={handelDownoald}
      />
    </DashboardLayout>
  );
}
