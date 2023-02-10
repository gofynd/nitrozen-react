import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  SvgStore,
  SvgHourglassEmpty,
  SvgAddLocation,
  SvgQuestionMark,
} from "../../assets/svg-components";
import Stepper, { ItemsType, StepperProps, StepState } from "./Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {
    isHorizontal: {
      type: { name: "boolean", defaultValue: false },
      description: "Defines the type of stepper",
    },
    items: {
      description:
        "JSON List of Stepper steps with the state (Current, Upcoming, Disabled, Issue, Completed)",
    },
    onClick: {
      type: "function",
      description:
        "Captures a stepper click event & Sends the stepper's data as an argument - {index: string; itemObject: object}",
    },
    style: { control: "object" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Stepper>;

const HORIZONTAL_STEPPER_ITEMS: ItemsType = [
  {
    name: "Step Label 1",
    state: StepState.Current,
    content: `<p>
    Lorem ipsum dolor sit, amet consectetur adipisicing
    elit. Ducimus, doloremque ut, eius cum in repellat
    temporibus rem quod officia eligendi dolores
    necessitatibus at aperiam accusantium provident
    consequuntur eaque quaerat fuga.
  </p>`,
  },
  {
    name: "Step Label 2",
    state: StepState.Upcoming,
  },
  {
    name: "Step Label 3",
    state: StepState.Disabled,
  },
  {
    name: "Step Label 4",
    state: StepState.Issue,
  },
  {
    name: "Step Label 5",
    state: StepState.Completed,
  },
  {
    name: "Step Label 6",
    state: StepState.Current,
    icon: SvgQuestionMark,
  },
];

const VERTICAL_STEPPER_ITEMS = [
  {
    name: "Step 1",
    description:
      "Lorem ipsum dolor sit amet consectetur Maxime mollitia, Maxime mollitia Maxime mollitia commodi repudiandae",
    isCompleted: true,
    buttonText: "View Status",
  },
  {
    name: "Miscellaneous Stepper state with huge text count",
    buttonText: "Complete",
  },
  {
    name: "Step 2",
    description:
      "Lorem ipsum dolor sit amet consectetur Maxime mollitia Maxime mollitia Maxime mollitia, commodi repudiandae",
    icon: SvgStore,
  },
  {
    name: "Step 3",
    description:
      "Lorem ipsum dolor sit amet consectetur Maxime mollitia, commodi repudiandae ",
    buttonText: "Complete",
    icon: SvgAddLocation,
    buttonStyles: {
      background: "rgba(0, 0, 0, 0.3)",
      pointerEvents: "none",
    },
  },
  {
    name: "Step 4",
    description:
      "Lorem ipsum dolor sit amet consectetur Maxime mollitia, commodi repudiandae",
    isInactive: true,
    buttonText: "Complete",
    icon: SvgHourglassEmpty,
  },
];

const Template: ComponentStory<typeof Stepper> = (args: StepperProps) => (
  <div className="storybook-stepper-container">
    <Stepper {...args} />
  </div>
);
export const StepperComponent = Template.bind({});
StepperComponent.args = {
  items: HORIZONTAL_STEPPER_ITEMS,
  onClick: (item: object) => {},
  isHorizontal: true,
};
