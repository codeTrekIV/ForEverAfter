"use client";
import React, { useState, useEffect } from "react";
import jsonLogic, { AdditionalOperation } from "json-logic-js";
import { JsonForms } from "@jsonforms/react";
import { RulesLogic } from "json-logic-js";
import { materialRenderers } from "@jsonforms/material-renderers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const showAdminSettings = {
  "==": [{ var: "userType" }, "admin"],
};
const initialData = { userType: "user", adminSettings: "" };
const theme = createTheme({});
const updateUISchema = () => {
  const [data, setData] = useState(initialData);
  const [uiSchema, setUiSchema] = useState({
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/userType",
      },
      {
        type: "Control",
        scope: "#/properties/adminSettings",
        rule: {
          effect: "DISABLE",
          condition: {
            scope: "#",
            schema: {},
          },
        },
      },
    ],
  });

  const showAdminSettings: RulesLogic<AdditionalOperation> = {
    "==": [{ var: "userType" }, "admin"],
  };

  useEffect(() => {
    const ruleResult = jsonLogic.apply(showAdminSettings, data);
    const newUiSchema = { ...uiSchema };
    if (newUiSchema.elements[1].rule) {
      if (ruleResult) {
        newUiSchema.elements[1].rule.effect = "SHOW";
      } else {
        newUiSchema.elements[1].rule.effect = "HIDE";
      }
    }
    setUiSchema(newUiSchema);
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <JsonForms
        schema={{
          type: "object",
          properties: {
            userType: { type: "string", enum: ["user", "admin"] },
            adminSettings: { type: "string" },
          },
        }}
        uischema={uiSchema}
        data={data}
        renderers={materialRenderers}
        onChange={({ data }) => setData(data)}
      />
    </ThemeProvider>
  );
};

export default updateUISchema;
