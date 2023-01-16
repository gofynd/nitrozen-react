import React, { useState, useEffect, useCallback } from "react";
import "./ToggleButton.scss";
import classnames from "classnames";

export interface ToggleButtonProps {
  disabled?: boolean;
  onToggle?: Function;
  value: boolean;
  className?: string;
  style?: React.CSSProperties;
  size?: string;
}

const ToggleButton = (props: ToggleButtonProps) => {
  const { disabled, onToggle, value, className, style, size, ...restProps } =
    props;
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
      <label className={`n-switch ${size}`}>
        <input
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
      </label>
    </div>
  );
};

ToggleButton.defaultProps = {
  value: false,
  disabled: false,
  size: "medium",
};

export default React.memo(ToggleButton);
