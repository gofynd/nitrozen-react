import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DatePicker from "./DatePicker";
import { getFormattedDate } from "../../utils/dateHandler";

const backspaceKey = {
  key: "Backspace",
  code: 8,
  inputType: "deleteContentBackward",
};

let onDateClick = jest.fn();
let onClose = jest.fn();
let getRange = jest.fn();
let onConfirmRange = jest.fn();

describe("DatePicker", () => {
  test("renders the DatePicker component to check markup with isRange prop as true", () => {
    const screen = render(
      <DatePicker
        isRange={true}
        onClose={onClose}
        rangeConfig={{
          start: "",
          end: "",
          min: "",
          max: "",
        }}
        getRange={getRange}
        onConfirmRange={onConfirmRange}
      />
    );
    const DividerMarkup = screen.getByTestId(
      "date-picker-divider"
    ) as HTMLElement;
    expect(DividerMarkup.className).toBe("n-picker-divider");
    const StartDate = screen.getByTestId("picker-startdate") as HTMLElement;
    expect(StartDate.className).toBe("n-picker-footer-date-item");
    expect(StartDate.textContent).toBe(`Start Date--`);
    const EndDate = screen.getByTestId("picker-enddate") as HTMLElement;
    expect(EndDate.className).toBe("n-picker-footer-date-item");
    expect(EndDate.textContent).toBe("End Date--");
    //   const SingleFooter = screen.getByTestId("n-picker-single-footer")
    //   expect(SingleFooter).toBe("")
    const CloseContainer = screen.getByTestId("n-closeicon-wrapper");
    expect(CloseContainer.className).toBe("n-closeicon-wrapper");
    CloseContainer.click();
    expect(onClose).toHaveBeenCalledTimes(1);
    const MainWrapper = screen.getByTestId("picker-wrapper");
    expect(MainWrapper.className).toBe("n-picker-wrapper ");
  });
  test("renders the DatePicker component to check markup with isRange prop as true with default values", () => {
    var nextDay = new Date(new Date());
    nextDay.setDate(new Date().getDate() + 1);
    const screen = render(
      <DatePicker
        isRange={true}
        onClose={onClose}
        rangeConfig={{
          start: new Date(),
          end: nextDay,
          min: "",
          max: "",
        }}
        getRange={getRange}
        onConfirmRange={onConfirmRange}
      />
    );
    const DividerMarkup = screen.getByTestId(
      "date-picker-divider"
    ) as HTMLElement;
    expect(DividerMarkup.className).toBe("n-picker-divider");
    const StartDate = screen.getByTestId("picker-startdate") as HTMLElement;
    expect(StartDate.className).toBe("n-picker-footer-date-item");
    expect(StartDate.textContent).toBe(
      `Start Date${getFormattedDate(new Date())}`
    );
    const EndDate = screen.getByTestId("picker-enddate") as HTMLElement;
    expect(EndDate.className).toBe("n-picker-footer-date-item");
    expect(EndDate.textContent).toBe(`End Date${getFormattedDate(nextDay)}`);
  });
  test("renders the DatePicker component to check markup with isRange prop as false", () => {
    const screen = render(
      <DatePicker
        isRange={false}
        dateVal={new Date()}
        onDateClick={onDateClick}
        onClose={onClose}
      />
    );
    const SingleFooter = screen.getByTestId(
      "n-picker-single-footer"
    ) as HTMLElement;
    expect(SingleFooter.className).toBe("n-picker-single-footer");
    const DateVal = screen.getByTestId("single-footer-value") as HTMLElement;
    expect(DateVal.className).toBe("n-picker-single-footer-date-item");
    expect(DateVal.textContent).toBe("--");
  });
  test("renders the DatePicker component and checks CalendarComponent render", () => {
    const screen = render(
      <DatePicker
        isRange={false}
        dateVal={new Date(2023, 1, 1)}
        onDateClick={onDateClick}
        onClose={onClose}
      />
    );
    const Month0 = screen.getByTestId("day-0-c1") as HTMLElement;
    expect(Month0.textContent).toBe("S"); // sunday
    const PreviousArrow = screen.getByTestId("previous-click-c1");
    PreviousArrow.click();
    const NextArrow = screen.getByTestId("next-click-c1");
    NextArrow.click();
    const SelectedMonth = screen.getByTestId(
      "selected-month-c1"
    ) as HTMLElement;
    expect(SelectedMonth.textContent).toBe("Feb"); // sunday
    const SelectedYear = screen.getByTestId("selected-year-c1") as HTMLElement;
    expect(SelectedYear.textContent).toBe("2023"); // sunday
  });
  test("renders the DatePicker component and checks CalendarComponent render and check for month and year toggle", () => {
    const screen = render(
      <DatePicker
        isRange={false}
        dateVal={new Date(2023, 1, 3)}
        onDateClick={onDateClick}
        onClose={onClose}
        minDate={new Date(2023, 1, 2)}
        maxDate={new Date(2025, 1, 1)}
      />
    );
    const SelectedMonth = screen.getByTestId(
      "selected-month-c1"
    ) as HTMLElement;
    expect(SelectedMonth.textContent).toBe("Feb"); // sunday
    const SelectedYear = screen.getByTestId("selected-year-c1") as HTMLElement;
    expect(SelectedYear.textContent).toBe("2023"); // sunday
    fireEvent.click(SelectedYear);
    // SelectedYear.click();
    expect(screen.getByTestId(`year-item-0-c1`).textContent).toBe("1990");
    fireEvent.click(screen.getByTestId(`year-item-34-c1`));
    expect(SelectedYear.textContent).toBe("2024");
    fireEvent.click(SelectedMonth);
    expect(screen.getByTestId(`month-item-0-c1`).textContent).toBe("January");
    fireEvent.click(screen.getByTestId(`month-item-0-c1`));
    expect(SelectedMonth.textContent).toBe("Jan");
    fireEvent.click(screen.getByTestId(`calendar-griditem-10-c1`));
    expect(onDateClick).toHaveBeenCalledWith("01/10/2024");
  });
  test("renders the DatePicker component to check markup with isRange prop as true with default values and test for fireEvents", () => {
    var nextDay = new Date(new Date());
    nextDay.setDate(new Date().getDate() + 1);
    const screen = render(
      <DatePicker
        isRange={true}
        onClose={onClose}
        rangeConfig={{
          start: new Date(2023, 1, 5),
          end: new Date(2023, 2, 5),
          min: new Date(2023, 1, 3),
          max: new Date(2025, 1, 1),
        }}
        getRange={getRange}
        onConfirmRange={onConfirmRange}
      />
    );
    const SelectedMonthc1 = screen.getByTestId(
      "selected-month-c1"
    ) as HTMLElement;
    expect(SelectedMonthc1.textContent).toBe("Feb"); // sunday
    const SelectedMonthc2 = screen.getByTestId(
      "selected-month-c2"
    ) as HTMLElement;
    expect(SelectedMonthc2.textContent).toBe("Mar"); // sunday
    fireEvent.click(SelectedMonthc2);
    expect(screen.getByTestId(`month-item-2-c2`).textContent).toBe("March");
    fireEvent.click(screen.getByTestId(`month-item-2-c2`));
    expect(SelectedMonthc2.textContent).toBe("Mar");
    fireEvent.click(SelectedMonthc2);
    expect(screen.getByTestId(`month-item-1-c2`).textContent).toBe("February");
    fireEvent.click(screen.getByTestId(`month-item-1-c2`));
    expect(SelectedMonthc2.textContent).toBe("Mar");
    fireEvent.click(screen.getByTestId(`calendar-griditem-10-c1`));
    fireEvent.click(screen.getByTestId(`calendar-griditem-15-c2`));
    expect(getRange).toHaveBeenCalledTimes(2);
  });
});
