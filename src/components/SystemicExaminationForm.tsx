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
  cardiovascular: z.string().optional(),
  respiratory: z.string().optional(),
  abdominal: z.string().optional(),
  cns: z.string().optional(),
  skin: z.string().optional(),
  musculoskeletal: z.string().optional(),
  otherSystems: z.string().optional(),
});

const SystemicExaminationForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardiovascular: "",
      respiratory: "",
      abdominal: "",
      cns: "",
      skin: "",
      musculoskeletal: "",
      otherSystems: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    showSuccess("Systemic examination saved successfully!");
    form.reset(); // Reset form after submission
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Systemic Examination</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="cardiovascular"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cardiovascular System</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., S1S2 normal, no murmurs, capillary refill < 2s..."
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
              name="respiratory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Respiratory System</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Clear breath sounds bilaterally, no wheezes/crepitations..."
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
              name="abdominal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Abdominal Examination</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Soft, non-tender, no organomegaly, bowel sounds present..."
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
              name="cns"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Central Nervous System</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Alert, oriented, normal tone and power, reflexes intact..."
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
              name="skin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skin Examination</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., No rashes, lesions, pallor, jaundice, normal turgor..."
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
              name="musculoskeletal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Musculoskeletal System</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Full range of motion, no joint swelling/tenderness..."
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
              name="otherSystems"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Systems (e.g., ENT, Eyes)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any other relevant findings..."
                      className="resize-y min-h-[60px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Save Systemic Exam</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SystemicExaminationForm;