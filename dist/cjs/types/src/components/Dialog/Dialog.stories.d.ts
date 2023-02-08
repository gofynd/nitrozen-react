import { ComponentMeta } from "@storybook/react";
declare const _default: ComponentMeta<{
  (props: import("./Dialog").DialogProps): JSX.Element;
  defaultProps: {
    id: string;
    title: string;
    theme: null;
    children: null;
    positiveButtonLabel: boolean;
    negativeButtonLabel: boolean;
    isVisible: boolean;
  };
}>;
export default _default;
export declare const dialog: (args: any) => JSX.Element;
export declare const Acknowledgement: (args: any) => JSX.Element;
export declare const Informational: (args: any) => JSX.Element;
