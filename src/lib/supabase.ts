"use client";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase URL and Anon Key must be provided as environment variables.");
  // In a real application, you might want to throw an error or handle this more gracefully.
  // For now, we'll proceed with potentially undefined client, which will cause errors if used.
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);