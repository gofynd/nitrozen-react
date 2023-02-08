import React from "react";
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
declare const _default: React.MemoExoticComponent<{
  (props: MenuItemProps): JSX.Element;
  defaultProps: {
    id: string;
    key: string;
    style: {};
    className: string;
    disabled: boolean;
    selected: boolean;
    heading: boolean;
    linkConfig: {};
    divider: boolean;
    childern: string;
  };
}>;
export default _default;
