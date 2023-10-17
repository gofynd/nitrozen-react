import React from "react";
import "./Tooltip.scss";
export type Position =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "top-start"
  | "top-end";
export interface TooltipProps {
  children?: React.ReactNode;
  className?: string;
  contentBgColor?: string;
  contentColor?: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
  position?: Position;
  style?: React.CSSProperties;
  tooltipContent: JSX.Element | React.ReactNode | string;
}
declare const _default: React.MemoExoticComponent<{
  (props: TooltipProps): JSX.Element;
  defaultProps: {
    contentBgColor: string;
    contentColor: string;
    icon: JSX.Element;
    position: string;
    tooltipContent: string;
  };
}>;
export default _default;
