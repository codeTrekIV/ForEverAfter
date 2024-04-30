import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import DynamicForm from "../../components/dynamicForm";

describe("DynamicForm with JSON forms and AJV", () => {
  it("displays additional fields based on input code", async () => {
    render(<DynamicForm />);
    const input = screen.getByRole("textbox", { name: /input code/i });
    fireEvent.change(input, { target: { value: "trigger" } });

    await waitFor(() => {
      const additionalField = screen.getByRole("textbox", {
        name: /additional info/i,
      });
      expect(additionalField).toBeInTheDocument();
    });
  });

  it("validates the data when form is submitted", async () => {
    render(<DynamicForm />);
    fireEvent.change(screen.getByRole("textbox", { name: /input code/i }), {
      target: { value: "trigger" },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/the input is invalid/i)).toBeInTheDocument();
    });
  });
});
