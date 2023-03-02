import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";
import { SvgIcInfo, SvgIcHelp } from "../../assets/svg-components";
export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    children: {
      type: { name: "string" },
      defaultValue: "",
      description: "Define the children for tooltip",
      control: {
        type: "text",
      },
    },
    className: { control: "text" },
    contentBgColor: {
      control: "color",
      description: "Set the background color of the tooltip container",
    },
    contentColor: {
      control: "color",
      description: "Set the font color of the tooltip container",
    },
    position: {
      control: "select",
      options: [
        "top",
        "right",
        "left",
        "bottom",
        "right-start",
        "right-end",
        "left-start",
        "left-end",
        "bottom-start",
        "bottom-end",
        "top-start",
        "top-end",
      ],
    },
    icon: {
      control: "select",
      options: [
        "cross",
        "cross-filled",
        "search",
        "info",
        "dropdown_arrow_down",
        "dots",
        "arrow-left-black",
        "arrow-right-black",
        "white-dots",
        "plus-btn",
        "help",
      ],
    },
    iconClassName: { control: "text" },
    iconElement: {
      description: "Set the custom icon element of tooltip",
      control: "text",
    },
    link: { control: "text" },
    linkText: { control: "text" },
    style: { control: "object" },
    tooltipContent: { control: "text" },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <div className="main-div space-between">
    <Tooltip {...args}></Tooltip>
  </div>
);
export const tooltipSuccess = Template.bind({});
tooltipSuccess.args = {
  position: "bottom",
  icon: <SvgIcInfo />,
  tooltipContent:
    "This is a tooltip that shows helpful information when we hover over an icon.",
};

export const tooltipWithLink = Template.bind({});
tooltipWithLink.args = {
  link: "https://www.example.com",
  icon: <SvgIcHelp />,
  tooltipContent:
    "This is a tooltip that shows helpful information when we hover over an icon.",
};
