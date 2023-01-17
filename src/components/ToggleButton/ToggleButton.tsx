import React, { useState, useEffect, useCallback } from "react";
import NitrozenId from "../../utils/uuids";
import "./ToggleButton.scss";
import classnames from "classnames";

export interface ToggleButtonProps {
  disabled?: boolean;
  onToggle?: Function;
  value: boolean;
  className?: string;
  style?: React.CSSProperties;
  size?: string;
  id?: string;
  labelText?: string;
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

  return (
    <div
      style={style || {}}
      className={`n-toggle-container ${className ?? ""}`}
      {...restProps}
    >
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
};

export default React.memo(ToggleButton);
