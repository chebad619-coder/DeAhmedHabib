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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

const formSchema = z.object({
  temperature: z.coerce.number().min(35, { message: "Temperature seems too low." }).max(42, { message: "Temperature seems too high." }).optional(),
  pulseRate: z.coerce.number().min(0, { message: "Pulse rate cannot be negative." }).max(300, { message: "Pulse rate seems too high." }).optional(),
  respiratoryRate: z.coerce.number().min(0, { message: "Respiratory rate cannot be negative." }).max(100, { message: "Respiratory rate seems too high." }).optional(),
  bloodPressure: z.string().optional(), // Simplified for now, can be split into systolic/diastolic later
  oxygenSaturation: z.coerce.number().min(0, { message: "Oxygen saturation cannot be negative." }).max(100, { message: "Oxygen saturation seems too high." }).optional(),
  randomBloodSugar: z.coerce.number().min(0, { message: "Blood sugar cannot be negative." }).optional(),
  height: z.coerce.number().min(0, { message: "Height cannot be negative." }).max(250, { message: "Height seems too high." }).optional(),
  weight: z.coerce.number().min(0, { message: "Weight cannot be negative." }).max(300, { message: "Weight seems too high." }).optional(),
});

const PatientVitalsAndAnthropometricsForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      temperature: undefined,
      pulseRate: undefined,
      respiratoryRate: undefined,
      bloodPressure: "",
      oxygenSaturation: undefined,
      randomBloodSugar: undefined,
      height: undefined,
      weight: undefined,
    },
  });

  const height = form.watch("height");
  const weight = form.watch("weight");
  const [bmi, setBmi] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (height && weight && height > 0) {
      const heightInMeters = height / 100;
      const calculatedBmi = weight / (heightInMeters * heightInMeters);
      setBmi(calculatedBmi.toFixed(2));
    } else {
      setBmi(null);
    }
  }, [height, weight]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ ...values, bmi });
    showSuccess("Vital signs and anthropometrics saved successfully!");
    form.reset(); // Reset form after submission
    setBmi(null);
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Vital Signs & Anthropometrics</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="temperature"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Temperature (°C)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="37.0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pulseRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pulse Rate (beats/min)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="80" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="respiratoryRate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Respiratory Rate (breaths/min)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="20" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bloodPressure"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blood Pressure (mmHg)</FormLabel>
                    <FormControl>
                      <Input placeholder="120/80" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="oxygenSaturation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Oxygen Saturation (SpO₂ %)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="98" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="randomBloodSugar"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Random Blood Sugar (mg/dl)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-2">Anthropometric Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="100" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="15.5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {bmi && (
              <div className="mt-4">
                <FormLabel>BMI</FormLabel>
                <p className="text-xl font-bold">{bmi}</p>
              </div>
            )}
            <Button type="submit">Save Vitals & Anthropometrics</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PatientVitalsAndAnthropometricsForm;