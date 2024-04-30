import React from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { rankWith, optionIs } from "@jsonforms/core";

export const CustomColorTester = rankWith(
  3, // High priority
  optionIs("customRenderer", "colorRenderer")
);

const CustomColorPicker = ({
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
    <div className="p-4 bg-blue-200 text-gray-800 rounded-lg shadow">
      <label className="block text-sm font-bold mb-2">Color Picker</label>
      <input
        type="color"
        value={data || "#000000"}
        onChange={(e) => handleChange(path, e.target.value)}
        className="w-full p-2 rounded"
      />
    </div>
  );
};

export default withJsonFormsControlProps(CustomColorPicker);
