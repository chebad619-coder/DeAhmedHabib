"use client";

import React, { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { showSuccess, showError } from "@/utils/toast";
import { MadeWithDyad } from "@/components/made-with-dyad";

const AddPatientPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !phone) {
      showError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      // In a real application, you would have a 'patients' table in Supabase
      const { data, error } = await supabase
        .from("patients") // Assuming you have a 'patients' table
        .insert([{ name, email, phone }]);

      if (error) {
        throw error;
      }

      showSuccess("Patient added successfully!");
      setName("");
      setEmail("");
      setPhone("");
      console.log("Inserted data:", data);
    } catch (error: any) {
      console.error("Error adding patient:", error.message);
      showError(`Failed to add patient: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Add New Patient</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Patient Name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="patient@example.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="123-456-7890"
              required
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Adding..." : "Add Patient"}
          </Button>
        </form>
      </div>
      <MadeWithDyad />
    </MainLayout>
  );
};

export default AddPatientPage;