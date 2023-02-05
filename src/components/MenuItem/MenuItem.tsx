import React, { memo } from "react";
import NitrozenId from "../../utils/uuids";
import "./MenuItem.scss";

export interface MenuItemProps {
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
  linkConfig?: {
    href: string;
    target?: string;
  };
  divider?: boolean;
  heading?: boolean;
  selected?: boolean;
  key?: string;
  index?: number;
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
    index,
    ...restProps
  } = props;
  return (
    <li
      id={id ? id.toString() : ""}
      data-testid={`n-menu-block-item-${index}`}
      className={`n-menu-block-item ${className ? className : ""}
        ${disabled ? "n-menu-block-item-disabled" : ""}
        ${divider ? "n-menu-block-item-divider" : ""}
        ${heading ? "n-menu-block-item-heading" : ""}
        ${selected && !heading && !disabled ? "n-menu-block-item-selected" : ""}
      `}
      style={style}
      {...restProps}
    >
      {/* setting links only for enabled menu items */}
      <a
        href={(!disabled && linkConfig?.href) || undefined}
        target={linkConfig?.target || "_self"}
        data-testid={`n-menu-block-item-${index}-link`}
      >
        {children}
      </a>
    </li>
  );
};

MenuItem.defaultProps = {
  id: `n-menu-block-item-${NitrozenId()}`,
  key: `n-menu-block-item-key-${NitrozenId()}`,
  style: {},
  className: "",
  disabled: false,
  selected: false,
  heading: false,
  linkConfig: {},
  divider: false,
  childern: "Menu Item",
};

export default memo(MenuItem);
