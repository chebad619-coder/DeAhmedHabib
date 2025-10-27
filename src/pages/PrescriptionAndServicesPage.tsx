import React from "react";
import MainLayout from "@/components/MainLayout";
import PrescriptionAndServicesForm from "@/components/PrescriptionAndServicesForm";

const PrescriptionAndServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Prescription & Services</h1>
        <PrescriptionAndServicesForm />
      </div>
    </MainLayout>
  );
};

export default PrescriptionAndServicesPage;