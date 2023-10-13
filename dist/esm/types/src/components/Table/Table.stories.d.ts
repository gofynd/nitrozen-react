import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";
import "./Table.scss";
declare const _default: ComponentMeta<
  React.NamedExoticComponent<import("./Table").TableProps>
>;
export default _default;
export declare const Template: ComponentStory<typeof Table>;
export declare const ShowTable: ComponentStory<
  React.NamedExoticComponent<import("./Table").TableProps>
>;
export declare const CheckableTable: (args: any) => JSX.Element;
export declare const sortableTable: (args: any) => JSX.Element;
