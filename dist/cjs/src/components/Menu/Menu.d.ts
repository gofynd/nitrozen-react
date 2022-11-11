import React from "react";
import "./Menu.scss";
export interface MenuProps {
  id?: string | undefined;
  mode: string;
  inverted: boolean;
  position: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  onChangeMenuItem?: (menu: string) => void;
}
declare const _default: React.MemoExoticComponent<{
  (props: MenuProps): JSX.Element;
  defaultProps: {
    id: string;
    mode: string;
    inverted: boolean;
    position: string;
  };
}>;
export default _default;
