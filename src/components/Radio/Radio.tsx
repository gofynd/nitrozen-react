import React from "react";
import NitrozenId from "../../utils/uuids";
import "./Radio.scss";
import NitrozenValidation from "./../Validation";
import classnames from "classnames";
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
  state?: "error" | "success" | "warning";
  stateMessage?: string;
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
    state,
    stateMessage,
    style,
    ...restProps
  } = props;
  const ComponentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div style={style ?? {}} className={`n-radio-group ${className ?? ""}`}>
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
      <label
        htmlFor={id}
        className={classnames({
          "success-state": state == "success",
          "warning-state": state == "warning",
          "error-state": state == "error",
        })}
      >
        {labelText}
      </label>
      <NitrozenValidation
        className="n-checkbox-validation"
        validationState={state}
        label={stateMessage}
        isHidden={state == null}
      />
    </div>
  );
};

Radio.defaultProps = {
  disabled: false,
  name: "",
  value: "",
  radioValue: "",
  id: `n-radio-${NitrozenId()}`,
  state: null,
  stateMessage: "Your validation message",
  labelText: "",
  className: "",
  style: {},
  onChange: () => {},
};

export default Radio;
