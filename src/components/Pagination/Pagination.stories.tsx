import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pagination, { ModeEnum } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    size: {
      description: "Size variants are available only for Pagination type 'top'",
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  return (
    <div
      style={{
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="sb-pagination">
        <Pagination {...args} />
      </div>
    </div>
  );
};

export const BasicPagination = Template.bind({});
BasicPagination.args = {
  id: "1",
  name: "Pages",
  value: {
    limit: 10,
    total: 100,
    current: 1,
    prevPage: "",
    nextPage: "",
    currentPage: "",
    currentTotal: 100,
  },
  pageSizeOptions: [10, 20, 50, 100],
  defaultPageSize: 10,
  mode: "regular",
  size: "large",
  type: "default",
  onChange: (event: any) => {},
  onPreviousClick: () => {},
  onNextClick: () => {},
};
export const Secondary = Template.bind({});
Secondary.args = {
  id: "1",
  name: "Pages",
  value: {
    limit: 10,
    total: 100,
    current: 1,
    prevPage: "",
    nextPage: "",
    currentPage: "",
    currentTotal: 100,
  },
  mode: ModeEnum.MODE_CURSOR,
  pageSizeOptions: [10, 20],
  defaultPageSize: 20,
};
