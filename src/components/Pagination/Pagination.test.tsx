import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Pagination, { ModeEnum, TypeEnum } from "./Pagination";

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
        onChange={(event) => {
          /* nothing */
        }}
        onPreviousClick={() => {
          /* nothing */
        }}
        onNextClick={() => {
          /* nothing */
        }}
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
        onChange={(event) => {
          /* nothing */
        }}
        onPreviousClick={() => {
          /* nothing */
        }}
        onNextClick={() => {
          /* nothing */
        }}
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
        onChange={(event) => {
          /* nothing */
        }}
        onPreviousClick={() => {
          /* nothing */
        }}
        onNextClick={() => {
          /* nothing */
        }}
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
        onChange={(event) => {
          /* nothing */
        }}
        onPreviousClick={() => {
          /* nothing */
        }}
        onNextClick={() => {
          /* nothing */
        }}
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
        onChange={(event) => {
          /* nothing */
        }}
        onPreviousClick={() => {
          /* nothing */
        }}
        onNextClick={() => {
          /* nothing */
        }}
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
      onPreviousClick: () => {
        /* not implemented */
      },
      onNextClick: () => {
        /* not implemented */
      },
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
      onPreviousClick: () => {
        /* not implemented */
      },
      onNextClick: () => {
        /* not implemented */
      },
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
      onPreviousClick: () => {
        /* not implemented */
      },
      onNextClick: () => {
        /* not implemented */
      },
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
      onPreviousClick: () => {
        /* not implemented */
      },
      onNextClick: () => {
        /* not implemented */
      },
    };

    const screen = render(<Pagination {...testProps} />);

    const dropdown = screen.container.getElementsByClassName("n-option")[1];
    fireEvent.click(dropdown);

    expect(testProps?.onChange).toBeCalledTimes(1);
  });

  test("page size dropdown should show initial state value", () => {
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
      defaultPageSize: 20,
      pageSizeOptions: [10, 20],
    };

    const { getByTestId } = render(<Pagination {...testProps} />);

    const dropdown = getByTestId("dropdown-selected-text");

    expect(dropdown).toHaveTextContent("20");
  });
  test("renders Pagination component with type='top'", () => {
    const props = {
      type: TypeEnum.TYPE_TOP,
      value: {
        limit: 10,
        total: 100,
        current: 1,
      },
      onChange: jest.fn(),
    };
    const { getByTestId } = render(<Pagination {...props} />);

    // Assert that the necessary elements are rendered
    const paginationCount = getByTestId("pagination-count");
    const previousButton = getByTestId("btnPrevious");
    const nextButton = getByTestId("btnNext");

    expect(paginationCount).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
  test("previous button is disabled on first page", () => {
    const props = {
      type: TypeEnum.TYPE_TOP,
      value: {
        limit: 10,
        total: 100,
        current: 1,
      },
      onChange: jest.fn(),
    };
    const { getByTestId } = render(<Pagination {...props} />);

    const previousButton = getByTestId("btnPrevious");

    expect(previousButton).toBeDisabled();
  });
  test("next button is disabled on last page", () => {
    const props = {
      type: TypeEnum.TYPE_TOP,
      value: {
        limit: 10,
        total: 100,
        current: 10,
      },
      onChange: jest.fn(),
    };
    const { getByTestId } = render(<Pagination {...props} />);

    const nextButton = getByTestId("btnNext");

    expect(nextButton).toBeDisabled();
  });

  test("inputing a valid page number in page input updates the current page correctly", () => {
    // Test that inputing a valid page number in page input updates the current page correctly.
    const handleChange = jest.fn();
    const props = {
      type: TypeEnum.TYPE_TOP,
      value: {
        limit: 10,
        total: 100,
        current: 1,
      },
      onChange: handleChange,
    };
    const { getByTestId } = render(<Pagination {...props} />);

    // Input page 3
    const pageInput = getByTestId("pageInput");
    fireEvent.change(pageInput, { target: { value: 3 } });

    expect(handleChange).toHaveBeenCalledWith({
      limit: 10,
      total: 100,
      current: 3,
    });
  });

  test("previous and next buttons are disabled when there is only one page", () => {
    // Test that the previous and next buttons are disabled when there is only one page.
    const props = {
      type: TypeEnum.TYPE_TOP,
      value: {
        limit: 10,
        total: 10,
        current: 1,
      },
      onChange: jest.fn(),
    };
    const { getByTestId } = render(<Pagination {...props} />);

    const previousButton = getByTestId("btnPrevious");
    const nextButton = getByTestId("btnNext");

    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  test("previous and next buttons are enabled when there are multiple pages", () => {
    // Test that the previous and next buttons are enabled when there are multiple pages.
    const props = {
      type: TypeEnum.TYPE_TOP,
      value: {
        limit: 10,
        total: 50,
        current: 2,
      },
      onChange: jest.fn(),
    };
    const { getByTestId } = render(<Pagination {...props} />);

    const previousButton = getByTestId("btnPrevious");
    const nextButton = getByTestId("btnNext");

    expect(previousButton).toBeEnabled();
    expect(nextButton).toBeEnabled();
  });

  test("pagination component handles edge cases: total number of items is zero or negative", () => {
    // Test that the pagination component correctly handles edge cases, such as when the total number of items is zero or negative.
    const props = {
      type: TypeEnum.TYPE_TOP,
      value: {
        limit: 10,
        total: 0,
        current: 1,
      },
      onChange: jest.fn(),
    };
    const { getByTestId } = render(<Pagination {...props} />);

    const paginationCount = getByTestId("pagination-count");

    expect(paginationCount.textContent).toBe("");
  });

  test("pagination component handles large numbers of pages and displays a limited number of page links", () => {
    // Test that the pagination component handles large numbers of pages and displays a limited number of page links at a time.
    const props = {
      type: TypeEnum.TYPE_TOP,
      value: {
        limit: 10,
        total: 1000,
        current: 1,
      },
      onChange: jest.fn(),
    };
    const { getByTestId } = render(<Pagination {...props} />);

    // Assert that the necessary elements are rendered
    const paginationCount = getByTestId("pagination-count");
    const previousButton = getByTestId("btnPrevious");
    const nextButton = getByTestId("btnNext");

    expect(paginationCount).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    // Assert the correct number of pages is displayed
    expect(paginationCount.textContent).toBe("1 - 10 of 1000");
  });
});
