import React from "react";
import { render } from "@testing-library/react";

import Alert from "./Alert";
import { SvgAccountCircle } from "../../assets/svg-components";

describe("Alert 1", () => {
  test("renders the Alert component", () => {
    render(<Alert state="success" labelText="Success" ctaButton />);
  });
});

describe("Alert 2", () => {
  test("renders the Alert 2 component", () => {
    render(<Alert state="info" labelText="info" />);
  });
});

describe("Alert 3", () => {
  test("renders the Alert component", () => {
    render(<Alert state="warn" labelText="warn" />);
  });
});

describe("Alert 4", () => {
  test("renders the Alert component", () => {
    render(<Alert state="error" labelText="error" />);
  });
});

describe("Alert 5", () => {
  test("renders the Alert component", () => {
    render(<Alert style={{ backgroundColor: "orange" }} />);
  });
});

describe("Alert 6", () => {
  test("renders the Alert component", () => {
    render(<Alert Icon={<SvgAccountCircle />} />);
  });
});

describe("Alert 7", () => {
  test("renders the Alert component", () => {
    render(<Alert extendedAlert={true} />);
  });
});
