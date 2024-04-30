import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { rankWith, optionIs } from "@jsonforms/core";

export const tester = rankWith(
  3, // High priority
  optionIs("customRenderer", "CustomFunkyRenderer")
);
const CustomFunkyRenderer = ({
  data,
  handleChange,
  path,
  visible,
}: {
  data: any;
  handleChange: any;
  path: any;
  visible: any;
}) => {
  if (!visible) return null;

  return (
    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-xl">
      <label className="block text-sm font-bold mb-2">Funky Field</label>
      <input
        type="text"
        value={data || ""}
        onChange={(e) => handleChange(path, e.target.value)}
        className="w-full p-2 rounded bg-purple-200"
      />
    </div>
  );
};

export default withJsonFormsControlProps(CustomFunkyRenderer);
