import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xeaxmysokfxanandckvq.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlYXhteXNva2Z4YW5hbmRja3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3MzQzMTgsImV4cCI6MjAyMzMxMDMxOH0.KaN9SY3tZUH-oeSBJdriWy7iCnNhPYeJaqmMjNbrnSg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
