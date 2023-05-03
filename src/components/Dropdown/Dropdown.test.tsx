import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Dropdown from "./Dropdown";

const DropdownDatasource = [
  {
    text: "Maharashtra",
    value: 1,
    logo: "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/original/gionee-56405d/Gionee_Logo_20190919.jpg",
  },
  {
    text: "Andhra Pradesh",
    value: 2,
    logo: "https://hdn-1.jiox0.de/jioecomm/seller/pictures/logo/original/gionee-56405d/Gionee_Logo_20190919.jpg",
  },
];

describe("Dropdown", () => {
  test("renders the Dropdown component with tooltip", () => {
    const { getByTestId } = render(
      <Dropdown
        id="ddlStates"
        items={DropdownDatasource}
        label="States"
        tooltip="Tooltip is working"
      />
    );
    expect(getByTestId("icon-component")).toBeInTheDocument();
  });
  test("renders the Dropdown component and checks if all can be selected", () => {
    render(
      <Dropdown
        id="ddlStates"
        items={DropdownDatasource}
        label="States"
        multiple={true}
        enableSelectAll={true}
        onChange={(item: { text: string; value: string; icon?: string }) => {}}
        onSearchInputChange={(e: Element) => {}}
        value="1"
      />
    );
    const toggleDiv = document.querySelector(
      ".n-select-wrapper"
    ) as HTMLDivElement;
    fireEvent.click(toggleDiv);

    const inputElem = document.querySelector(
      ".n-option.ripple"
    ) as HTMLSpanElement;
    fireEvent.click(inputElem);
    const checkbox = document.querySelectorAll("input:checked");
    expect(checkbox.length > 0).toBe(true);
  });
  test("renders the Dropdown component and checks for multiple = false", () => {
    render(
      <Dropdown
        id="ddlStates"
        items={DropdownDatasource}
        label="States"
        onChange={(item: { text: string; value: string; icon?: string }) => {}}
        onSearchInputChange={(e: Element) => {}}
        value="1"
      />
    );
    const toggleDiv = document.querySelector(
      ".n-select-wrapper"
    ) as HTMLDivElement;
    fireEvent.click(toggleDiv);

    const inputElem = document.querySelector(
      ".n-option.ripple"
    ) as HTMLSpanElement;
    fireEvent.click(inputElem);
  });
  test("renders the Dropdown component and checks for groupLabel", () => {
    render(
      <Dropdown
        id="ddlStates"
        items={[
          ...DropdownDatasource,
          { text: "test", value: 10, isGroupLabel: true },
        ]}
        label="States"
        multiple={false}
        placeholder="States"
        searchable={true}
        tooltip="Tooltip is working"
        addOption={true}
        enableSelectAll={true}
        onChange={(item: { text: string; value: string; icon?: string }) => {}}
        onSearchInputChange={(e: Element) => {}}
        onScroll={(e: Element) => {}}
        value="1"
      />
    );

    const inputElem = document.querySelectorAll(".n-option.ripple");
    fireEvent.click(inputElem[inputElem.length - 1]);
  });
  test("if custom scroll events are executed, also addOptions functionality", () => {
    const { getByTestId } = render(
      <Dropdown
        items={[]}
        disabled={false}
        label="States"
        multiple={true}
        placeholder="States"
        required={false}
        searchable={true}
        tooltip="Tooltip is working"
        addOption={true}
        enableSelectAll={true}
        onChange={(item: { text: string; value: string; icon?: string }) => {}}
        onSearchInputChange={(e: Element) => {}}
        onScroll={(e: Element) => {}}
        addOptionHandler={(e: Element) => {}}
        value={"1"}
      />
    );

    const search = getByTestId("dropdown-search");
    fireEvent.change(search, { target: { value: "testing" } });

    const addOptionElem = getByTestId("add-option");
    fireEvent.click(addOptionElem);

    fireEvent.keyDown(document, { keyCode: 9 });

    const dropdownScroll = getByTestId("dropdown-scroll");
    fireEvent.scroll(dropdownScroll);
  });
  test("should display the initial selected option", () => {
    // Arrange
    const { getByTestId } = render(
      <Dropdown
        value={1}
        label="States"
        items={DropdownDatasource}
        onChange={() => {}}
      />
    );
    const dropdown = getByTestId("dropdown-selected-text");

    // Act & Assert
    expect(dropdown).toHaveTextContent("Maharashtra");
  });

  test("should update the selected option when the value prop changes", () => {
    // Arrange
    const { getByTestId, rerender } = render(
      <Dropdown
        value={1}
        label="States"
        items={DropdownDatasource}
        onChange={() => {}}
      />
    );
    const dropdown = getByTestId("dropdown-selected-text");

    // Act
    rerender(
      <Dropdown
        value={2}
        label="States"
        items={DropdownDatasource}
        onChange={() => {}}
      />
    );

    // Assert
    expect(dropdown).toHaveTextContent("Andhra Pradesh");
  });

  test("should have black arrow icon", () => {
    // Arrange
    const { getByTestId } = render(
      <Dropdown
        value={1}
        label="States"
        items={DropdownDatasource}
        onChange={() => {}}
      />
    );
    const dropdown = getByTestId("dropdown-arrow-icon");

    // Act
    const computedStyle = getComputedStyle(dropdown);
    const color = computedStyle.color;

    // Assert
    expect(color).toBe("black");
  });
  test("should have validation", () => {
    // Arrange
    const { getByText } = render(
      <Dropdown
        value={1}
        label="States"
        items={DropdownDatasource}
        onChange={() => {}}
        validationLabel="Error validation message"
        validationState="error"
      />
    );
    const validation = getByText("Error validation message");

    // Assert
    expect(validation).toBeInTheDocument();
  });
  test("should not show 'All' option, if items prop value is empty and enableSelectAll & multiple is true", () => {
    // Arrange
    const { queryByTestId } = render(
      <Dropdown
        value={""}
        label="States"
        items={[]}
        onChange={() => {}}
        enableSelectAll
        multiple
      />
    );
    const allOption = queryByTestId("all-option");

    // Assert
    expect(allOption).toBeFalsy();
  });
  test("should clear searchText if current value is falsy", () => {
    // Arrange
    const { getByTestId, rerender } = render(
      <Dropdown
        items={DropdownDatasource}
        disabled={false}
        label="States"
        placeholder="States"
        required={false}
        searchable={true}
        tooltip="Tooltip is working"
        onChange={(item: { text: string; value: string; icon?: string }) => {}}
        onSearchInputChange={(e: Element) => {}}
        value={1}
      />
    );
    const search = getByTestId("dropdown-search");
    fireEvent.change(search, { target: { value: "testing" } });

    expect(search).toHaveValue("testing");

    rerender(
      <Dropdown
        items={DropdownDatasource}
        disabled={false}
        label="States"
        placeholder="States"
        required={false}
        searchable={true}
        tooltip="Tooltip is working"
        onChange={(item: { text: string; value: string; icon?: string }) => {}}
        onSearchInputChange={(e: Element) => {}}
        value={""}
      />
    );
    // Assert
    expect(search).toHaveValue("");
  });
});
