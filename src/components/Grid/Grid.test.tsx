import React from "react";
import { render } from "@testing-library/react";
import * as SvgArray from "../../assets/svg-components";
import Grid from "./Grid";

describe("Grid", () => {
  test("renders the Grid component with props - template, gap, align, justify", () => {
    const { getByText } = render(
      <Grid
        template="1fr 1fr 1fr 1fr"
        gap="15px 20px"
        align="center"
        justify="center"
      >
        some text
      </Grid>
    );
    expect(getByText("some text")).toBeInTheDocument();
  });
});
