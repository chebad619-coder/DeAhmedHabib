import React from "react";
import MainLayout from "@/components/MainLayout";

const SettingsPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <p className="text-lg text-gray-600">
          This page will allow users to configure application settings.
        </p>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;