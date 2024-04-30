"use client";
import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import { vanillaCells, vanillaRenderers } from "@jsonforms/vanilla-renderers";

const schema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 3,
    },
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
      minLength: 6,
    },
  },
  required: ["username", "email", "password"],
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/username",
    },
    {
      type: "Control",
      scope: "#/properties/email",
    },
    {
      type: "Control",
      scope: "#/properties/password",
      options: {
        type: "password",
      },
    },
  ],
};
const RegistrationForm: React.FC = () => {
  const [data, setData] = useState({});
  return (
    <div>
      <>Register Now</>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={vanillaRenderers}
        cells={vanillaCells}
        onChange={({ data }) => setData(data)}
      />
    </div>
  );
};

export default RegistrationForm;
