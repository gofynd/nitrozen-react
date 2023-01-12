import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import * as SvgArray from "../../assets/svg-components";
export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    children: {
      name: "label",
      type: { name: "string", required: false },
      description: "This property sets the display value of the button",
    },
    theme: {
      control: "select",
      description: "This property sets the theme of the button",
      options: ["primary", "secondary", "tertiary"],
    },
    as: {
      control: "select",
      description:
        "Whether the root element should be a `<div>` or `<span>` instead of a `<button>`",
      options: ["div", "span"],
    },
    size: {
      control: "select",
      description: "This property sets the size of the button",
      options: ["small", "medium", "large"],
    },
    type: {
      control: "select",
      description: "This property sets the type of the button",
      options: ["button", "submit", "reset"],
    },
    rounded: {
      control: { type: "boolean" },
      description: "This property sets the border radius of the button",
    },
    href: {
      type: { name: "string", required: false },
      description:
        "This property converts a button into an anchor tag. Useful for redirection",
    },
    disabled: {
      control: { type: "boolean" },
      description: "This property enables / disables the button.",
    },
    focused: {
      control: { type: "boolean" },
      description: "This property sets focus on the button.",
    },
    state: {
      control: "select",
      description: "Changes the button to custom state",
      options: ["positive", "destructive", "default"],
    },
    showProgress: {
      control: { type: "boolean" },
      description: "This property adds a loader on the button.",
    },
    stroke: {
      control: { type: "boolean" },
      description: "This property removes the background color of the button.",
    },
    id: {
      description: "This property sets a unique identifier for the button.",
    },
    name: {
      description: "This property sets name for the button.",
    },
    icon: {
      description: "Displays icon on the left.",
      options: SvgArray,
    },
    iconRight: {
      description: "Displays icon on the right with.",
      options: SvgArray,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className="main-div space-between">
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const PrimaryAndOutline = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button size="small">Button</Button>
      <Button size="medium">Button</Button>
      <Button size="lagge">Button</Button>
    </div>
    <div className="sb-display-grid">
      <Button size="small" disabled>
        Button
      </Button>
      <Button size="medium" disabled>
        Button
      </Button>
      <Button size="lagge" disabled>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button size="small" stroke>
        Button
      </Button>
      <Button size="medium" stroke>
        Button
      </Button>
      <Button size="lagge" stroke>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button size="small" stroke disabled>
        Button
      </Button>
      <Button size="medium" stroke disabled>
        Button
      </Button>
      <Button size="lagge" stroke disabled>
        Button
      </Button>
    </div>
  </div>
);

// export const LinkButton = () => (
//   <div className="main-div">
//     <div className="sb-display-grid">
//       <Button size="large" link>
//         Button
//       </Button>
//       <Button size="medium" link>
//         Button
//       </Button>
//       <Button size="small" link>
//         Button
//       </Button>
//     </div>
//     <div className="sb-display-grid">
//       <Button theme="secondary" size="large" link>
//         Button
//       </Button>
//       <Button theme="secondary" size="medium" link>
//         Button
//       </Button>
//       <Button theme="secondary" size="small" link>
//         Button
//       </Button>
//     </div>
//   </div>
// );
export const IconButton = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button icon={SvgArray.SvgStore} size="small"></Button>
      <Button icon={SvgArray.SvgStore} size="medium"></Button>
      <Button icon={SvgArray.SvgStore} size="large"></Button>
    </div>
    <div className="sb-display-grid">
      <Button icon={SvgArray.SvgStore} size="small" stroke></Button>
      <Button icon={SvgArray.SvgStore} size="medium" stroke></Button>
      <Button icon={SvgArray.SvgStore} size="large" stroke></Button>
    </div>
    <div className="sb-display-grid">
      <Button icon={SvgArray.SvgStore} size="small" disabled></Button>
      <Button icon={SvgArray.SvgStore} size="medium" disabled></Button>
      <Button icon={SvgArray.SvgStore} size="large" disabled></Button>
    </div>
    <div className="sb-display-grid">
      <Button icon={SvgArray.SvgStore} size="small" disabled stroke></Button>
      <Button icon={SvgArray.SvgStore} size="medium" disabled stroke></Button>
      <Button icon={SvgArray.SvgStore} size="large" disabled stroke></Button>
    </div>
  </div>
);

export const IconRightButton = () => (
  <div className="main-div">
    <div className="sb-display-grid">
      <Button iconRight={SvgArray.SvgStore} size="small">
        Button
      </Button>
      <Button iconRight={SvgArray.SvgStore} size="medium">
        Button
      </Button>
      <Button iconRight={SvgArray.SvgStore} size="large">
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button iconRight={SvgArray.SvgStore} size="small" stroke>
        Button
      </Button>
      <Button iconRight={SvgArray.SvgStore} size="medium" stroke>
        Button
      </Button>
      <Button iconRight={SvgArray.SvgStore} size="large" stroke>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button iconRight={SvgArray.SvgStore} size="small" disabled>
        Button
      </Button>
      <Button iconRight={SvgArray.SvgStore} size="medium" disabled>
        Button
      </Button>
      <Button iconRight={SvgArray.SvgStore} size="large" disabled>
        Button
      </Button>
    </div>
    <div className="sb-display-grid">
      <Button iconRight={SvgArray.SvgStore} size="small" disabled stroke>
        Button
      </Button>
      <Button iconRight={SvgArray.SvgStore} size="medium" disabled stroke>
        Button
      </Button>
      <Button iconRight={SvgArray.SvgStore} size="large" disabled stroke>
        Button
      </Button>
    </div>
  </div>
);
