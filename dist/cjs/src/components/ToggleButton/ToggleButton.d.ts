import React from "react";
import "./ToggleButton.scss";
export interface ToggleButtonProps {
  disabled?: boolean;
  onToggle?: Function;
  value: boolean;
  className?: string;
  style?: React.CSSProperties;
  size?: string;
}
declare const _default: React.MemoExoticComponent<{
  (props: ToggleButtonProps): JSX.Element;
  defaultProps: {
    value: boolean;
    disabled: boolean;
    size: string;
  };
}>;
export default _default;
