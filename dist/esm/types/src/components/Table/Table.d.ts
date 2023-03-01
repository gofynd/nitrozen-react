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
  checkable?: boolean;
  onRowClick?: (index: number) => void;
  allChecked?: boolean;
  getCheckedItems?: Function;
  allCheckClicked?: Function;
  showColumnDivider?: boolean;
  customClassName?: string;
  customStyle?: React.CSSProperties;
}
declare const _default: React.NamedExoticComponent<TableProps>;
export default _default;
