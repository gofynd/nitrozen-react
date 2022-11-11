import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";

describe("Input", () => {
  test("renders the Input component", () => {
    render(
      <Input
        type="text"
        value="Shaktiman"
        placeholder="Superhero name"
        showPrefix={true}
        showSuffix={true}
        prefix="Pre"
        suffix="Post"
      />
    );
  });
  test("renders the Textarea component", () => {
    render(
      <Input type="textarea" value="Shaktiman" placeholder="Superhero name" />
    );
  });
});
