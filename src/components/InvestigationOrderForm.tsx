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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

const formSchema = z.object({
  patientId: z.string().min(1, { message: "Patient ID is required." }),
  investigationType: z.enum(["Lab Test", "Imaging", "Other"], { message: "Please select an investigation type." }),
  specificTests: z.string().min(5, { message: "Please specify the tests." }),
  clinicalIndication: z.string().min(10, { message: "Clinical indication must be at least 10 characters." }),
  specialInstructions: z.string().optional(),
});

const InvestigationOrderForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientId: "",
      investigationType: "Lab Test",
      specificTests: "",
      clinicalIndication: "",
      specialInstructions: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    showSuccess("Investigation order saved successfully!");
    form.reset(); // Reset form after submission
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Order Investigations</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="patientId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient ID</FormLabel>
                  <FormControl>
                    <Input placeholder="P-001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="investigationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Investigation Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Lab Test">Lab Test</SelectItem>
                      <SelectItem value="Imaging">Imaging</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="specificTests"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specific Tests/Imaging</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., CBC, Urine R/M, Chest X-ray, Abdominal Ultrasound"
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
              name="clinicalIndication"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Clinical Indication</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Reason for investigation (e.g., Suspected pneumonia, Fever of unknown origin)"
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
              name="specialInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Fasting required, Urgent, With contrast"
                      className="resize-y min-h-[60px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit Order</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default InvestigationOrderForm;