import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RadioProps } from "./Radio";
declare const _default: ComponentMeta<{
  (props: RadioProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    name: string;
    value: string;
    radioValue: string;
    id: string;
    labelText: string;
    className: string;
    style: {};
    onChange: () => void;
  };
}>;
export default _default;
export declare const RadioPlayground: ComponentStory<{
  (props: RadioProps): JSX.Element;
  defaultProps: {
    disabled: boolean;
    name: string;
    value: string;
    radioValue: string;
    id: string;
    labelText: string;
    className: string;
    style: {};
    onChange: () => void;
  };
}>;
export declare const radioSample: (args: RadioProps) => JSX.Element;
export declare const radioVariants: (args: RadioProps) => JSX.Element;
export declare const radioSelectors: (args: RadioProps) => JSX.Element;
