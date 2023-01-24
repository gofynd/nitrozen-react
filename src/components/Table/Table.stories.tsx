import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";
import "./Table.scss";
import * as SvgArray from "../../assets/svg-components";
import { SvgDirections } from "../../assets/svg-components";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    tableRow: {
      control: "array",
      defaultValue: [
        {
          age: 45,
          firstName: "John",
          lastName: "Yang",
        },
        {
          age: 16,
          firstName: "Robert",
          lastName: "Peterson",
        },
        {
          age: 45,
          firstName: "Dana",
          lastName: "Culley",
        },
        {
          age: 150,
          firstName: "Rav",
          lastName: "Giraudy",
        },
        {
          age: 44,
          firstName: "Julia",
          lastName: "Clifford",
        },
        {
          age: 36,
          firstName: "Sasha",
          lastName: "Brecher",
        },
        {
          age: 12,
          firstName: "Harvey",
          lastName: "Jefferson",
        },
      ],
    },
    tableHeader: {
      control: "array",
      defaultValue: [
        {
          customSort: () => {},
          name: "firstName",
          sortable: true,
          value: "First name",
          width: "50%",
        },
        {
          name: "lastName",
          sortable: false,
          value: "Last name",
          width: "20%",
        },
        {
          customSort: () => {},
          name: "age",
          sortable: true,
          type: "number",
          value: "Age",
          width: "100px",
        },
      ],
    },
    footer: { control: "text" },
    rowStyle: {
      control: "select",
      options: ["simple", "zebra"],
      defaultValue: "simple",
    },
    headerBackground: { control: "color" },
    customSortIcon: {
      description:
        "An element to be placed on the left, ideally an icon. This is clickable if onIconClick is defined.",
      options: SvgArray,
    },
  },
} as ComponentMeta<typeof Table>;

export const Template: ComponentStory<typeof Table> = (args) => {
  return (
    <div className="main-div space-between">
      <Table {...args} />
    </div>
  );
};

export const ShowTable = Template.bind({});

const testFn = (obj: any) => {
  console.log("Callback with data ", obj);
};
ShowTable.args = {
  tableRow: [
    {
      age: 45,
      firstName: "John",
      lastName: "Yang",
    },
    {
      age: 16,
      firstName: "Robert",
      lastName: "Peterson",
    },
    {
      age: 45,
      firstName: "Dana",
      lastName: "Culley",
    },
    {
      age: 150,
      firstName: "Rav",
      lastName: "Giraudy",
    },
    {
      age: 44,
      firstName: "Julia",
      lastName: "Clifford",
    },
    {
      age: 36,
      firstName: "Sasha",
      lastName: "Brecher",
    },
    {
      age: 12,
      firstName: "Harvey",
      lastName: "Jefferson",
    },
  ],
  tableHeader: [
    {
      customSort: testFn,
      name: "firstName",
      sortable: true,
      value: "First name",
      width: "50%",
    },
    {
      name: "lastName",
      sortable: false,
      value: "Last name",
      width: "20%",
    },
    {
      customSort: testFn,
      name: "age",
      sortable: true,
      type: "number",
      value: "Age",
      width: "100px",
    },
  ],
  id: "table-custom",
  footer: "Default footer",
  rowStyle: "zebra",
  customSortIcon: <SvgDirections color="white" />,
};
