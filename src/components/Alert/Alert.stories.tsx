/* Package imports */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

/* Component imports */
import Alert from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    alertWidth: {
      control: "text",
      description: `This property sets the width of the alert.`,
    },
    buttonText: {
      control: "text",
      description: `This property sets the text of the button.`,
    },
    buttonType: {
      control: "select",
      description: `This property decides whether the button should be a 
                        link or the default button.`,
      options: ["default", "link"],
    },
    children: {
      name: "children",
      description: `This property sets the display value of the button.`,
      type: {
        name: "string",
        required: true,
      },
    },
    className: {
      control: "text",
      description: `This property sets the external classnames for the component.`,
    },
    displayButton: {
      control: "boolean",
      description: `This property decides whether the button should be shown or hidden.`,
    },
    extendedAlert: {
      control: "boolean",
      description: `This property decides whether the alert should be shown in an extended format, 
                        like a card.`,
    },
    fullWidth: {
      control: "boolean",
      defaultValue: true,
      description: `This property decides whether the component should take up the entire width of 
                        its parent component.`,
    },
    href: {
      control: "text",
      description: `This property will be the URL that needs to be navigated to on the click of the link button. 
                        This value is only used when the buttonType is 'link'.`,
    },
    Icon: {
      name: "Icon",
      description: `This property sets the icon to be displayed at the start of the alert.`,
      type: {
        name: "string",
        required: false,
      },
    },
    labelText: {
      control: "text",
      description: `This property will set the value of the label for the alert.`,
    },
    linkText: {
      control: "text",
      description: `This property will set the value of the link button for cases where buttonType = link.`,
    },
    loader: {
      control: "boolean",
      description: `This property decides if the loader is to be displayed.`,
    },
    onClick: {
      control: "object",
      description: `This property is an event handler for the onclick event of the button.`,
    },
    state: {
      name: "state",
      control: "select",
      defaultValue: "info",
      description: `This property describes the state of the alert.`,
      options: ["error", "info", "success", "warn"],
      type: {
        name: "string",
        required: true,
      },
    },
    style: {
      control: "object",
      description: `This property is used for adding external styles to the alert component.`,
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <div className="main-div space-between">
    <Alert {...args} state="error">
      This is an error alert.
    </Alert>
    <Alert {...args} state="info">
      This is an informational alert.
    </Alert>
    <Alert {...args} state="success">
      This is a success alert.
    </Alert>
    <Alert {...args} state="warn">
      This is a warning alert.
    </Alert>
    <Alert {...args}>
      This is a stateless (default) alert. Value from controls will change this
      alert.
    </Alert>
  </div>
);

/**
 * An alert without a button
 */
export const ButtonLessAlert = Template.bind({});
ButtonLessAlert.args = {
  displayButton: false,
};
ButtonLessAlert.storyName = "Alert without button";

/**
 * An alert with a button
 */
export const ButtonAlert = Template.bind({});
ButtonAlert.args = {
  buttonText: "Accept",
  buttonType: "default",
  displayButton: true,
};
ButtonAlert.storyName = "Alert with button";

/**
 * An alert with a link button
 */
export const ButtonLink = Template.bind({});
ButtonLink.args = {
  buttonType: "link",
  displayButton: true,
  href: "https://www.google.com",
  linkText: "Next",
};
ButtonLink.storyName = "Alert with link";

/**
 * An alert with full width and without a button
 */
export const AlertFullWidth = Template.bind({});
AlertFullWidth.args = {
  displayButton: false,
  fullWidth: true,
};
AlertFullWidth.storyName = "Alert without button and with full width";

/**
 * An alert without a button and without a full width (width set to auto)
 */
export const AlertAutoWidth = Template.bind({});
AlertAutoWidth.args = {
  displayButton: false,
  fullWidth: false,
};
AlertAutoWidth.storyName = "Alert without button and without full width";

/**
 * An alert with a set width
 */
export const AlertSetWidth = Template.bind({});
AlertSetWidth.args = {
  alertWidth: "45%",
  displayButton: false,
  fullWidth: false,
};
AlertSetWidth.storyName = "Alert without button and with a set width";

/**
 * An alert with a button and auto width
 */
export const ButtonAlertAutoWidth = Template.bind({});
ButtonAlertAutoWidth.args = {
  buttonType: "button",
  buttonText: "Click",
  displayButton: true,
  fullWidth: false,
};
ButtonAlertAutoWidth.storyName = "Alert with button and without full width";

/**
 * An extended alert without a button
 */
export const ButtonLessExtendedAlert = Template.bind({});
ButtonLessExtendedAlert.args = {
  extendedAlert: true,
};
ButtonLessExtendedAlert.storyName = "Extended Alert without button";

/**
 * An extended alert with a button
 */
export const ButtonExtendedAlert = Template.bind({});
ButtonExtendedAlert.args = {
  displayButton: true,
  extendedAlert: true,
};
ButtonExtendedAlert.storyName = "Extended Alert with button";

/**
 * An alert with a loader
 */
export const LoaderAlert = Template.bind({});
LoaderAlert.args = {
  loader: true,
};
LoaderAlert.storyName = "Alert with loader";

/**
 * An alert with custom class-name
 */
export const AlertCustomClass = Template.bind({});
AlertCustomClass.args = {
  className: "nitrozen-custom-class",
};
AlertCustomClass.storyName = "Alert with a custom classname";
