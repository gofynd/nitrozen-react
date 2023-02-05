import React, { memo, useEffect, useState, useMemo } from "react";
import "./Badge.scss";
export interface BadgeProps {
  size?: String;
  kind?: String;
  icon?: any;
  state?: string;
  fill?: Boolean;
  labelText?: string;
  className?: string;
  style?: React.CSSProperties;
  onClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}

const Badge = (props: BadgeProps) => {
  const {
    size,
    kind,
    icon,
    state,
    fill,
    labelText,
    className,
    style,
    onClickHandler,
    ...restProps
  } = props;
  const [classes, setClasses] = useState("");

  const containerClassname = useMemo(
    () => (kind === "service" ? "nitrogen-badge-background" : ""),
    [kind]
  );

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

    switch (size) {
      case "small":
        classes += " nitrozen-badge-small";
        break;
      case "medium":
        classes += " nitrozen-badge-medium";
        break;
      case "large":
        classes += " nitrozen-badge-large";
        break;
      default:
        classes += " nitrozen-badge-medium";
        break;
    }
    setClasses(classes);
  }, [state, fill, size]);

  return (
    <div className={containerClassname}>
      <div
        style={style ?? {}}
        className={`nitrozen-badge ${classes}`}
        onClick={onClickHandler}
        {...restProps}
      >
        {icon ? <span className={`${classes}-badge-icon`}>{icon}</span> : null}
        <div className="nitrozen-badge-truncate">{labelText}</div>
      </div>
    </div>
  );
};

Badge.defaultProps = {
  size: "medium",
  kind: "normal",
  state: "success",
  icon: "",
  fill: false,
  labelText: "Warn",
  className: "",
  style: {},
  onClickHandler: () => {},
};

export default memo(Badge);
