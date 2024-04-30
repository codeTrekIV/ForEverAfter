export const patientSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "object",
  title: "Patient Intake Form",
  properties: {
    firstName: {
      type: "string",
      title: "First Name",
    },
    lastName: {
      type: "string",
      title: "Last Name",
    },
    dob: {
      type: "string",
      format: "date",
      title: "Date of Birth",
    },
    contactInfo: {
      type: "object",
      title: "Contact Information",
      properties: {
        phone: {
          type: "string",
          title: "Phone Number",
        },
        email: {
          type: "string",
          title: "Email Address",
          format: "email",
        },
      },
      required: ["phone", "email"],
    },
    insuranceProvider: {
      type: "string",
      title: "Insurance Provider",
    },
    policyNumber: {
      type: "string",
      title: "Policy Number",
    },
    parentGuardian: {
      type: "object",
      title: "Parent/Guardian Information",
      properties: {
        name: {
          type: "string",
          title: "Name",
        },
        contact: {
          type: "string",
          title: "Contact Information",
        },
      },
      required: ["name", "contact"],
    },
  },
  required: ["firstName", "lastName", "dob", "contactInfo"],
};
