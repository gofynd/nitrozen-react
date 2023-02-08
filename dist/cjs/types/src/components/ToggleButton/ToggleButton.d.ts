import React from "react";
import "./ToggleButton.scss";
export interface ToggleButtonProps {
  disabled?: boolean;
  onToggle?: Function;
  value: boolean;
  className?: string;
  style?: React.CSSProperties;
  size?: string;
  id?: string;
  labelText?: string;
  state?: "error" | "success" | "warning";
  stateMessage?: string;
  icon?: React.ReactNode;
  showIcon?: Boolean;
  onIconClick?: Function;
}
declare const _default: React.MemoExoticComponent<{
  (props: ToggleButtonProps): JSX.Element;
  defaultProps: {
    id: string;
    value: boolean;
    disabled: boolean;
    labelText: null;
    size: string;
    state: null;
    stateMessage: string;
    icon: null;
    showIcon: boolean;
    onIconClick: () => void;
  };
}>;
export default _default;
