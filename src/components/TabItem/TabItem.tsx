import React, { memo } from "react";
import uuid from "../../utils/uuids";
import Tooltip from "../Tooltip";
import "./TabItem.scss";

export interface TabItemProps {
  id?: string;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
  icon?: React.ReactElement;
  tooltipIcon?: React.ReactNode;
  tooltipIconHoverText?: JSX.Element | React.ReactNode | string;
  className?: string;
  style?: React.CSSProperties;
}

const TabItem = (props: TabItemProps) => {
  const {
    id,
    children,
    onClick,
    className,
    style,
    icon,
    tooltipIcon,
    tooltipIconHoverText,
    ...restProps
  } = props;
  return (
    <li
      onClick={onClick}
      id={id}
      className={`nitrozen-tab-item ${className ?? ""}`}
      style={style ?? {}}
      {...restProps}
    >
      <span>{children}</span>
      {tooltipIcon && tooltipIconHoverText ? (
        <span className="tab-item-icon">
          <Tooltip
            position="bottom"
            icon={tooltipIcon}
            tooltipContent={tooltipIconHoverText}
          />
        </span>
      ) : (
        icon || null
      )}
    </li>
  );
};

TabItem.defaultProps = {
  id: "nitrozen-tab-item" + uuid(),
  children: <span>hello</span>,
};

export default memo(TabItem);
