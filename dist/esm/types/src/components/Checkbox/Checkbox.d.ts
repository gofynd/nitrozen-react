import React from "react";
import "./Checkbox.scss";
export interface CheckboxProps {
  disabled?: boolean;
  value?: any;
  name?: string;
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
}
declare const Checkbox: {
  (props: CheckboxProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    value: string;
    name: string;
    checkboxValue: null;
    id: string;
    labelText: string;
    children: null;
    onChange: () => void;
    checkArray: null;
    ref: null;
  };
};
export default Checkbox;
