import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zvlgrmfqlrkmndeiimfp.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2bGdybWZxbHJrbW5kZWlpbWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNjQ2OTYsImV4cCI6MjA1NDk0MDY5Nn0.b6l7pwWBzdcfzn7kNmxI0POFNCK333JT7RaFIqLFdJM";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
