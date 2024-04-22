import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../page";

describe("Home Page", () => {
  it("should render the homepage", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
