import React from "react";
import MainLayout from "@/components/MainLayout";
import PatientVitalsAndAnthropometricsForm from "@/components/PatientVitalsAndAnthropometricsForm";
import PatientHistoryForm from "@/components/PatientHistoryForm";
import GeneralExaminationForm from "@/components/GeneralExaminationForm";
import SystemicExaminationForm from "@/components/SystemicExaminationForm";
import ProvisionalDiagnosisAndManagementForm from "@/components/ProvisionalDiagnosisAndManagementForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExaminationPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Patient Examination</h1>
        <Tabs defaultValue="vitals" className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="vitals">Vitals & Anthropometrics</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="general-exam">General Exam</TabsTrigger>
            <TabsTrigger value="systemic-exam">Systemic Exam</TabsTrigger>
            <TabsTrigger value="diagnosis-plan">Diagnosis & Plan</TabsTrigger>
          </TabsList>
          <TabsContent value="vitals">
            <PatientVitalsAndAnthropometricsForm />
          </TabsContent>
          <TabsContent value="history">
            <PatientHistoryForm />
          </TabsContent>
          <TabsContent value="general-exam">
            <GeneralExaminationForm />
          </TabsContent>
          <TabsContent value="systemic-exam">
            <SystemicExaminationForm />
          </TabsContent>
          <TabsContent value="diagnosis-plan">
            <ProvisionalDiagnosisAndManagementForm />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ExaminationPage;