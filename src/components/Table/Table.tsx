import React, { memo, useState, useEffect } from "react";
import NitrozenId from "../../utils/uuids";
import "./Table.scss";
import {
  SvgIcChevronDown,
  SvgIcChevronRight,
} from "../../assets/svg-components";
import Checkbox from "../Checkbox/Checkbox";
export interface TableProps {
  id?: string;
  tableRow: Array<any>;
  tableHeader: Array<any>;
  footer?: String;
  rowStyle: string;
  headerBackground?: string;
  customSortIcon?: React.ReactNode;
  checkable?: boolean;
  onRowClick?: (index: number) => void;
  allChecked?: boolean;
  getCheckedItems?: Function;
  allCheckClicked?: Function;
  showColumnDivider?: boolean;
  customClassName?: string;
  customStyle?: React.CSSProperties;
}

const Table: React.FC<TableProps> = (props) => {
  const {
    id,
    tableRow,
    tableHeader,
    showColumnDivider,
    customStyle,
    customClassName,
  } = props;
  const [clickedIds, setClickedIds] = useState<number[]>([]);

  /**
   *
   * @param headerIndex index of the item that was clicked
   */
  const handleSortClicked = (headerIndex: number) => {
    let clickedHeaderItem = tableHeader[headerIndex];
    // create a temp arr
    let tempClickedIds = [...clickedIds];
    // if not exists then that means its clicked
    if (!tempClickedIds.includes(headerIndex)) {
      tempClickedIds.push(headerIndex);
      clickedHeaderItem.customSort({
        sort: true,
        headerIndex,
        headerName: clickedHeaderItem.name,
      });
    } else {
      // if exists then find by index and remove that array element
      let indexPos = tempClickedIds.indexOf(headerIndex);
      if (indexPos > -1) {
        tempClickedIds.splice(indexPos, 1);
        clickedHeaderItem.customSort({
          sort: false,
          headerIndex,
          headerName: clickedHeaderItem.name,
        });
      }
    }
    // set to state
    setClickedIds(tempClickedIds);
  };

  const handleRowCheckClicked = (status: boolean, rowIndex: number) => {
    let tempCheckedArr = [...tableRow];
    tempCheckedArr[rowIndex].isChecked = status;
    props.getCheckedItems?.(tempCheckedArr);
  };

  const handleRowClick = (index: number) => {
    return () => {
      props.onRowClick?.(index);
    };
  };

  return (
    <div
      className={`n-table ${customClassName ? customClassName : ""}`}
      data-testid={`table-${id}`}
      style={customStyle ?? {}}
    >
      <table className="n-main-table">
        <thead>
          <tr className="n-table-header-tr">
            {props.checkable ? (
              <th
                className="n-table-header-checkbox"
                style={{
                  backgroundColor: props.headerBackground,
                }}
              >
                <div className="n-table-checbox-wrapper">
                  <Checkbox
                    id="header-checkbox"
                    value={props.allChecked}
                    onChange={(status: boolean) => {
                      props.allCheckClicked?.(status);
                    }}
                    checkboxValue={props.allChecked}
                  />
                </div>
              </th>
            ) : (
              <></>
            )}
            {/* For all table headers map the table header values */}
            {tableHeader.map((headerItem, headerIndex) => {
              return (
                <th
                  className={`n-table-header ${
                    headerItem.sortable ? "n-cursor-pointer" : ""
                  }`}
                  data-testid={`n-table-header-${headerIndex}`}
                  style={{
                    width: headerItem.width ? headerItem.width : "auto",
                    backgroundColor: props.headerBackground,
                  }}
                  onClick={() => handleSortClicked(headerIndex)}
                  key={`n-table-header-${headerIndex}`}
                >
                  <div className="n-th-parent">
                    <span
                      className="n-table-header-text"
                      data-testid={`header-value-${headerIndex}`}
                    >
                      {" "}
                      {headerItem.value}
                    </span>
                    {headerItem.sortable ? (
                      <>
                        {/* if the current headerIndex exists in the clickedIds array then show the arrow down svg*/}
                        {clickedIds.includes(headerIndex) ? (
                          props.customSortIcon ? (
                            props.customSortIcon
                          ) : (
                            <SvgIcChevronDown className="n-action-icon" />
                          )
                        ) : props.customSortIcon ? (
                          props.customSortIcon
                        ) : (
                          <SvgIcChevronRight className="n-action-icon" />
                        )}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {/* Itetrate over each row item  */}
          {tableRow.map((rowItem, rowIndex) => {
            return (
              // map header value ex rowItem.name
              <tr
                data-testid={`row-${rowIndex}`}
                className={`n-table-row-item ${
                  !props.footer ? "n-table-row-item-nofooter" : ""
                } ${props.rowStyle == "zebra" ? "n-table-row-zebra" : ""} ${
                  props.checkable ? "n-table-row-item-checkbox" : ""
                } ${props.onRowClick ? "n-table-row-item-clickable" : ""}`}
                key={`row-${rowIndex}`}
                {...(props.onRowClick
                  ? {
                      onClick: handleRowClick(rowIndex),
                    }
                  : {})}
              >
                {props.checkable ? (
                  <td className="n-row-data">
                    <div className="n-table-checbox-wrapper">
                      <Checkbox
                        id={`n-row-checkbox-${rowIndex}`}
                        value={rowItem.isChecked}
                        onChange={(status: boolean) =>
                          handleRowCheckClicked(status, rowIndex)
                        }
                        checkboxValue={rowItem.isChecked}
                      />
                    </div>
                  </td>
                ) : (
                  <></>
                )}
                {tableHeader.map((headerElement, headerIndex) => {
                  return (
                    <td
                      className={`n-row-data ${
                        !showColumnDivider ? "n-table-no-divider" : ""
                      }`}
                      data-testid={`n-row-data-${rowIndex}-${headerIndex}`}
                      key={`n-row-data-${rowIndex}-${headerIndex}`}
                    >
                      {rowItem[headerElement.name]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {props.footer ? (
          <tfoot>
            <tr className="n-table-footer">
              <td
                colSpan={
                  props.checkable ? 1 + tableHeader.length : tableHeader.length
                }
                data-testid={`footer-data`}
              >
                {props.footer}
              </td>
            </tr>
          </tfoot>
        ) : null}
      </table>
    </div>
  );
};

Table.defaultProps = {
  id: `nitrozen-dialog-${NitrozenId()}`,
  tableHeader: [],
  tableRow: [],
  rowStyle: "simple",
  headerBackground: "",
  customSortIcon: "",
  checkable: false,
  allChecked: false,
  getCheckedItems: () => {},
  allCheckClicked: () => {},
  showColumnDivider: true,
};

export default memo(Table);
