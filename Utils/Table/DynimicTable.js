import React, { useState, useEffect } from "react";
import styles from "./css/dynimicTable.module.css";
import { formatDate } from "../logical-function/formatDate";
import useTableFillters from "../../custome-hooks/useTableFillters";
import ActionBtn from "../Elements/buttonsElements/ActionBtn";
import TableImage from "../Elements/TableImage/TableImage";

export default function DynamicTable(props) {
  const {
    tableData,
    tableColumns,
    handleCheckboxChange,
    handelDeleteAction,
    handelSwitch,
    handelViewAction,
    handelEditAction,
    visibalRows,
    folderPath,
  } = props;

  const handlers = {
    checkbox: handleCheckboxChange,
    delete: handelDeleteAction,
    switch: handelSwitch,
    view: handelViewAction,
    update: handelEditAction,
    singleImage: folderPath,

    // Add more handlers as needed based on component types
  };

  const {
    // visibalRows,
    totalRows,
    startIndex,
    endIndex,
    rowsPerPage,
    currentPage,
    toggle,
    settoggle,
    handleRowsPerPageChangeWrapper,
    updateVisibleRows,
  } = useTableFillters(tableData);

  useEffect(() => {
    // Check if the hook is initialized before calling updateVisibleRows
    if (visibalRows) {
      settoggle(!toggle);
      updateVisibleRows();
    }
  }, [currentPage, rowsPerPage, totalRows]);

  return (
    <div className={styles.table_container}>
      <div className={styles.table_wrapper}>
        <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tableTr}>
              {tableColumns.map((column) => (
                <th key={column.label}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className={styles.table_body}>
            {visibalRows.map((row, no) => (
              <tr key={row.id}>
                {tableColumns.map((column) => (
                  <td key={column.label}>
                    {renderCellContent(
                      no,
                      row[column.key],
                      row._id,
                      row.slug,
                      column.component,
                      handlers[column.component]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.table_footerContainer}>
        <div className={styles.row_perPageBox}>Row per page</div>
        <div className={styles.row_selectBox}>
          <select value={rowsPerPage} onChange={handleRowsPerPageChangeWrapper}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div className={styles.row_totalNumerBox}>
          <span>{startIndex}</span>
          <span>-</span>
          <span>{endIndex}</span>
          <span>of</span>
          <span>{totalRows}</span>
        </div>

        <div className={styles.row_arrowBox}>
          <span>{"<"}</span>
          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
}

// Helper function to render cell content based on component type
const renderCellContent = (indexNo, data, id, slug, componentType, handler) => {
  switch (componentType) {
    case "number":
      return indexNo + 1;
    case "text":
      return data;

    case "date":
      return formatDate(data);

    case "checkbox":
      if (handler) {
        return <p>Check box</p>;
      }

    case "switch":
      if (handler) {
        return (
          <>
            <p>{slug}</p>
          </>
        );
      }

    case "delete":
      if (handler) {
        return (
          <>
            <ActionBtn
              onClick={handler}
              btnDesign={"button"}
              itemId={id}
              icon="delete"
              buttonPadding="deleteIconBtnPadding"
            />
          </>
        );
      }

    case "update":
      if (handler) {
        return (
          <>
            <ActionBtn
              label="Edit"
              onClick={handler}
              btnDesign={"button"}
              itemId={id}
              buttonPadding="buttonPadding"
            />
          </>
        );
      }

    case "view":
      if (handler) {
        return (
          <>
            <ActionBtn
              label="View"
              onClick={handler}
              btnDesign={"button"}
              itemId={slug}
              buttonPadding="buttonPadding"
            />
          </>
        );
      }

    case "singleImage":
      if (handler) {
        return (
          <>
            <TableImage imageData={data} folderPath={handler} />
          </>
        );
      }

    default:
      return data;
  }
};
