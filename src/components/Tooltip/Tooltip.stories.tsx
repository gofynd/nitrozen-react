import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from "./Tooltip";
import { SvgInfo, SvgHelp } from "../../assets/svg-components/Action";
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
      options: ["top", "right", "left", "bottom"],
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
  icon: <SvgInfo />,
  tooltipContent:
    "This is a tooltip that shows helpful information when we hover over an icon.",
};

export const tooltipWithLink = Template.bind({});
tooltipWithLink.args = {
  link: "https://www.example.com",
  icon: <SvgHelp />,
  tooltipContent:
    "This is a tooltip that shows helpful information when we hover over an icon.",
};
