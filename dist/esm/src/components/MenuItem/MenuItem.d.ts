import React from "react";
import "./MenuItem.scss";
export interface MenuItemProps {
  id: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
declare const _default: React.MemoExoticComponent<{
  (props: MenuItemProps): JSX.Element;
  defaultProps: {
    id: string;
  };
}>;
export default _default;
