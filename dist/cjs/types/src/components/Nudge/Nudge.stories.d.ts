import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Nudge from "./Nudge";
import "./Nudge.scss";
declare const _default: ComponentMeta<
  React.MemoExoticComponent<{
    (props: import("./Nudge").NudgeProps): JSX.Element;
    defaultProps: {
      id: string;
      duration: number;
      position: string;
    };
  }>
>;
export default _default;
export declare const ShowNudge: ComponentStory<typeof Nudge>;
