import React from "react";
import "./Tab.scss";
export interface TabProps {
  id?: string;
  tabItem: Object[] | string[];
  label?: string;
  activeIndex: number;
  onTabChange?: (tab: {} | string) => void;
  className?: string;
  style?: React.CSSProperties;
}
declare const _default: React.MemoExoticComponent<{
  (props: TabProps): JSX.Element;
  defaultProps: {
    id: string;
    activeIndex: number;
    tabItem: never[];
  };
}>;
export default _default;
