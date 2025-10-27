import React from "react";
import MainLayout from "@/components/MainLayout";
import PatientDemographicsForm from "@/components/PatientDemographicsForm";

const PatientManagementPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Patient Management</h1>
        <PatientDemographicsForm />
      </div>
    </MainLayout>
  );
};

export default PatientManagementPage;