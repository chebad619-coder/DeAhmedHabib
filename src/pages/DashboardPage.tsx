import React from "react";
import MainLayout from "@/components/MainLayout";

const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, Dr. Ahmed Habib!</h1>
        <p className="text-lg text-gray-600">
          Your Habib Pediatric Smart Clinic System is ready.
        </p>
        <p className="text-md text-gray-500 mt-2">
          Use the sidebar to navigate through the system modules.
        </p>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;