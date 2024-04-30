import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps } from "@jsonforms/core";

import { rankWith, scopeEndsWith } from "@jsonforms/core";

export const tester = rankWith(
  3, // Adjust the rank as needed to override other renderers
  scopeEndsWith("firstName") // Use this renderer for fields ending with 'firstName'
);

const CustomTextInput: React.FC<ControlProps> = ({
  data,
  handleChange,
  path,
  schema,
}) => {
  return (
    <div className={`mb-4 ${!(schema as any).visible ? "hidden" : ""}`}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {schema.title}
      </label>
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={data || ""}
        onChange={(e) => handleChange(path, e.target.value)}
        required={!!schema.required}
      />
    </div>
  );
};

export default withJsonFormsControlProps(CustomTextInput);
