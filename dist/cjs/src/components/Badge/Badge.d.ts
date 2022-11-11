import React from "react";
import "./Badge.scss";
export interface BadgeProps {
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
    state: string;
    fill: boolean;
    labelText: string;
    className: string;
    style: {};
    onClickHandler: () => void;
  };
}>;
export default _default;
