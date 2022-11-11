import React from "react";
import { render } from "@testing-library/react";

import Badge from "./Badge";

describe("Badge 1", () => {
  test("renders the Badge component", () => {
    render(<Badge state="success" fill={true} labelText="Success" />);
  });
});

describe("Badge 2", () => {
  test("renders the Badge 2 component", () => {
    render(<Badge state="info" fill={true} labelText="info" />);
  });
});

describe("Badge 3", () => {
  test("renders the Badge component", () => {
    render(<Badge state="default" fill={true} labelText="default" />);
  });
});

describe("Badge 4", () => {
  test("renders the Badge component", () => {
    render(<Badge state="warn" fill={true} labelText="warn" />);
  });
});

describe("Badge 5", () => {
  test("renders the Badge component", () => {
    render(<Badge state="error" fill={false} labelText="error" />);
  });
});

describe("Badge 6", () => {
  test("renders the Badge component", () => {
    render(<Badge state="disable" fill={false} labelText="disabled" />);
  });
});
describe("Badge 7", () => {
  test("renders the Badge component", () => {
    render(
      <Badge style={{ backgroundColor: "orange" }} onClickHandler={() => {}} />
    );
  });
});

describe("Badge 8", () => {
  test("renders the Badge component", () => {
    render(<Badge className="nitrozen-badge" />);
  });
});
