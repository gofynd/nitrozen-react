import React from "react";
import { ComponentMeta } from "@storybook/react";
import { MenuProps } from "./Menu";
import "./Menu.scss";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: MenuProps): React.JSX.Element;
    defaultProps: {
      id: string;
      className: string;
      mode: string;
      position: string;
      inverted: boolean;
      icon: React.JSX.Element;
      maxHeight: undefined;
      open: boolean;
      selectedIndex: number;
      onChangeMenuItem: () => void;
      onOpen: () => void;
      onClose: () => void;
      anchorEl: undefined;
      style: {};
      children: React.JSX.Element;
    };
  }>
>;
export default _default;
export declare const PrimaryMenu: {
  (args: MenuProps): React.JSX.Element;
  args: {
    id: string;
    className: string;
    mode: string;
    position: string;
    inverted: boolean;
    icon: React.JSX.Element;
    maxHeight: undefined;
    open: boolean;
    selectedIndex: number;
    onChangeMenuItem: (value: any, index: number) => void;
    onClose: () => void;
    onOpen: () => void;
    anchorEl: undefined;
    style: {};
    children: React.JSX.Element;
  };
};
export declare const AnchoredMenu: (args: any) => React.JSX.Element;
