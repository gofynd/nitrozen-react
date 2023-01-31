import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchBox from "./SearchBox";

export default {
  title: "Components/SearchBox",
  component: SearchBox,
  argTypes: {
    showSearchIcon: {
      type: "boolean",
      description: "Includes a search icon inside input field",
      defaultValue: true,
    },
    style: { control: "object" },
    className: { control: "text" },
  },
} as ComponentMeta<typeof SearchBox>;

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

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <div className="main-div space-between">
    <SearchBox {...args} />
  </div>
);
export const SearchBoxInput = Template.bind({});
SearchBoxInput.args = {
  //   items: countries,
  onChange: () => {},
  //   onBlur: () => {},
  //   onFocus: () => {},
  //   listItemClicked: () => {},
  //   showSearchIcon: true,
  placeholder: "Search ",
  items: countries,
};
