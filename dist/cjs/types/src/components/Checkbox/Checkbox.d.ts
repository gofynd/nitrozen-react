import React from "react";
import "./Checkbox.scss";
export interface CheckboxProps {
  disabled?: boolean;
  value?: any;
  name?: string;
  state?: "error" | "success" | "warning";
  stateMessage?: string;
  checkboxValue: string | number | boolean | Object;
  id?: string;
  labelText?: string;
  children?: React.ReactNode;
  onChange: Function;
  checkArray?: Array<string | number | boolean | Object>;
  ref?: any;
  className?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  showIcon?: Boolean;
  onIconClick?: Function;
  isIndeterminate?: Boolean;
}
declare const Checkbox: {
  (props: CheckboxProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    value: string;
    name: string;
    checkboxValue: null;
    state: null;
    stateMessage: string;
    id: string;
    labelText: string;
    children: null;
    icon: null;
    showIcon: boolean;
    onChange: () => void;
    onIconClick: () => void;
    checkArray: null;
    ref: null;
    isIndeterminate: boolean;
  };
};
export default Checkbox;
