import React from "react";
import MainLayout from "@/components/MainLayout";
import PatientDemographicsForm from "@/components/PatientDemographicsForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Keep Tabs imports for consistency, though only one tab will be used

const PatientManagementPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Patient Demographics</h1>
        <Tabs defaultValue="demographics" className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-1"> {/* Only one tab now */}
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
          </TabsList>
          <TabsContent value="demographics">
            <PatientDemographicsForm />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default PatientManagementPage;