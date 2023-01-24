import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Table from "./Table";
import { SvgInfo } from "../../assets/svg-components/Action";

describe("Render a Table component", () => {
  test("Show table and its values check first row", async () => {
    render(
      <Table
        customSortIcon={<SvgInfo />}
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
        ]}
        rowStyle="simple"
        id="custom-table"
      />
    );
    const mainWrapper = screen.getByTestId("table-custom-table");
    expect(mainWrapper.className).toBe("n-table");
    const tableHeaderValue0 = screen.getByTestId("header-value-0");
    expect(tableHeaderValue0.textContent).toContain("First name");
    const rowValue0 = screen.getByTestId("row-0");
    expect(rowValue0.className).toContain(
      "n-table-row-item n-table-row-item-nofooter"
    );
    const rowValue0Text = screen.getByTestId("n-row-data-0-0");
    expect(rowValue0Text.textContent).toContain("John");
    const rowValue2Text = screen.getByTestId("n-row-data-0-1");
    expect(rowValue2Text.textContent).toContain("Yang");
    const rowValue3Text = screen.getByTestId("n-row-data-0-2");
    expect(rowValue3Text.textContent).toContain("45");
  });
  test("Show table and check on click", async () => {
    render(
      <Table
        customSortIcon={<SvgInfo />}
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
        ]}
        rowStyle="zebra"
        id="custom-table"
        footer={"Default footer"}
      />
    );
    const rowValue0 = screen.getByTestId("row-0");
    expect(rowValue0.className).toContain(
      "n-table-row-item  n-table-row-zebra"
    );
    const headerClick = screen.getByTestId("n-table-header-0");
    fireEvent.click(headerClick);
  });
});
