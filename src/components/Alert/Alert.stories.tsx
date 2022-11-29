import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";
import { SvgAccountCircle } from "../../assets/svg-components";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    labelText: { control: "text" },
    state: {
      control: "select",
      options: ["info", "success", "warn", "error"],
    },
    style: { control: "object" },
    className: { control: "text" },
    href: { control: "text" },
    ctaButtonText: { control: "text" },
    ctaButton: { control: "boolean" },
    onClick: { control: "object" },
    Icon: {
      name: "Icon",
      type: { name: "string", required: false },
      description: "This property sets the display value of the button",
    },
    alertWidth: { control: "text" },
    children: {
      name: "children",
      type: { name: "string", required: false },
      description: "This property sets the display value of the button",
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <div className="main-div space-between">
    <Alert {...args} />
  </div>
);
export const Alert_demo = Template.bind({});

Alert_demo.args = {
  state: "info",
  labelText: "informational message goes here",
  ctaButtonText: "CTA Label",
  ctaButton: true,
};
export const Alert_custom_icon = Template.bind({});
Alert_custom_icon.args = {
  state: "warn",
  labelText: "Warning message goes here",
  ctaButtonText: "CTA Label",
  Icon: <SvgAccountCircle size={"24px"} />,
};
export const Alert_with_children = Template.bind({});

Alert_with_children.args = {
  labelText: "Congratulations!",
  children: "CTA Label",
  ctaButtonText: "CTA Label",
};

export const Extended_alert = Template.bind({});

Extended_alert.args = {
  labelText: "Correction Required!",
  state: "error",
  extendedAlert: true,
  reasonArray: ["Reason 1", "Reason 2", "Reason 3"],
  extendedAlertBodyText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
};

export const Extended_alert_custom_size = Template.bind({});

Extended_alert_custom_size.args = {
  labelText: "Correction Required!",
  state: "error",
  extendedAlert: true,
  alertWidth: "30%",
  reasonArray: ["Reason 1", "Reason 2", "Reason 3"],
  extendedAlertBodyText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
};
