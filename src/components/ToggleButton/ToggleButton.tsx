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
      className={`nitrozen-toggle-container ${className ?? ""}`}
      {...restProps}
    >
      <label className={`nitrozen-switch ${size}`}>
        <input
          type="checkbox"
          data-testid={"toggle-checkbox"}
          onChange={changed}
          disabled={disabled}
          checked={toggleActive}
        />
        <span
          className={classnames({
            "nitrozen-slider nitrozen-round": true,
            "nitrozen-disabled": disabled,
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
  size: "large",
};

export default React.memo(ToggleButton);
