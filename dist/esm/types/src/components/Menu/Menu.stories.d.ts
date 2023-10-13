import React from "react";
import { ComponentMeta } from "@storybook/react";
import { MenuProps } from "./Menu";
import "./Menu.scss";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: MenuProps): JSX.Element;
    defaultProps: {
      id: string;
      className: string;
      mode: string;
      position: string;
      inverted: boolean;
      icon: JSX.Element;
      maxHeight: undefined;
      open: boolean;
      selectedIndex: number;
      onChangeMenuItem: () => void;
      onOpen: () => void;
      onClose: () => void;
      anchorEl: undefined;
      style: {};
      children: JSX.Element;
    };
  }>
>;
export default _default;
export declare const PrimaryMenu: {
  (args: MenuProps): JSX.Element;
  args: {
    id: string;
    className: string;
    mode: string;
    position: string;
    inverted: boolean;
    icon: JSX.Element;
    maxHeight: undefined;
    open: boolean;
    selectedIndex: number;
    onChangeMenuItem: (value: any, index: number) => void;
    onClose: () => void;
    onOpen: () => void;
    anchorEl: undefined;
    style: {};
    children: JSX.Element;
  };
};
export declare const AnchoredMenu: (args: any) => JSX.Element;
