import React from "react";
import { render, screen } from "@testing-library/react";

import Card from "./Card";
import Button from "../Button";

describe("Card", () => {
  test("renders the Card component with card Title", () => {
    render(
      <Card
        description="Fynd is your one stop destination for buying, selling & payments,
  Logistics, Order fulfillment, News, Games, Quizzes & a lot
  more."
        image={<img src="static/media/src/components/Card/card-sample.jpeg" />}
        orientation="horizontal"
        primaryCTA={<Button size="small">Buy Now</Button>}
        secondaryCTA={
          <Button size="small" theme="tertiary">
            View More
          </Button>
        }
        title="Fynd"
      />
    );
    expect(screen.getByText("Fynd")).toBeInTheDocument();
  });
});
