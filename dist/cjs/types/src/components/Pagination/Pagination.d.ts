import React from "react";
import "./Pagination.scss";
export declare enum ModeEnum {
  MODE_REGULAR = "regular",
  MODE_CURSOR = "cursor",
}
export declare enum TypeEnum {
  TYPE_DEFAULT = "default",
  TYPE_TOP = "top",
}
export declare enum SizeEnum {
  SIZE_LARGE = "large",
  SIZE_SMALL = "small",
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
  type?: TypeEnum;
  size?: SizeEnum;
  pageSizeOptions?: number[];
  defaultPageSize?: number;
  value: ConfigProps;
  onChange?: (paginationData: ConfigProps) => any;
  onPreviousClick?: () => any;
  onNextClick?: () => any;
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
    type: TypeEnum;
    size: SizeEnum;
    pageSizeOptions: number[];
    defaultPageSize: number;
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
