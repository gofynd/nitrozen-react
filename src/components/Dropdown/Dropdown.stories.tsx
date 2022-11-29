import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";

export default {
  title: "Components/Input/Dropdown",
  component: Dropdown,
  argTypes: {
    id: {
      control: "text",
      description: "Used to uniquely identify the dropdown",
      default: "Randomly generated ID prepended by `nitrozen-dropdown-`",
    },
    items: {
      description:
        "used to bind data list to the dropdown. items is an array of object. Each object can have 3 properties: {text, value, logo} ",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Used to disable dropdown",
    },
    label: {
      description: "Used to assign title to dropdown",
    },
    multiple: {
      control: { type: "boolean" },
      description: "Used to make dropdown multi-select",
    },
    placeholder: {
      description: "Used to assign placeholder to dropdown",
    },
    required: {
      control: { type: "boolean" },
      description: "Used to make the field mandatory",
    },
    searchable: { control: { type: "boolean" } },
    tooltip: {
      description: "Assign tooltip value to dropdown",
    },
    addOption: {
      control: { type: "boolean" },
      description: "Used to assign additional custom options",
    },
    enableSelectAll: {
      control: { type: "boolean" },
      description:
        "Used to add additional option 'Select all'. Note: This will work only when multiple = true ",
    },
    onChange: {
      action: "clicked",
      description: "onChange(event, item)",
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <div
    style={{
      minHeight: "600px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div style={{ width: "500px" }}>
      <Dropdown {...args} />
    </div>
  </div>
);

const DropdownDatasource = [
  {
    text: "Maharashtra",
    value: 1,
  },
  {
    text: "Andhra Pradesh",
    value: 2,
  },
  {
    text: "West Bengal",
    value: 3,
  },
  {
    text: "Madhya Pradesh",
    value: 4,
  },
  {
    text: "Tamil Nadu",
    value: 5,
  },
  {
    text: "Himachal Pradesh",
    value: 6,
  },
];

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  id: "ddlStates",
  items: DropdownDatasource,
  label: "States",
  placeholder: "States",
  tooltip: "Tooltip is working",
  onChange: (item: any) => {},
  onSearchInputChange: (event: any) => {},
  onScroll: (event: any) => {},
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  id: "ddlStates",
  items: DropdownDatasource,
  label: "States",
  placeholder: "States",
  tooltip: "Tooltip is working",
  multiple: true,
  searchable: true,
  addOption: true,
  enableSelectAll: true,
  onChange: (item: any) => {},
  onSearchInputChange: (event: any) => {},
  onScroll: (event: any) => {},
};

export const Search = () => {
  const [searchData, setSearchData] = useState<
    Array<{ type: string; value: Number; icon?: string }> | any
  >([...DropdownDatasource]);
  const onSearchInputHandler = (obj: {
    text: string;
    value: Number;
    icon?: string;
    isGroupLabel?: Boolean;
  }) => {
    if (obj.text === "") {
      setSearchData([...DropdownDatasource]);
    } else {
      const isAvailable = DropdownDatasource.filter((item: any) =>
        item.text.includes(obj.text)
      );
      if (isAvailable.length > 0) {
        setSearchData([...isAvailable]);
      } else {
        setSearchData([]);
      }
    }
  };
  return (
    <div
      style={{
        minHeight: "600px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "500px" }}>
        <Dropdown
          id="ddlStates"
          items={searchData}
          label="States"
          placeholder="States"
          searchable={true}
          addOption={true}
          enableSelectAll={true}
          onSearchInputChange={onSearchInputHandler}
          onScroll={(e: any) => {
            console.log("Scroll event triggered with props: ", e);
          }}
          addOptionHandler={(newValue: string) => {
            setSearchData([
              ...DropdownDatasource,
              { text: newValue, value: 101 },
            ]);
          }}
        />
      </div>
    </div>
  );
};
