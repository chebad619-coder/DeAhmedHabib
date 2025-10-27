"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { PlusCircle, Trash2 } from "lucide-react";

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
import { Separator } from "@/components/ui/separator";
import { showSuccess } from "@/utils/toast";

const medicationSchema = z.object({
  drugName: z.string().min(1, { message: "Drug name is required." }),
  dosage: z.string().optional(),
  frequency: z.string().optional(),
  duration: z.string().optional(),
  notes: z.string().optional(),
});

const serviceSchema = z.object({
  serviceName: z.string().min(1, { message: "Service name is required." }),
  notes: z.string().optional(),
});

const formSchema = z.object({
  medications: z.array(medicationSchema).optional(),
  services: z.array(serviceSchema).optional(),
  generalNotes: z.string().optional(),
});

const PrescriptionAndServicesForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      medications: [{ drugName: "", dosage: "", frequency: "", duration: "", notes: "" }],
      services: [{ serviceName: "", notes: "" }],
      generalNotes: "",
    },
  });

  const { fields: medicationFields, append: appendMedication, remove: removeMedication } = useFieldArray({
    control: form.control,
    name: "medications",
  });

  const { fields: serviceFields, append: appendService, remove: removeService } = useFieldArray({
    control: form.control,
    name: "services",
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    showSuccess("Prescription and services saved successfully!");
    form.reset(); // Reset form after submission
  }

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Prescription & Services</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Medications</h3>
              {medicationFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 border rounded-md relative">
                  <FormField
                    control={form.control}
                    name={`medications.${index}.drugName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Drug Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Amoxicillin" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medications.${index}.dosage`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dosage</FormLabel>
                        <FormControl>
                          <Input placeholder="250mg" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medications.${index}.frequency`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Frequency</FormLabel>
                        <FormControl>
                          <Input placeholder="TDS" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`medications.${index}.duration`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <FormControl>
                          <Input placeholder="7 days" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="md:col-span-2">
                    <FormField
                      control={form.control}
                      name={`medications.${index}.notes`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Notes</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Take with food" className="resize-y min-h-[60px]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  {medicationFields.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeMedication(index)}
                      className="absolute top-2 right-2 h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendMedication({ drugName: "", dosage: "", frequency: "", duration: "", notes: "" })}
                className="mt-2"
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Medication
              </Button>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-3">Services</h3>
              {serviceFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 border rounded-md relative">
                  <FormField
                    control={form.control}
                    name={`services.${index}.serviceName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Nebulization" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`services.${index}.notes`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notes</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Administer twice daily" className="resize-y min-h-[60px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {serviceFields.length > 1 && (
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      onClick={() => removeService(index)}
                      className="absolute top-2 right-2 h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendService({ serviceName: "", notes: "" })}
                className="mt-2"
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Service
              </Button>
            </div>

            <Separator />

            <FormField
              control={form.control}
              name="generalNotes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>General Notes for Prescription/Services</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any overall instructions or comments for the patient/pharmacist/nurse."
                      className="resize-y min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Save Prescription & Services</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PrescriptionAndServicesForm;