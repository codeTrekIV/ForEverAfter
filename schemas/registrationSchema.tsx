export const registrationSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 3,
      errorMessage: "Username must be at least 3 characters long.",
    },
    email: {
      type: "string",
      format: "email",
      errorMessage: "Must be a valid email address.",
    },
    password: {
      type: "string",
      minLength: 6,
      errorMessage: "Password must be at least 6 characters long.",
    },
    confirmPassword: {
      type: "string",
      const: {
        $data: "1/password",
      },
      errorMessage: "Passwords must match.",
    },
    specialCode: {
      type: "string",
      pattern: "^.+XYZ.+$",
      errorMessage: "Special code must include 'XYZ' in the middle.",
    },
  },
  required: ["username", "email", "password", "confirmPassword", "specialCode"],
  additionalProperties: false,
};

export const registrationUISchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/username",
      label: "Username",
    },
    {
      type: "Control",
      scope: "#/properties/email",
      label: "Email",
    },
    {
      type: "Control",
      scope: "#/properties/password",
      label: "Password",
    },
    {
      type: "Control",
      scope: "#/properties/confirmPassword",
      label: "Confirm Password",
    },
    {
      type: "Control",
      scope: "#/properties/specialCode",
      label: "Special Code",
    },
  ],
};
