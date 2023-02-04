import React, { memo } from "react";
import uuid from "../../utils/uuids";
import "./MenuItem.scss";

export interface MenuItemProps {
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  linkConfig?: {
    href: string;
    textAppreance?: string;
    target?: string;
  };
  divider?: boolean;
  heading?: boolean;
  selected?: boolean;
  key: number;
}

const MenuItem = (props: MenuItemProps) => {
  const {
    id,
    className,
    style,
    children,
    disabled,
    selected,
    heading,
    linkConfig,
    divider,
    key,
  } = props;
  return (
    <li
      id={id ? id.toString() : ""}
      key={`n-menu-block-item-${key}`}
      data-testid={`n-menu-block-item-${key}`}
      className={`n-menu-block-item ${className}
        ${disabled ? "n-menu-block-item-disabled" : ""}
        ${divider ? "n-menu-block-item-divider" : ""}
        ${heading ? "n-menu-block-item-heading" : ""}
        ${selected && !heading && !disabled ? "n-menu-block-item-selected" : ""}
      `}
      style={style}
    >
      {/* setting links only for enabled menu items */}
      <a
        href={(!disabled && linkConfig?.href) || undefined}
        target={linkConfig?.target || "_self"}
        data-testid={`n-menu-block-item-${key}-link`}
      >
        {children}
      </a>
    </li>
  );
};

MenuItem.defaultProps = {
  id: "n-menu-block-item" + uuid(),
};

export default memo(MenuItem);
