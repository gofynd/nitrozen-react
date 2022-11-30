import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ModeEnum } from "./Pagination";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./Pagination").PaginationProps): JSX.Element;
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
  }>
>;
export default _default;
export declare const BasicPagination: ComponentStory<
  React.MemoExoticComponent<{
    (props: import("./Pagination").PaginationProps): JSX.Element;
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
  }>
>;
export declare const Secondary: ComponentStory<
  React.MemoExoticComponent<{
    (props: import("./Pagination").PaginationProps): JSX.Element;
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
  }>
>;
