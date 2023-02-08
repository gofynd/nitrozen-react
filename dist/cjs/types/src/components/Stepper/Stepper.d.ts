import React from "react";
import "./Stepper.scss";
type ItemsType = Array<{
  name: string | number;
  description?: string | number;
  isInactive?: boolean;
  isCompleted?: boolean;
  icon?: React.ElementType;
  iconSize?: string;
  iconColor?: string;
  extraIconProps?: object;
  buttonText?: string;
  buttonStyles?: object;
}>;
export interface StepperProps {
  activeIndex?: number;
  maxActiveIndex?: number;
  items?: ItemsType;
  onClick?: Function;
  isHorizontal: boolean;
  heading?: string;
  showProgress?: boolean;
  className?: string;
  style?: React.CSSProperties;
  progressStrokeColor?: string;
}
export interface ProgressCircleProps {
  items?: ItemsType;
  color?: string;
}
declare const _default: React.MemoExoticComponent<{
  (props: StepperProps): JSX.Element;
  defaultProps: {
    items: never[];
    maxActiveIndex: number;
    activeIndex: number;
    isHorizontal: boolean;
    progressStrokeColor: string;
  };
}>;
export default _default;
