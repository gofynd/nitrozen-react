import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgCircleProgress = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle
      opacity={0.1}
      cx={8}
      cy={8}
      r={6.5}
      fill="#F5F5F5"
      stroke="#0A5F23"
    />
    <path
      d="M8 14.5a6.5 6.5 0 1 1 4.886-10.787"
      stroke="#0A5F23"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgCircleProgress;
