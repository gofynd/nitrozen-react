import React from "react";
import "./TabItem.scss";
export interface TabItemProps {
  id?: string;
  children?: React.ReactNode;
  onClick: React.MouseEventHandler;
  icon?: React.ReactElement;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    TabItemProps & React.RefAttributes<HTMLLIElement>
  >
>;
export default _default;
