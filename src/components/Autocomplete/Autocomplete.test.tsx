import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import Autocomplete from "./Autocomplete";
import userEvent from "@testing-library/user-event";

describe("Autocomplete", () => {
  const countries = ["India", "Nepal"];
  const changeMock = jest.fn().mockImplementation((e) => {});
  const blurMock = jest.fn().mockImplementation((e) => {});
  const focusMock = jest.fn().mockImplementation((e) => {});
  const itemClickedMock = jest.fn().mockImplementation((e) => {});
  test("Renders autocomplete component", async () => {
    const screen = render(
      <Autocomplete
        placeholder={"Test placeholder"}
        onChange={changeMock}
        onBlur={blurMock}
        onFocus={focusMock}
        onListItemClick={itemClickedMock}
        items={countries}
        showClearAll
      />
    );
    const inputElement = screen.getByPlaceholderText(
      "Test placeholder"
    ) as HTMLInputElement;
    userEvent.type(inputElement, "Ind");
    const clearIcn = screen.container.getElementsByClassName("n-suf-icon-back");
    expect(clearIcn[0]).toBeInTheDocument();
    expect(clearIcn.length).toBe(1);

    fireEvent.keyDown(inputElement, {
      key: "ArrowDown",
    });
    fireEvent.keyDown(inputElement, {
      key: "ArrowDown",
    });

    fireEvent.keyDown(inputElement, {
      key: "ArrowUp",
    });

    await waitFor(() => expect(changeMock).toBeCalled());

    userEvent.click(screen.getByTestId("test-India"));

    expect(itemClickedMock).toBeCalled();
    jest.useFakeTimers();
    fireEvent.click(clearIcn[0]);
    expect(inputElement.value).toBe("");
    userEvent.type(inputElement, "Ind");
    fireEvent.keyDown(inputElement, {
      key: "Enter",
    });
    fireEvent.blur(inputElement);
    await waitFor(() => expect(blurMock).toBeCalled());

    fireEvent.focus(inputElement);
    expect(focusMock).toBeCalled();
  });
});
