import React from "react";
import "./Table.scss";
export interface TableProps {
  id?: string;
  tableRow: Array<any>;
  tableHeader: Array<any>;
  footer?: String;
  rowStyle: string;
  headerBackground?: string;
  customSortIcon?: React.ReactNode;
  checkable?: Boolean;
  allChecked?: Boolean;
  getCheckedItems?: Function;
  allCheckClicked?: Function;
}
declare const _default: React.NamedExoticComponent<TableProps>;
export default _default;
