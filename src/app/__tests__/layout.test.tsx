import { render, screen } from "@testing-library/react";
import RootLayout from "../layout";

describe("RootLayout", () => {
  const originalConsoleError = console.error;

  beforeAll(() => {
    console.error = (message, ...args) => {
      if (message.includes("validateDOMNesting")) {
        return; // Ignore validateDOMNesting errors
      }
      originalConsoleError(message, ...args);
    };
  });

  afterAll(() => {
    console.error = originalConsoleError; // Restore original console.error
  });

  it("renders without crashing", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
