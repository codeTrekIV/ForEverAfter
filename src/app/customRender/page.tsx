"use client";
import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { CRschema, CRUIschema } from "../../../schemas/customRendererSchema";
import { materialRenderers } from "@jsonforms/material-renderers";
import CustomFunkyRenderer, {
  tester,
} from "../components/renderers/funkyRenderer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomColorPicker, {
  CustomColorTester,
} from "../components/renderers/CustomColorPicker";

export default function Page() {
  const [data, setData] = useState({});
  const renderers = [
    ...materialRenderers,
    { tester: CustomColorTester, renderer: CustomColorPicker },
    { tester: tester, renderer: CustomFunkyRenderer },
  ];
  const theme = createTheme({
    // You can customize your theme for the tests if needed
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <JsonForms
          schema={CRschema}
          uischema={CRUIschema}
          data={data}
          renderers={renderers}
          onChange={({ data }) => setData(data)}
        />
      </ThemeProvider>
    </div>
  );
}
