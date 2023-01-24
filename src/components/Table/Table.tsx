import React, { memo, useState } from "react";
import NitrozenId from "../../utils/uuids";
import "./Table.scss";
import {
  SvgKeyboardArrowDown,
  SvgKeyboardArrowRight,
} from "../../assets/svg-components";

export interface TableProps {
  id: string;
  tableRow: Array<any>;
  tableHeader: Array<any>;
  footer?: String;
  rowStyle: string;
  headerBackground: string;
}

const Table: React.FC<TableProps> = (props) => {
  const { id, tableRow, tableHeader } = props;
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

  return (
    <div className="n-table" data-testid={`table-${id}`}>
      <table className="n-main-table">
        <thead>
          <tr className="n-table-header-tr">
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
                >
                  <div className="n-th-parent">
                    <span className="n-table-header-text">
                      {" "}
                      {headerItem.value}
                    </span>
                    {headerItem.sortable ? (
                      <>
                        {/* if the current headerIndex exists in the clickedIds array then show the arrow down svg*/}
                        {clickedIds.includes(headerIndex) ? (
                          <SvgKeyboardArrowDown className="n-action-icon" />
                        ) : (
                          <SvgKeyboardArrowRight className="n-action-icon" />
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
                className={`n-table-row-item ${
                  !props.footer ? "n-table-row-item-nofooter" : ""
                } ${props.rowStyle == "zebra" ? "n-table-row-zebra" : ""}`}
              >
                {tableHeader.map((headerElement, headerIndex) => {
                  return (
                    <td
                      className="n-row-data"
                      data-testid={`n-row-data-${rowIndex}-${headerIndex}`}
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
              <td colSpan={tableHeader.length}>{props.footer}</td>
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
};

export default memo(Table);
