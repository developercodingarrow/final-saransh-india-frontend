import React, { useState, useEffect } from "react";
import styles from "./css/dynimicTablecopy.module.css";
import { formatDate } from "../logical-function/formatDate";
import useTableFillters from "../../custome-hooks/useTableFillters";
import ActionBtn from "../Elements/buttonsElements/ActionBtn";
import TableImage from "../Elements/TableImage/TableImage";

export default function DynamicTableCopy(props) {
  const {
    tableData,
    tableColumns,
    handleCheckboxChange,
    handelbtnAction,
    handelSwitch,
    handelViewAction,
    visibalRows,
  } = props;

  const handlers = {
    checkbox: handleCheckboxChange,
    delete: handelbtnAction,
    switch: handelSwitch,
    view: handelViewAction,
    singleImage: handelViewAction,
    // Add more handlers as needed based on component types
  };

  const {
    // visibalRows,
    totalRows,
    startIndex,
    endIndex,
    rowsPerPage,
    currentPage,
    handleRowsPerPageChangeWrapper,
    updateVisibleRows,
  } = useTableFillters(tableData);

  useEffect(() => {
    updateVisibleRows();
  }, [currentPage, rowsPerPage]);

  return (
    <div className={styles.card_container}>
      <div className={styles.tableHeader}>
        {tableColumns.map((column) => (
          <div key={column.label} className={styles.tableHeaderCell}>
            {column.label}
          </div>
        ))}
      </div>
      <div className={styles.table_body}>
        {visibalRows.map((row, no) => (
          <div key={row.id} className={styles.tableRow}>
            {tableColumns.map((column) => {
              const { content, className } = renderCellContent(
                no,
                row[column.key],
                row._id,
                row.slug,
                column.component,
                handlers[column.component]
              );

              return (
                <div
                  key={column.label}
                  className={`${styles.tableCell} ${styles[className]}`}
                >
                  {content}
                </div>
              );
            })}
          </div>
        ))}
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
// const renderCellContent = (indexNo, data, id, slug, componentType, handler) => {
//   let content = null;
//   let className = "";

//   switch (componentType) {
//     case "number":
//       return indexNo + 1;
//     case "text":
//       return data;

//     case "date":
//       return formatDate(data);

//     case "checkbox":
//       if (handler) {
//         return <p>Check box</p>;
//       }

//     case "switch":
//       if (handler) {
//         return (
//           <>
//             <p>Switch Btn</p>
//           </>
//         );
//       }

//     case "delete":
//       if (handler) {
//         return (
//           <>
//             <ActionBtn
//               onClick={handler}
//               btnDesign={"button"}
//               itemId={id}
//               icon="delete"
//               buttonPadding="deleteIconBtnPadding"
//             />
//           </>
//         );
//       }

//     case "update":
//       if (handler) {
//         return (
//           <>
//             <p>UPDATE BUTTON</p>
//           </>
//         );
//       }

//     case "view":
//       if (handler) {
//         return (
//           <>
//             <ActionBtn
//               label="View"
//               onClick={handler}
//               btnDesign={"button"}
//               itemId={slug}
//               buttonPadding="buttonPadding"
//             />
//           </>
//         );
//       }

//     case "singleImage":
//       if (handler) {
//         return (
//           <>
//             <TableImage imageData={data} />
//           </>
//         );
//       }

//     default:
//       content = data;
//       break;
//   }
//   return {
//     content,
//     className,
//   };
// };

const renderCellContent = (indexNo, data, id, slug, componentType, handler) => {
  let content = null;
  let className = ""; // Initialize className

  switch (componentType) {
    case "number":
      content = indexNo + 1;
      className = "numberCell";
      break;
    case "text":
      content = data;
      className = "text-cell";
      break;
    case "date":
      content = formatDate(data);
      className = "date-cell";
      break;
    case "checkbox":
      if (handler) {
        content = <p>Check box</p>;
        className = "checkbox-cell";
      }
      break;
    case "switch":
      if (handler) {
        content = <p>Switch Btn</p>;
        className = "switch-cell";
      }
      break;
    case "delete":
      if (handler) {
        content = (
          <ActionBtn
            onClick={handler}
            btnDesign={"button"}
            itemId={id}
            icon="delete"
            buttonPadding="deleteIconBtnPadding"
          />
        );
        className = "delete-cell";
      }
      break;
    case "update":
      if (handler) {
        content = <p>UPDATE BUTTON</p>;
        className = "update-cell";
      }
      break;
    case "view":
      if (handler) {
        content = (
          <ActionBtn
            label="View"
            onClick={handler}
            btnDesign={"button"}
            itemId={slug}
            buttonPadding="buttonPadding"
          />
        );
        className = "view-cell";
      }
      break;
    case "singleImage":
      if (handler) {
        content = <TableImage imageData={data} />;
        className = "imageCell";
      }
      break;
    default:
      content = data;
      break;
  }

  return {
    content,
    className,
  };
};
