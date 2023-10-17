import React from "react";
import "./Stepper.scss";
export declare enum StepState {
  "Current" = "Current",
  "Upcoming" = "Upcoming",
  "Disabled" = "Disabled",
  "Issue" = "Issue",
  "Completed" = "Completed",
}
export type ItemType = {
  name: string | number;
  isInactive?: boolean;
  isCompleted?: boolean;
  icon?: React.ElementType;
  iconSize?: string;
  iconColor?: string;
  extraIconProps?: object;
  buttonText?: string;
  buttonStyles?: object;
  state: StepState;
  content?: string;
};
export type ItemsType = Array<ItemType>;
export interface StepperProps {
  items?: ItemsType;
  onClick?: Function;
  isHorizontal: boolean;
  heading?: string;
  className?: string;
  style?: React.CSSProperties;
}
export interface ProgressCircleProps {
  items?: ItemsType;
  color?: string;
}
declare const _default: React.MemoExoticComponent<{
  (props: StepperProps): JSX.Element;
  defaultProps: {
    items: never[];
    isHorizontal: boolean;
  };
}>;
export default _default;
