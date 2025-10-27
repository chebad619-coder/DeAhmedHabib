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

const formSchema = z.object({
  overallAppearance: z.string().optional(),
  hydration: z.string().optional(),
  activity: z.string().optional(),
  isAlert: z.boolean().default(false).optional(),
  isDistressed: z.boolean().default(false).optional(),
  isFebrile: z.boolean().default(false).optional(),
});

const GeneralExaminationForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      overallAppearance: "",
      hydration: "",
      activity: "",
      isAlert: false,
      isDistressed: false,
      isFebrile: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    showSuccess("General examination saved successfully!");
    form.reset(); // Reset form after submission
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>General Examination</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="overallAppearance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overall Appearance</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Well-looking, ill-looking, pale, jaundiced..."
                      className="resize-y min-h-[60px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="hydration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hydration Status</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Well hydrated, mild dehydration, dry mucous membranes..."
                      className="resize-y min-h-[60px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="activity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Level</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Active, playful, lethargic, irritable..."
                      className="resize-y min-h-[60px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <FormField
                control={form.control}
                name="isAlert"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Alert</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isDistressed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Distressed</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isFebrile"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Febrile</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Save General Exam</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default GeneralExaminationForm;