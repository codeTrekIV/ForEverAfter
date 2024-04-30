import React, { useEffect, useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { patientSchema } from "../../../schemas/patientSchema"; // Assuming the correct file path is "../schemas/patientSchema"
import { vanillaCells, vanillaRenderers } from "@jsonforms/vanilla-renderers";

const theme = createTheme();

const PatientIntakeForm = () => {
  const [formData, setFormData] = useState({});
  const uischema = {
    type: "Group",
    label: "General Information",
    elements: [
      {
        type: "HorizontalLayout",
        elements: [
          {
            type: "Control",
            label: "First Name",
            scope: "#/properties/firstName",
          },
          {
            type: "Control",
            scope: "#/properties/lastName",
          },
        ],
      },
      {
        type: "Control",
        scope: "#/properties/dob",
      },
      {
        type: "Control",
        scope: "#/properties/contactInfo/properties/phone",
      },
      {
        type: "Control",
        scope: "#/properties/contactInfo/properties/email",
      },
      {
        type: "Control",
        scope: "#/properties/insuranceProvider",
      },
      {
        type: "Control",
        scope: "#/properties/policyNumber",
        rule: {
          effect: "SHOW",
          condition: {
            scope: "#/properties/insuranceProvider",
            schema: {
              type: "string",
              minLength: 1,
            },
          },
        },
      },
      {
        type: "Control",
        scope: "#/properties/parentGuardian",
        rule: {
          effect: "SHOW",
          condition: {
            scope: "#/properties/dob",
            schema: {
              type: "string",
              format: "date",
              maximum: 0,
            },
          },
        },
      },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <JsonForms
          uischema={uischema}
          schema={patientSchema}
          data={formData}
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data }) => setFormData(data)}
        />
      </div>
    </ThemeProvider>
  );
};

export default PatientIntakeForm;
