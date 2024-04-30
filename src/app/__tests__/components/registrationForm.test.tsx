import { render, screen } from "@testing-library/react";
import RegistrationForm from "../../components/registrationForm";
import { fireEvent } from "@testing-library/react";

describe("RegistrationForm Component", () => {
  it("renders without crashing", () => {
    render(<RegistrationForm />);
    expect(screen.getByText(/Register/i)).toBeInTheDocument();
  });

  it("renders the form with all fields", () => {
    render(<RegistrationForm />);
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it("updates the state on user input", () => {
    render(<RegistrationForm />);
    const usernameInput = screen.getByLabelText(
      /Username/i
    ) as HTMLInputElement;
    fireEvent.change(usernameInput, { target: { value: "newuser" } });
    expect(usernameInput.value).toBe("newuser");
  });
});
