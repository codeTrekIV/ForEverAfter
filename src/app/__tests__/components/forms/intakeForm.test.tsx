import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PatientIntakeForm from "../../../components/patientIntakeForm";
import "../../renderers/MatchMediaMock";
import { act } from "react-dom/test-utils";

const theme = createTheme({
  // You can customize your theme for the tests if needed
});

const renderWithTheme = (
  component:
    | string
    | number
    | bigint
    | boolean
    | Iterable<React.ReactNode>
    | Promise<React.AwaitedReactNode>
    | React.JSX.Element
    | null
    | undefined
) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("Patient Intake Form", () => {
  it("renders the form correctly", () => {
    renderWithTheme(<PatientIntakeForm />);
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    // Add more assertions here to check for other parts of your form
  });
  it("should display policy number field only when an insurance provider is selected", async () => {
    const { getByLabelText, queryByLabelText } = render(<PatientIntakeForm />);
    expect(queryByLabelText(/Policy Number/i)).toBeNull();

    act(() => {
      fireEvent.change(getByLabelText(/Insurance Provider/i), {
        target: { value: "Some Insurance" },
      });
    });

    await waitFor(() => {
      expect(getByLabelText(/Policy Number/i)).toBeInTheDocument();
    });
  });
});

// import React from "react";
// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import PatientIntakeForm from "../../../intake/page";

// describe("Patient Intake Form", () => {
//   it("should display policy number field only when an insurance provider is selected", () => {
//     const { getByLabelText, queryByLabelText } = render(<PatientIntakeForm />);
//     expect(queryByLabelText("Policy Number")).toBeNull();

//     fireEvent.change(getByLabelText("Insurance Provider"), {
//       target: { value: "Some Insurance" },
//     });
//     expect(getByLabelText("Policy Number")).toBeInTheDocument();
//   });

//   it("should display parent/guardian fields only for patients under 18", () => {
//     const { getByLabelText, queryByLabelText } = render(<PatientIntakeForm />);
//     fireEvent.change(getByLabelText("Date of Birth"), {
//       target: { value: "2005-01-01" },
//     }); // Assuming the current year is 2023
//     expect(getByLabelText("Parent/Guardian Name")).toBeInTheDocument();
//   });
// });
