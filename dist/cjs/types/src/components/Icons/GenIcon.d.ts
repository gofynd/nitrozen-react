import React from "react";
export interface IconTree {
  tag: string;
  attr: {
    [key: string]: string;
  };
  child?: IconTree[];
}
export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}
export declare function GenIcon(
  data: IconTree
): (props: IconBaseProps) => JSX.Element;
