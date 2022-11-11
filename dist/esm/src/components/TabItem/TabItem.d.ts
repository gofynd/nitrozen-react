import React from "react";
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
declare const _default: React.MemoExoticComponent<{
  (props: TabItemProps): JSX.Element;
  defaultProps: {
    id: string;
    children: JSX.Element;
  };
}>;
export default _default;
