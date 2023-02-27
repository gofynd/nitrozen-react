import React from "react";
import { render } from "@testing-library/react";
import {
  SvgIcExclamation,
  SvgIcExchange,
  SvgIc4GBarFour,
} from "../../assets/svg-components";
import Stepper, { ItemsType, StepState } from "./Stepper";
import userEvent from "@testing-library/user-event";

describe("Stepper", () => {
  const onHandlerMock = jest.fn().mockImplementation((e) => {});
  const HORIZONTAL_STEPPER_ITEMS: ItemsType = [
    {
      name: "Step 1",
      state: StepState.Current,
    },
    {
      name: "Step 2",
      state: StepState.Current,
    },
  ];

  const VERTICAL_STEPPER_ITEMS: ItemsType = [
    {
      name: "Step 1",
      isCompleted: true,
      buttonText: "View Status",
      state: StepState.Current,
    },
    {
      name: "Step 2",
      buttonText: "View Status",
      icon: SvgIcExclamation,
      state: StepState.Upcoming,
    },
    {
      name: "Step 3",
      buttonText: "View Status",
      icon: SvgIc4GBarFour,
      state: StepState.Upcoming,
    },
    {
      name: "Step 4",
      buttonText: "View Status",
      icon: SvgIcExchange,
      state: StepState.Upcoming,
    },
    {
      name: "Step 5",
      buttonText: "Complete",
      isInactive: true,
      state: StepState.Upcoming,
    },
  ];
  test("Renders horizontal stepper", () => {
    const screen = render(
      <Stepper
        isHorizontal={true}
        items={HORIZONTAL_STEPPER_ITEMS}
        onClick={onHandlerMock}
      />
    );
    userEvent.click(screen.getByTestId("stepper-1"));
    expect(onHandlerMock).toBeCalled();
  });
  test("Renders vertical stepper", () => {
    const screen = render(
      <Stepper items={VERTICAL_STEPPER_ITEMS} onClick={onHandlerMock} />
    );
    userEvent.click(screen.getByTestId("stepper-1"));
    expect(onHandlerMock).toBeCalled();
  });
  test("Renders progress circle & heading", () => {
    const { container } = render(
      <Stepper
        items={VERTICAL_STEPPER_ITEMS}
        heading={"Test heading"}
        // showProgress={true}
      />
    );
    // Commenting showProgress as it is not present in the new designs
    // expect(container.getElementsByClassName("progress-circle").length).toBe(1);
    expect(container.getElementsByClassName("stepper-heading").length).toBe(1);
  });
  test("Avoids empty heading string", () => {
    const { container } = render(
      <Stepper items={VERTICAL_STEPPER_ITEMS} heading={""} />
    );
    expect(container.getElementsByClassName("stepper-heading").length).toBe(0);
  });
});
