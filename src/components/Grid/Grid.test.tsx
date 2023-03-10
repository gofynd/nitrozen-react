import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Grid from "./Grid";

describe("Render a Grid Component", () => {
  test("Show Grid and Grid Items,it will check Grid Template Classes Based on Column Parameters Change", async () => {
    const { getByText } = render(
      <Grid
        columns={{
          mobile: 3,
          tablet: 4,
          desktop: 6,
        }}
        onGridContainerClick={() => jest.fn()}
      >
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
        <div>Child 4</div>
        <div>Child 5</div>
        <div>Child 6</div>
      </Grid>
    );

    const gridContainer = screen.getByTestId("grid-container");
    expect(gridContainer.className).toContain(`n-grid-block-6`);
    expect(gridContainer.className).toContain(`n-grid-container`);
    fireEvent.click(gridContainer);
    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
    expect(getByText("Child 3")).toBeInTheDocument();
    expect(getByText("Child 4")).toBeInTheDocument();
    expect(getByText("Child 5")).toBeInTheDocument();
    expect(getByText("Child 6")).toBeInTheDocument();
  });

  test("Show Grid and Grid Items on Custom Width For Some Columns", async () => {
    const { getByText } = render(
      <Grid
        columns={{
          mobile: 2,
          tablet: 3,
          desktop: 4,
        }}
        customWidth={[
          { customWidth: "150px", columnNumber: 2 },
          { customWidth: 40, columnNumber: 4 },
        ]}
      >
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
        <div>Child 4</div>
        <div>Child 5</div>
        <div>Child 6</div>
      </Grid>
    );

    const gridContainer = screen.getByTestId("grid-container");
    expect(gridContainer.className).not.toContain(`n-grid-block-4`);
    expect(gridContainer.className).toContain(`n-grid-container`);
    expect(gridContainer).toHaveStyle({
      "grid-template-columns": "1fr 150px 1fr 40%",
    });
    // It will not contain Normal class Because we have Custom Width So the values are dynamically Updated
    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
    expect(getByText("Child 3")).toBeInTheDocument();
    expect(getByText("Child 4")).toBeInTheDocument();
    expect(getByText("Child 5")).toBeInTheDocument();
    expect(getByText("Child 6")).toBeInTheDocument();
  });
});
