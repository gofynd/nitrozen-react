import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Autocomplete from "./Autocomplete";

function getFilteredList(items: string[] = [], entry: string = "") {
  if (entry === "") return [];
  return items
    ? items.filter((item) => item.toLowerCase().includes(entry.toLowerCase()))
    : [];
}

function getFilteredListItems(
  items: { label: string; id: number }[] = [],
  entry: string = ""
) {
  if (entry === "") return [];
  return items
    ? items.filter((item) =>
        item.label.toLowerCase().includes(entry.toLowerCase())
      )
    : [];
}

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
    disabled: {
      control: "boolean",
      description: "Disable searchbox",
    },
    items: {
      description:
        "List of items you want to show, it can either be a string array or object array (for object array you also need to give resultStringKeyName and renderItem",
    },
    onListItemClick: {
      description:
        "Function which will be triggered when list items are clicked",
    },
    renderItem: {
      description: "Invoked for each entry in items.",
    },
    resultStringKeyName: {
      description:
        "Key name which will be used for search, if list items are objects",
    },
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

const listItems = [
  {
    label: "Item 1",
    id: 1,
  },
  {
    label: "Item 2",
    id: 2,
  },
  {
    label: "Item 3",
    id: 3,
  },
  {
    label: "Item 4",
    id: 4,
  },
  {
    label: "Item 5",
    id: 5,
  },
];
const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const [items, setItems] = React.useState<string[]>([]);

  function handleChange(e: string) {
    setItems(getFilteredList(countries, e));
  }

  return (
    <div className="main-div space-between">
      <Autocomplete {...args} onChange={handleChange} items={items} />
    </div>
  );
};
export const AutocompleteInput = Template.bind({});

AutocompleteInput.args = {
  onBlur: () => {},
  onFocus: () => {},
  onListItemClick: () => {},
  placeholder: "Search ",
  showClearAll: true,
  disabled: false,
  showLoader: true,
};

export const AutocompleteWithObjectItem = () => {
  const [items, setItems] = React.useState<{ label: string; id: number }[]>([]);

  function handleChange(e: string) {
    setItems(getFilteredListItems(listItems, e));
  }

  return (
    <div className="main-div space-between">
      <p style={{ marginTop: "0", fontSize: "1.4rem" }}>
        Try searching with text `Item`
      </p>
      <Autocomplete
        onChange={handleChange}
        items={items}
        onBlur={() => {}}
        onFocus={() => {}}
        onListItemClick={(index: number) => {
          console.log(index);
        }}
        placeholder="Search "
        showClearAll={true}
        disabled={false}
        showLoader={true}
        renderItem={(item) => <div style={{ width: "100%" }}>{item.label}</div>}
        resultStringKeyName="label"
        showSearchIcon={true}
      />
    </div>
  );
};
