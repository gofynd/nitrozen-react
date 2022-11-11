import React, { memo } from "react";
import uuid from "../../utils/uuids";
import "./MenuItem.scss";

export interface MenuItemProps {
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem = (props: MenuItemProps) => {
  const { id, className, style, children, ...restProps } = props;
  return (
    <li
      style={style ?? {}}
      className={`nitrozen-menu-item ${className ?? ""}`}
      {...restProps}
    >
      {props.children}
    </li>
  );
};

MenuItem.defaultProps = {
  id: "nitrozen-menu" + uuid(),
};

export default memo(MenuItem);
