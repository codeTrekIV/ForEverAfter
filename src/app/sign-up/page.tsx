"use client";
import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import {
  registrationUISchema,
  registrationSchema,
} from "../../../schemas/registrationSchema";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ajv = new Ajv({ strict: false, allErrors: true });
addFormats(ajv);
addErrors(ajv);
const theme = createTheme({
  // You can customize your theme for the tests if needed
});
const validator = ajv.compile(registrationSchema);

const App = () => {
  const [data, setData] = useState({});

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-5 bg-white rounded shadow-lg">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <JsonForms
            schema={registrationSchema}
            uischema={registrationUISchema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            ajv={ajv}
            onChange={({ errors, data }) => {
              console.log("Errors:", errors);
              setData(data);
            }}
            validationMode={"ValidateAndShow"}
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default App;
