import React from "react";
import "../../base/storybook.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./Badge").BadgeProps): React.JSX.Element;
    defaultProps: {
      size: string;
      kind: string;
      state: string;
      icon: string;
      fill: boolean;
      labelText: string;
      className: string;
      style: {};
      onClickHandler: () => void;
    };
  }>
>;
export default _default;
export declare const Badge_demo: ComponentStory<
  React.MemoExoticComponent<{
    (props: import("./Badge").BadgeProps): React.JSX.Element;
    defaultProps: {
      size: string;
      kind: string;
      state: string;
      icon: string;
      fill: boolean;
      labelText: string;
      className: string;
      style: {};
      onClickHandler: () => void;
    };
  }>
>;
export declare const badge_with_alert_strip: (args: any) => React.JSX.Element;
export declare const text_badges: (args: any) => React.JSX.Element;
export declare const icon_badges: (args: any) => React.JSX.Element;
