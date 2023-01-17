import React, { useState, useEffect, useCallback } from "react";
import NitrozenId from "../../utils/uuids";
import "./ToggleButton.scss";
import classnames from "classnames";
import NitrozenValidation from "./../Validation";

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

const ToggleButton = (props: ToggleButtonProps) => {
  const {
    disabled,
    id,
    labelText,
    onToggle,
    value,
    className,
    style,
    size,
    state,
    icon,
    showIcon,
    onIconClick,
    stateMessage,
    ...restProps
  } = props;
  const [toggleActive, setToggle] = useState(value);

  useEffect(() => {
    setToggle(value);
  }, [value]);

  const changed = useCallback(() => {
    setToggle(!toggleActive);
    onToggle?.();
  }, [toggleActive]);

  const Icon = props.icon as React.ElementType;
  return (
    <div
      style={style || {}}
      className={`n-toggle-container ${className ?? ""}`}
      {...restProps}
    >
      {showIcon && icon && (
        <Icon className={`social-icon-${size}`} onClick={onIconClick} />
      )}
      <label htmlFor={id} className={`n-switch ${size}`}>
        <input
          id={id}
          type="checkbox"
          data-testid={"toggle-checkbox"}
          onChange={changed}
          disabled={disabled}
          checked={toggleActive}
        />
        <span
          className={classnames({
            "n-slider n-round": true,
            "n-disabled": disabled,
            "success-state": state == "success",
            "warning-state": state == "warning",
            "error-state": state == "error",
            checked: toggleActive,
          })}
        >
          <div
            className={classnames({
              "slider-ball": true,
              checked: toggleActive,
            })}
          ></div>
        </span>
        <span
          className={classnames({
            "label-text": true,
            "n-disabled": disabled,
            checked: toggleActive,
          })}
        >
          {labelText}
        </span>
        <NitrozenValidation
          className="n-toggle-validation"
          validationState={state}
          label={stateMessage}
          isHidden={state == null}
        />
        <></>
      </label>
    </div>
  );
};

ToggleButton.defaultProps = {
  id: `nitrozen-dialog-${NitrozenId()}`,
  value: false,
  disabled: false,
  labelText: null,
  size: "medium",
  state: null,
  stateMessage: "Your validation message",
  icon: null,
  showIcon: false,
  onIconClick: () => {},
};

export default React.memo(ToggleButton);
