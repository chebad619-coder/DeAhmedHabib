import React from "react";
import MainLayout from "@/components/MainLayout";
import PatientDemographicsForm from "@/components/PatientDemographicsForm";
import PatientVitalsAndAnthropometricsForm from "@/components/PatientVitalsAndAnthropometricsForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PatientManagementPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Patient Management</h1>
        <Tabs defaultValue="demographics" className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="vitals">Vitals & Anthropometrics</TabsTrigger>
          </TabsList>
          <TabsContent value="demographics">
            <PatientDemographicsForm />
          </TabsContent>
          <TabsContent value="vitals">
            <PatientVitalsAndAnthropometricsForm />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default PatientManagementPage;