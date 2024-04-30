import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignUp from "../../sign-up/page";

describe("Home Page", () => {
  it("should render the homepage", () => {
    render(<SignUp />);
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument();
  });
});
