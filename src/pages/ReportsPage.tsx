import React from "react";
import MainLayout from "@/components/MainLayout";

const ReportsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Financial & Statistics Reports</h1>
        <p className="text-lg text-gray-600">
          This page will display financial and statistical reports.
        </p>
      </div>
    </MainLayout>
  );
};

export default ReportsPage;