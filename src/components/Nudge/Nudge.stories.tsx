import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Nudge from "./Nudge";
import Button from "../Button/Button";
import "./Nudge.scss";
import { SvgIc404Error, SvgIc4G } from "../../assets/svg-components";
import { NudgeManager } from "./NudgeManager";

export default {
  title: "Components/Nudge",
  component: Nudge,
  argTypes: {
    heading: { control: "text" },
    supportText: { control: "text" },
    destroy: { action: "clicked" },
    duration: { control: "number" },
  },
} as ComponentMeta<typeof Nudge>;

export const ShowNudge: ComponentStory<typeof Nudge> = (args) => {
  const nudge = new NudgeManager();
  return (
    <div className="main-div space-between">
      <Button
        onClick={() =>
          nudge.show({
            ...args,
          })
        }
      >
        Show Nudge
      </Button>
    </div>
  );
};

ShowNudge.args = {
  destroy: () => console.log("Nudge destroyed"),
  heading: "This is a nudge heading",
  supportText: "This is a support text",
  cta1: "CTA1",
  cta2: "CTA2",
  duration: 10000000000,
  id: "custom-nudge",
  cta1OnClick: () => {},
  cta2OnClick: () => {},
  leftImage: <img src={require("../../assets/nitrozen.png")} />,
  rightImage: <img src={require("../../assets/nitrozen.png")} />,
};
