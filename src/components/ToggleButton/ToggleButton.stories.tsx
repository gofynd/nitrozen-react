import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ToggleButton from "./ToggleButton";
import * as SvgArray from "../../assets/svg-components";

export default {
  title: "Components/Button/ToggleButton",
  component: ToggleButton,
  argTypes: {
    disabled: {
      type: "boolean",
      description: "Makes the toggle button unclickable",
    },
    value: {
      type: "boolean",
      description: "Initial toggle state",
    },
    onToggle: {
      type: "function",
      description: "Captures the toggle button's click event",
    },
    size: {
      control: "select",
      defaultValue: "medium",
      options: ["large", "medium", "small"],
    },
    style: { control: "object" },
    className: { control: "text" },
    labelText: { control: "text" },
    state: {
      control: "select",
      description: "Validation state",
      options: ["success", "warning", "error"],
    },
    stateMessage: { control: "text" },
    onIconClick: { type: "function" },
    showIcon: { control: "boolean" },
    icon: {
      description:
        "An element to be placed on the left, ideally an icon. This is clickable if onIconClick is defined.",
      options: SvgArray,
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <div
    className="main-div"
    style={{ display: "flex", justifyContent: "center" }}
  >
    <ToggleButton {...args} />
  </div>
);
export const ToggleBtn = Template.bind({});
ToggleBtn.args = {
  id: "React0",
  labelText: "React",
  disabled: false,
  value: false,
  onToggle: () => {
    console.log("clicked");
  },
};

export const demo = () => {
  const sizes = ["small", "medium", "large"];

  return (
    <div className="main-div all-togglebtn-sections">
      {sizes.map((size) => (
        <div className="section" key={size}>
          <ToggleButton id={`${size} + 1`} labelText="Text" size={size} />
          <ToggleButton
            id={`${size} + 2`}
            labelText="Text"
            size={size}
            value={true}
          />
          <ToggleButton
            id={`${size} + 3`}
            labelText="Text"
            size={size}
            disabled={true}
          />
          <ToggleButton
            id={`${size} + 4`}
            labelText="Text"
            size={size}
            disabled={true}
            value={true}
          />
        </div>
      ))}
    </div>
  );
};

export const iconDemo = () => {
  const sizes = ["small", "medium", "large"];

  return (
    <div className="main-div all-togglebtn-sections">
      {sizes.map((size) => (
        <div className="section" key={size}>
          <ToggleButton
            id={`${size} + 5`}
            showIcon={true}
            icon={SvgArray.SvgIc4GBarNoNetwork}
            labelText="Text"
            size={size}
          />
          <ToggleButton
            id={`${size} + 6`}
            showIcon={true}
            icon={SvgArray.SvgIc4GBarNoNetwork}
            labelText="Text"
            size={size}
            value={true}
          />
          <ToggleButton
            id={`${size} + 7`}
            showIcon={true}
            icon={SvgArray.SvgIc4GBarNoNetwork}
            labelText="Text"
            size={size}
            disabled={true}
          />
          <ToggleButton
            id={`${size} + 8`}
            showIcon={true}
            icon={SvgArray.SvgIc4GBarNoNetwork}
            labelText="Text"
            size={size}
            disabled={true}
            value={true}
          />
        </div>
      ))}
    </div>
  );
};

export const stateIconDemo = () => {
  const sizes = ["small", "medium", "large"];

  return (
    <div className="main-div all-togglebtn-sections">
      {sizes.map((size) => (
        <div className="section-validation" key={size}>
          <ToggleButton
            id={`${size} + 9`}
            showIcon={true}
            icon={SvgArray.SvgIc4GBarNoNetwork}
            labelText="Text"
            size={size}
            state="success"
            stateMessage="Success"
          />
          <ToggleButton
            id={`${size} + 10`}
            showIcon={true}
            icon={SvgArray.SvgIc4GBarNoNetwork}
            labelText="Text"
            size={size}
            value={true}
            state="warning"
            stateMessage="Warning"
          />
          <ToggleButton
            id={`${size} + 11`}
            showIcon={true}
            icon={SvgArray.SvgIc4GBarNoNetwork}
            labelText="Text"
            size={size}
            disabled={true}
            state="error"
            stateMessage="Error"
          />
          <ToggleButton
            id={`${size} + 12`}
            showIcon={true}
            icon={SvgArray.SvgIc4GBarNoNetwork}
            labelText="Text"
            size={size}
            disabled={true}
            value={true}
            state="success"
            stateMessage="Success"
          />
        </div>
      ))}
    </div>
  );
};
