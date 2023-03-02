import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";
import "./Table.scss";
import * as SvgArray from "../../assets/svg-components";
import { SvgIcSort } from "../../assets/svg-components";

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
    onRowClick: {
      description:
        "A click handler function ( (index)=>{} ) to make row clickable",
    },
    headerBackground: { control: "color" },
    customSortIcon: {
      description:
        "An element to be placed on the left, ideally an icon. This is clickable if onIconClick is defined.",
      options: SvgArray,
    },
    checkable: { control: "boolean", defaultValue: false },
    showColumnDivider: { control: "boolean", defaultValue: true },
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

export const CheckableTable = (args: any) => {
  const [countVal, setCount] = useState(0);
  const [rowItem, setRowItem] = useState<any[]>([
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
  ]);
  const getCheckedItems = (items: any) => {
    let count = 0;
    items.forEach((item: any) => {
      if (item.isChecked) count++;
    });
    setCount(count);
  };

  const allCheckClicked = (status: boolean) => {
    let tempRowArr = [...rowItem];
    rowItem.forEach((item: any) => {
      item.isChecked = status;
    });
    setRowItem(tempRowArr);
    setCount(status ? tempRowArr.length : 0);
  };

  const onRowClick = (ind: number) => {
    console.log(ind);
  };
  return (
    <div>
      <p style={{ fontSize: "14px", marginTop: "0px" }}>
        Total items selected {countVal}
      </p>
      <Table
        {...args}
        checkable={true}
        getCheckedItems={getCheckedItems}
        allCheckClicked={allCheckClicked}
        tableRow={rowItem}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export const sortableTable = (args: any) => {
  const sortNames = () => {
    let tempItemsArr = [...rowItem];
    tempItemsArr = tempItemsArr.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    setRowItem(tempItemsArr);
  };
  const [rowItem, setRowItem] = useState<any[]>([
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
  ]);
  const [tableHeader, setTableHeader] = useState([
    {
      customSort: sortNames,
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
      name: "age",
      type: "number",
      value: "Age",
      width: "100px",
    },
  ]);
  return (
    <div>
      <Table
        {...args}
        tableRow={rowItem}
        customSortIcon={<SvgIcSort color="white" />}
        tableHeader={tableHeader}
      />
    </div>
  );
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
      customSort: () => {},
      name: "firstName",
      value: "First name",
      width: "50%",
    },
    {
      name: "lastName",
      value: "Last name",
      width: "20%",
    },
    {
      customSort: () => {},
      name: "age",
      type: "number",
      value: "Age",
      width: "100px",
    },
  ],
  id: "table-custom",
  footer: "Default footer",
  rowStyle: "zebra",
  customSortIcon: <SvgIcSort color="white" />,
};
