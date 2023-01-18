import React, { memo } from "react";
import "./Table.scss";

export interface TableProps {
  id: string;
  tableRow: Array<any>;
  tableHeader: Array<any>;
}

const Table: React.FC<TableProps> = (props) => {
  const { id, tableRow, tableHeader } = props;

  return (
    <div className="table-scroll">
      <table className="n-main-table">
        <thead>
          <tr>
            {tableHeader.map((headerItem, headerIndex) => {
              return (
                <th
                  className="n-table-header"
                  data-testid={`n-table-header-${headerIndex}`}
                >
                  {headerItem.value}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableRow.map((rowItem, rowIndex) => {
            return (
              <tr>
                {tableHeader.map((headerCnt, headerIndex) => {
                  return (
                    <td
                      className="n-row-data"
                      data-testid={`n-row-data-${rowIndex}-${headerIndex}`}
                    >
                      {JSON.stringify(tableHeader[rowIndex])}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  id: "1",
  tableRow: [],
};

export default memo(Table);
