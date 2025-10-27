import React from "react";
import MainLayout from "@/components/MainLayout";
import InvestigationOrderForm from "@/components/InvestigationOrderForm";

const InvestigationsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Investigations</h1>
        <InvestigationOrderForm />
      </div>
    </MainLayout>
  );
};

export default InvestigationsPage;