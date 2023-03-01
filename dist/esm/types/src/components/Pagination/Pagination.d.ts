import React from "react";
import "./Pagination.scss";
export declare enum ModeEnum {
  MODE_REGULAR = "regular",
  MODE_CURSOR = "cursor",
}
export interface ConfigProps {
  limit?: number;
  total?: number;
  current?: number;
  prevPage?: string;
  nextPage?: string;
  currentPage?: string;
  currentTotal?: number;
}
export interface PaginationProps {
  id?: string;
  name?: string;
  mode?: ModeEnum;
  pageSizeOptions?: number[];
  value: ConfigProps;
  onChange?: Function;
  onPreviousClick?: Function;
  onNextClick?: Function;
  className?: string;
  style?: React.CSSProperties;
  visiblePagesNodeCount?: number;
}
export interface paginationInterface {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}
declare const _default: React.MemoExoticComponent<{
  (props: PaginationProps): JSX.Element;
  defaultProps: {
    id: string;
    mode: ModeEnum;
    pageSizeOptions: number[];
    value: {
      limit: number;
      total: number;
      current: number;
      prevPage: string;
      nextPage: string;
      currentPage: string;
      currentTotal: number;
    };
  };
}>;
export default _default;
