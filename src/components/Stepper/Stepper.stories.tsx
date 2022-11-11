import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  SvgStore,
  SvgHourglassEmpty,
  SvgAddLocation,
} from "../../assets/svg-components";
import Stepper from "./Stepper";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {
    isHorizontal: {
      type: { name: "boolean", defaultValue: false },
      description: "Defines the type of stepper",
    },
    items: {
      description: "JSON List of Stepper steps",
    },
    maxActiveIndex: {
      type: "number",
      description: "Number of active steppers",
    },
    activeIndex: {
      type: "number",
      description:
        "Active stepper selection | should always be <= maxActiveIndex)",
    },
    progressStrokeColor: {
      type: "string",
      description: "Gives a color to the circle progress bar",
      defaultValue: "#419266",
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

const HORIZONTAL_STEPPER_ITEMS = [
  {
    name: "Step 1",
    description: "April 26, 2022 \n 11:17 AM",
  },
  {
    name: "Step 2",
    description: "April 27, 2022 \n 11:00 AM",
  },
  {
    name: "Step 3",
    description: "April 30, 2022 \n 10:00 AM",
  },
  {
    name: "Step 4",
    description: "May 2, 2022 \n 11:00 AM",
  },
  {
    name: "Step 5",
    description: "May 3, 2022 \n 12:00 AM",
  },
  {
    name: "Step 6",
    description: "May 5, 2022 \n 12:00 AM",
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

const Template: ComponentStory<typeof Stepper> = (args) => (
  <div className="storybook-stepper-container">
    <Stepper {...args} />
  </div>
);
export const HorizontalStepper = Template.bind({});
HorizontalStepper.args = {
  items: HORIZONTAL_STEPPER_ITEMS,
  activeIndex: 1,
  onClick: (item: object) => {},
  isHorizontal: true,
};

export const VerticalStepper = Template.bind({});
VerticalStepper.args = {
  items: VERTICAL_STEPPER_ITEMS,
  onClick: (item: object) => {},
  heading: "Lorem ipsum dolor sit amet consectetur Maxime ",
  showProgress: true,
};
