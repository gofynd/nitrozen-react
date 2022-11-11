import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tab from "./Tab";
import "../Menu/Menu.scss";
import { SvgError, SvgHelp } from "../../assets/svg-components";
export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {
    activeIndex: { control: { type: "number" } },
    tabItem: { control: "object" },
    label: { control: "text" },
    onTabChange: { action: "clicked" },
    style: { control: "object" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => (
  <div className="main-div space-between">
    <Tab {...args} />
  </div>
);

export const ObjectTabItems = Template.bind({});
ObjectTabItems.args = {
  tabItem: [
    {
      name: "Label 1",
      value: 1,
      tooltipIcon: <SvgHelp size={16} />,
      tooltipIconHoverText: "This is a priority Tab",
    },
    { name: "Label 2", value: 2 },
    { name: "Label 3 (45)", value: 3 },
    {
      name: "Label 4",
      value: 4,
      icon: <SvgError size={16} className="error-icon" />,
    },
  ],
  label: "name",
  activeIndex: 0,
  onTabChange: (tab) => console.log(tab),
};

export const StringTabItems = Template.bind({});
StringTabItems.args = {
  tabItem: ["Tab1", "Tab2", "Tab3", "Tab4", "Tab5"],
  activeIndex: 0,
  onTabChange: (tab) => console.log(tab),
};
