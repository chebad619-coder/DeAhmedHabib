import React from "react";
import MainLayout from "@/components/MainLayout";
import PatientDemographicsForm from "@/components/PatientDemographicsForm";
import PatientVitalsAndAnthropometricsForm from "@/components/PatientVitalsAndAnthropometricsForm";
import PatientHistoryForm from "@/components/PatientHistoryForm";
import GeneralExaminationForm from "@/components/GeneralExaminationForm";
import SystemicExaminationForm from "@/components/SystemicExaminationForm"; // New import
import ProvisionalDiagnosisAndManagementForm from "@/components/ProvisionalDiagnosisAndManagementForm"; // New import
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PatientManagementPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Patient Management</h1>
        <Tabs defaultValue="demographics" className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-6"> {/* Adjusted grid-cols for new tabs */}
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="vitals">Vitals & Anthropometrics</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="general-exam">General Exam</TabsTrigger>
            <TabsTrigger value="systemic-exam">Systemic Exam</TabsTrigger> {/* New tab */}
            <TabsTrigger value="diagnosis-plan">Diagnosis & Plan</TabsTrigger> {/* New tab */}
          </TabsList>
          <TabsContent value="demographics">
            <PatientDemographicsForm />
          </TabsContent>
          <TabsContent value="vitals">
            <PatientVitalsAndAnthropometricsForm />
          </TabsContent>
          <TabsContent value="history">
            <PatientHistoryForm />
          </TabsContent>
          <TabsContent value="general-exam">
            <GeneralExaminationForm />
          </TabsContent>
          <TabsContent value="systemic-exam"> {/* New tab content */}
            <SystemicExaminationForm />
          </TabsContent>
          <TabsContent value="diagnosis-plan"> {/* New tab content */}
            <ProvisionalDiagnosisAndManagementForm />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default PatientManagementPage;