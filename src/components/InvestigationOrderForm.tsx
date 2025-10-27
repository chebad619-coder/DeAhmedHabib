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
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

const investigationsList = [
  { id: "cbc", label: "Complete Blood Count (CBC)" },
  { id: "ua", label: "Urine Analysis (UA)" },
  { id: "stool", label: "Stool Analysis" },
  { id: "xray_chest", label: "X-ray Chest" },
  { id: "ultrasound_abdomen", label: "Ultrasound Abdomen" },
  { id: "blood_culture", label: "Blood Culture" },
  { id: "urine_culture", label: "Urine Culture" },
  { id: "throat_swab", label: "Throat Swab" },
  { id: "crp", label: "C-Reactive Protein (CRP)" },
  { id: "esr", label: "Erythrocyte Sedimentation Rate (ESR)" },
] as const;

const formSchema = z.object({
  selectedInvestigations: z.array(z.string()).optional(),
  additionalNotes: z.string().optional(),
});

const InvestigationOrderForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedInvestigations: [],
      additionalNotes: "",
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
              name="selectedInvestigations"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base">Select Investigations</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {investigationsList.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="selectedInvestigations"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...(field.value || []), item.id])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item.id
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Urgent, specific instructions for lab, etc."
                      className="resize-y min-h-[80px]"
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