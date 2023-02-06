import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pagination, { ModeEnum } from "./Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => {
  return (
    <div className="sb-pagination">
      <Pagination {...args} />
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
  pageSizeOptions: [10, 20],
  onChange: (event: any) => {},
  onPreviousClick: (event: any) => {},
  onNextClick: (event: any) => {},
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
};
