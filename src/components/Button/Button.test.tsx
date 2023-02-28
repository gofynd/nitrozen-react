import React from "react";
import { render } from "@testing-library/react";
import * as SvgArray from "../../assets/svg-components";
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
  test("renders the Button component with props - Primary, medium, href, className", () => {
    const { container } = render(
      <Button
        theme="primary"
        size="medium"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("n-button-primary").length).toBe(1);
  });
  test("renders the Button component with props - secondary, medium, href, className", () => {
    const { container } = render(
      <Button
        theme="secondary"
        size="medium"
        href="http://example.com"
        className="test-class"
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
  test("renders the Button component with props - tertiary, medium, href, className", () => {
    const { container } = render(
      <Button
        theme="tertiary"
        size="medium"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("n-button-tertiary").length).toBe(
      1
    );
  });
  test("renders the Button component with props - Secondary, small, className", () => {
    const { container } = render(
      <Button
        theme="secondary"
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
    expect(container.getElementsByClassName("n-button").length).toBe(1);
  });
  test("renders the Button component with props - Primary, href, className, state ", () => {
    const { container } = render(
      <Button
        theme="primary"
        size="small"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        state="positive"
      >
        Submit
      </Button>
    );
    expect(
      container.getElementsByClassName("n-button-primary-positive").length
    ).toBe(1);
  });
  test("renders the Button component with props - secondary, href, className, state ", () => {
    const { container } = render(
      <Button
        theme="secondary"
        size="small"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        state="positive"
      >
        Submit
      </Button>
    );
    expect(
      container.getElementsByClassName("n-button-secondary-positive").length
    ).toBe(1);
  });
  test("renders the Button component with props - tertiary, href, className, state ", () => {
    const { container } = render(
      <Button
        theme="tertiary"
        size="small"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        state="positive"
      >
        Submit
      </Button>
    );
    expect(
      container.getElementsByClassName("n-button-tertiary-positive").length
    ).toBe(1);
  });
  test("renders the Button component with props - primary, href, className, state ", () => {
    const { container } = render(
      <Button
        theme="primary"
        size="small"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        state="destructive"
      >
        Submit
      </Button>
    );
    expect(
      container.getElementsByClassName("n-button-primary-destructive").length
    ).toBe(1);
  });
  test("renders the Button component with props - secondary, href, className, state ", () => {
    const { container } = render(
      <Button
        theme="secondary"
        size="small"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        state="destructive"
      >
        Submit
      </Button>
    );
    expect(
      container.getElementsByClassName("n-button-secondary-destructive").length
    ).toBe(1);
  });
  test("renders the Button component with props - tertiary, href, className, state ", () => {
    const { container } = render(
      <Button
        theme="tertiary"
        size="small"
        href="http://example.com"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        state="destructive"
      >
        Submit
      </Button>
    );
    expect(
      container.getElementsByClassName("n-button-tertiary-destructive").length
    ).toBe(1);
  });
  test("renders the Button component with props - tertiary, className, fullWidth ", () => {
    const { container } = render(
      <Button
        theme="tertiary"
        size="small"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        fullWidth={true}
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("n-button-full-width").length).toBe(
      1
    );
  });
  test("renders the Button component with props - tertiary, className, focused ", () => {
    const { container } = render(
      <Button
        theme="tertiary"
        size="small"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        focused={true}
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("n-button-focused ").length).toBe(
      1
    );
  });
  test("renders the Button component with props - tertiary, className, icon ", () => {
    const { container } = render(
      <Button
        theme="tertiary"
        size="small"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        icon={SvgArray.SvgIc4G}
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("n-btn-social-icon").length).toBe(
      1
    );
  });
  test("renders the Button component with props - tertiary, className, iconRight ", () => {
    const { container } = render(
      <Button
        theme="tertiary"
        size="small"
        className="test-class"
        onClick={() => {}}
        id="btn"
        name="btn"
        iconRight={SvgArray.SvgIc4G}
      >
        Submit
      </Button>
    );
    expect(container.getElementsByClassName("social-icon-right").length).toBe(
      1
    );
  });
});
