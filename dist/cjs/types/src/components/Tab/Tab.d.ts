import React from "react";
import "./Tab.scss";
export interface TabProps {
  id?: string;
  children?: React.ReactChild;
  tabItem: Object[] | string[];
  label?: string;
  activeIndex: number;
  onTabChange?: (tab: {} | string) => void;
  className?: string;
  style?: React.CSSProperties;
  appearance: "normal" | "navbar";
  overflow: "fit" | "scroll" | "arrow";
  tabs?: number;
}
declare const _default: React.MemoExoticComponent<{
  (props: TabProps): JSX.Element;
  defaultProps: {
    id: string;
    activeIndex: number;
    tabItem: never[];
    appearance: string;
    overflow: string;
  };
}>;
export default _default;
