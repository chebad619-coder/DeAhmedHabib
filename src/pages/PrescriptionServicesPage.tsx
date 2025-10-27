import React from "react";
import MainLayout from "@/components/MainLayout";

const PrescriptionServicesPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Prescription & Services</h1>
        <p className="text-lg text-gray-600">
          This page will manage prescriptions and other services.
        </p>
      </div>
    </MainLayout>
  );
};

export default PrescriptionServicesPage;