import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";
import "./Table.scss";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    tableRow: { control: "array" },
  },
} as ComponentMeta<typeof Table>;

export const ShowTable: ComponentStory<typeof Table> = (args) => {
  return (
    <div className="main-div space-between">
      <Table
        tableRow={[
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
        ]}
        tableHeader={[
          {
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
            customSort: function noRefCheck() {},
            name: "age",
            sortable: true,
            type: "number",
            value: "Age",
            width: "100px",
          },
        ]}
        id={"table-custom"}
      />
    </div>
  );
};

ShowTable.args = {
  tableRow: ["abc"],
};
