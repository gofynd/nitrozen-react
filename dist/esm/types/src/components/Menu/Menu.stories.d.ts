import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./Menu";
import "./Menu.scss";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./Menu").MenuProps): JSX.Element;
    defaultProps: {
      id: string;
      mode: string;
      inverted: boolean;
      position: string;
    };
  }>
>;
export default _default;
export declare const PrimaryMenu: ComponentStory<typeof Menu>;
