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
  const nudge = new NudgeManager("top-right");
  const nudge2 = new NudgeManager("top-bottom");
  return (
    <div className="main-div space-between">
      <Button
        onClick={() =>
          nudge.show({
            ...args,
          })
        }
      >
        Show Nudge Top right
      </Button>
      <Button
        onClick={() => {
          nudge.destroy("custom-nudge");
          nudge2.show({
            ...args,
            position: "top-bottom",
            id: "top-nudge",
          });
        }}
      >
        Show Nudge Top bottom
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
  duration: 7000,
  id: "custom-nudge",
  cta1OnClick: () => {
    console.log("CTA1 clicked");
  },
  cta2OnClick: () => {
    console.log("CTA2 clicked");
  },
  leftImage: <img src={require("../../assets/nitrozen.png")} />,
  rightImage: <img src={require("../../assets/nitrozen.png")} />,
  position: "top-right",
};
