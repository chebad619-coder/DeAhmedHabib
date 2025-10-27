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
  referralType: z.enum(["Specialist", "Imaging Center", "Lab", "Other"], { message: "Please select a referral type." }),
  referredTo: z.string().min(3, { message: "Referred to field is required." }),
  reasonForReferral: z.string().min(10, { message: "Reason for referral must be at least 10 characters." }),
  followUpDate: z.string().optional(), // Can be a date picker later
  followUpNotes: z.string().optional(),
});

const ReferralFollowupForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientId: "",
      referralType: "Specialist",
      referredTo: "",
      reasonForReferral: "",
      followUpDate: "",
      followUpNotes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    showSuccess("Referral and follow-up details saved successfully!");
    form.reset(); // Reset form after submission
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Referral & Follow-up</CardTitle>
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

            <h3 className="text-lg font-semibold mt-6 mb-2">Referral Details</h3>
            <FormField
              control={form.control}
              name="referralType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referral Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select referral type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Specialist">Specialist</SelectItem>
                      <SelectItem value="Imaging Center">Imaging Center</SelectItem>
                      <SelectItem value="Lab">Lab</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referredTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Referred To (Name/Department)</FormLabel>
                  <FormControl>
                    <Input placeholder="Dr. Smith (Pediatric Cardiologist)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="reasonForReferral"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for Referral</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Evaluation of suspected congenital heart defect..."
                      className="resize-y min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <h3 className="text-lg font-semibold mt-6 mb-2">Follow-up Plan</h3>
            <FormField
              control={form.control}
              name="followUpDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Next Follow-up Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="followUpNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Follow-up Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Instructions for patient, internal notes for next visit..."
                      className="resize-y min-h-[60px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Save Referral & Follow-up</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReferralFollowupForm;