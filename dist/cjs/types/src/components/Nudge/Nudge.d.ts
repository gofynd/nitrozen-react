import React from "react";
export interface NudgeProps {
  id: string;
  destroy: () => void;
  heading: string;
  supportText: string;
  duration?: number;
  cta1?: string;
  cta2?: string;
  cta1OnClick?: any;
  cta2OnClick?: any;
  leftImage: React.ReactNode;
  rightImage: React.ReactNode;
  className?: string;
  position: "top-right" | "top-bottom";
}
declare const _default: React.MemoExoticComponent<{
  (props: NudgeProps): JSX.Element;
  defaultProps: {
    id: string;
    duration: number;
    position: string;
  };
}>;
export default _default;
