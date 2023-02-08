import React from "react";
import "./Badge.scss";
export interface BadgeProps {
  size?: String;
  kind?: String;
  icon?: any;
  state?: string;
  fill?: Boolean;
  labelText?: string;
  className?: string;
  style?: React.CSSProperties;
  onClickHandler?: React.MouseEventHandler<HTMLDivElement>;
}
declare const _default: React.MemoExoticComponent<{
  (props: BadgeProps): JSX.Element;
  defaultProps: {
    size: string;
    kind: string;
    state: string;
    icon: string;
    fill: boolean;
    labelText: string;
    className: string;
    style: {};
    onClickHandler: () => void;
  };
}>;
export default _default;
