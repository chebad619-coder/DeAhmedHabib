"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Patient } from "@/types/patient";

const patientFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be in YYYY-MM-DD format"),
  gender: z.enum(['Male', 'Female', 'Other'], { message: "Please select a gender" }),
  contactNumber: z.string().min(10, "Contact number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(5, "Address is required"),
});

type PatientFormValues = z.infer<typeof patientFormSchema>;

interface PatientFormProps {
  onAddPatient: (patient: Omit<Patient, 'id'>) => void;
}

const PatientForm: React.FC<PatientFormProps> = ({ onAddPatient }) => {
  const form = useForm<PatientFormValues>({
    resolver: zodResolver(patientFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "Male", // Default value
      contactNumber: "",
      email: "",
      address: "",
    },
  });

  const onSubmit = (values: PatientFormValues) => {
    onAddPatient(values);
    toast.success("Patient added successfully (frontend only)");
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg shadow-sm bg-card">
      <div>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          {...form.register("firstName")}
          className="mt-1"
        />
        {form.formState.errors.firstName && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          {...form.register("lastName")}
          className="mt-1"
        />
        {form.formState.errors.lastName && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="dateOfBirth">Date of Birth (YYYY-MM-DD)</Label>
        <Input
          id="dateOfBirth"
          type="date"
          {...form.register("dateOfBirth")}
          className="mt-1"
        />
        {form.formState.errors.dateOfBirth && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.dateOfBirth.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="gender">Gender</Label>
        <Select onValueChange={(value) => form.setValue("gender", value as "Male" | "Female" | "Other")} value={form.watch("gender")}>
          <SelectTrigger className="w-full mt-1">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
        {form.formState.errors.gender && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.gender.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input
          id="contactNumber"
          type="tel"
          {...form.register("contactNumber")}
          className="mt-1"
        />
        {form.formState.errors.contactNumber && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.contactNumber.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className="mt-1"
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div className="md:col-span-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          {...form.register("address")}
          className="mt-1"
        />
        {form.formState.errors.address && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.address.message}</p>
        )}
      </div>
      <div className="md:col-span-2 flex justify-end">
        <Button type="submit">Add Patient</Button>
      </div>
    </form>
  );
};

export default PatientForm;