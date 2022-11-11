import React from "react";
import { render } from "@testing-library/react";
import {
  SvgStore,
  SvgHourglassEmpty,
  SvgAddLocation,
} from "../../assets/svg-components";
import Stepper from "./Stepper";
import userEvent from "@testing-library/user-event";

describe("Stepper", () => {
  const onHandlerMock = jest.fn().mockImplementation((e) => {});
  const HORIZONTAL_STEPPER_ITEMS = [
    {
      name: "Step 1",
      description: "April 26, 2022 \n 11:17 AM",
    },
    {
      name: "Step 2",
      description: "April 27, 2022 \n 11:00 AM",
    },
  ];

  const VERTICAL_STEPPER_ITEMS = [
    {
      name: "Step 1",
      description:
        "Lorem ipsum dolor sit amet consectetur Maxime mollitia, Maxime mollitia Maxime mollitia commodi repudiandae",
      isCompleted: true,
      buttonText: "View Status",
    },
    {
      name: "Step 2",
      description:
        "Lorem ipsum dolor sit amet consectetur Maxime mollitia, commodi repudiandae",
      buttonText: "View Status",
      icon: SvgStore,
    },
    {
      name: "Step 3",
      description:
        "Lorem ipsum dolor sit amet consectetur Maxime mollitia, commodi repudiandae",
      buttonText: "View Status",
      icon: SvgAddLocation,
    },
    {
      name: "Step 4",
      description:
        "Lorem ipsum dolor sit amet consectetur Maxime mollitia, commodi repudiandae",
      buttonText: "View Status",
      icon: SvgHourglassEmpty,
    },
    {
      name: "Step 5",
      description:
        "Lorem ipsum dolor sit amet consectetur Maxime mollitia Maxime mollitia Maxime mollitia, commodi repudiandae",
      buttonText: "Complete",
      isInactive: true,
    },
  ];
  test("Renders horizontal stepper", () => {
    const screen = render(
      <Stepper
        isHorizontal={true}
        items={HORIZONTAL_STEPPER_ITEMS}
        onClick={onHandlerMock}
        maxActiveIndex={3}
      />
    );
    userEvent.click(screen.getByTestId("stepper-1"));
    expect(onHandlerMock).toBeCalled();
  });
  test("Renders vertical stepper", () => {
    const screen = render(
      <Stepper items={VERTICAL_STEPPER_ITEMS} onClick={onHandlerMock} />
    );
    userEvent.click(screen.getByTestId("stepper-cta-1"));
    expect(onHandlerMock).toBeCalled();
  });
  test("Renders progress circle & heading", () => {
    const { container } = render(
      <Stepper
        items={VERTICAL_STEPPER_ITEMS}
        heading={"Test heading"}
        showProgress={true}
      />
    );
    expect(container.getElementsByClassName("progress-circle").length).toBe(1);
    expect(container.getElementsByClassName("stepper-heading").length).toBe(1);
  });
  test("Avoids empty heading string", () => {
    const { container } = render(
      <Stepper items={VERTICAL_STEPPER_ITEMS} heading={""} />
    );
    expect(container.getElementsByClassName("stepper-heading").length).toBe(0);
  });
});
