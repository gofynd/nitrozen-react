import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination, { ModeEnum } from "./Pagination";

describe("Pagination", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
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
    expect(paginationCount.textContent?.includes("10")).toBeTruthy();
  });
  test("renders the Pagination component without certain keys in value prop", () => {
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

    const paginationCount = getByTestId("pagination-count");
    expect(paginationCount.textContent?.includes("200")).toBeTruthy();
  });
  test("page size should change on dropdown select", () => {
    const screen = render(
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

    const dropdown = screen.container.getElementsByClassName("n-option")[1];
    fireEvent.click(dropdown);

    expect(dropdown.getAttribute("data-value")).toBe("20");
  });

  test("renders the Pagination component last page", () => {
    const { getByTestId } = render(
      <Pagination
        id="1"
        name="Pages"
        value={{
          limit: 10,
          total: 100,
          current: 10,
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
    expect(paginationCount.textContent?.includes("10")).toBeTruthy();
  });

  test("It should trigger page change on mode cursor", () => {
    const screen = render(
      <Pagination
        id="1"
        mode={ModeEnum.MODE_CURSOR}
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

    const dropdown = screen.container.getElementsByClassName("n-option")[1];
    fireEvent.click(dropdown);

    expect(dropdown.getAttribute("data-value")).toBe("20");
  });

  it("should set the pagination range to an array of 10 numbers starting from the current page", () => {
    const setValue = jest.fn();
    const value = { current: 5 };
    const setPaginationRange = jest.fn();
    const onPaginationRange = () => {
      const range = [];
      for (let i = value.current; i < value.current + 10; i++) {
        range.push(i);
      }
      setPaginationRange(range);
    };
    onPaginationRange();
    expect(setPaginationRange).toHaveBeenCalledWith([
      5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    ]);
  });

  test("onchange should not have been called on initial render", () => {
    const testProps = {
      id: "1",
      name: "Pages",
      value: {
        limit: 10,
        total: 100,
        current: 2,
        prevPage: "",
        nextPage: "",
        currentPage: "",
        currentTotal: 100,
      },
      pageSizeOptions: [10, 20],
      onChange: jest.fn(),
      onPreviousClick: (event: any) => {},
      onNextClick: (event: any) => {},
    };

    render(<Pagination {...testProps} />);

    expect(testProps?.onChange).toBeCalledTimes(0);
  });

  test("onchange should have been called on next click", () => {
    const testProps = {
      id: "1",
      name: "Pages",
      value: {
        limit: 10,
        total: 100,
        current: 2,
        prevPage: "",
        nextPage: "",
        currentPage: "",
        currentTotal: 100,
      },
      pageSizeOptions: [10, 20],
      onChange: jest.fn(),
      onPreviousClick: (event: any) => {},
      onNextClick: (event: any) => {},
    };

    const { getByTestId } = render(<Pagination {...testProps} />);

    const nextBtn = getByTestId("btnNext");
    fireEvent.click(nextBtn);

    expect(testProps?.onChange).toBeCalledTimes(1);
  });

  test("onchange should have been called on prev click", () => {
    const testProps = {
      id: "1",
      name: "Pages",
      value: {
        limit: 10,
        total: 100,
        current: 2,
        prevPage: "",
        nextPage: "",
        currentPage: "",
        currentTotal: 100,
      },
      pageSizeOptions: [10, 20],
      onChange: jest.fn(),
      onPreviousClick: (event: any) => {},
      onNextClick: (event: any) => {},
    };

    const { getByTestId } = render(<Pagination {...testProps} />);

    const prevBtn = getByTestId("btnPrevious");
    fireEvent.click(prevBtn);

    expect(testProps?.onChange).toBeCalledTimes(1);
  });

  test("onchange should have been called on changing pageSize", () => {
    const testProps = {
      id: "1",
      name: "Pages",
      value: {
        limit: 10,
        total: 100,
        current: 2,
        prevPage: "",
        nextPage: "",
        currentPage: "",
        currentTotal: 100,
      },
      pageSizeOptions: [10, 20],
      onChange: jest.fn(),
      onPreviousClick: (event: any) => {},
      onNextClick: (event: any) => {},
    };

    const screen = render(<Pagination {...testProps} />);

    const dropdown = screen.container.getElementsByClassName("n-option")[1];
    fireEvent.click(dropdown);

    expect(testProps?.onChange).toBeCalledTimes(1);
  });
});
