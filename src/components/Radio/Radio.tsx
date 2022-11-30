import React from "react";
import NitrozenId from "../../utils/uuids";
import "./Radio.scss";
export interface RadioProps {
  disabled?: boolean;
  name?: string;
  value?: string;
  radioValue?: string | number;
  id?: string;
  labelText?: string;
  onChange?: Function;
  className?: string;
  style?: React.CSSProperties;
}
const Radio = (props: RadioProps) => {
  const {
    disabled,
    name,
    value,
    radioValue,
    id,
    labelText,
    onChange,
    className,
    style,
    ...restProps
  } = props;
  const ComponentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div
      style={style ?? {}}
      className={`nitrozen-radio-group ${className ?? ""}`}
    >
      <input
        id={id}
        type="radio"
        onChange={ComponentChangeHandler}
        checked={value === radioValue}
        value={value}
        name={name}
        disabled={disabled}
        {...restProps}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};

Radio.defaultProps = {
  disabled: false,
  name: "",
  value: "",
  radioValue: "",
  id: `nitrozen-radio-${NitrozenId()}`,
  labelText: "",
  className: "",
  style: {},
  onChange: () => {},
};

export default Radio;
