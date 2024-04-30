import funkyRenderer from "@/app/components/renderers/funkyRenderer";

export const CRschema = {
  type: "object",
  properties: {
    funkyField: {
      type: "string",
      title: "Funky Field",
    },
    description: {
      type: "string",
      title: "Description",
    },
    colorPicker: {
      type: "string",
      title: "Color Picker",
      format: "color",
    },
  },
};

export const CRUIschema = {
  type: "VerticalLayout",
  label: "Custom Renderer Example",
  elements: [
    {
      type: "Control",
      scope: "#/properties/funkyField",
      options: {
        customRenderer: "CustomFunkyRenderer",
      },
    },
    {
      type: "Control",
      scope: "#/properties/description",
    },
    {
      type: "Control",
      scope: "#/properties/colorPicker",
      options: {
        customRenderer: "colorRenderer",
      },
    },
  ],
};
