import { render, screen } from "@testing-library/react";
import Dashboard from "../../components/dashboard";

describe("Dashboard Component", () => {
  it("renders without crashing", () => {
    render(<Dashboard />);
    expect(screen.getByText(/welcome to your dashboard/i)).toBeInTheDocument();
  });
  it("displays user notifications", () => {
    render(<Dashboard />);
    expect(screen.getByText(/notifications/i)).toBeInTheDocument();
  });
});
