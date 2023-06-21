import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./Button").ButtonProps): React.JSX.Element;
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
    (props: import("./Button").ButtonProps): React.JSX.Element;
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
export declare const AllThemes: () => React.JSX.Element;
export declare const AllDisbledThemes: () => React.JSX.Element;
export declare const IconButton: () => React.JSX.Element;
export declare const ButtonWithIconLeft: () => React.JSX.Element;
export declare const ButtonWithIconRight: () => React.JSX.Element;
export declare const ButtonWithBothIcon: () => React.JSX.Element;
export declare const AllThemesWithPositiveState: () => React.JSX.Element;
export declare const AllThemesWithDestructiveState: () => React.JSX.Element;
