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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

const formSchema = z.object({
  pastMedicalHistory: z.string().optional(),
  allergies: z.string().optional(),
  familyHistory: z.string().optional(),
  birthData: z.string().optional(), // Can be structured further if needed (e.g., birth weight, gestational age)
});

const PatientHistoryForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pastMedicalHistory: "",
      allergies: "",
      familyHistory: "",
      birthData: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    showSuccess("Patient history saved successfully!");
    form.reset(); // Reset form after submission
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Past History, Allergies & Birth Data</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="pastMedicalHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Past Medical History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Previous illnesses, surgeries, hospitalizations..."
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
              name="allergies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Allergies</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Known allergies (medications, food, environmental)..."
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
              name="familyHistory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Family History</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Significant family medical history (diabetes, asthma, genetic conditions)..."
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
              name="birthData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Birth Data</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Gestational age, birth weight, mode of delivery, neonatal complications..."
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save History</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PatientHistoryForm;