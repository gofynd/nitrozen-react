import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Grid from "./Grid";

export default {
  title: "Components/Grid",
  component: Grid,
  argTypes: {
    template: {
      name: "template",
      type: { name: "string", required: false },
      description: "This have fragment count",
    },

    tabletTemplate: {
      name: "tabletTemplate",
      type: { name: "string", required: false },
      description: "This have fragment count",
    },

    mobileTemplate: {
      name: "mobileTemplate",
      type: { name: "string", required: false },
      description: "This have fragment count",
    },

    gap: {
      name: "gap",
      type: { name: "string", required: false },
      description: "gap for row and col i.e 10px 10px",
    },

    align: {
      control: "select",
      description: `CSS's align-items value. E.g. 'start' | 'center' | 'end' | 'stretch'
      "inherit" | (string & {}) | "center" | "stretch" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "normal"`,
      options: ["center", "start", "end", "stretch"],
    },

    justify: {
      description: `CSS's align-items value. E.g. 'start' | 'center' | 'end' | 'stretch'
      "inherit" | (string & {}) | "center" | "stretch" | "-moz-initial" | "initial" | "revert" | "revert-layer" | "unset" | "end" | "flex-end" | "flex-start" | "self-end" | "self-start" | "start" | "baseline" | "normal"`,
      // options: ["center", "start", "end", "stretch"],
    },
    // templateTablet: {},

    // templateMobile: {},

    // showSearchIcon: {
    //   type: "boolean",
    //   description: "Includes a search icon inside input field",
    //   defaultValue: true,
    // },
    // style: { control: "object", decription:"string" },
    // className: { control: "text" },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <div className="main-div space-between">
    <Grid {...args}>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni earum
        temporibus facere expedita.
      </div>

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
        accusantium.
      </div>

      <div>Lorem ipsum dolor sit amet.</div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
        recusandae, illum cumque nesciunt, voluptate vel.
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        molestias ut laudantium nam optio ipsum incidunt provident.
      </div>

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
        delectus dolores? Optio, deserunt. Beatae maxime in quas.
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        molestias ut laudantium nam optio ipsum incidunt provident.
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
        recusandae, illum cumque nesciunt, voluptate vel.
      </div>

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
        delectus dolores? Optio, deserunt. Beatae maxime in quas.
      </div>

      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
        delectus dolores? Optio, deserunt. Beatae maxime in quas.
      </div>

      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
        recusandae, illum cumque nesciunt, voluptate vel.
      </div>
    </Grid>
  </div>
);
export const Basic = Template.bind({});
/* 
Pass controls below
*/
Basic.args = {
  template: "1fr 1fr 1fr",
  tabletTemplate: "1fr 1fr",
  mobileTemplate: "1fr",
  gap: "10px 10px",
  align: "center",
};
