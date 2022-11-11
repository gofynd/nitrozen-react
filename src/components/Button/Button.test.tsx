import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component with props - Secondary, Large, focused, disabled", () => {
    const { getByText } = render(
      <Button
        theme="secondary"
        size="large"
        focused={true}
        disabled={true}
        onClick={() => {}}
        id="btn"
        name="btn"
      >
        Submit
      </Button>
    );
    expect(getByText("Submit")).toBeInTheDocument();
  });
  test("renders the Button component with props - Primary, medium, href, className, stroke", () => {
    const { container } = render(
      <Button
        theme="primary"
        size="medium"
        href="http://example.com"
        className="test-class"
        stroke={true}
        onClick={() => {}}
        id="btn"
        name="btn"
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("n-button-primary").length).toBe(1);
  });
  test("renders the Button component with props - Secondary, stroke, small, className", () => {
    const { container } = render(
      <Button
        theme="secondary"
        size="small"
        href="http://example.com"
        className="test-class"
        stroke={true}
        onClick={() => {}}
        id="btn"
        name="btn"
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("n-button-secondary").length).toBe(
      1
    );
  });
  test("renders the Button component with props - Primary, href, className ", () => {
    const { container } = render(
      <Button
        theme="primary"
        size="small"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("n-flat-button").length).toBe(1);
  });
});
