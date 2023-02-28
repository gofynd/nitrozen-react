import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";
import { SvgIcInfo } from "../../assets/svg-components";
afterEach(cleanup);

describe("Render a Tooltip component", () => {
  test("Show title in tooltip", async () => {
    render(
      <Tooltip
        tooltipContent="heyy I am a tooltip"
        data-testid="icon-component"
        icon={<SvgIcInfo />}
        position="top"
      />
    );
    // 1. get all the elements
    const iconEl = screen.getByTestId("icon-component");
    const tooltipEL = screen.getByTestId("tooltip-component");
    // 2. check the element has the same text provided as the tooltipContent
    expect(tooltipEL.textContent).toBe("heyy I am a tooltip");

    // 3. check the tooltip text is hidden in the beginning

    // 4. Trigger the tooltip hovering
    fireEvent.mouseOver(iconEl);

    // 5. Check if the tooltip is visible when hovering over the tooltip iconEl
  });

  test("Show link in tooltip", async () => {
    render(
      <Tooltip
        tooltipContent="heyy I am a tooltip"
        icon={<SvgIcInfo />}
        position="top"
        link="https:www/example.com"
        linkText="example.com"
      />
    );

    // 1. get the elements
    const linkEl = screen.getByRole("link");
    const tooltipEL = screen.getByTestId("tooltip-component");

    // 2. test the tooltip content
    expect(tooltipEL.textContent).toContain("heyy I am a tooltip");

    // 3. test the link element
    expect(linkEl.getAttribute("href")).toBe("https:www/example.com");
    expect(linkEl.textContent).toBe("example.com");
  });
});
