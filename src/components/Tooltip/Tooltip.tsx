import React from "react";
import "./Tooltip.scss";
import { SvgInfo } from "../../assets/svg-components/Action";
export type Position = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  children?: React.ReactNode;
  className?: string;
  contentBgColor?: string;
  contentColor?: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
  position?: Position;
  style?: React.CSSProperties;
  tooltipContent: JSX.Element | React.ReactNode | string;
}

const tooltipIconChildren = (
  children: JSX.Element | React.ReactNode | string,
  icon?: React.ReactNode
) => {
  if (children) {
    return children;
  }
  if (icon) {
    return icon;
  }
};
const tooltipHoverChildren = (
  element: string | JSX.Element | React.ReactNode
) => {
  return element;
};

const Tooltip = (props: TooltipProps) => {
  const {
    position,
    tooltipContent,
    children,
    icon,
    className,
    style,
    contentColor,
    contentBgColor,
    link,
    linkText,
    ...restProps
  } = props;

  const tooltipStyle = {} as React.CSSProperties;
  if (contentColor) {
    tooltipStyle.color = contentColor;
  }
  if (contentBgColor) {
    tooltipStyle.backgroundColor = contentBgColor;
  }
  return (
    <div
      className={`nitrozen-tooltip ${className ?? ""}`}
      style={style ?? {}}
      {...restProps}
    >
      {tooltipIconChildren(children, icon)}
      <span
        data-testid="tooltip-component"
        className={`nitrozen-tooltipcontent nitrozen-tooltip-${position}`}
        style={tooltipStyle}
      >
        {tooltipHoverChildren(tooltipContent)}
        {link && (
          <>
            <br />
            <a className="nitrozen-tooltip-link" href={link}>
              {linkText || "Link Here"}
            </a>
          </>
        )}
      </span>
    </div>
  );
};

Tooltip.defaultProps = {
  contentBgColor: "#3d3d3d",
  contentColor: "#ffffff",
  icon: <SvgInfo />,
  position: "top",
  tooltipContent: "Tooltip text",
};

export default React.memo(Tooltip);
