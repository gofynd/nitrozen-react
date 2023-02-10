/* Package imports */
import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

/* Component imports */
import Alert from "./Alert";

describe("Alerts", () => {
  test("It should render an alert component with a given state", () => {
    const screen = render(
      <Alert state="info" className="test-alert">
        This is an alert.
      </Alert>
    );
    const { container } = screen;
    expect(container.getElementsByClassName("test-alert").length).toBe(1);
  });

  test("It should render the correct alert component on the basis of state", () => {
    const screen = render(
      <Alert state="error" className="test-error-alert">
        This is an error alert.
      </Alert>
    );
    const { container } = screen;
    expect(
      container
        .getElementsByClassName("test-error-alert")[0]
        .classList.contains("n-alert-error")
    ).toBe(true);
  });

  test("It should have 100% width if the user has fullWidth props", () => {
    const screen = render(
      <Alert state="info" className="test-alert" fullWidth={true}>
        This is a full-width alert.
      </Alert>
    );
    const { container } = screen;
    expect(container.getElementsByClassName("test-alert")[0]).toHaveStyle(
      `width: 100%`
    );
  });

  test("It should set the component to the specific width set by the alertWidth prop", () => {
    const screen = render(
      <Alert state="info" className="test-alert" alertWidth="35%">
        This is a custom width alert.
      </Alert>
    );
    const { container } = screen;
    expect(container.getElementsByClassName("test-alert")[0]).toHaveStyle(
      `width: 35%`
    );
  });

  test("It should make the component into an extended alert if user has provided the flag", () => {
    const screen = render(
      <Alert state="info" className="test-alert" extendedAlert={true}>
        This is an extended alert.
      </Alert>
    );
    const { container } = screen;
    expect(container.getElementsByClassName("n-alert-extended").length).toBe(1);
  });

  test("It should show a button is the user has enabled it", () => {
    const screen = render(
      <Alert state="info" className="test-alert" displayButton={true}>
        This is an alert with a button.
      </Alert>
    );
    const { container } = screen;
    expect(
      container.getElementsByClassName("n-alert-button-container").length
    ).toBe(1);
  });

  test("It should not show a button is the user has passed loader props as true", () => {
    const screen = render(
      <Alert
        state="info"
        className="test-alert"
        loader={true}
        displayButton={true}
      >
        This is a loading alert.
      </Alert>
    );
    const { container } = screen;
    expect(
      container.getElementsByClassName("n-alert-button-container").length
    ).toBe(0);
  });

  test("It should show a loading icon if the user has passed loader props as true", () => {
    const screen = render(
      <Alert state="info" className="test-alert" loader={true}>
        This is a loading alert.
      </Alert>
    );
    const { container } = screen;
    expect(container.getElementsByClassName("n-alert-loader").length).toBe(1);
  });
});
