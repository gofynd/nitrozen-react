import React, { useState, useEffect } from "react";
import NitrozenId from "../../utils/uuids";
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

const Checkbox = (props: CheckboxProps) => {
  const {
    disabled,
    value,
    name,
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
      onChange(!checkboxValue);
    }
  };

  const isSelected = () => {
    if (Array.isArray(checked)) {
      return checked?.includes(checkboxValue);
    } else {
      return !!checked;
    }
  };

  return (
    <label
      htmlFor={id}
      className={`nitrozen-checkbox-container${
        disabled ? " nitrozen-checkbox-container-disabled" : ""
      }`}
      style={labelStyle ?? {}}
    >
      <input
        id={id}
        type="checkbox"
        onChange={ComponentChangeHandler}
        value={checkboxValue || value}
        checked={isSelected()}
        disabled={disabled}
        ref={props?.ref}
        className={className ?? ""}
        style={style ?? {}}
        {...restProps}
      />
      {labelText}
      {children}
      <span className="nitrozen-checkbox"></span>
    </label>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  value: "",
  name: "",
  checkboxValue: null,
  id: `nitrozen-dialog-${NitrozenId()}`,
  labelText: "",
  children: null,
  onChange: () => {},
  checkArray: null,
  ref: null,
};

export default Checkbox;
