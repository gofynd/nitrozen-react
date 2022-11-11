import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Autocomplete from "./Autocomplete";

export default {
  title: "Components/Autocomplete",
  component: Autocomplete,
  argTypes: {
    showSearchIcon: {
      type: "boolean",
      description: "Includes a search icon inside input field",
      defaultValue: true,
    },
    style: { control: "object" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof Autocomplete>;

const countries = [
  "Afghanistan",
  "Bahamas",
  "Cambodia",
  "Denmark",
  "Hungary",
  "India",
  "Tuvalu",
  "Uganda",
  "Vietnam",
  "Virgin Islands (US)",
  "Zimbabwe",
];

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <div className="main-div space-between">
    <Autocomplete {...args} />
  </div>
);
export const AutocompleteInput = Template.bind({});
AutocompleteInput.args = {
  items: countries,
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  listItemClicked: () => {},
  showSearchIcon: true,
  placeholder: "Search here",
};
