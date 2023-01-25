import React from "react";
import { render } from "@testing-library/react";
import Tab from "./Tab";
import userEvent from "@testing-library/user-event";

describe("Tab", () => {
  test("renders the Tab component with object tabItems", () => {
    render(
      <Tab
        tabItem={[
          { name: "T1", value: 1 },
          { name: "T2", value: 2 },
          { name: "T3", value: 3 },
          { name: "T4", value: 4 },
        ]}
        label="name"
        activeIndex={1}
        onTabChange={() => {}}
      />
    );
    const tab = document.querySelector(".n-tab-active")?.textContent;
    expect(tab).toBe("T2");
  });

  test("renders the Tab component with string tabItems", () => {
    render(
      <Tab
        tabItem={["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]}
        activeIndex={4}
        onTabChange={() => {}}
      />
    );
    const tab = document.querySelector(".n-tab-active")?.textContent;
    expect(tab).toBe("Tab 5");
  });

  test("test Tab change", () => {
    const screen = render(
      <Tab
        tabItem={["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]}
        activeIndex={4}
        onTabChange={() => {}}
      />
    );
    const tab2 = screen.getByText("Tab 2");
    userEvent.click(tab2);
    expect(screen.getByText("Tab 2").parentElement?.parentElement).toHaveClass(
      "n-tab-active"
    );
  });

  test("navigation buttons should be visible and clickable", () => {
    render(
      <Tab
        tabItem={[
          "Tab 1",
          "Tab 2",
          "Tab 3",
          "Tab 4",
          "Tab 5",
          "Tab 6",
          "Tab 7",
          "Tab 8",
          "Tab 9",
          "Tab 10",
          "Tab 11",
          "Tab 12",
          "Tab 13",
          "Tab 14",
          "Tab 15",
          "Tab 16",
          "Tab 17",
        ]}
        tabs={16}
        overflow="arrow"
        activeIndex={4}
        onTabChange={() => {}}
      />
    );

    const btn = document.querySelectorAll(
      ".n-nav-btn"
    ) as NodeListOf<HTMLButtonElement>;
    expect(btn).toHaveLength(2);
    userEvent.click(btn[0]);
    userEvent.click(btn[1]);
  });

  test("test Error", () => {
    expect(() =>
      render(
        <Tab
          tabItem={["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]}
          activeIndex={7}
          onTabChange={() => {}}
        />
      )
    ).toThrow("Active Tab index cannot be greater than TabItem array length !");
  });
});
