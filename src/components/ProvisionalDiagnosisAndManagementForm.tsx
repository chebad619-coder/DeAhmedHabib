"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

const formSchema = z.object({
  provisionalDiagnosis: z.string().min(10, { message: "Provisional diagnosis must be at least 10 characters." }),
  differentialDiagnoses: z.string().optional(),
  managementPlan: z.string().min(10, { message: "Management plan must be at least 10 characters." }),
  patientEducation: z.string().optional(),
  followUpPlan: z.string().optional(),
});

const ProvisionalDiagnosisAndManagementForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provisionalDiagnosis: "",
      differentialDiagnoses: "",
      managementPlan: "",
      patientEducation: "",
      followUpPlan: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    showSuccess("Diagnosis and management plan saved successfully!");
    form.reset(); // Reset form after submission
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Provisional Diagnosis & Management Plan</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="provisionalDiagnosis"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Provisional Diagnosis</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Acute Bronchiolitis"
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="differentialDiagnoses"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Differential Diagnoses</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Asthma exacerbation, Pneumonia"
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="managementPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Management Plan</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Salbutamol nebulization, oral antibiotics, supportive care..."
                      className="resize-y min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="patientEducation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient/Parent Education</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Instructions for home care, warning signs, medication administration..."
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="followUpPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Follow-up Plan</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Review in 2 days, return if symptoms worsen..."
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save Diagnosis & Plan</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ProvisionalDiagnosisAndManagementForm;