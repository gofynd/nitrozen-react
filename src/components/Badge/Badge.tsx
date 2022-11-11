import React, { memo, useEffect, useState } from "react";
import "./Badge.scss";
export interface BadgeProps {
  state?: string;
  fill?: Boolean;
  labelText?: string;
  className?: string;
  style?: React.CSSProperties;
  onClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

const Badge = (props: BadgeProps) => {
  const {
    state,
    fill,
    labelText,
    className,
    style,
    onClickHandler,
    ...restProps
  } = props;
  const [classes, setClasses] = useState("");
  useEffect(() => {
    let classes = "";
    switch (state) {
      case "default":
        classes = "nitrozen-badge-default";
        break;
      case "info":
        classes = "nitrozen-badge-info";
        break;
      case "success":
        classes = "nitrozen-badge-success";
        break;
      case "warn":
        classes = "nitrozen-badge-warn";
        break;
      case "error":
        classes = "nitrozen-badge-error";
        break;
      case "disable":
        classes = "nitrozen-badge-disable";
        break;
      default:
        classes = "nitrozen-badge-default";
        break;
    }
    if (fill) {
      classes += "-fill";
    }
    setClasses(classes);
  }, [state, fill]);

  return (
    <div
      style={style ?? {}}
      className={`nitrozen-badge ${classes}`}
      onClick={onClickHandler}
      {...restProps}
    >
      {labelText}
    </div>
  );
};

Badge.defaultProps = {
  state: "success",
  fill: false,
  labelText: "Warn",
  className: "",
  style: {},
  onClickHandler: () => {},
};

export default memo(Badge);
