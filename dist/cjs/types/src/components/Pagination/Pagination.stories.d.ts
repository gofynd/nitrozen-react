import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModeEnum, SizeEnum, TypeEnum } from "./Pagination";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./Pagination").PaginationProps): React.JSX.Element;
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
  }>
>;
export default _default;
export declare const BasicPagination: ComponentStory<
  React.MemoExoticComponent<{
    (props: import("./Pagination").PaginationProps): React.JSX.Element;
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
  }>
>;
export declare const Secondary: ComponentStory<
  React.MemoExoticComponent<{
    (props: import("./Pagination").PaginationProps): React.JSX.Element;
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
  }>
>;
