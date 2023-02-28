import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tab from "./Tab";
import "../Menu/Menu.scss";
import { SvgIcBiology } from "../../assets/svg-components";
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
  <div className="main-div ">
    <Tab {...args} />
  </div>
);

export const ObjectTabItems = Template.bind({});
ObjectTabItems.args = {
  tabItem: [
    {
      name: "cherry",
      value: 1,
    },
    { name: "blueberry", value: 2 },
    { name: "strawberry", value: 3 },
    {
      name: "lemon",
      value: 4,
      icon: <SvgIcBiology size={16} className="error-icon" />,
    },
    {
      name: "Cold Coffee",
      value: 5,
    },
    {
      name: "chocolate",
      value: 6,
    },
    {
      name: "cream",
      value: 7,
    },
    {
      name: "banana",
      value: 8,
    },
    {
      name: "apple",
      value: 9,
    },
    {
      name: "mango",
      value: 10,
    },
    {
      name: "Label 11",
      value: 11,
    },
    {
      name: "Label 12",
      value: 12,
    },
  ],
  label: "name",
  activeIndex: 0,
  tabs: 4,
  appearance: "normal",
  overflow: "fit",
  onTabChange: (tab) => console.log(tab),
};

export const StringTabItems = Template.bind({});
StringTabItems.args = {
  tabItem: ["Tab1", "Tab2", "Tab3", "Tab4", "Tab5"],
  activeIndex: 0,
  onTabChange: (tab) => console.log(tab),
};
