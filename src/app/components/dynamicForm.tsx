"use client";
import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { vanillaRenderers, vanillaCells } from "@jsonforms/vanilla-renderers";
import Ajv from "ajv";

const schema = {
  type: "object",
  properties: {
    inputCode: { type: "string", title: "Input Code" },
    additionalInfo: { type: "string", title: "Additional Info" },
  },
  required: ["inputCode"],
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/inputCode",
    },
    {
      type: "Control",
      scope: "#/properties/additionalInfo",
      rule: {
        effect: "SHOW",
        condition: {
          scope: "#/properties/inputCode",
          schema: { const: "trigger" },
        },
      },
    },
  ],
};

const DynamicForm = () => {
  const [data, setData] = useState({});
  const ajv = new Ajv({ allErrors: true, verbose: true });
  const [showErrors, setShowErrors] = useState(false);
  const validate = ajv.compile(schema);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (!validate(data)) {
      console.error("Validation errors:", validate.errors);
      setShowErrors(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={vanillaRenderers}
        cells={vanillaCells}
        onChange={({ data }) => setData(data)}
      />
      <button type="submit">Submit</button>
      {showErrors && <div>The input is invalid</div>}
    </form>
  );
};

export default DynamicForm;
