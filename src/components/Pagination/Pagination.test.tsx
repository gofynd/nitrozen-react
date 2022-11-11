import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Pagination, { ModeEnum } from "./Pagination";

describe("Pagination", () => {
  test("renders the Pagination component", () => {
    const { getByTestId } = render(
      <Pagination
        id="1"
        name="Pages"
        value={{
          limit: 10,
          total: 100,
          current: 2,
          prevPage: "",
          nextPage: "",
          currentPage: "",
          currentTotal: 100,
        }}
        pageSizeOptions={[10, 20]}
        onChange={(event: any) => {}}
        onPreviousClick={(event: any) => {}}
        onNextClick={(event: any) => {}}
      />
    );
    const prevBtn = getByTestId("btnPrevious");
    fireEvent.click(prevBtn);

    const nextBtn = getByTestId("btnNext");
    fireEvent.click(nextBtn);

    const paginationCount = getByTestId("pagination-count");
    expect(paginationCount.textContent?.includes("100")).toBeTruthy();
  });
  test("renders the Pagination component without certain keys in value prop", () => {
    enum ModeEnum {
      MODE_REGULAR = "regular",
      MODE_CURSOR = "cursor",
    }
    const { getByTestId } = render(
      <Pagination
        id="1"
        name="Pages"
        value={{
          prevPage: "",
          currentPage: "",
          currentTotal: 200,
        }}
        pageSizeOptions={[10, 20]}
        onChange={(event: any) => {}}
        onPreviousClick={(event: any) => {}}
        onNextClick={(event: any) => {}}
      />
    );
    const prevBtn = getByTestId("btnPrevious");
    fireEvent.click(prevBtn);

    const nextBtn = getByTestId("btnNext");
    fireEvent.click(nextBtn);

    const paginationCount = getByTestId("pagination-count");
    expect(paginationCount.textContent?.includes("200")).toBeTruthy();
  });
});
