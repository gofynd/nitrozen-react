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
    <div className="n-table" data-testid={`table-${id}`}>
      <table className="n-main-table">
        <thead>
          <tr className="n-table-header-tr">
            {/* For all table headers map the table header values */}
            {tableHeader.map((headerItem, headerIndex) => {
              return (
                <th
                  className="n-table-header"
                  data-testid={`n-table-header-${headerIndex}`}
                  style={headerItem.width ? { width: headerItem.width } : {}}
                >
                  {headerItem.value}
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
              <tr className="n-table-row-item">
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
        {/* <tfoot>
          <tr className="n-table-footer">
            <td>Deafult Footer</td></tr>
        </tfoot> */}
      </table>
    </div>
  );
};

Table.defaultProps = {
  id: "1",
  tableRow: [],
};

export default memo(Table);
