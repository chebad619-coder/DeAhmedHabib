"use client";

import React, { useState } from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import MainLayout from "@/components/MainLayout";
import PatientForm from "@/components/PatientForm";
import { Patient } from "@/types/patient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";

const PatientManagementPage = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const handleAddPatient = (newPatientData: Omit<Patient, 'id'>) => {
    // In a real application, this would involve an API call to Supabase
    // For now, we'll simulate adding a patient with a unique ID
    const newPatient: Patient = {
      ...newPatientData,
      id: `patient-${Date.now()}`, // Simple unique ID generation
    };
    setPatients((prevPatients) => [...prevPatients, newPatient]);
    toast.success(`Patient ${newPatient.firstName} ${newPatient.lastName} added locally.`);
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-6 p-4 lg:p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Patient Management</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Add and manage patient records here.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Add New Patient</CardTitle>
          </CardHeader>
          <CardContent>
            <PatientForm onAddPatient={handleAddPatient} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Existing Patients</CardTitle>
          </CardHeader>
          <CardContent>
            {patients.length === 0 ? (
              <p className="text-muted-foreground">No patients added yet. Use the form above to add one!</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>DOB</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Address</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {patients.map((patient) => (
                      <TableRow key={patient.id}>
                        <TableCell>{patient.firstName} {patient.lastName}</TableCell>
                        <TableCell>{patient.dateOfBirth}</TableCell>
                        <TableCell>{patient.gender}</TableCell>
                        <TableCell>{patient.contactNumber}</TableCell>
                        <TableCell>{patient.email}</TableCell>
                        <TableCell>{patient.address}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
        <MadeWithDyad />
      </div>
    </MainLayout>
  );
};

export default PatientManagementPage;