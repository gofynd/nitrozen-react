import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Table from "./Table";
import { SvgIcInfo } from "../../assets/svg-components";

describe("Render a Table component", () => {
  test("Show table and its values check first row", async () => {
    render(
      <Table
        customSortIcon={<SvgIcInfo />}
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
    expect(mainWrapper.className).toBe("n-table ");
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
    expect(rowValue0Text.className).toBe("n-row-data ");
  });
  test("Show table and check on click", async () => {
    render(
      <Table
        customSortIcon={<SvgIcInfo />}
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
  test("Show table with checkboxes", async () => {
    let status = false;
    const allCheckClicked = (e: any) => {
      status = e;
    };
    let items: any = [];
    const getCheckedItems = (resp: any) => {
      items = resp;
    };
    render(
      <Table
        customSortIcon={<SvgIcInfo />}
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
        checkable={true}
        allChecked={false}
        allCheckClicked={allCheckClicked}
        getCheckedItems={getCheckedItems}
      />
    );
    const rowValue0 = screen.getByTestId("row-0");
    expect(rowValue0.className).toContain(
      "n-table-row-item  n-table-row-zebra"
    );
    const headerClick = screen.getByTestId("n-table-header-0");
    fireEvent.click(headerClick);
    const allcheckBox = screen.getByTestId("header-checkbox");
    fireEvent.click(allcheckBox);
    expect(status).toBe(true);
    fireEvent.click(allcheckBox);
    expect(status).toBe(false);
    const firstRowCheck = screen.getByTestId("n-row-checkbox-0");
    fireEvent.click(firstRowCheck);
    expect(items.length).toBe(7);
    expect(items[0]).toStrictEqual({
      age: 45,
      firstName: "John",
      isChecked: true,
      lastName: "Yang",
    });
    fireEvent.click(firstRowCheck);
    expect(items[0]).toStrictEqual({
      age: 45,
      firstName: "John",
      isChecked: false,
      lastName: "Yang",
    });
  });
  test("Table rows clickable", async () => {
    let status = false;
    const onRowClick = jest.fn().mockImplementation((e) => {});
    let items: any = [];
    render(
      <Table
        customSortIcon={<SvgIcInfo />}
        tableRow={[
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
        checkable={true}
        allChecked={false}
        onRowClick={onRowClick}
      />
    );
    const rowValue0 = screen.getByTestId("row-0");
    expect(rowValue0.className).toContain("n-table-row-item-clickable");
    fireEvent.click(rowValue0);
    expect(onRowClick).toBeCalledTimes(1);
  });
  test("Show table and its values check first row and a class name for hiding the column divider border", async () => {
    render(
      <Table
        customSortIcon={<SvgIcInfo />}
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
        showColumnDivider={false}
      />
    );
    const rowValue0Text = screen.getByTestId("n-row-data-0-0");
    expect(rowValue0Text.textContent).toContain("John");
    expect(rowValue0Text.className).toBe("n-row-data n-table-no-divider");
  });
});
