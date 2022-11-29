import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Menu from "./Menu";
import MenuItem from "../MenuItem";
import "./Menu.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Menu",
  component: Menu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    mode: { control: "select", options: ["vertical", "horizontal"] },
    inverted: { control: "radio", options: [true, false] },
    position: { control: "radio", options: ["top", "bottom"] },
    getSelectedMenuItem: { action: "clicked" },
    style: { control: "object" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const PrimaryMenu: ComponentStory<typeof Menu> = (args) => (
  <div className="menu-story-container">
    <Menu {...args}>
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Menu>
  </div>
);
