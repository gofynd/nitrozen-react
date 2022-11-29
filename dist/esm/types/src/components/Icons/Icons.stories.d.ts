import React from "react";
import "./Icons.scss";
import { ComponentStory } from "@storybook/react";
import { SvgDone, SvgContentCopy } from "../../assets/svg-components";
interface IconProp {
  className?: string;
  color?: string;
  style?: React.CSSProperties;
  size?: number;
}
declare const _default: {
  title: string;
  component: typeof SvgContentCopy;
  argTypes: {
    className: {
      control: string;
    };
    color: {
      control: string;
      defaultValue: string;
    };
    size: {
      control: string;
      defaultValue: number;
    };
    style: {
      control: string;
    };
  };
};
export default _default;
export declare const SvgExample: ComponentStory<typeof SvgDone>;
export declare const SvgLists: ComponentStory<(props: IconProp) => JSX.Element>;
