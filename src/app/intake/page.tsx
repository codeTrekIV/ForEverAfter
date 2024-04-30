"use client";
import React from "react";
import PatientIntakeForm from "../components/patientIntakeForm";

const Intake: React.FC = () => {
  const [notifications, setNotifications] = React.useState(0);
  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-4">Patient Intake Form</h2>
        <PatientIntakeForm />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-4">
          Instructions or Other Information
        </h2>
        <p>
          Here you can place additional information or any other content related
          to the patient intake process.
        </p>
      </div>
    </div>
  );
};

export default Intake;
