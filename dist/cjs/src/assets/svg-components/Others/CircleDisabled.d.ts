import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
declare const SvgCircleDisabled: ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => JSX.Element;
export default SvgCircleDisabled;
