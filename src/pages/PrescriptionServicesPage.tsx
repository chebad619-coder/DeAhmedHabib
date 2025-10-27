import React from "react";
import MainLayout from "@/components/MainLayout";
import PrescriptionServicesForm from "@/components/PrescriptionServicesForm";

const PrescriptionServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Prescription & Services</h1>
        <PrescriptionServicesForm />
      </div>
    </MainLayout>
  );
};

export default PrescriptionServicesPage;