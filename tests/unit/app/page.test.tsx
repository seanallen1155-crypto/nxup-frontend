import React from "react";  // ✅ add this
import { render, screen } from "@testing-library/react";
import Home from "../../../src/app/page";

describe("Home Page", () => {
  it("renders placeholder text", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /hello world \/ placeholder/i })
    ).toBeInTheDocument();
  });
});
