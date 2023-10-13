import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./Button").ButtonProps): JSX.Element;
    defaultProps: {
      href: null;
      disabled: boolean;
      rounded: boolean;
      theme: string;
      as: null;
      size: string;
      focused: boolean;
      showProgress: boolean;
      fullWidth: boolean;
      children: null;
      onClick: null;
      className: null;
      id: null;
      icon: null;
      name: null;
    };
  }>
>;
export default _default;
export declare const Default: ComponentStory<
  React.MemoExoticComponent<{
    (props: import("./Button").ButtonProps): JSX.Element;
    defaultProps: {
      href: null;
      disabled: boolean;
      rounded: boolean;
      theme: string;
      as: null;
      size: string;
      focused: boolean;
      showProgress: boolean;
      fullWidth: boolean;
      children: null;
      onClick: null;
      className: null;
      id: null;
      icon: null;
      name: null;
    };
  }>
>;
export declare const AllThemes: () => JSX.Element;
export declare const AllDisbledThemes: () => JSX.Element;
export declare const IconButton: () => JSX.Element;
export declare const ButtonWithIconLeft: () => JSX.Element;
export declare const ButtonWithIconRight: () => JSX.Element;
export declare const ButtonWithBothIcon: () => JSX.Element;
export declare const AllThemesWithPositiveState: () => JSX.Element;
export declare const AllThemesWithDestructiveState: () => JSX.Element;
