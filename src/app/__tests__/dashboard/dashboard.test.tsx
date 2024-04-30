import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dashboard from "../../dashboard/page";

describe("Home Page", () => {
  it("should render the homepage", () => {
    render(<Dashboard />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });
});
