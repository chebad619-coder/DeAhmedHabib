import React from "react";
import MainLayout from "@/components/MainLayout";

const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Habib Pediatric Smart Clinic System!</h1>
        <p className="text-lg text-gray-700">
          Your comprehensive solution for patient management.
        </p>
        <p className="text-md text-gray-500 mt-2">
          Use the sidebar to navigate through the system modules.
        </p>
      </div>
    </MainLayout>
  );
};

export default IndexPage;