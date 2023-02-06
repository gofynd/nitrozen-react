import React, { useState, useEffect } from "react";
import NitrozenId from "../../utils/uuids";
import Validation from "./../Validation/Validation";
import "./Checkbox.scss";

import classnames from "classnames";
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

const Checkbox = (props: CheckboxProps) => {
  const {
    disabled,
    value,
    name,
    state,
    stateMessage,
    checkboxValue,
    id,
    labelText,
    children,
    onChange,
    checkArray,
    ref,
    className,
    style,
    labelStyle,
    icon,
    showIcon,
    onIconClick,
    isIndeterminate,
    ...restProps
  } = props;

  const initialValue = Array.isArray(checkArray) ? checkArray : checkboxValue;
  // Component level state
  const [checked, setChecked] = useState<
    | Array<string | number | boolean | Object>
    | number
    | string
    | boolean
    | Object
  >(initialValue);

  useEffect(() => {
    setChecked(Array.isArray(checkArray) ? checkArray : checkboxValue);
  }, [checkboxValue, checkArray]);

  const ComponentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Array.isArray(checked)) {
      if (checked?.includes(checkboxValue)) {
        const newarr = checked.filter((val) => val !== checkboxValue);
        setChecked([...newarr]); // component level change
        onChange([...newarr]); // user level change
      } else {
        setChecked([...checked, e.target.value]);
        onChange([...checked, e.target.value]);
      }
    } else {
      setChecked(!checked);
      onChange(e.target.checked);
    }
  };

  const isSelected = () => {
    if (Array.isArray(checked)) {
      return checked?.includes(checkboxValue);
    } else {
      return !!checked;
    }
  };

  const Icon = props.icon as React.ElementType;
  return (
    <label
      htmlFor={id}
      className={`n-checkbox-container${
        disabled ? " n-checkbox-container-disabled" : ""
      }`}
      style={labelStyle ?? {}}
    >
      {showIcon && icon && (
        <Icon className="social-icon" onClick={onIconClick} />
      )}
      <input
        id={id}
        data-testid={id}
        type="checkbox"
        onChange={(e) => ComponentChangeHandler(e)}
        value={checkboxValue || value}
        checked={isSelected()}
        disabled={disabled}
        ref={props?.ref}
        name={props.name}
        className={`n-id-checkbox ${className ?? ""}`}
        style={style ?? {}}
        {...restProps}
      />
      {labelText}
      {children}
      <span
        data-testid={`n-checkbox-${id}`}
        className={classnames({
          "n-checkbox": true,
          "success-state": state == "success",
          "warning-state": state == "warning",
          "error-state": state == "error",
          "n-checkbox-indeterminate": props.isIndeterminate,
        })}
      ></span>
      <Validation
        className="n-checkbox-validation"
        validationState={state}
        label={stateMessage}
        isHidden={state == null}
      />
    </label>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  value: "",
  name: "",
  checkboxValue: null,
  state: null,
  stateMessage: "Your validation message",
  id: `n-dialog-${NitrozenId()}`,
  labelText: "",
  children: null,
  icon: null,
  showIcon: false,
  onChange: () => {},
  onIconClick: () => {},
  checkArray: null,
  ref: null,
  isIndeterminate: false,
};

export default Checkbox;
