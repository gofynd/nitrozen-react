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
        onTabChange={(tabItem) => {}}
      />
    );
    const tab = document.querySelector(".nitrozen-tab-active")?.textContent;
    expect(tab).toBe("T2");
  });

  test("renders the Tab component with string tabItems", () => {
    render(
      <Tab
        tabItem={["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]}
        activeIndex={4}
        onTabChange={(tabItem) => {}}
      />
    );
    const tab = document.querySelector(".nitrozen-tab-active")?.textContent;
    expect(tab).toBe("Tab 5");
  });

  test("test Tab change", () => {
    const screen = render(
      <Tab
        tabItem={["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]}
        activeIndex={4}
        onTabChange={(tabItem) => {}}
      />
    );
    const tab2 = screen.getByText("Tab 2");
    userEvent.click(tab2);
    expect(screen.getByText("Tab 2").parentElement).toHaveClass(
      "nitrozen-tab-active"
    );
  });

  test("test Error", () => {
    expect(() =>
      render(
        <Tab
          tabItem={["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5"]}
          activeIndex={7}
          onTabChange={(tabItem) => {}}
        />
      )
    ).toThrow("Active Tab index cannot be greater than TabItem array length !");
  });
});
